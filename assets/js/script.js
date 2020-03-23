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

const buildMonthDisplay = (months) => {
	if (months.length === 12) {
		return 'All Year';
	} else {
		let displayString = '';
		let prevMonth = {};

		months.forEach((month, i) => {
			if (!prevMonth.position) {
				// Insert first month
				displayString += `${month.shortName.toTitleCase()} - `;
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

	// Set up event listeners
	$('#js-select-species').change(function() {
		// getAnimals($(this).val());
		console.log($(this).val());
	});

	$('#js-select-date').change(function() {
		$('#js-select-date').attr(
			'data-date',
			moment($('#js-select-date').val(), 'YYYY-MM-D').format('MMM D')
		);
		selectedMonth = moment($('#js-select-date').val(), 'YYYY-MM-D')
			.format('MMMM')
			.toLowerCase();
	});

	$('#js-select-time').change(function() {
		selectedHour = [
			$(this).val()[0],
			$(this).val()[1]
		].join('');
	});

	// Set up Radio Button listeners
	$('.modal__radio-btn').change(function() {
		if ($(this).attr('name') === 'hemisphere') {
			selectedHemisphere = $(this).attr('value');
		} else {
			selectedLocation = $(this).attr('value');
		}
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

	// listFish.forEach(fish => {
	//   console.log(
	//     fish.name,
	//     userHemisphere + ':',
	//     buildMonthDisplay(fish.months[userHemisphere])
	//   );
	// });
	//   });
	// }
};

//==========================================================================
// Logic
//--------------------------------------------------------------------------

init();
