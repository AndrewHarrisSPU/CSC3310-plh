const STYLE = Object.freeze({
	functional: {
		lane: 1,
		label: "functional",
		color: "#a6e22e"
	},
	ml: {
		lane: 2,
		label: "inferential typing",
		color: "#2ee2a6"
	},
	imperative: {
		lane: 3,
		label: "imperative",
		color: "#fd917f"
	},
	structured: {
		lane: 4,
		label: "structured",
		color: "#f00"
	},
	logical: {
		lane: 5,
		label: "logical",
		color: "#00f"
	},
	oop: {
		lane: 6,
		label: "object oriented",
		color: "#66d9ef"
	},
	coop: {
		lane: 7,
		label: "C -> object oriented",
		color: "#66efd9"
	},
	dynamic: {
		lane: 8,
		label: "dynamic",
		color: "#efd966"
	},
	unixTools: {
		lane: 9,
		label: "Unix-flavored",
		color: "#e2a62e"
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
		lane: 11,
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

	// other
Tcl = {
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
},	Visualbasic = {
	"name": "VB",
	"date": 1991,
	"tags": STYLE.special,	
}
