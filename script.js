// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});
var i =0;
var bodytext = {};

var collection = document.getElementsByClassName("message");
var username = document.getElementsByClassName("name");

const broadcasterColor = document.getElementById("brC").innerText;
const subColor = document.getElementById("subC").innerText;
const textSpeed = document.getElementById("textSpeed").innerText;
const subIcon = document.getElementById("subIcon").innerText;

const timer = ms => new Promise(res => setTimeout(res, ms))

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
	if (obj) {
    bodytext = obj.detail;
  typewriter(i, bodytext.body);
  substar(i, bodytext);
  i++;
  }
  
});

function substar(divNum, user) {
  if (user.tags['subscriber']==0) {
    username[divNum].innerText += subIcon;
    username[divNum].style.color = subColor;
  }
  
  if (user.tags['badges'].includes("broadcaster")) {
  username[divNum].style.color = broadcasterColor;
}
  username[divNum].innerText += ":";
}

async function typewriter(divNum, typetext){
  for (let j=0; j<=typetext.length; j++) {
    collection[divNum].innerText = typetext.substring(0, j)+ "\u25ae";
    await timer(textSpeed);
  }
  collection[divNum].innerText = typetext.substring(0, typetext.length);
}

window.addEventListener("unhandledrejection", function(promiseRejectionEvent) { 
    // handle error here, for example log   
  console.log("i'm a cry baby");
});
