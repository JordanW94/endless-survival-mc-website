const create = (s) => document.createElement(s),
	  createText = (s) => document.createTextNode(s),
	  select = (s) => document.querySelector(s),
	  all = (s) => document.querySelectorAll(s);

import {default as Config} from './Config.js';

console.log("js called")

// SET STATUS BUTTON
const StatusButton = select('.server-status-players');
const StatusPlayersText = select('.server-status-players span');
const StatusConfig = Config['server-status'];


// CHECK SERVER STATUS 
ServerStatus(Config['server-ip']).getData(server => {

	var StatusButtonText = select('.server-status-checker span');
	StatusButtonText.style.color = (StatusConfig['text-color'] == undefined) ? 'white' : StatusConfig['text-color'];

	var IsOnline = server.online;
	
	const PlayerValue = Config['server-ip'];

	const ButtonValue = StatusConfig['value'],
		  getStatus = (s) => s.replace(/{online}/g, IsOnline ? server.players.online : 0).replace(/{max}/g, IsOnline ? server.players.max : 0)


	// StatusPlayersText.innerHTML = PlayerValue;
	
    StatusButtonText.innerHTML = getStatus(ButtonValue);

});

