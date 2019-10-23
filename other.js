// other
var Apl = {
	"name": "APL",
	"date": 1966,
	"dev": "Kenneth E. Iverson",
	"org": "IBM",
	"www": "https://aplwiki.com/FrontPage",
	"tags": STYLE.special,

	"characteristics":
`Functional, Array-based`,
	"contributions":
`A graphics-oriented dialect was used for the film Tron`,
	"comments":
`APL is conceptually simple. All data are arrays. Unary operators apply to all right-side elements, while binary operators apply to the nearest left element and all post-reduction right-side elements. What part of "Primes←(2=+⌿0=(⍳N)∘.|⍳N)/⍳N" doesn't make sense?`
},

Erlang = {
	"name": "Erlang",
	"date": 1986,
	"dev": "Joe Armstrong, Robert Virding, Mike Williams",
	"org": "Ericsson",
	"www": "https://www.erlang.org",
	"tags": STYLE.special,

	"characteristics":
`Functional, concurrent`,
	"contributions":
`BEAM virtual machine`,
	"comments":
`Erlang embraces message passing and immutable data as a means of isolating components in complex, concurrent systems. Erlang processes that only interact by asynchronous communication have nice properties in distributed architectures.`
}