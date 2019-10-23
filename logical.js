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
`Demonstrated a declarative style of programming`,
	"comments":
`In Prolog, a programmer may declare rules and facts in a readable, writable way. Queries can then be evaluated over those rules and facts by automated application of predicate logic's Horn clauses. It's an unusual approach, but formally justified, and Prolog is Turing complete. A more practical point can be made here, however. Decoupling the imperative effort of implementing automated querying from the declaritive effort of enumerating rules and facts can, depending on the nature of a problem, unburden programmers tasked with finding solutions.`
},

Sql = {
	"name": "SQL",
	"date": 1974,
	"tags": STYLE.logical
}