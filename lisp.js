	// Lisps
var	Lisp = {
	"name": "Lisp",
	"date": 1968,
	"dev": "John McCarthy",
	"org": "MIT",
	"www": "",
	"tags": STYLE.functional,

	"characteristics":
`Functional, s-expressions, uniform syntax`,
	"contributions":
`Conditionals, first-class functions, recursion, garbage collection, reflection.`,
	"comments":
`Lisp is syntactically extensible in robust ways. Lisp macros can instruct parsing, a fairly unique quality resulting from s-expressions. Experiments in Lisps have turned into practice in many other languages. "Any sufficiently complicated program contains an ad-hoc, informally-specified, bug-ridden, slow implementation of half of Lisp." - paraphrasing Greenspun's tenth rule`

},	Scheme = {
	"name": "Scheme",
	"date": 1975,
	"dev": "Guy L. Steele, Gerald Jay Sussman",
	"org": "MIT",
	"www": "",
	"tags": STYLE.functional,

	"characteristics":
`Functional, block structure, lexical scoping`,
	"contributions":
`Minimalist, focused Lisp`,
	"comments":
`A refinement of Lisp, Scheme has remained small in places where Lisp has grown. This has brought favor in academic settings, particularly alongside Structure and Interpretation of Computer Programs (aka SICP, aka The Wizard Book)`
	
},	

Commonlisp = {
	"name": "Common Lisp",
	"date": 1984,
	"dev": "(by committee)",
	"org": "ANSI",
	"www": "",
	"tags": STYLE.functional,

	"characteristics":
`Functional, object-oriented (multiple dispatch), dynamic`,
	"contributions":
`Standardization of Lisps`,
	"comments":
`Common Lisp was defined to standardize features across rapidly diverging dialects of Lisps. For example, with the highly dynamic CLOS (Common Lisp Object System).`
},

Racket = {
	"name": "Racket",
	"date": 1995,
	"dev": "(n/a)",
	"org": "PLT Inc.",
	"www": "https://racket-lang.org",
	"tags": STYLE.functional,

	"characteristics":
`Functional`,
	"contributions":
`A 'batteries-included' fork of Scheme.`,
	"comments":
`Racket claims to be a language-oriented programming language. In interesting ways, it succeeds. Starting from a Scheme-like baseline, it has expanded standard libraries, and the default installation includes Racket-based implementations of Scheme, Algol-60, Datalog, and more.`
},

R = {
	"name": "R",
	"date": 1993,
	"dev": "Ross Ihaka, Robert Gentleman",
	"org": "University of Aukland",
	"www": "https://www.r-project.org",
	"tags": STYLE.functional,

	"characteristics":
`Functional`,
	"contributions":
`Statistics computing, visualization, pubishing`,
	"comments":
`Aspects of R's syntax and feel match Lisp quite closely. Many compromises are made to provide something more performant in an interpreted environment. Has strong (but not exlusive) support in certain scientific domains, particularly data visualization.`
}