//==========================================================================
// Variables
//--------------------------------------------------------------------------

let userHemisphere = 'northern',
	todayDateTime = moment(),
	userDate = todayDateTime.format('MMM'),
	userTime = todayDateTime.format('H');

let selectedMonth = todayDateTime.format('MMM').toLowerCase(),
	selectedHour = todayDateTime.format('H'),
	selectedAnimal = 'fish',
	selectedHemisphere = userHemisphere,
	selectedFishLocation = 'all',
	selectedBugLocation = 'all';

//==========================================================================
// Functions
//--------------------------------------------------------------------------

String.prototype.toTitleCase = function() {
	return this.replace(/(?:^|\s)\w/g, function(match) {
		return match.toUpperCase();
	});
};

Number.prototype.addCommas = function() {
	return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const compareTimes = (start, end) => {
	if (start > end) {
		// If an animals time overlaps midnight
		if (selectedHour >= 12) {
			// If selectedHour is between 12PM and 11PM
			if (start <= selectedHour && end + 24 > selectedHour) {
				return true;
			}
		} else {
			// If selectedHour is between 12AM and 11AM
			if (start - 24 <= selectedHour && end > selectedHour) {
				return true;
			}
		}
	} else {
		// If an animals times doesn't overlap midnight
		if (start <= selectedHour && end > selectedHour) {
			return true;
		}
	}
	return false;
};

const buildMonthDisplay = months => {
	if (months.length === 12) {
		return 'All Year';
	} else {
		let displayString = '';
		let prevMonth = {};

		months.forEach((month, i) => {
			if (!prevMonth.position) {
				// Insert first month
				displayString += `${month.shortName.toTitleCase()}${months.length ===
				1
					? ''
					: ' - '}`;
			} else if (months[i + 1] === undefined) {
				// Check if current month is the last month in the list
				if (month.position !== prevMonth.position + 1) {
					// Check if the current month is not sequentially after
					// the previous month, then add the prevMonth to the string
					displayString += `${prevMonth.shortName.toTitleCase()}, ${month.shortName.toTitleCase()}`;
				} else {
					displayString += `${month.shortName.toTitleCase()}`;
				}
			} else {
				// Check to see if we are on the last month
				if (month.position !== prevMonth.position + 1) {
					// Check if the current month is not sequentially after
					// the previous month, then add the prevMonth to the string
					displayString += `${prevMonth.shortName.toTitleCase()}, ${month.shortName.toTitleCase()} - `;
				}
			}

			prevMonth = month;
		});

		return displayString;
	}
};

const buildTimeDisplay = (start, end) => {
	let displayString, startString, endString;
	if (start === end) {
		displayString = 'All day';
	} else {
		if (start > 12) {
			// If starts after noon
			startString = start - 12 + 'PM';
		} else {
			startString = start + 'AM';
		}

		if (end > 12) {
			// If ends after noon
			endString = end - 12 + 'PM';
		} else {
			endString = end + 'AM';
		}

		displayString = `${startString} - ${endString}`;
	}

	return displayString;
};

const init = () => {
	// Register service worker
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function() {
			navigator.serviceWorker
				.register('/serviceWorker.js')
				.then(res => console.log('Service worker registered.'))
				.catch(err =>
					console.log('Service worker not registered.', err)
				);
		});
	}

	// Set today's date & time
	$('#js-select-date').val(userDate.toLowerCase());
	$('#js-select-time').val(userTime);

	// Hide Modal on page load
	$('.modal').css('visibility', 'hidden');

	// Set up event listeners
	$('#js-select-species').change(function() {
		selectedAnimal = $(this).val();
		if (selectedAnimal === 'fish') {
			$('#js-locations-fish').removeClass('hidden');
			$('#js-locations-bugs').addClass('hidden');
		} else {
			$('#js-locations-fish').addClass('hidden');
			$('#js-locations-bugs').removeClass('hidden');
		}
		getAnimals($(this).val());
	});

	$('#js-select-date').change(function() {
		selectedMonth = $('#js-select-date').val();
		getAnimals(selectedAnimal);
	});

	$('#js-select-time').change(function() {
		selectedHour = $(this).val();
		getAnimals(selectedAnimal);
	});

	// Set up Radio Button listeners
	$('.modal__radio-btn').change(function() {
		if ($(this).attr('name') === 'hemisphere') {
			selectedHemisphere = $(this).val();
		} else if ($(this).attr('name') === 'loc-fish') {
			selectedFishLocation = $(this).val();
		} else {
			selectedBugLocation = $(this).val();
		}
		getAnimals(selectedAnimal);
	});

	// Set up Modal
	$('.btn-modal-show').click(function() {
		$('body').addClass('body--modal-open');
		$('.modal').css('visibility', 'visible');
		$('.modal').removeClass('modal--hidden');
		$('.modal__content').removeClass('modal__content--hidden');
	});

	$('.js-close-modal').click(function() {
		$('.modal').addClass('modal--hidden');
		$('.modal__content').addClass('modal__content--hidden');
		setTimeout(() => {
			$('.modal').css('visibility', 'hidden');
			$('body').removeClass('body--modal-open');
		}, 500);
	});

	$('.modal__content').click(function(e) {
		e.stopPropagation();
	});

	getAnimals(selectedAnimal);
};

const getAnimals = animal => {
	let listMonthAnimals = [];

	// Compile a list of animals for the current month
	if (animal === 'fish') {
		listFish.forEach(fish => {
			fish.months[selectedHemisphere].forEach(month => {
				if (month.shortName === selectedMonth) {
					listMonthAnimals.push(fish);
				}
			});
		});
	} else {
		listBugs.forEach(bug => {
			bug.months[selectedHemisphere].forEach(month => {
				if (month.shortName === selectedMonth) {
					listMonthAnimals.push(bug);
				}
			});
		});
	}

	let listTimeAnimals = listMonthAnimals.filter(animal => {
		if (animal.startTimes) {
			return (
				compareTimes(animal.startTimes[0], animal.endTimes[0]) ||
				compareTimes(animal.startTimes[1], animal.endTimes[1])
			);
		} else if (animal.startTime === animal.endTime) {
			// If an animal is out all day
			return true;
		} else {
			// If an animal has 1 start and end time
			return compareTimes(animal.startTime, animal.endTime);
		}
	});

	if (selectedAnimal === 'fish') {
		let listSelectedFish;

		if (selectedFishLocation === 'all') {
			listSelectedFish = listTimeAnimals;
		} else {
			listSelectedFish = listTimeAnimals.filter(
				fish => fish.location.name === selectedFishLocation
			);
		}
		updateResultsOverview(listSelectedFish.length);
		renderAnimals(
			listSelectedFish.sort((a, b) => {
				if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
				if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
				return 0;
			})
		);
	} else {
		let listSelectedBugs;

		if (selectedBugLocation === 'all') {
			listSelectedBugs = listTimeAnimals;
		} else {
			listSelectedBugs = listTimeAnimals.filter(
				bug => bug.location.name === selectedBugLocation
			);
		}
		updateResultsOverview(listSelectedBugs.length);
		renderAnimals(
			listSelectedBugs.sort((a, b) => {
				if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
				if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
				return 0;
			})
		);
	}
};

const renderAnimals = listAnimals => {
	$('#js-display-results').empty();
	listAnimals.forEach(animal => {
		let newCard = $('<div class="card">');

		// Build Card Header
		let newHeader = $('<div class="card__header">'),
			newImage = $('<img class="card__icon lazy-image">'),
			newTitleContainer = $('<div class="card__title-container">'),
			newTitle = $('<p class="card__title">'),
			newSubtitle = $('<p class="card__subtitle">');

		newTitle.text(animal.name.toTitleCase());
		newSubtitle.text(
			buildMonthDisplay(animal.months[selectedHemisphere])
		);
		newTitleContainer.append(newTitle, newSubtitle);
		if (selectedAnimal === 'fish') {
			newImage.attr('src', `./assets/images/fish/fish_lqip.png`);
		} else {
			newImage.attr('src', `./assets/images/bugs/bugs_lqip.png`);
		}
		newImage.attr('data-src', `./assets/images/${animal.image}`);
		newImage.attr('alt', animal.name);
		newHeader.append(newImage, newTitleContainer);

		// Build Card Details
		let newDetails = $('<div class="card__details">'),
			newTimeDetail = $('<div class="card__detail">'),
			newLocationDetail = $('<div class="card__detail">'),
			newSellPriceDetail = $('<div class="card__detail">');

		// Build Time Detail
		let newTimeTitle = $(
				'<p class="detail__title detail__title--green">Time of day</p>'
			),
			newTimeContainer,
			newTimeSubinfo,
			newTimeInfo = $('<p class="detail__info detail__info--green">');

		if (animal.startTimes) {
			newTimeContainer = $('<div class="detail__info-container">');
			newTimeSubinfo = $('<p class="detail__subinfo">');
			// Check which time is relevant to selectedHour
			if (compareTimes(animal.startTimes[0], animal.endTimes[0])) {
				newTimeInfo.text(
					buildTimeDisplay(animal.startTimes[0], animal.endTimes[0])
				);
				newTimeSubinfo.text(
					buildTimeDisplay(animal.startTimes[1], animal.endTimes[1])
				);
			} else {
				newTimeInfo.text(
					buildTimeDisplay(animal.startTimes[1], animal.endTimes[1])
				);
				newTimeSubinfo.text(
					buildTimeDisplay(animal.startTimes[0], animal.endTimes[0])
				);
			}
			newTimeContainer.append(newTimeInfo, newTimeSubinfo);
			newTimeDetail.append(newTimeTitle, newTimeContainer);
		} else {
			newTimeInfo.text(
				buildTimeDisplay(animal.startTime, animal.endTime)
			);
			newTimeDetail.append(newTimeTitle, newTimeInfo);
		}

		// Build Location Detail
		let newLocationTitle = $(
				'<p class="detail__title detail__title--blue">Location</p>'
			),
			newLocationContainer,
			newLocationSubinfo,
			newLocationInfo = $(
				'<p class="detail__info detail__info--blue">'
			);

		newLocationInfo.text(animal.location.name);

		if (animal.location.sublocation) {
			newLocationContainer = $(
				'<div class="detail__info-container">'
			);
			newLocationSubinfo = $('<p class="detail__subinfo">');
			newLocationSubinfo.text(animal.location.sublocation);

			newLocationContainer.append(
				newLocationInfo,
				newLocationSubinfo
			);

			newLocationDetail.append(
				newLocationTitle,
				newLocationContainer
			);
		} else {
			newLocationDetail.append(newLocationTitle, newLocationInfo);
		}

		// Build SellPrice Detail
		let newSellPriceTitle = $(
				'<p class="detail__title detail__title--gold">Selling Price</p>'
			),
			newSellPriceContainer = $(
				'<div class="detail__info detail__info--gold detail__info--container">'
			);

		if (!animal.sellPrice) {
			newSellPriceContainer.html(
				'<i class="fas fa-star"></i><p>-</p>'
			);
		} else {
			newSellPriceContainer.html(
				`<i class="fas fa-star"></i><p>${animal.sellPrice.addCommas()}</p>`
			);
		}

		newSellPriceDetail.append(
			newSellPriceTitle,
			newSellPriceContainer
		);

		newDetails.append(
			newTimeDetail,
			newLocationDetail,
			newSellPriceDetail
		);

		newCard.append(newHeader, newDetails);

		$('#js-display-results').append(newCard);
	});

	initLazyImages();
};

const updateResultsOverview = numResults => {
	$('#js-results-num').text(numResults);
	$('#js-results-hemisphere').text(selectedHemisphere.toTitleCase());
	if (selectedAnimal === 'fish') {
		if (selectedFishLocation === 'all') {
			$('#js-results-location').text('All Locations');
		} else {
			$('#js-results-location').text(selectedFishLocation);
		}
	} else {
		if (selectedBugLocation === 'all') {
			$('#js-results-location').text('All Locations');
		} else {
			$('#js-results-location').text(selectedBugLocation);
		}
	}
};

const initLazyImages = () => {
	const listImages = document.querySelectorAll('.lazy-image');
	const onIntersection = images => {
		images.forEach(image => {
			if (image.isIntersecting) {
				if (navigator.onLine) {
					console.log('Online:', true);
				} else {
					console.log('Online:', false);
				}
				observer.unobserve(image.target);
				image.target.src = image.target.dataset.src;
			}
		});
	};
	const observer = new IntersectionObserver(onIntersection);
	listImages.forEach(image => {
		observer.observe(image);
	});
};

//==========================================================================
// Logic
//--------------------------------------------------------------------------

if (localStorage.getItem('hemisphere') !== null) {
	userHemisphere = localStorage.getItem('hemisphere');
	selectedHemisphere = localStorage.getItem('hemisphere');
	init();
} else {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			userHemisphere =
				position.coords.latitude >= 0 ? 'northern' : 'southern';
			localStorage.setItem(
				'hemisphere',
				position.coords.latitude >= 0 ? 'northern' : 'southern'
			);
			init();
		});
	}
}
