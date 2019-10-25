// Imperative
var Ipl = {
	"name": "IPL",
	"date": 1956,
	"dev": "Allen Newell, Cliff Shaw, Herbert A. Simon",
	"org": "RAND corporation, Carnegie Institute of Technology",
	"tags": STYLE.imperative,

	"characteristics":
`Assembly, Lists`,
	"contributions":
`Abstract machine architecture`,
	"comments":
`IPL introduces some foundational abstractions within the idiom of an assembly language. For examples, memory that references other memory, or stack-like execution with a program counter, are accomplished with special purpose registers. How these registers behave is part of the language specification, not purely a result of hardware capabilities.`

},	

Fortran = {
	"name": "Fortran",
	"date": 1957,
	"dev": "John Backus",
	"org": "IBM",
	"tags": STYLE.imperative,

	"characteristics":
`Imperative`,
	"contributions":
	`Compilation, early scientific computing`,
	"comments":
`Ground-breaking as one of the very first high-level languages. Long-lived, it remains a viable way to perform scientific computations. BLAS and the related LAPACK are Fortran libraries for linear algebra. Efficient and trusted, they are still in use today, for example linked into Python or MATLAB.`
},

Flowmatic = {
	"name": "FLOW-MATIC",
	"date": 1957,
	"dev": "Grace Hopper",
	"org": "Remington Rand",
	"tags": STYLE.imperative,

	"characteristics":
`imperative, English-like statements`,
	"contributions":
`FLOW-MATIC ideas like program divisions were expanded in COBOL`,
	"comments":
`'Fluent' APIs are advocated by some architecture gurus because they read vaguely like prose. FLOW-MATIC did it first. The utility of prose-like syntax is debatable.`

},

Cobol = {
	"name": "COBOL",
	"date": 1960,
	"dev": "(by committee)",
	"org": "CODASYL",
	"tags": STYLE.imperative,

	"characteristics":
`Imperative, English-like statements, business-oriented`,
	"contributions":
`Not greatly appreciated as a programming language, COBOL nonetheless remains essential to business today.`,
	"comments":
`80% of the world's financial transactions still run through COBOL at some point. "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense." - Djikstra`
},

Icon = {
	"name": "Icon",
	"date": 1977,
	"tags": STYLE.imperative,
	"dev": "Ralph Griswold",
	"www": "https://www2.cs.arizona.edu/icon/",

	"characteristics":
`High-level language mainly focused on string management and textual pattern analysis. Not object-oriented.`,
	"contributions":
`Unicon, an object-oriented extension of Icon, is used today.`,
	"comments":
`Control structures based on success or failure of an expression, rather than boolean logic.`
},

Forth = {
	"name": "Forth",
	"date": 1970,
	"tags": STYLE.imperative,
	"dev": "Charles Moore",
	"www": "https://www.forth.com/forth/",

	"characteristics":
`Heavily stack-based, flexible imperative programming language, with an efficient use of memory.`,
	"contributions":
`Still used in embedded systems.`,
	"comments":
`Forth does not have local variables; instead, it stores intermediate values on a second stack.`
},

Basic = {
	"name": "BASIC",
	"date": 1964,
	"tags": STYLE.special,
	"dev": "John G. Kemeny, Thomas E. Kurtz",
	"org": "Dartmouth College",

	"characteristics":
`Very popular for use on microcomputers in the 1970s: smaller dialects could be used on computers with very low memory. Heavily based on Fortran. Very simple and easy to learn. Less easy to read, early versions were poorly suited to large-scale pronouns.`,
	"contributions":
`Could be learned easily by fans of computing, even those without a background in science. One of the first languages to prioritize user time over computer time. It was the first widely-used language used through terminals connected to a remote computer.`,
	"comments":
`Many early video games were designed in BASIC`
},

Rpg = {
	"name": "RPG",
	"date": 1959,
	"tags": STYLE.imperative,
	"org": "IBM",
	"www": "https://www.ibm.com/support/knowledgecenter/en/ssw_ibm_i_72/rzasc/langovvw.htm",

	"characteristics":
` Originally would inherently cycle through a list of files, and through the records in the files, rather than follow standard looping procedure; now RPG programmers typically ignore that feature. Each program is segmented into file specifications and data specifications.`,
	"contributions":
`One of the first high-level programming languages, helped people transition from punched card to computers.`,
	"comments":
`Was designed to feel similar to punched card processing, but as the language has evolved it has become less similar to that.`
}