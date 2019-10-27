// C & OOP
var	ObjectiveC = {
	"name": "Obj-C",
	"date": 1984,
	"dev": "Brad Cox, Tom Love",
	"org": "Productivity Products International",
	"tags": STYLE.coop,
	"www": "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",

	"characteristics":
`General-purpose, object-oriented`,
	"contributions":
`Was widely used by Apple products for their operating systems until Swift was introduced`,
	"comments":
`It is a superset of C, so it is easy to use C and C++ code with Objective-C`
},

Cpp = {
	"name": "C++",
	"date": 1985,
	"tags": STYLE.coop,
	"dev": "Bjarne Stroustrup",
	"org": "Bell Labs",
	"www": "http://www.cplusplus.com/",

	"characteristics":
`Designed to be a language with the class structure of Simulcra 67 with no performance drop compared to C, that could be used in all the same applications as C. Includes virtual methods, dynamic binding of method calls and method name and operator overloading, and reference types. It has both functions and methods, meaning it can be both procedural and object oriented. It supports multiple inheritance, and has significantly different exception handling from Ada.`,
	"contributions":
`Was the first object-oriented language that was suitable for large commercial projects.`,
	"comments":
`Early popularity was influenced by the availability of effective compilers and similarity to/backwards compatibility with C.`
},

Csharp = {
	"name": "C#",
	"date": 2000,
	"tags": STYLE.coop,
	"dev": "Anders Hejlsberg",
	"org": "Miscrosoft",
	"www": "https://docs.microsoft.com/en-us/dotnet/csharp/index",

	"characteristics":
`Multi-paradigm`,
	"contributions":
`Was meant to improve on C++ and Java. While not all steps taken were in the right direction, some features did largely improve on its predecessors.`,
	"comments":
`While C# was initially similar to Java, as they have been modified, they have moved in very different directions.`
},

Java = {
	"name": "Java",
	"date": 1995,
	"tags": STYLE.coop,
	"dev": "James Gosling",
	"org": "Sun Microsystems",
	"www": "https://www.java.com",

	"characteristics":
`Object-oriented`,
	"contributions":
`Provided a simpler and more reliable language than C++.`,
	"comments":
`Mostly became popular because of its simple design and usefulness in Web programming.`
},

Swift = {
	"name": "Swift",
	"date": 2014,
	"tags": STYLE.coop,
	"dev": "Chris Lattner",
	"org": "Apple",
	"www": "https://www.swift.org",

	"characteristics":
`Multi-paradigm`,
	"contributions":
`Used in most Apple products today`,
	"comments":
`It uses the Objective-C runtime library which allows C, Objective-C, C++, and Swift code to run within one program.`
}