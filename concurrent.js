var Erlang = {
	"name": "Erlang",
	"date": 1986,
	"dev": "Joe Armstrong, Robert Virding, Mike Williams",
	"org": "Ericsson",
	"www": "https://www.erlang.org",
	"tags": STYLE.concurrent,

	"characteristics":
`Functional, concurrent`,
	"contributions":
`BEAM virtual machine`,
	"comments":
`Erlang embraces message passing and immutable data as a means of isolating components in complex, concurrent systems. Erlang processes that only interact by asynchronous communication have nice properties in distributed architectures.`
},

Elixir = {
	"name": "Elixir",
	"date": 2011,
	"dev": "José Valim",
	"org": "Plataformatec",
	"www": "https://elixir-lang.org",
	"tags": STYLE.concurrent,

	"characteristics":
`Concurrent, dynamic`,
	"contributions":
`Phoenix, a web server based on Erlang's Cowboy (it's hard to find names for things these days)`,
	"comments":
`Elixir is not a huge language but is a more scripting-oriented approach to employing the Erlang VM. Users seem happy with it.`
}