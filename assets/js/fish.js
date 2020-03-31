const listFish = [
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
			name        : 'Pond',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 300
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
		name      : 'Killifish',
		months    : {
			northern : [
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
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
		name      : 'Soft-shelled turtle',
		months    : {
			northern : [
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'september', shortName: 'sept', position: 9 },
			],
			southern : [
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
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
		name      : 'Snapping turtle',
		months    : {
			northern : [
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
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
		name      : 'Frog',
		months    : {
			northern : [
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
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
		name      : 'Giant snakehead',
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
		sellPrice : 500
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
];
