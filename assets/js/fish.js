const listFish = [
	{
		name      : 'bitterling',
		image: 'fish/bitterling.png',
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
		name      : 'pale chub',
		image     : 'fish/paleChub.png',
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
		name      : 'crucian carp',
		image     : 'fish/crucianCarp.png',
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
		name      : 'dace',
		image     : 'fish/dace.png',
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
		name      : 'carp',
		image     : 'fish/carp.png',
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
		sellPrice : 300
	},
	{
		name      : 'koi',
		image     : 'fish/koi.png',
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
		name      : 'goldfish',
		image     : 'fish/goldfish.png',
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
		name      : 'pop-eyed goldfish',
		image     : 'fish/popeyedGoldfish.png',
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
		name      : 'ranchu goldfish',
		image     : 'fish/ranchuGoldfish.png',
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
		name      : 'killifish',
		image     : 'fish/killifish.png',
		months    : {
			northern : [
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 }
			],
			southern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
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
		sellPrice : 300
	},
	{
		name      : 'crawfish',
		image     : 'fish/crawfish.png',
		images     : {
			url: 'fish/crawfish.png',
			lqip: 'fish/crawfish_lqip.png',
		},
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
		name      : 'soft-shelled turtle',
		image     : 'fish/softshelledTurtle.png',
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
		name      : 'snapping turtle',
		image     : 'fish/snappingTurtle.png',
		months    : {
			northern : [
				{ name: 'april', shortName: 'apr', position: 4 },
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
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'River',
			sublocation : null
		},
		startTime : 21,
		endTime   : 4,
		sellPrice : 5000
	},
	{
		name      : 'tadpole',
		image     : 'fish/tadpole.png',
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
		name      : 'frog',
		image     : 'fish/frog.png',
		months    : {
			northern : [
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 }
			],
			southern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
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
		sellPrice : 120
	},
	{
		name      : 'freshwater goby',
		image     : 'fish/freshwaterGoby.png',
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
		name      : 'loach',
		image     : 'fish/loach.png',
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
		name      : 'catfish',
		image     : 'fish/catfish.png',
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
		name      : 'giant snakehead',
		image     : 'fish/giantSnakehead.png',
		months    : {
			northern : [
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 }
			],
			southern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Pond',
			sublocation : null
		},
		startTime : 9,
		endTime   : 16,
		sellPrice : 5500
	},
	{
		name      : 'bluegill',
		image     : 'fish/bluegill.png',
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
		name      : 'yellow perch',
		image     : 'fish/yellowPerch.png',
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
		name      : 'black bass',
		image     : 'fish/blackBass.png',
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
		name      : 'tilapia',
		image     : 'fish/tilapia.png',
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
		name      : 'pike',
		image     : 'fish/pike.png',
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
		name      : 'pond smelt',
		image     : 'fish/pondSmelt.png',
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
		sellPrice : 500
	},
	{
		name      : 'sweetfish',
		image     : 'fish/sweetfish.png',
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
		name      : 'cherry salmon',
		image     : 'fish/cherrySalmon.png',
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
		name      : 'char',
		image     : 'fish/char.png',
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
		name      : 'golden trout',
		image     : 'fish/goldenTrout.png',
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
		name      : 'stringfish',
		image     : 'fish/stringfish.png',
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
		name      : 'salmon',
		image     : 'fish/salmon.png',
		months    : {
			northern : [
				{ name: 'september', shortName: 'sept', position: 9 }
			],
			southern : [
				{ name: 'march', shortName: 'mar', position: 3 }
			]
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
		name      : 'king salmon',
		image     : 'fish/kingSalmon.png',
		months    : {
			northern : [
				{ name: 'september', shortName: 'sept', position: 9 }
			],
			southern : [
				{ name: 'march', shortName: 'mar', position: 3 }
			]
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
		name      : 'mitten crab',
		image     : 'fish/mittenCrab.png',
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
		name      : 'guppy',
		image     : 'fish/guppy.png',
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
		name      : 'nibble fish',
		image     : 'fish/nibbleFish.png',
		months    : {
			northern : [
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
		sellPrice : 1500
	},
	{
		name      : 'angelfish',
		image     : 'fish/angelfish.png',
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
		name      : 'betta',
		image     : 'fish/betta.png',
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
		name      : 'neon tetra',
		image     : 'fish/neonTetra.png',
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
		sellPrice : 500
	},
	{
		name      : 'rainbowfish',
		image     : 'fish/rainbowfish.png',
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
		name       : 'piranha',
		image     : 'fish/piranha.png',
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
		startTimes : [
			9,
			21
		],
		endTimes   : [
			16,
			4
		],
		sellPrice  : 2500
	},
	{
		name      : 'arowana',
		image     : 'fish/arowana.png',
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
		name      : 'dorado',
		image     : 'fish/dorado.png',
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
		startTime : 4,
		endTime   : 21,
		sellPrice : 15000
	},
	{
		name      : 'gar',
		image     : 'fish/gar.png',
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
			name        : 'Pond',
			sublocation : null
		},
		startTime : 16,
		endTime   : 9,
		sellPrice : 6000
	},
	{
		name      : 'arapaima',
		image     : 'fish/arapaima.png',
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
		name      : 'saddled bichir',
		image     : 'fish/saddledBichir.png',
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
		startTime : 21,
		endTime   : 4,
		sellPrice : 4000
	},
	{
		name      : 'sturgeon',
		image     : 'fish/sturgeon.png',
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
		name      : 'sea butterfly',
		image     : 'fish/seaButterfly.png',
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
		name      : 'sea horse',
		image     : 'fish/seaHorse.png',
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
		name      : 'clownfish',
		image     : 'fish/clownfish.png',
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
		name      : 'surgeonfish',
		image     : 'fish/surgeonfish.png',
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
		sellPrice : 1000
	},
	{
		name      : 'butterfly fish',
		image     : 'fish/butterflyFish.png',
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
		sellPrice : 1000
	},
	{
		name      : 'napoleonfish',
		image     : 'fish/napoleonfish.png',
		months    : {
			northern : [
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 }
			],
			southern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 }
			]
		},
		location  : {
			name        : 'Ocean',
			sublocation : null
		},
		startTime : 4,
		endTime   : 21,
		sellPrice : 10000
	},
	{
		name      : 'zebra turkeyfish',
		image     : 'fish/zebraTurkeyfish.png',
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
		name      : 'blowfish',
		image     : 'fish/blowfish.png',
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
		name      : 'puffer fish',
		image     : 'fish/pufferFish.png',
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
		name      : 'anchovy',
		image     : 'fish/anchovy.png',
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
		startTime : 4,
		endTime   : 21,
		sellPrice : 200
	},
	{
		name      : 'horse mackerel',
		image     : 'fish/horseMackerel.png',
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
		name      : 'barred Knifejaw',
		image     : 'fish/barredKnifejaw.png',
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
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
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
			name        : 'Ocean',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 5000
	},
	{
		name      : 'sea bass',
		image     : 'fish/seaBass.png',
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
		name      : 'red snapper',
		image     : 'fish/redSnapper.png',
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
		name      : 'dab',
		image     : 'fish/dab.png',
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
		name      : 'olive flounder',
		image     : 'fish/oliveFlounder.png',
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
		name      : 'squid',
		image     : 'fish/squid.png',
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
		name      : 'moray eel',
		image     : 'fish/morayEel.png',
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
		name      : 'ribbon eel',
		image     : 'fish/ribbonEel.png',
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
			name        : 'Ocean',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 600
	},
	{
		name      : 'tuna',
		image     : 'fish/tuna.png',
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
		name      : 'blue marlin',
		image     : 'fish/blueMarlin.png',
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
		name      : 'giant trevally',
		image     : 'fish/giantTrevally.png',
		months    : {
			northern : [
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
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Ocean',
			sublocation : 'Pier'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 4500
	},
	{
		name      : 'mahi-mahi',
		image     : 'fish/mahiMahi.png',
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
			name        : 'Ocean',
			sublocation : 'Pier'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 6000
	},
	{
		name      : 'ocean sunfish',
		image     : 'fish/oceanSunfish.png',
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
		name      : 'ray',
		image     : 'fish/ray.png',
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
		name      : 'saw shark',
		image     : 'fish/sawShark.png',
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
		sellPrice : 12000
	},
	{
		name      : 'hammerhead shark',
		image     : 'fish/hammerheadShark.png',
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
		name      : 'great white shark',
		image     : 'fish/greatWhiteShark.png',
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
		sellPrice : 15000
	},
	{
		name      : 'whale shark',
		image     : 'fish/whaleShark.png',
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
		name      : 'suckerfish',
		image     : 'fish/suckerfish.png',
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
		name      : 'football fish',
		image     : 'fish/footballFish.png',
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
		name      : 'oarfish',
		image     : 'fish/oarfish.png',
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
		name      : 'barreleye',
		image     : 'fish/barreleye.png',
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
		sellPrice : 15000
	},
	{
		name      : 'coelacanth',
		image     : 'fish/coelacanth.png',
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
	}
];
