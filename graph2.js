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
	logical: {
		lane: 3,
		label: "logical",
		color: "#00f"
	},
	oop: {
		lane: 4,
		label: "object oriented",
		color: "#66d9ef"
	},
	coop: {
		lane: 5,
		label: "c++-style object oriented",
		color: "#66efd9"
	},
	dynamic: {
		lane: 6,
		label: "dynamic",
		color: "#efd966"
	},
	unixTools: {
		lane: 7,
		label: "Unix tools",
		color: "#e2a62e"
	},
	business: {
		lane: 8,
		label: "Business oriented",
		color: "#e22ea6"
	},
	special: {
		lane: 9,
		label: "special",
		color: "#a8a"
	},
	theory: {
		lane: 10,
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
},
	// Tech
	VonNeumann = {
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

	// Lisps
	Lisp = {
	"name": "Lisp",
	"date": 1968,
	"tags": STYLE.functional,
	"notes":
`Originally an AI language, now enjoyed by programming langauage theorists.
Extremely simple core grammar. Everything is an S-Expression or a list of S-EXpressions.
With macros, Lisp is syntactically extensible.`
},	Scheme = {
	"name": "Scheme",
	"date": 1975,
	"tags": STYLE.functional,
	"notes":
`A minimal and beloved dialect of Lisp.
Featured in the classic text Structures and Interpretation of Computer Programs
(AKA 'The Wizard Book')`	
},	Erlang = {
	"name": "Erlang",
	"date": 1986,
	"tags": STYLE.functional,
	"notes":
`Takes immutability into a world of concurrency problems and comes well.`,
	"dev":
`Joe Armstrong, Robert Virding, Mike Williams`,
	"org":
`Ericsson`
},	Racket = {
	"name": "Racket",
	"date": 1995,
	"tags": STYLE.functional,
	"notes":
`A "batteries-included" fork of Scheme. A bit of a meta-language, the base installation
includes implementations of Typed Racket, Scheme, Algol-60, datalog, and more.`
},	R = {
	"name": "R",
	"date": 1993,
	"tags": STYLE.functional,
	"notes":
`Aspects of R's syntax and feel match Lisp quite closely. Many compromises are made
to provide something more performant in an interpreted environment. Has strong (but not
exlusive) support in certain scientific domains, particularly data visualization.`
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

	// Imperative
	Fortran = {
	"name": "Fortran",
	"date": 1957,
	"tags": STYLE.imperative
},	Algol = {
	"name": "Algol",
	"date": 1958,
	"tags": STYLE.imperative
},	Modula = {
	"name": "Modula",
	"date": 1975,
	"tags": STYLE.imperative
},	Bcpl = {
	"name": "BCPL",
	"date": 1967,
	"tags": STYLE.imperative
},	B = {
	"name": "B",
	"date": 1969,
	"tags": STYLE.imperative,
	"notes":
`Comes before C`
},	C = {
	"name": "C",
	"date": 1972,
	"tags": STYLE.imperative
},	Pascal = {
	"name": "Pascal",
	"date": 1970,
	"tags": STYLE.imperative
},	

	// Logical
	Prolog = {
	"name": "Prolog",
	"date": 1972,
	"tags": STYLE.logical
},	Sql = {
	"name": "SQL",
	"date": 1974,
	"tags": STYLE.logical
},	

	// Business
	Flowmatic = {
	"name": "FLOW-MATIC",
	"date": 1957,
	"tags": STYLE.business
},	Cobol = {
	"name": "COBOL",
	"date": 1960,
	"tags": STYLE.business
},	Ipl = {
	"name": "IPL",
	"date": 1956,
	"tags": STYLE.business
},	Rpg = {
	"name": "RPG",
	"date": 1959,
	"tags": STYLE.business	
},	

	// OOP
	Simula = {
	"name": "Simula",
	"date": 1962,
	"tags": STYLE.oop
},	Smalltalk = {
	"name": "Smalltalk",
	"date": 1972,
	"tags": STYLE.oop
},	Eiffel = {
	"name": "Eiffel",
	"date": 1986,
	"tags": STYLE.oop
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
	Apl = {
	"name": "APL",
	"date": 1966,
	"tags": STYLE.special
},	Logo = {
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
},	Pl1 = {
	"name": "PL/1",
	"date": 1964,
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

var graphAll = {
	"nodes": [

	// Lisps etc.
	Lisp, Scheme, Racket, R,

	// ML family
	Ml, Sml, Caml, Haskell, Scala,

	// Imperative
	Fortran, Algol, Pascal, Modula,

	// Logical
	Prolog, Sql,

	// Business
	Flowmatic, Cobol, Ipl, Rpg,

	// C and precursors
	B, Bcpl, C,

	// Decendents of C
	Cpp, Csharp, ObjectiveC, Java, Swift,

	// alt object-oriented
	Simula, Eiffel, Ada, Smalltalk, 

	// Dynamic
	Perl, Python, Ruby, Javascript,

	// unix tools
	Awk, Sh, Csh, Ksh, Bash,

	// other
	Apl, Logo, Postscript, Tcl, Go, Rust, Pl1, Plm, Snobol, Icon, Forth, Basic, Visualbasic,

	// Theory
	Lambda, Info, TypedLambda, Qsort, CurryHoward, SystemF,	

	// Tech
	VonNeumann, Disk, Solid, Mouse, Micro, Unix, Tcp,
	Pacman, Mac, Www, Quake, Y2k, Iphone, AlphaZero,

	],
	"links": [
		// imperatives
		{ "source": Fortran, "target": Algol },
		{ "source": Algol, "target": C },
		{ "source": Algol, "target": Pascal },
		{ "source": Pascal, "target": Modula },
		{ "source": Modula, "target": Python },
		{ "source": Pascal, "target": Ada },

		// ML
		{ "source": Pascal, "target": Ml },
		{ "source": Lisp, "target": Ml },
		{ "source": Ml, "target": Sml },
		{ "source": Sml, "target": Caml },
		{ "source": Sml, "target": Haskell },
		{ "source": Sml, "target": Scala },

		// Objects
		{ "source": Algol, "target": Simula },
		{ "source": Simula, "target": Smalltalk },
		{ "source": Smalltalk, "target": Ruby },
		{ "source": Simula, "target": ObjectiveC },
		{ "source": ObjectiveC, "target": Swift },		
		{ "source": Simula, "target": Cpp },
		{ "source": Cpp, "target": Csharp },

		// Lisps
		{ "source": Lisp, "target": Scheme },
		{ "source": Lisp, "target": R },
		{ "source": Scheme, "target": Racket },
		{ "source": Lisp, "target": Erlang },
		{ "source": Prolog, "target": Erlang },
		{ "source": Smalltalk, "target": Erlang },

		// Towards C
		{ "source": Bcpl, "target": B },
		{ "source": B, "target": C },

		{ "source": Ada, "target": Eiffel },
		{ "source": Simula, "target": Eiffel },

		// Unix tools
		{ "source": C, "target": Awk },
		{ "source": Sh, "target": Csh },
		{ "source": Sh, "target": Ksh },
		{ "source": Sh, "target": Bash },
		{ "source": Awk, "target": Perl },

		// Beyond C
		{ "source": C, "target": Cpp },
		{ "source": C, "target": Csharp },
		{ "source": C, "target": ObjectiveC },
		{ "source": C, "target": Java },

		// Scala
		{ "source": Java, "target": Scala },

		// Dynamic
		{ "source": Scheme, "target": Javascript },
		{ "source": Java, "target": Javascript },
		{ "source": Perl, "target": Ruby },
		{ "source": Python, "target": Ruby },

		// Logical
		{ "source": Prolog, "target": Sql },
		{ "source": Cobol, "target": Sql },

		{ "source": Flowmatic, "target": Cobol },

		{ "source": Awk, "target": Tcl },
	]
}

function filterLane( graph, lanes ){
	var res = {
		nodes: [],
		links: [],
		years: {
			// wrong values hard-coded.
			// ugly but quick.
			min: 2019,
			max: 1935
		},
		lanes: []
	}

	// NODES
	for( node of graph.nodes ){
		for( lane of lanes ){
			if( !( 'tags' in node )){
				console.log( node )
				return res
			}
			if( lane == node.tags.lane ){
				res.nodes.push( node )
			}
		}
	}

	// LINKS
	for( link of graph.links ){
		let pushMe = false

		// source, target in same lane
		if( res.nodes.includes( link.source )
		&&	res.nodes.includes( link.target )){
			pushMe = true
		}

		// source, target in different lane?
		// check that we're not recurring more than 1 lane out
		if( res.nodes.includes( link.source )){
			if( !res.nodes.includes( link.target )
			&&	lanes.includes( link.source.tags.lane )){
				res.nodes.push( link.target )
				pushMe = true
			}
		}

		if(	res.nodes.includes( link.target )){
			if( !res.nodes.includes( link.source )
			&&	lanes.includes( link.target.tags.lane )){
				res.nodes.push( link.source )
				pushMe = true
			}
		}

		// push link, finally
		if( pushMe ){
			res.links.push( link )
		}
	}

	// YEARS
	for( node of res.nodes ){
		res.years.min = Math.min( res.years.min, node.date )
		res.years.max = Math.max( res.years.max, node.date )
	}

	// LANES
	for( node of res.nodes ){
		if( !res.lanes.includes( node.tags.lane )){
			res.lanes.push( node.tags.lane )
		}
	}

	// sort lanes ...
	res.lanes.sort(( a, b )=> { return a - b })

	return res
}
