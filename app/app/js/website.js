const create = (s) => document.createElement(s),
	  createText = (s) => document.createTextNode(s),
	  select = (s) => document.querySelector(s),
	  all = (s) => document.querySelectorAll(s);

import {default as Config} from './Config.js';


// SET STATUS BUTTON
const StatusButton = select('.server-status-players');
//const StatusButtonicon = select('.server-status-checker img');
const StatusButtonText = select('.server-status-checker span');
const StatusPlayersText = select('.server-status-players span');
const StatusConfig = Config['server-status'];


//StatusButtonicon.src = StatusConfig['icon'];



//StatusButton.style.background = (StatusConfig['background-color'] == undefined) ? '#fff659' : StatusConfig['background-color'];
StatusButtonText.style.color = (StatusConfig['text-color'] == undefined) ? 'black' : StatusConfig['text-color'];

// CHECK SERVER STATUS 
ServerStatus(Config['server-ip']).getData(server => {

	var IsOnline = server.online;
	
	const PlayerValue = Config['server-ip'];

	const ButtonValue = StatusConfig['value'],
		  getStatus = (s) => s.replace(/{online}/g, IsOnline ? server.players.online : 0).replace(/{max}/g, IsOnline ? server.players.max : 0)


	// StatusPlayersText.innerHTML = PlayerValue;
	
    StatusButtonText.innerHTML = getStatus(ButtonValue);

});

// ADD CLIPBOARD

StatusButton.addEventListener('click', function() {
	var L = StatusPlayersText.innerHTML;
	var Text = create('input');
	Text.value = Config['server-ip'];


	select('body').appendChild(Text);

	Text.select();
	document.execCommand('copy');

	StatusPlayersText.innerHTML = StatusConfig['copy-value'];

	Text.remove();

	setTimeout(() => StatusPlayersText.innerHTML = L, 3 * 1000);


});
