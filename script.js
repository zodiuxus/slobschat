// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});
var i =0;
var bodytext = {};

var messageBox = document.getElementsByClassName("disappear");
var collection = document.getElementsByClassName("message");
var username = document.getElementsByClassName("name");
var messageOrig = document.getElementsByClassName("messageOrig");

const broadcasterColor = document.getElementById("brC").innerText;
const subColor = document.getElementById("subC").innerText;
const textSpeed = document.getElementById("textSpeed").innerText;
const subIcon = document.getElementById("subIcon").innerText;
const textFade = document.getElementById("textFade").innerText;

let animText = `fadeOut 1s ease-out {textFade}s 1 forwards normal`;
const msFade = textFade*1000+1000;

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
  if (user.tags['subscriber']==1) {
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
    collection[divNum].innerHTML = typetext.substring(0, j)+ "\u25ae";
    await timer(textSpeed);
  }
  collection[divNum].innerHTML = typetext.substring(0, typetext.length);
  messageBox[divNum].style.animation = animText;
	collection[divNum].style.display = "none";
  messageOrig[divNum].style.display = "inline-block";
  await timer(msFade);
  messageOrig[divNum].style.display = "none";
}

window.addEventListener("unhandledrejection", function(promiseRejectionEvent) { 
    // handle error here, for example log   
  console.log("i'm a cry baby");
});
