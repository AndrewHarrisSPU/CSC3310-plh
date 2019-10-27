	// ML
var Sml = {
	"name": "SML",
	"date": 1983,
	"tags": STYLE.ml,
	"dev": "(n/a)",
	"org": "University of Edinburgh",
	"www": "http://sml-family.org/",

	"characteristics":
`Characteristics of the language: Impure functional programming language that has some elements of imperative programming. Allows creation of algebraic data types. Modules allow separation of code and creation of abstract data types.`,
	"contributions":
`Isabelle, a major automated theorem prover, is written in SML.`,
	"comments":
`Has a formal specification, unlike most other programming languages.`
},

Ml = {
	"name": "ML",
	"date": 1973,
	"tags": STYLE.ml,
	"dev": "Milner",
	"org": "University of Edinburgh",
	"www": "https://www.whoishostingthis.com/resources/ml/",

	"characteristics":
`Functional but not purely functional, due to potential side effects from functions running. Has automatic memory collection. Supports imperative programming and has syntax similar to imperative programming languages.`,
	"contributions":
`One of the most influential functional programming languages. Used frequently for scientific study of programming languages.`,
	"comments":
`Due to its pattern matching and other features, ML is frequently used to process other programming languages, through compiler writing or other methods. It was originally written for this purpose.`
},

Scala = {
	"name": "Scala",
	"date": 2004,
	"tags": STYLE.ml,
	"dev": "Martin Odersky",
	"org": "École Polytechnique Fédérale de Lausanne",
	"www": "https://www.scala-lang.org",

	"characteristics":
`Inferential typing, JVM`,
	"contributions":
`Scala demonstrates that more things are possible on the JVM that Java.`,
	"comments":
`Coinciding with an uptick in interest in functional languages, Scala merges Java classes and limited type inference.`

},	Haskell = {
	"name": "Haskell",
	"date": 1990,
	"tags": STYLE.ml,
	"www": "https://www.haskell.org",
	"dev": "(n/a)",
	"org": "The Conference on Functional Programming Languages and Computer Architecture",

	"characteristics":
`Purely functional`,
	"contributions":
`Its use of lazy evaluation gave it capabilities that other programming languages might not have`,
	"comments":
`While it is considered an elegant language, it isn’t used very widely because it doesn’t meet many of the needs of mainstream programming.`
},

Caml = {
	"name": "Caml",
	"date": 1985,
	"tags": STYLE.ml,
	"dev": "Ascander Suarez",
	"org": "(n/a)",
	"www": "https://ocaml.org",

	"characteristics":
`Functional`,
	"contributions":
`Led to Objective Caml (OCaml) which added support for object-oriented programming`,
	"comments":
`The first implementation was Caml, then Caml Light, Caml Special Light and finally OCaml.`
}