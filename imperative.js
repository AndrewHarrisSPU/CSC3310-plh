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

Modula = {
	"name": "Modula",
	"date": 1975,
	"tags": STYLE.imperative

}
