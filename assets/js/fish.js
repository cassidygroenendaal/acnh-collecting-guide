const listFish = [
  {
    name      : 'Anchovy',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 4,
    endTime   : 21,
    sellPrice : 200
  },
  {
    name      : 'Angelfish',
    months    : {
      northern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 3000
  },
  {
    name      : 'Arowana',
    months    : {
      northern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 10000
  },
  {
    name      : 'Barred Knifejaw',
    months    : {
      northern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 5000
  },
  {
    name      : 'Barreleye',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 21,
    endTime   : 4,
    sellPrice : null
  },
  {
    name      : 'Betta',
    months    : {
      northern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 9,
    endTime   : 16,
    sellPrice : 2500
  },
  {
    name      : 'Bitterling',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 900
  },
  {
    name      : 'Black Bass',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 400
  },
  {
    name      : 'Blowfish',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 21,
    endTime   : 4,
    sellPrice : 5000
  },
  {
    name      : 'Blue Marlin',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : 'Pier'
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 10000
  },
  {
    name      : 'Bluegill',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 9,
    endTime   : 16,
    sellPrice : 180
  },
  {
    name      : 'Carp',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 300
  },
  {
    name      : 'Catfish',
    months    : {
      northern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Pond',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 800
  },
  {
    name      : 'Char',
    months    : {
      northern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 3800
  },
  {
    name      : 'Cherry Salmon',
    months    : {
      northern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : 'Clifftop'
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 1000
  },
  {
    name      : 'Clownfish',
    months    : {
      northern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 650
  },
  {
    name      : 'Coelacanth',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : 'Rain'
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 15000
  },
  {
    name      : 'Crawfish',
    months    : {
      northern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Pond',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 200
  },
  {
    name      : 'Crucian Carp',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 160
  },
  {
    name      : 'Dab',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 300
  },
  {
    name      : 'Dace',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 240
  },
  {
    name      : 'Football Fish',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 2500
  },
  {
    name      : 'Freshwater Goby',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 400
  },
  {
    name      : 'Golden Trout',
    months    : {
      northern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : 'Clifftop'
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 15000
  },
  {
    name      : 'Goldfish',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Pond',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 1300
  },
  {
    name      : 'Guppy',
    months    : {
      northern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 9,
    endTime   : 16,
    sellPrice : 1300
  },
  {
    name      : 'Hammerhead Shark',
    months    : {
      northern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 8000
  },
  {
    name      : 'Horse Mackerel',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 150
  },
  {
    name      : 'King Salmon',
    months    : {
      northern : [{ name: 'september', shortName: 'sept', position: 9 }],
      southern : [{ name: 'march', shortName: 'mar', position: 3 }]
    },
    location  : {
      name        : 'River',
      sublocation : 'Mouth'
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 1800
  },
  {
    name      : 'Koi',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Pond',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 4000
  },
  {
    name      : 'Loach',
    months    : {
      northern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 }
      ],
      southern : [
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 400
  },
  {
    name      : 'Mitten Crab',
    months    : {
      northern : [
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 2000
  },
  {
    name      : 'Moray Eel',
    months    : {
      northern : [
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ],
      southern : [
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 2000
  },
  {
    name      : 'Neon Tetra',
    months    : {
      northern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 4,
    endTime   : 16,
    sellPrice : 500
  },
  {
    name      : 'Oarfish',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 9000
  },
  {
    name      : 'Ocean Sunfish',
    months    : {
      northern : [
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 4,
    endTime   : 21,
    sellPrice : 4000
  },
  {
    name      : 'Olive Flounder',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 800
  },
  {
    name      : 'Pale Chub',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 9,
    endTime   : 16,
    sellPrice : 200
  },
  {
    name      : 'Pike',
    months    : {
      northern : [
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 1800
  },
  {
    name       : 'Piranha',
    months     : {
      northern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location   : {
      name        : 'River',
      sublocation : null
    },
    startTimes : [9, 21],
    endTimes   : [16, 4],
    sellPrice  : 2500
  },
  {
    name      : 'Pond Smelt',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 320
  },
  {
    name      : 'Pop-eyed Goldfish',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Pond',
      sublocation : null
    },
    startTime : 9,
    endTime   : 16,
    sellPrice : 1300
  },
  {
    name      : 'Puffer Fish',
    months    : {
      northern : [
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 250
  },
  {
    name      : 'Rainbowfish',
    months    : {
      northern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 9,
    endTime   : 16,
    sellPrice : 800
  },
  {
    name      : 'Ranchu Goldfish',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Pond',
      sublocation : null
    },
    startTime : 9,
    endTime   : 16,
    sellPrice : 4500
  },
  {
    name      : 'Ray',
    months    : {
      northern : [
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 4,
    endTime   : 21,
    sellPrice : 3000
  },
  {
    name      : 'Red Snapper',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 3000
  },
  {
    name      : 'Ribbon Eel',
    months    : {
      northern : [
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 600
  },
  {
    name      : 'Salmon',
    months    : {
      northern : [{ name: 'september', shortName: 'sept', position: 9 }],
      southern : [{ name: 'march', shortName: 'mar', position: 3 }]
    },
    location  : {
      name        : 'River',
      sublocation : 'Mouth'
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 700
  },
  {
    name      : 'Sea Bass',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 400
  },
  {
    name      : 'Sea Butterfly',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 1000
  },
  {
    name      : 'Seahorse',
    months    : {
      northern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 1100
  },
  {
    name      : 'Soft-shelled Turtle',
    months    : {
      northern : [
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 3750
  },
  {
    name      : 'Squid',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 500
  },
  {
    name      : 'Stringfish',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : 'Clifftop'
    },
    startTime : 16,
    endTime   : 9,
    sellPrice : 15000
  },
  {
    name      : 'Sturgeon',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : 'Mouth'
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 10000
  },
  {
    name      : 'Suckerfish',
    months    : {
      northern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 1500
  },
  {
    name      : 'Sweetfish',
    months    : {
      northern : [
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 900
  },
  {
    name      : 'Tadpole',
    months    : {
      northern : [
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Pond',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 100
  },
  {
    name      : 'Tilapia',
    months    : {
      northern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 800
  },
  {
    name      : 'Tuna',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : 'Pier'
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 7000
  },
  {
    name      : 'Whale Shark',
    months    : {
      northern : [
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'december', shortName: 'dec', position: 12 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 13000
  },
  {
    name      : 'Yellow Perch',
    months    : {
      northern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 },
        { name: 'december', shortName: 'dec', position: 12 }
      ],
      southern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'june', shortName: 'june', position: 6 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 }
      ]
    },
    location  : {
      name        : 'River',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 300
  },
  {
    name      : 'Zebra Turkeyfish',
    months    : {
      northern : [
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'july', shortName: 'july', position: 7 },
        { name: 'august', shortName: 'aug', position: 8 },
        { name: 'september', shortName: 'sept', position: 9 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ],
      southern : [
        { name: 'january', shortName: 'jan', position: 1 },
        { name: 'february', shortName: 'feb', position: 2 },
        { name: 'march', shortName: 'mar', position: 3 },
        { name: 'april', shortName: 'apr', position: 4 },
        { name: 'may', shortName: 'may', position: 5 },
        { name: 'october', shortName: 'oct', position: 10 },
        { name: 'november', shortName: 'nov', position: 11 }
      ]
    },
    location  : {
      name        : 'Ocean',
      sublocation : null
    },
    startTime : 5,
    endTime   : 5,
    sellPrice : 500
  }
];
