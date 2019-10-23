const STYLE = Object.freeze({
	functional: {
		lane: 0,
		label: "functional",
		color: "#a6e22e"
	},
	ml: {
		lane: 1,
		label: "typed/functional",
		color: "#2ee2a6"
	},
	imperative: {
		lane: 2,
		label: "imperative",
		color: "#fd917f"
	},
	structured: {
		lane: 3,
		label: "structured",
		color: "#f00"
	},
	logical: {
		lane: 4,
		label: "logical",
		color: "#00f"
	},
	oop: {
		lane: 5,
		label: "object oriented",
		color: "#66d9ef"
	},
	coop: {
		lane: 6,
		label: "c++-style object oriented",
		color: "#66efd9"
	},
	dynamic: {
		lane: 7,
		label: "dynamic",
		color: "#efd966"
	},
	unixTools: {
		lane: 8,
		label: "Unix tools",
		color: "#e2a62e"
	},
	business: {
		lane: 9,
		label: "Business oriented",
		color: "#e22ea6"
	},
	special: {
		lane: 10,
		label: "special",
		color: "#a8a"
	},
	theory: {
		lane: 11,
		label: "theoretical",
		color: "#49483e"
	},
	tech: {
		lane: 12,
		label: "technology",
		color: "#493d48"
	}
});
	// Theory
/*
var Lambda = {
	"name": "λ",
	"date": 1935,
	"tags": STYLE.theory
},	Info = {
	"name": "Information Theory",
	"date": 1948,
	"tags": STYLE.theory
},	TypedLambda = {
	"name": "Typed λ",
	"date": 1940,
	"tags": STYLE.theory
},	Qsort = {
	"name": "QuickSort",
	"date": 1959,
	"tags": STYLE.theory
},	CurryHoward = {
	"name": "Curry/Howard",
	"date": 1969,
	"tags": STYLE.theory
},	SystemF = {
	"name": "System F",
	"date": 1974,
	"tags": STYLE.theory,
},*/
	// Tech
var	VonNeumann = {
	"name": "Von Nuemann",
	"date": 1946,
	"tags": STYLE.tech,
},	Disk = {
	"name": "Disk",
	"date": 1953,
	"tags": STYLE.tech
},	Solid = {
	"name": "Solid-state",
	"date": 1958,
	"tags": STYLE.tech
},	Mouse = {
	"name": "Mouse",
	"date": 1964,
	"tags": STYLE.tech,
},	Micro = {
	"name": "MOSFET",
	"date": 1970,
	"tags": STYLE.tech,
},	Unix = {
	"name": "Unix",
	"date": 1971,
	"tags": STYLE.tech
},	Tcp = {
	"name": "TCP",
	"date": 1974,
	"tags": STYLE.tech
},	Pacman = {
	"name": "Pac-Man",
	"date": 1980,
	"tags": STYLE.tech
},	Mac = {
	"name": "MacOS",
	"date": 1984,
	"tags": STYLE.tech
},	Www = {
	"name": "WWW",
	"date": 1990,
	"tags": STYLE.tech
},	Quake = {
	"name": "Quake",
	"date": 1996,
	"tags": STYLE.tech
},	Y2k = {
	"name": "Y2K",
	"date": 2000,
	"tags": STYLE.tech
},	Iphone = {
	"name": "iPhone",
	"date": 2007,
	"tags": STYLE.tech
},	AlphaZero = {
	"name": "AlphaZero",
	"date": 2017,
	"tags": STYLE.tech
},

	// ML
	Sml = {
	"name": "SML",
	"date": 1983,
	"tags": STYLE.ml
},	Ml = {
	"name": "ML",
	"date": 1973,
	"tags": STYLE.ml
},	Scala = {
	"name": "Scala",
	"date": 2004,
	"tags": STYLE.ml
},	Haskell = {
	"name": "Haskell",
	"date": 1990,
	"tags": STYLE.ml
},	Caml = {
	"name": "Caml",
	"date": 1985,
	"tags": STYLE.ml
},	



	// Business
Rpg = {
	"name": "RPG",
	"date": 1959,
	"tags": STYLE.business	
},	



	// C & OOP
	Ada = {
	"name": "Ada",
	"date": 1980,
	"tags": STYLE.coop
},	ObjectiveC = {
	"name": "Objective-C",
	"date": 1984,
	"tags": STYLE.coop
},	Cpp = {
	"name": "C++",
	"date": 1985,
	"tags": STYLE.coop
},	Csharp = {
	"name": "C#",
	"date": 2000,
	"tags": STYLE.coop
},	Java = {
	"name": "Java",
	"date": 1995,
	"tags": STYLE.coop
},	Swift = {
	"name": "Swift",
	"date": 2014,
	"tags": STYLE.coop
},

	// Unix-y
	Sh = {
	"name": "sh",
	"date": 1977,
	"tags": STYLE.unixTools
},	Csh = {
	"name": "csh",
	"date": 1978,
	"tags": STYLE.unixTools
},	Awk = {
	"name": "AWK",
	"date": 1977,
	"tags": STYLE.unixTools
},	Bash = {
	"name": "Bash",
	"date": 1989,
	"tags": STYLE.unixTools
},	Ksh = {
	"name": "ksh",
	"date": 1983,
	"tags": STYLE.unixTools
},

	// Dynamic
	Python = {
	"name": "Python",
	"date":	1990,
	"tags": STYLE.dynamic
},	Perl = {
	"name": "Perl",
	"date": 1987,
	"tags": STYLE.dynamic
},	Javascript = {
	"name": "JavaScript",
	"date": 1995,
	"tags": STYLE.dynamic
},	Ruby = {
	"name": "Ruby",
	"date": 1995,
	"tags": STYLE.dynamic
},

	// other
	Logo = {
	"name": "Logo",
	"date": 1967,
	"tags": STYLE.special
},	Postscript = {
	"name": "PS",
	"date": 1982,
	"tags": STYLE.special
},	Tcl = {
	"name": "Tcl",
	"date": 1988,
	"tags": STYLE.special
},	Go = {
	"name": "Go",
	"date": 2009,
	"tags": STYLE.special,
},	Rust = {
	"name": "Rust",
	"date": 2010,
	"tags": STYLE.special,
},	Plm = {
	"name": "PL/M",
	"date": 1973,
	"tags": STYLE.special,	
},	Snobol = {
	"name": "SNOBOL",
	"date": 1962,
	"tags": STYLE.special,	
},	Icon = {
	"name": "Icon",
	"date": 1977,
	"tags": STYLE.special,	
},	Forth = {
	"name": "Forth",
	"date": 1970,
	"tags": STYLE.special,
},	Basic = {
	"name": "BASIC",
	"date": 1964,
	"tags": STYLE.special,	
},	Visualbasic = {
	"name": "VB",
	"date": 1991,
	"tags": STYLE.special,	
}
