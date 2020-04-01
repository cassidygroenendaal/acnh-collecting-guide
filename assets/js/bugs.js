const listBugs = [
	{
		name      : 'agrias butterfly',
		image     : 'bugs/agriasButterfly.png',
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
		name      : 'atlas moth',
		image     : 'bugs/atlasMoth.png',
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
		name      : 'ant',
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
		name      : 'bagworm',
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
		name      : 'centipede',
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
		startTime : 17,
		endTime   : 23,
		sellPrice : 430
	},
	{
		name      : 'citrus long-horned beetle',
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
			sublocation : 'Stumps'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 350
	},
	{
		name      : 'common butterfly',
		image     : 'bugs/commonButterfly.png',
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
			name        : 'Flowers',
			sublocation : null
		},
		startTime : 4,
		endTime   : 19,
		sellPrice : 160
	},
	{
		name      : 'cricket',
		image     : 'bugs/cricket.png',
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
		name      : 'damselfly',
		image     : 'bugs/damselfly.png',
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
		name      : 'darner dragonfly',
		image     : 'bugs/darnerDragonfly.png',
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
		endTime   : 17,
		sellPrice : 230
	},
	{
		name      : 'firefly',
		image     : 'bugs/firefly.png',
		months    : {
			northern : [
				{ name: 'june', shortName: 'june', position: 6 }
			],
			southern : [
				{ name: 'december', shortName: 'dec', position: 12 }
			]
		},
		location  : {
			name        : 'Flying',
			sublocation : 'Near Freshwater'
		},
		startTime : 19,
		endTime   : 4,
		sellPrice : 60
	},
	{
		name      : 'diving beetle',
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
			name        : 'Water',
			sublocation : 'Fresh'
		},
		startTime : 8,
		endTime   : 19,
		sellPrice : 800
	},
	{
		name      : 'dung beetle',
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
			sublocation : 'Rolling dirt/snow balls'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 3000
	},
	{
		name      : 'earth-boring dung beetle',
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
		name      : 'emperor butterfly',
		image     : 'bugs/emperorButterfly.png',
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
		name      : 'scarab beetle',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 23,
		endTime   : 8,
		sellPrice : 10000
	},
	{
		name      : 'drone beetle',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 200
	},
	{
		name      : 'goliath beetle',
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
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 8000
	},
	{
		name      : 'saw stag',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 2000
	},
	{
		name      : 'miyama stag',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 1000
	},
	{
		name      : 'giant stag',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 23,
		endTime   : 8,
		sellPrice : 10000
	},
	{
		name      : 'rainbow stag',
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
		name      : 'cyclommatus stag',
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
			name        : 'Trees',
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 8000
	},
	{
		name      : 'golden stag',
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
			name        : 'Trees',
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 12000
	},
	{
		name      : 'giraffe stag',
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
			name        : 'Trees',
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 12000
	},
	{
		name      : 'horned dynastid',
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
			name        : 'Trees',
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 1350
	},
	{
		name      : 'horned atlas',
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
			name        : 'Trees',
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 8000
	},
	{
		name      : 'horned elephant',
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
			name        : 'Trees',
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 8000
	},
	{
		name      : 'horned Hercules',
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
			name        : 'Trees',
			sublocation : 'Palm'
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 12000
	},
	{
		name      : 'flea',
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
		name      : 'fly',
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
		name      : 'banded dragonfly',
		image     : 'bugs/bandedDragonfly.png',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 4500
	},
	{
		name      : 'rice grasshopper',
		image     : 'bugs/riceGrasshopper.png',
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
		sellPrice : 160
	},
	{
		name      : 'grasshopper',
		image     : 'bugs/grasshopper.png',
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
		name      : 'hermit crab',
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
			sublocation : 'Disguised as a shell'
		},
		startTime : 19,
		endTime   : 8,
		sellPrice : 1000
	},
	{
		name      : 'honeybee',
		image     : 'bugs/honeybee.png',
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
		name      : 'ladybug',
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
		name      : 'long locust',
		image     : 'bugs/longLocust.png',
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
		name      : 'Madagascan sunset moth',
		image     : 'bugs/madagascanSunsetMoth.png',
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
		name      : 'man-faced stink bug',
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
		name      : 'mantis',
		image     : 'bugs/mantis.png',
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
		name      : 'migratory locust',
		image     : 'bugs/migratoryLocust.png',
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
		sellPrice : 600
	},
	{
		name      : 'mole cricket',
		image     : 'bugs/moleCricket.png',
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
		name      : 'bell cricket',
		image     : 'bugs/bellCricket.png',
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
			name        : 'Ground',
			sublocation : null
		},
		startTime : 17,
		endTime   : 8,
		sellPrice : 430
	},
	{
		name      : 'monarch butterfly',
		image     : 'bugs/monarchButterfly.png',
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
		name      : 'mosquito',
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
		name      : 'moth',
		image     : 'bugs/moth.png',
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
		name      : 'orchid mantis',
		image     : 'bugs/orchidMantis.png',
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
			sublocation : 'White'
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 2400
	},
	{
		name      : 'paper kite butterfly',
		image     : 'bugs/paperKiteButterfly.png',
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
		name      : 'common bluebottle',
		image     : 'bugs/commonBluebottle.png',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 4,
		endTime   : 19,
		sellPrice : 300
	},
	{
		name      : 'peacock butterfly',
		image     : 'bugs/peacockButterfly.png',
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
		name      : 'great purple emperor',
		image     : 'bugs/greatPurpleEmperor.png',
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
			name        : 'Flying',
			sublocation : null
		},
		startTime : 4,
		endTime   : 19,
		sellPrice : 3000
	},
	{
		name      : 'pill bug',
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
		name      : 'pondskater',
		image     : 'bugs/pondskater.png',
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
			name        : 'Water',
			sublocation : 'Fresh'
		},
		startTime : 8,
		endTime   : 19,
		sellPrice : 130
	},
	{
		name      : 'Queen Alexandra’s birdwing',
		image     : 'bugs/queenAlexandrasBirdwing.png',
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
		name      : 'Rajah Brooke’s birdwing',
		image     : 'bugs/rajahBrookesBirdwing.png',
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
		name      : 'red dragonfly',
		image     : 'bugs/redDragonfly.png',
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
		name      : 'Rosalia Batsei beetle',
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
			name        : 'Trees',
			sublocation : 'Stumps'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 3000
	},
	{
		name      : 'blue weevil beetle',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 800
	},
	{
		name      : 'scorpion',
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
		name      : 'snail',
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
		name      : 'spider',
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
		sellPrice : 480
	},
	{
		name      : 'stinkbug',
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
		name      : 'tarantula',
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
		name      : 'tiger beetle',
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
		startTime : 5,
		endTime   : 5,
		sellPrice : 1500
	},
	{
		name      : 'tiger butterfly',
		image     : 'bugs/tigerButterfly.png',
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
		name      : 'jewel beetle',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 2400
	},
	{
		name      : 'violin beetle',
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
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 450
	},
	{
		name      : 'brown cicada',
		image     : 'bugs/brownCicada.png',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 250
	},
	{
		name      : 'robust cicada',
		image     : 'bugs/robustCicada.png',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 300
	},
	{
		name      : 'giant cicada',
		image     : 'bugs/giantCicada.png',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 8,
		endTime   : 17,
		sellPrice : 600
	},
	{
		name      : 'walker cicada',
		image     : 'bugs/walkerCicada.png',
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
		name       : 'evening cicada',
		image     : 'bugs/eveningCicada.png',
		months     : {
			northern : [
				{ name: 'july', shortName: 'july', position: 7 },
				{ name: 'august', shortName: 'aug', position: 8 }
			],
			southern : [
				{ name: 'january', shortName: 'jan', position: 1 },
				{ name: 'february', shortName: 'feb', position: 2 }
			]
		},
		location   : {
			name        : 'Trees',
			sublocation : null
		},
		startTimes : [
			4,
			16
		],
		endTimes   : [
			8,
			19
		],
		sellPrice  : 660
	},
	{
		name      : 'cicada shell',
		image     : 'bugs/cicadaShell.png',
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
			name        : 'Trees',
			sublocation : null
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 10
	},
	{
		name      : 'giant water bug',
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
			name        : 'Water',
			sublocation : 'Fresh'
		},
		startTime : 19,
		endTime   : 8,
		sellPrice : 2000
	},
	{
		name      : 'walking leaf',
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
			sublocation : 'Under trees'
		},
		startTime : 5,
		endTime   : 5,
		sellPrice : 600
	},
	{
		name       : 'walking stick',
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
		name      : 'wasp',
		image     : 'bugs/wasp.png',
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
		name      : 'wharf roach',
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
		name      : 'yellow butterfly',
		image     : 'bugs/yellowButterfly.png',
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
