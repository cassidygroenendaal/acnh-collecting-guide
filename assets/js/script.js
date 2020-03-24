//==========================================================================
// Variables
//--------------------------------------------------------------------------

let userHemisphere = 'northern',
	todayDateTime = moment(),
	userDate = todayDateTime.format('MMM D'),
	userTime = todayDateTime.format('HH:mm');

let selectedMonth = todayDateTime.format('MMMM').toLowerCase(),
	selectedHour = todayDateTime.format('H'),
	selectedAnimal = 'fish',
	selectedHemisphere = userHemisphere,
	selectedLocation = 'all';

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

const buildMonthDisplay = (months) => {
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

const init = () => {
	// if (navigator.geolocation) {
	//   navigator.geolocation.getCurrentPosition(position => {
	//     userHemisphere = position.coords.latitude >= 0 ? 'northern' : 'southern';
	//run program

	// Set today's date & time
	$('#js-select-date').attr('data-date', userDate);
	$('#js-select-date').val(todayDateTime.format('YYYY-MM-D'));
	$('#js-select-time').val(userTime);

	// Hide Modal on page load
	$('.modal').css('visibility', 'hidden');

	// Set up event listeners - UNFINISHED
	$('#js-select-species').change(function() {
		console.log('This feature has not yet been implemented!');
	});

	$('#js-select-date').change(function() {
		$('#js-select-date').attr(
			'data-date',
			moment($('#js-select-date').val(), 'YYYY-MM-D').format('MMM D')
		);
		selectedMonth = moment($('#js-select-date').val(), 'YYYY-MM-D')
			.format('MMMM')
			.toLowerCase();
		getAnimals(selectedAnimal);
	});

	$('#js-select-time').change(function() {
		selectedHour = [
			$(this).val()[0],
			$(this).val()[1]
		].join('');
		getAnimals(selectedAnimal);
	});

	// Set up Radio Button listeners
	$('.modal__radio-btn').change(function() {
		if ($(this).attr('name') === 'hemisphere') {
			selectedHemisphere = $(this).attr('value');
		} else {
			selectedLocation = $(this).attr('value');
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

	//   });
	// }
};

const getAnimals = (animal) => {
	if (animal === 'fish') {
		let listMonthFish = [];

		listFish.forEach((fish) => {
			fish.months[selectedHemisphere].forEach((month) => {
				if (month.name === selectedMonth) {
					listMonthFish.push(fish);
				}
			});
		});

		let listTimeFish = listMonthFish.filter((fish) => {
			if (fish.startTime === fish.endTime) {
				return true;
			} else if (fish.startTime > fish.endTime) {
				if (
					fish.startTime <= selectedHour &&
					fish.endTime + 24 > selectedHour
				) {
					return true;
				}
			} else {
				if (
					fish.startTime <= selectedHour &&
					fish.endTime > selectedHour
				) {
					return true;
				}
			}
		});

		let listSelectedFish;

		if (selectedLocation === 'all') {
			listSelectedFish = listTimeFish;
		} else {
			listSelectedFish = listTimeFish.filter(
				(fish) => fish.location.name === selectedLocation
			);
		}

		return renderAnimals(listSelectedFish);
	}
};

const renderAnimals = (listAnimals) => {
	$('#js-display-results').empty();
	listAnimals.forEach((animal) => {
		let newCard = $('<div class="card">');

		// Build Card Header
		let newHeader = $('<div class="card__header">'),
			newTitle = $('<p class="card__title">'),
			newSubtitle = $('<p class="card__subtitle">');

		newTitle.text(animal.name);
		newSubtitle.text(
			buildMonthDisplay(animal.months[selectedHemisphere])
		);
		newHeader.append(newTitle);
		newHeader.append(newSubtitle);

		// Build Card Details
		let newDetails = $('<div class="card__details">'),
			newTimeDetail = $('<div class="card__detail">'),
			newLocationDetail = $('<div class="card__detail">'),
			newSellPriceDetail = $('<div class="card__detail">');

		// Build Time Detail
		let newTimeTitle = $(
				'<p class="detail__title detail__title--green">Time of day</p>'
			),
			newTimeInfo = $('<p class="detail__info detail__info--green">');
		let startTime, endTime;
		if (animal.startTimes) {
			if (animal.startTimes[0] > 12) {
				startTime = animal.startTimes[0] - 12 + 'PM';
			} else {
				startTime = animal.startTimes[0] + 'AM';
			}
			if (animal.endTimes[0] > 12) {
				endTime = animal.endTimes[0] - 12 + 'PM';
			} else {
				endTime = animal.endTimes[0] + 'AM';
			}
			newTimeInfo.text(`${startTime} - ${endTime}`);
		} else {
			if (animal.startTime === animal.endTime) {
				newTimeInfo.text('All day');
			} else {
				if (animal.startTime > 12) {
					startTime = animal.startTime - 12 + 'PM';
				} else {
					startTime = animal.startTime + 'AM';
				}
				if (animal.endTime > 12) {
					endTime = animal.endTime - 12 + 'PM';
				} else {
					endTime = animal.endTime + 'AM';
				}
				newTimeInfo.text(`${startTime} - ${endTime}`);
			}
		}

		newTimeDetail.append(newTimeTitle, newTimeInfo);

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
};

//==========================================================================
// Logic
//--------------------------------------------------------------------------

init();
