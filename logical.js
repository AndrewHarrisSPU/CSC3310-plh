// Logical
var	Prolog = {
	"name": "Prolog",
	"date": 1972,
	"dev": "Alain Colmerauer, Robert Kowalski, Philippe Roussel",
	"org": "Aix-Marseille University",
	"tags": STYLE.logical,

	"characteristics":
`Logical, term-based`,
	"contributions":
`Demonstrated the plausibility of a purely declarative style of programming`,
	"comments":
`In Prolog, a programmer may declare rules and facts in a readable, writable way. Queries can then be evaluated over those rules and facts by automated application of predicate logic's Horn clauses. It's an unusual approach, but formally justified, and Prolog is Turing complete. A more practical point can be made here, however. Decoupling the imperative effort of implementing automated querying from the declaritive effort of enumerating rules and facts can, depending on the nature of a problem, unburden programmers tasked with finding solutions.`
},

Datalog = {
	"name": "Datalog",
	"date": "1977",
	"dev": "Hervé Gallaire, Jack Minker",
	"tags": STYLE.logical,
	"www": "https://en.wikipedia.org/wiki/Datalog",

	"characteristics":
`Declarative`,
	"contributions":
`Established the notion of a declarative language for querying databases`,
	"comments":
`A subset of Prolog, Datalog is a little more flexibly written but not Turing complete. Deduction from extensional facts and intensional rules lines up with notions of predicate, first-order logic, making the language quite reasonable to reason about.`
}

Sql = {
	"name": "SQL",
	"date": 1974,
	"tags": STYLE.logical,
	"dev": "Donald D. Chamberlin, Raymond F. Boyce",
	"org": "IBM",
	"www": "https://www.quora.com/What-is-the-best-site-to-learn-SQL-for-a-complete-beginner",

	"characteristics":
`Domain-Specific delarative language for querying databases`,
	"contributions":
`The ANSI standard for relational-model querying`,
	"comments":
`Incorporating ideas from <a href=https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf>A Relational Model of Data for Large Shared Data Banks</a>, SQL decouples queries from various implemenation aspects of a database. This solves impedence issues for applications sharing a database with different perspectives on data (for example, incompatible object models) and allows a useful degree of database restructuring.`
}