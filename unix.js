	// Unix-y
var	Sh = {
	"name": "sh",
	"date": 1977,
	"tags": STYLE.unixTools,
	"org": "Bell Labs",
	"www": "https://www.shellscript.sh/",

	"characteristics":
`Shell scripts are stored in files, with syntax very similar to command line code. The files can be run by calling their name. Not good for interactive use, but effective for scripting.`,
	"contributions":
`The first scripting language; influenced all following scripting languages.`,
	"comments":
`Mainly used for manipulating system programs.`
},

Csh = {
	"name": "csh",
	"date": 1978,
	"tags": STYLE.unixTools,
	"dev": "Bill Joy",
	"www": "https://www.mkssoftware.com/docs/man1/csh.1.asp",

	"characteristics":
`Scripting language operated by a shell, similar to sh. However, csh is more interactive. It is also closer to C in syntax and appearance, and thus more readable, especially since most programmers have experience in C and C++. Allows filename wildcarding, command substitution, and variables/control structures.`,
	"contributions":
`While not heavily used for scripting, it introduced several features, such as aliases and interactive filename completion, that have been adapted by other shells.`,
	"comments":
`While csh is better at interaction than other scripting languages, it isn’t that popular because it isn’t particularly good for scripting.`
},

Awk = {
	"name": "AWK",
	"date": 1977,
	"tags": STYLE.unixTools
},

Bash = {
	"name": "Bash",
	"date": 1989,
	"tags": STYLE.unixTools
},

Ksh = {
	"name": "ksh",
	"date": 1983,
	"tags": STYLE.unixTools
}