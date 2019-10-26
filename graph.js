var graphAll = {
	"nodes": [

	// Lisps etc.
	Lisp, Scheme, Racket, R,

	// ML family
	Ml, Sml, Caml, Haskell, Scala,

	// Imperative
	Fortran, Algol, Pascal, Modula,

	// Logical
	Prolog, Sql, Datalog,

	// Business
	Flowmatic, Cobol, Ipl, Rpg,

	// C and precursors
	B, Bcpl, C,

	// Decendents of C
	Cpp, Csharp, ObjectiveC, Java, Swift,

	// alt object-oriented
	Simula, Eiffel, Ada, Smalltalk, 

	// Dynamic
	Perl, Python, Ruby, Javascript,

	// unix tools
	Awk, Sh, Csh, Ksh, Bash,

	// etc
	Erlang, Apl, Logo, Postscript, Tcl, Go, Rust, Pl1, Plm, Snobol, Icon, Forth, Basic, Visualbasic, Tex, Elixir,

	],
	"links": [
		// imperatives
		{ "source": Flowmatic, "target": Cobol },		
		{ "source": Fortran, "target": Algol },
		{ "source": Algol, "target": C },
		{ "source": Algol, "target": Pascal },
		{ "source": Pascal, "target": Modula },
		{ "source": Modula, "target": Python },
		{ "source": Pascal, "target": Ada },
		{ "source": Algol, "target": Basic },
		{ "source": Fortran, "target": Basic },
		{ "source": Pl1, "target": Plm },

		// ML
		{ "source": Pascal, "target": Ml },
		{ "source": Lisp, "target": Ml },
		{ "source": Ml, "target": Sml },
		{ "source": Sml, "target": Caml },
		{ "source": Sml, "target": Haskell },
		{ "source": Sml, "target": Scala },
		{ "source": Ml, "target": Rust },
		{ "source": Java, "target": Scala },

		// Oops
		{ "source": Algol, "target": Simula },
		{ "source": Simula, "target": Smalltalk },
		{ "source": Smalltalk, "target": Ruby },
		{ "source": Simula, "target": ObjectiveC },
		{ "source": ObjectiveC, "target": Swift },		
		{ "source": Simula, "target": Cpp },
		{ "source": Cpp, "target": Csharp },

		// Lisps
		{ "source": Lisp, "target": Scheme },
		{ "source": Lisp, "target": Commonlisp },
		{ "source": Commonlisp, "target": R },		
		{ "source": Scheme, "target": Racket },
		{ "source": Lisp, "target": Julia },
		{ "source": Lisp, "target": Forth },
		{ "source": Apl, "target": Forth },
		{ "source": Lisp, "target": Postscript },

		// Towards C
		{ "source": Bcpl, "target": B },
		{ "source": B, "target": C },
		{ "source": Ada, "target": Eiffel },
		{ "source": Simula, "target": Eiffel },

		// Unix tools
		{ "source": C, "target": Awk },
		{ "source": C, "target": Sh },
		{ "source": Sh, "target": Csh },
		{ "source": Sh, "target": Ksh },
		{ "source": Sh, "target": Bash },
		{ "source": Awk, "target": Perl },
		{ "source": Awk, "target": Tcl },
		{ "source": Pascal, "target": Tex },
		{ "source": Tex, "target": Postscript },

		// Beyond C
		{ "source": Simula, "target": Cpp },
		{ "source": C, "target": Cpp },
		{ "source": Cpp, "target": Csharp },
		{ "source": C, "target": ObjectiveC },
		{ "source": Cpp, "target": Java },
		{ "source": Cpp, "target": Rust },
		{ "source": Pascal, "target": Go },
		{ "source": Cpp, "target": Go },

		// Dynamic
		{ "source": Snobol, "target": Icon },
		{ "source": Algol, "target": Icon },
		{ "source": Scheme, "target": Javascript },
		{ "source": Java, "target": Javascript },
		{ "source": Perl, "target": Ruby },
		{ "source": Python, "target": Ruby },

		// Logical
		{ "source": Prolog, "target": Sql },
		{ "source": Cobol, "target": Sql },
		{ "source": Prolog, "target": Datalog },

		// Concurrent
		{ "source": Lisp, "target": Erlang },
		{ "source": Prolog, "target": Erlang },
		{ "source": Smalltalk, "target": Erlang },		
		{ "source": Erlang, "target": Elixir },
		{ "source": Ruby, "target": Elixir },
	]
}

function filterNode( graph, node ){
	var res = {
		nodes: [],
		links: [],
		years: {
			min: 2019,
			max: 1935
		},
		lanes: [],
	}

	res.nodes.push( node )

	// ancestry
	for( link of graph.links ){
		if( link.target === node ){
			res.nodes.push( link.source )
			res.links.push( link )
		}
	}

	// progeny
	for( link of graph.links ){
		if( link.source === node ){
			res.nodes.push( link.target )
			res.links.push( link )
		}
	}

	// YEARS
	for( node of res.nodes ){
		res.years.min = Math.min( res.years.min, node.date )
		res.years.max = Math.max( res.years.max, node.date )
	}

	// LANES
	for( node of res.nodes ){
		if( !res.lanes.includes( node.tags.lane )){
			res.lanes.push( node.tags.lane )
		}
	}

	// sort lanes ...
	res.lanes.sort(( a, b )=> { return a - b })

	return res
}

function filterLane( graph, lanes ){
	var res = {
		nodes: [],
		links: [],
		years: {
			// wrong values hard-coded.
			// ugly but quick.
			min: 2019,
			max: 1935
		},
		lanes: [],
	}

	// NODES
	for( node of graph.nodes ){
		for( lane of lanes ){
			if( !( 'tags' in node )){
				return res
			}
			if( lane == node.tags.lane ){
				res.nodes.push( node )
			}
		}
	}

	// LINKS
	for( link of graph.links ){
		let pushMe = false

		// source, target in same lane
		if( res.nodes.includes( link.source )
		&&	res.nodes.includes( link.target )){
			pushMe = true
		}

		// source, target in different lane?
		// check that we're not recurring more than 1 lane out
		if( res.nodes.includes( link.source )){
			if( !res.nodes.includes( link.target )
			&&	lanes.includes( link.source.tags.lane )){
				res.nodes.push( link.target )
				pushMe = true
			}
		}

		if(	res.nodes.includes( link.target )){
			if( !res.nodes.includes( link.source )
			&&	lanes.includes( link.target.tags.lane )){
				res.nodes.push( link.source )
				pushMe = true
			}
		}

		// push link, finally
		if( pushMe ){
			res.links.push( link )
		}
	}

	// YEARS
	for( node of res.nodes ){
		res.years.min = Math.min( res.years.min, node.date )
		res.years.max = Math.max( res.years.max, node.date )
	}

	// LANES
	for( node of res.nodes ){
		if( !res.lanes.includes( node.tags.lane )){
			res.lanes.push( node.tags.lane )
		}
	}

	// sort lanes ...
	res.lanes.sort(( a, b )=> { return a - b })

	return res
}
