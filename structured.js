var Algol = {
	"name": "Algol",
	"date": 1958,
	"dev": "(by committee)",
	"org": "ETH Zurich",
	"tags": STYLE.structured,
	
	"characteristics":
`Imperative, Structured`,
	"contributions":
`Block structure, lexical scope, Backus-Nauer form`,
	"comments":
`Algol succeeded in better relating imperative programming to programming language theory. Block structure allows grouping multiple statements together in a scope. Scopes, in turn, allow for variables that are visible to only some parts of a program. Variables that are only visible inside of a function definition or a control statement, for example, have limited scope.`
},

Bcpl = {
	"name": "BCPL",
	"date": 1967,
	"dev": "Martin Richards",
	"org": "University of Cambridge",
	"tags": STYLE.structured,

	"characteristics":
`Structured`,
	"contributions":
`Curly braces, "word" data type, object code, "hello world" programs`,
	"comments":
`The goal of BCPL was not an elaborate language, but a simple one that could easily be implemented. Use of object code (and, relatedly, the abstract notion of an architecturally defined word size) meant that only part of a compiler needed to be reimplmented on new architectures. This kind of portability was innovative and contrasts with e.g. PL/1.`
},

B = {
	"name": "B",
	"date": 1969,
	"dev": "Ken Thompson, Dennis Ritchie",
	"org": "Bell Labs",
	"www": "https://www.bell-labs.com/usr/dmr/www/kbman.html",
	"tags": STYLE.structured,

	"characteristics":
`Imperative, Structured`,
	"contributions":
`Immediately precedes C`,
	"comments":
`Borrowed, tweaked, and reduced from BCPL, B is the immediate precursor to C. It's perhaps most notable for showcasing the estimable Ken Thompson's approach to language design, style, and aesthetics. (Ken Thompson goes on to invent Unix, the operating system, and Belle, a groundbreaking chess computer. <a href=http://archive.computerhistory.org/resources/text/Oral_History/Thompson_Ken/thompson.oral_history_transcript.2005.102657921.pdf>Page 15 of this link</a> tells the story of the time Ken Thompson went to Moscow to show off Belle. Hilarity ensues.)`
},

C = {
	"name": "C",
	"date": 1972,
	"dev": "Dennis Ritchie",
	"org": "Bell Labs",
	"tags": STYLE.structured,

	"characteristics":
`Structured`,
	"contributions":
`C is a (maybe _the_) big kahuna`,
	"comments":
`C started out as a successor to B, improved in numerous ways. Notably (but not exclusively), C has primitive types, structs, and pointers. The enormous success of C perhaps follows from two things. First, C was a vital to Unix. Second, if a language is something greater than the sum of its parts, C's parts came together in a way that the sum turns out to be productive, satisfying, and long-lasting.`
},

Pascal = {
	"name": "Pascal",
	"date": 1970,
	"dev": "Niklaus Wirth",
	"org": "ETH Zurich",	
	"tags": STYLE.structured,

	"characteristics":
`Structured`,
	"contributions":
`Simple, efficient implementation of an ALGOL-like language`,
	"comments":
`Wirth began with a set of refinements to ALGOL in mind (e.g. recursive data types, dynamically allocated variables), and a desire to craft a language worth teaching to university-level students. The resul, Pascal, was a success, both in academia and industry. Dialects and extensions of Pascal remain relevant, although the language may have peaked commercially with Turbo Pascal and Delphi.`
},

Pl1 = {
	"name": "PL/1",
	"date": 1964,
	"dev": "(by committee)",
	"org": "IBM",
	"tags": STYLE.structured,

	"characteristics":
`Structured`,
	"contributions":
`Broke some ground as a mainframe computing langauge`,
	"comments":
`PL/1 was not a failure, but it had limitations. Due to the complexity of its specification, it was difficult to implement. While initially designed to be machine independent, over time it became mostly associated with IBM mainframes. Other vendors elected to stay with older languages or move to newer languages.`	
}