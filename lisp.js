	// Lisps
var	Lisp = {
	"name": "Lisp",
	"date": 1958,
	"dev": "John McCarthy",
	"org": "MIT",
	"www": "http://www-formal.stanford.edu/jmc/history/lisp/lisp.html",
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
	"www": "https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-4.html#%_toc_start",
	"tags": STYLE.functional,

	"characteristics":
`Functional, block structure, lexical scoping`,
	"contributions":
`Minimalist, focused Lisp`,
	"comments":
`A refinement of Lisp, Scheme has remained small in places where Lisp has grown. This has brought favor in academic settings, particularly alongside Structure and Interpretation of Computer Programs (aka SICP, aka The Wizard Book)`
	
},	

Commonlisp = {
	"name": "CLisp",
	"date": 1984,
	"dev": "(by committee)",
	"org": "ANSI",
	"www": "https://common-lisp.net",
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
},

Logo = {
	"name": "Logo",
	"date": 1967,
	"tags": STYLE.functional,
	"dev": "Wally Feurzeig, Seymour Papert, Cynthia Solomon",
	"org": "Bolt, Baranek and Newman",
	"www": "https://el.media.mit.edu/logo-foundation/what_is_logo/logo_programming.html",

	"characteristics":
`Educational programming language. Commands center around moving and altering a graphical cursor (typically a turtle). Dynamically typed, imperative`,
	"contributions":
`Many variations of logo have been built, mainly for educational purposes. Also, logo influenced the development of Smalltalk.`,
	"comments":
`Logo commands are typically used to direct the movement of a robot that’s connected to the program.`
},

Julia = {
	"name": "Julia",
	"date": 2012,
	"tags": STYLE.functional,
	"dev": "Jeff Bezanson, Alan Edelman, Stefan Karpinski, Viral B. Shah",
	"org": "Julia Computing",
	"www": "https://julialang.org/",

	"characteristics":
`Functional etc.`,
	"contributions":
`Polymorphism via multiple dispatch`,
	"comments":
`Julia aims for performant scientific computing from a relatively high-level language. It competes with MATLAB, Python, and R in this sense, but is a new and notable effort that claims to address performance more directly than others, who may be bolting a lot of relevant ideas on top of to existing languages.`
}