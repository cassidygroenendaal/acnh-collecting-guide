//==========================================================================
// Variables
//--------------------------------------------------------------------------

let userHemisphere = 'northern';

//==========================================================================
// Functions
//--------------------------------------------------------------------------

String.prototype.toTitleCase = function() {
  return this.replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
  });
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
  $('#js-select-species').on('change', function() {
    getAnimals($(this).val());
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
