const create = (s) => document.createElement(s),
	  createText = (s) => document.createTextNode(s),
	  select = (s) => document.querySelector(s),
	  all = (s) => document.querySelectorAll(s);

import {default as Config} from './Config.js';

console.log("TemplateServer");

const ServerIPValue = Config['server-ip'];

// SET STATUS BUTTON
const StatusButton = select('.server-status-players');
const StatusConfig = Config['server-status'];


function copyText(text){
    function selectElementText(element) {
      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    }
    var element = document.createElement('DIV');
    element.textContent = text;
    document.body.appendChild(element);
    selectElementText(element);
    document.execCommand('copy');
    element.remove();
  }
  
  var btn = document.getElementById('copyButton');
  btn.addEventListener('click', function(){
    copyText(ServerIPValue.toString());
    btn.innerHTML = "Copied!";
  })
  
  
  document.getElementById("copyButton").onmouseover = function() {mouseOver()};
  document.getElementById("copyButton").onmouseout = function() {mouseOut()};
  
  function mouseOver() {
      document.getElementById("copyButton").innerHTML = "Copy IP";
  }
  
  function mouseOut() {
      document.getElementById("copyButton").innerHTML = Config['server-ip'] + "<div class='server-status-checker'><img src=''><span></span></div>";

      console.log("js called")

      // CHECK SERVER STATUS 
      ServerStatus(Config['server-ip']).getData(server => {

        var StatusButtonText = select('.server-status-checker span');
        var IsOnline = server.online;
        
        StatusButtonText.style.color = (StatusConfig['text-color'] == undefined) ? 'white' : StatusConfig['text-color'];

        const ButtonValue = StatusConfig['value'],
            getStatus = (s) => s.replace(/{online}/g, IsOnline ? server.players.online : 0).replace(/{max}/g, IsOnline ? server.players.max : 0)
        
          StatusButtonText.innerHTML = getStatus(ButtonValue);

      });
  }