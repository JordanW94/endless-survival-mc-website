const Config = {
/* START CONFIG */

'server-logo': 'assets/img/logo.png',

'server-ip': 'rexcraftia.com',

'server-status': {
	'background-color': '#fff659',
	'text-color': 'white',
	'icon': 'assets/logo.ico',
	'value': '{online} / {max} players online!',
	'copy-value': 'IP COPIED!'
},

'server-staff': [
	{"player-name":"Hoviis",
	"rank": "Owner"},
	{"player-name":"Pohnut",
	"rank": "Admin"}
],

'background': {
	'type': 'image', // TYPES: IMAGE OR COLOR
	'value': "assets/img/background.jpg",
	'opacity': {
		'color': 'black',
		'value': 0.8
	}
},


'buttons-style': {
	'background-color': '#fff659',
	'text-color': 'black'
},

'web-buttons': {
	'Store': {
		icon: 'assets/img/store.png',
		url: 'https://store.myweb.net'
	},
	'Forum': {
		icon: 'assets/img/forum.png',
		url: 'https://forum.myweb.net'
	},
	'Bans': {
		icon: 'assets/img/bans.png',
		url: 'https://bans.myweb.net'
	}
}




/* END CONFIG */
};





/* IGNORE */
export default Config;