// OOP
var Simula = {
	"name": "Simula",
	"date": 1962,
	"dev": "Ole-Johan Dahl, Kristen Nygaard",
	"org": "Norwegian Computing Center",
	"tags": STYLE.oop,
	"www": "http://www.simula67.info",

	"characteristics":
`Structured, Object-Oriented`,
	"contributions":
`Classes/Subclasses`,
	"comments":
`At a glance, Simula ("SIMUlation LAnguage") is an ALGOL-like structured language. However, while Smalltalk is often cited as the first object-oriented language, many histories suggest that Simula introduces key ideas: classes, subclasses, and virtual methods. Smalltalk merely insisted that everything is an object, and that objects only communicate through message passing. This is not a standard many familiar object-oriented languages meet. (Pop quiz: does C++ meet this standard? does JavaScript?)`
},

Ada = {
	"name": "Ada",
	"date": 1980,
	"tags": STYLE.oop,
	"dev": "(n/a)",
	"org": "CII-Honeywell-Bull / U.S. DoD",
	"www": "https://www.adacore.com",

	"characteristics":
`Large and complicated; as such, not good for programs where reliability was necessary. This also made it difficult to build a compiler for. Ada is an imperative language.`,
	"contributions":
`Ada packages provided support for the use of data abstraction. It also introduced exception handling and concurrent tasks. Finally, Ada allowed for generic programs, which would handle data without specifying type until instantiation. Ada allows programmers to specify the range for scalar types (int, double, etc.) unlike C based programming languages.`,
	"comments":
`It’s often said that this program was mainly successful due to funding from the Department of Defense. It was required for any military program to be written in Ada from 1991 until 1997. People speculate that ending the “Ada Mandate” led to a drop in popularity of the language.`	
},

Eiffel = {
	"name": "Eiffel",
	"date": 1986,
	"tags": STYLE.oop,
	"dev": "Bertrand Meyer",
	"org": "Eiffel Software",
	"www": "https://www.eiffel.com",

	"characteristics":
`Object-Oriented`,
	"contributions":
`Many concepts that were first introduced in Eiffel are found in Java C# and other languages`,
	"comments":
`Eiffel is designed to be simple and very readable while still being a powerful language`
},

Go = {
	"name": "Go",
	"date": 2009,
	"dev": "Robert Griesemer, Rob Pike, Ken Thompson",
	"org": "Google",
	"www": "https://golang.org/",
	"tags": STYLE.oop,

	"characteristics":
`Multi-paradigm`,
	"contributions":
`Brought average compile times for a cabal of ex-Bell Labs Googlers (including Ken Thompson) below the time of a coffee break`,
	"comments":
`In the minds of some critics, Go eschews decades of programming language research. In the minds of enthusiasts, it ignores bad ideas from decades of programming language research. For example, it drops inheretance in favor of interfaces, which can seem like a step back or step forward (it probably does work out better with respect to the Liskov Substition Principle, or the Robustness Principle). It is perhaps an unusually well-executed language and ecosystem, more than a completely novel one.`
},

Rust = {
	"name": "Rust",
	"date": 2010,
	"dev": "Graydon Hoare",
	"org": "Mozilla",
	"www": "http://www.rust-lang.org/",
	"tags": STYLE.oop,

	"characteristics":
`Multi-paradigm`,
	"contributions":
`Borrow checker`,
	"comments":
`Unlike many other buzz-worthy recent languages, Rust does aspire to the performance of C or C++, while still being safer. This plays out in interesting ways. There is ostensibly no garbage collector, but optional reference counting is often used. A system of ownership and borrow checking tracks the (im)mutability of references, which makes some classes of bugs compile-time errors, but also makes some things difficult. Doubly linked lists, for example, are not easy because 'doubly linked' implies mean two mutation-capable references to list nodes.`
}