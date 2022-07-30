import {default as Config} from './Config.js';

console.log("TemplateServer");

const ServerIPValue = Config['server-ip'];

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
      document.getElementById("copyButton").innerHTML = Config['server-ip'] + "<div class='server-status-checker'><img src=''><span>0 / 0  Checking status...</span></div>";
  }