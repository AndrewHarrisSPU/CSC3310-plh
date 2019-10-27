var Snobol = {
	"name": "SNOBOL",
	"date": 1962,
	"tags": STYLE.dynamic,
	"dev": "",
	"org": "IBM",
	"www": "http://www.snobol4.org",

	"characteristics":
`Designed specifically for string and text manipulation. Based around powerful operations related to string pattern matching. Dynamically typed, which makes it slower than other programming languages.`,
	"contributions":
`One of the first dynamically typed languages.`,
	"comments":
`Because of its high-powered pattern recognition, SNOBOL could be used to implement an interpreter for a language with just a few hundred lines based on the Backus-Naur form.`
},

Smalltalk = {
	"name": "Smalltalk",
	"date": 1972,
	"tags": STYLE.dynamic,
	"dev": "Alan Kay",
	"org": "Xerox",
	"www": "https://www.instantiations.com/products/vasmalltalk/",

	"characteristics":
`Smalltalk is composed entirely of objects. These objects send messages to other objects, triggering a response of some sort. Syntax is unusual, due to the use of messages rather than arithmetic logic expressions and control statements.`,
	"contributions":
`Smalltalk was the first language with full support for object oriented programming. This is a major impact, since most popular languages and design frameworks are based on object oriented principles. It was also the first language designed with the intention of working with graphical user interfaces built for non-programmers. The model-view-controller pattern was made for smalltalk.`,
	"comments":
`Was built with the intention of being used for programming personal computers, which did not exist at the time.`	
},

Python = {
	"name": "Python",
	"date":	1990,
	"tags": STYLE.dynamic,
	"dev": "Guido van Rossum",
	"org": "Stichting Mathematisch Centrum",
	"www": "https://www.python.org",

	"characteristics":
`object-oriented scripting`,
	"contributions":
`Python is used for system administration, CGI programming, and other relatively small computing tasks.`,
	"comments":
`Python has a unique syntax that isn’t based directly on any commonly used language.`
},

Perl = {
	"name": "Perl",
	"date": 1987,
	"tags": STYLE.dynamic,
	"dev": "Larry Wall",
	"org": "(n/a) but Wall is an SPU alumn!",
	"www": "https://www.perl.org",

	"characteristics":
`Imperative-like scripting`,
	"contributions":
`Originally used as a UNIX utility for processing text files, it is still used today as a UNIX system administration tool`,
	"comments":
`Perl is powerful but can be dangerous. One example of this is if a string is used in numeric context but can’t be converted to a number, there is no warning or error message, the program just uses 0.`
},

Javascript = {
	"name": "JS",
	"date": 1995,
	"tags": STYLE.dynamic,
	"dev": "Brendan Eich",
	"org": "Netscape",
	"www": "https://www.javascript.com",

	"characteristics":
`High level, multi-paradigm scripting language`,
	"contributions":
`Enables interactive web pages and is an important part of web applications. Most websites use it. You're using it right now.`,
	"comments":
`JavaScript is one of the most popular programming languages, but it was originally held in contempt by professional programmers because they thought it was targeted toward amateur programmers.`
},

Ruby = {
	"name": "Ruby",
	"date": 1995,
	"tags": STYLE.dynamic,
	"dev": "Yukihiro Matsumoto",
	"org": "(n/a)",
	"www": "https://www.ruby-lang.org",

	"characteristics":
`multi-paradigm`,
	"contributions":
`The goal of Ruby was to create a language that was more powerful than Perl and more object-oriented than Python.`,
	"comments":
`The creator of Ruby said that he wanted to create a language that was natural, not simple.`
},

Tcl = {
	"name": "Tcl",
	"date": 1988,
	"tags": STYLE.dynamic,
	"dev": "John Ousterhout",
	"org": "(n/a)",
	"www": "https://www.tcl.tk",

	"characteristics":
`General purpose`,
	"contributions":
`Commonly used embedded in C applications`,
	"comments":
`There are Tcl interpreters that are available for many operating systems, making Tcl able to run on a wide variety of systems.`
}