const listBugs = [
	{
		name      : 'Agris Butterfly',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 3000
	},
	{
		name      : 'Atlas Moth',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 19,
		endTime   : 4,
		sellPrice : 3000
	},
	{
		name      : 'Ant',
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
			name        : 'Special',
			sublocation : 'Rotten fruit or turnips'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 80
	},
	{
		name      : 'Bagworm',
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
			name        : 'Trees',
			sublocation : 'Shake'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 600
	},
	{
		name      : 'Centipede',
		months    : {
			northern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
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
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Rocks',
			sublocation : 'Hit'
		},
		startTime : 16,
		endTime   : 23,
		sellPrice : 430
	},
	{
		name      : 'Citrus Long-Horned Beetle',
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
			name        : 'Trees',
			sublocation : 'Stump'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 350
	},
	{
		name      : 'Common Butterfly',
		months    : {
			northern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
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
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flying',
			sublocation : null
		},
		startTime : 4,
		endTime   : 19,
		sellPrice : 160
	},
	{
		name      : 'Cricket',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 130
	},
	{
		name      : 'Damselfly',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 500
	},
	{
		name      : 'Darner Dragonfly',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 8,
		endTime   : 19,
		sellPrice : 230
	},
	{
		name      : 'Diving Beetle',
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
		startTime : 8,
		endTime   : 19,
		sellPrice : 800
	},
	{
		name      : 'Dung Beetle',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 2500
	},
	{
		name      : 'Earth-Boring Dung Beetle',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 300
	},
	{
		name      : 'Emperor Butterfly',
		months    : {
			northern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'december', shortName: 'dec', position: 12 }
			],
			southern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flying',
			sublocation : null
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 4000
	},
	{
		name      : 'Flea',
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
			name        : 'Special',
			sublocation : 'Flea-infested Villager'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 70
	},
	{
		name      : 'Fly',
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
			name        : 'Special',
			sublocation : 'Rotten fruit or garbage'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 60
	},
	{
		name      : 'Grasshopper',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 160
	},
	{
		name      : 'Hermit Crab',
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
			name        : 'Beach',
			sublocation : null
		},
		startTime : 19,
		endTime   : 8,
		sellPrice : 1000
	},
	{
		name      : 'Honeybee',
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
			name        : 'Flowers',
			sublocation : 'Nearby'
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 200
	},
	{
		name      : 'Ladybug',
		months    : {
			northern : [
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'october', shortName: 'oct', position: 10 }
			],
			southern : [
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flowers',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 200
	},
	{
		name      : 'Long Locust',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 8,
		endTime   : 19,
		sellPrice : 200
	},
	{
		name      : 'Madagascan Sunset Moth',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 8,
		endTime   : 16,
		sellPrice : 2500
	},
	{
		name      : 'Man-Faced Stink Bug',
		months    : {
			northern : [
				{ name: 'march', shortName: 'mar', position: 3 },
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
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flowers',
			sublocation : null
		},
		startTime : 19,
		endTime   : 8,
		sellPrice : 1000
	},
	{
		name      : 'Mantis',
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
			name        : 'Flowers',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 430
	},
	{
		name      : 'Migratory Locust',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 8,
		endTime   : 19,
		sellPrice : 200
	},
	{
		name      : 'Mole Cricket',
		months    : {
			northern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			],
			southern : [
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 }
			]
		},
		location  : {
			name        : 'Ground',
			sublocation : 'Dig'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 500
	},
	{
		name      : 'Monarch Butterfly',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 4,
		endTime   : 17,
		sellPrice : 140
	},
	{
		name      : 'Mosquito',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 17,
		endTime   : 4,
		sellPrice : 130
	},
	{
		name      : 'Moth',
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
			name        : 'Special',
			sublocation : 'Lit Windows'
		},
		startTime : 19,
		endTime   : 4,
		sellPrice : 130
	},
	{
		name      : 'Orchid Mantis',
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
			name        : 'Flowers',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 2400
	},
	{
		name      : 'Paper Kite Butterfly',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 8,
		endTime   : 19,
		sellPrice : 1000
	},
	{
		name      : 'Peacock Butterfly',
		months    : {
			northern : [
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 }
			],
			southern : [
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flowers',
			sublocation : 'Black, blue, or purple'
		},
		startTime : 4,
		endTime   : 19,
		sellPrice : 2500
	},
	{
		name      : 'Pill Bug',
		months    : {
			northern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
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
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Rocks',
			sublocation : 'Hit'
		},
		startTime : 23,
		endTime   : 16,
		sellPrice : 250
	},
	{
		name      : 'Pondskater',
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
		startTime : 8,
		endTime   : 19,
		sellPrice : 130
	},
	{
		name      : 'Queen Alexandra’s Birdwing',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 8,
		endTime   : 16,
		sellPrice : 4000
	},
	{
		name      : 'Rainbow Stag',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 19,
		endTime   : 8,
		sellPrice : 6000
	},
	{
		name      : 'Rajah Brooke’s Birdwing',
		months    : {
			northern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'december', shortName: 'dec', position: 12 }
			],
			southern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 },
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flowers',
			sublocation : 'Black, blue, or purple'
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 2500
	},
	{
		name      : 'Red Dragonfly',
		months    : {
			northern : [
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 }
			],
			southern : [
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 }
			]
		},
		location  : {
			name        : 'Flying',
			sublocation : null
		},
		startTime : 8,
		endTime   : 19,
		sellPrice : 180
	},
	{
		name      : 'Rosalia Batsei Beetle',
		months    : {
			northern : [
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 }
			],
			southern : [
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Trees',
			sublocation : 'Stump'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 3000
	},
	{
		name      : 'Scorpion',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 19,
		endTime   : 4,
		sellPrice : 8000
	},
	{
		name      : 'Snail',
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
			name        : 'Rocks',
			sublocation : 'Rain'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 250
	},
	{
		name      : 'Spider',
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
			name        : 'Trees',
			sublocation : 'Shake'
		},
		startTime : 19,
		endTime   : 8,
		sellPrice : 600
	},
	{
		name      : 'Stinkbug',
		months    : {
			northern : [
				{ name: 'march', shortName: 'mar', position: 3 },
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
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flowers',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 120
	},
	{
		name      : 'Tarantula',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 19,
		endTime   : 4,
		sellPrice : 8000
	},
	{
		name      : 'Tiger Beetle',
		months    : {
			northern : [
				{ name: 'february', shortName: 'feb', position: 2 },
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
				{ name: 'august', shortName: 'aug', position: 8 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Ground',
			sublocation : null
		},
		startTime : 4,
		endTime   : 21,
		sellPrice : 200
	},
	{
		name      : 'Tiger Butterfly',
		months    : {
			northern : [
				{ name: 'march', shortName: 'mar', position: 3 },
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
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flying',
			sublocation : null
		},
		startTime : 4,
		endTime   : 19,
		sellPrice : 240
	},
	{
		name      : 'Violin Beetle',
		months    : {
			northern : [
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
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Trees',
			sublocation : 'Stump'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 450
	},
	{
		name      : 'Walker Cicada',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 8,
		endTime   : 16,
		sellPrice : 400
	},
	{
		name      : 'Walking Leaf',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 600
	},
	{
		name       : 'Walking Stick',
		months     : {
			northern : [
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
				{ name: 'may', shortName: 'may', position: 5 }
			]
		},
		location   : {
			name        : 'Trees',
			sublocation : null
		},
		startTimes : [
			4,
			17
		],
		endTimes   : [
			8,
			19
		],
		sellPrice  : 600
	},
	{
		name      : 'Wasp',
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
			name        : 'Trees',
			sublocation : 'Shake'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 2500
	},
	{
		name      : 'Wharf Roach',
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
			name        : 'Beach',
			sublocation : 'Rocks'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 200
	},
	{
		name      : 'Yellow Butterfly',
		months    : {
			northern : [
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'may', shortName: 'may', position: 5 },
				{ name: 'june', shortName: 'june', position: 6 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 }
			],
			southern : [
				{ name: 'march', shortName: 'mar', position: 3 },
				{ name: 'april', shortName: 'apr', position: 4 },
				{ name: 'september', shortName: 'sept', position: 9 },
				{ name: 'october', shortName: 'oct', position: 10 },
				{ name: 'november', shortName: 'nov', position: 11 },
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flying',
			sublocation : null
		},
		startTime : 4,
		endTime   : 19,
		sellPrice : 160
	}
];
