const BRIDGE_URL = "192.168.178.172"  // IP adres van de bridge
const API_KEY = "l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB"  //sleutel om de bridge aan te sturen
const BASE_URL = `http://${BRIDGE_URL}/api/${API_KEY}/lights/` //beginstuk van de url

let knop = document.getElementById('knop');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let intervID;
let secondenTimer;
let groenAan = '{"hue": 25000, "bri": 150, "on": true}';
let roodAan = '{"hue": 0, "bri": 150, "on": true}';
let uit = '{"on": false}';
let knipperinterval;
let aan = false;
let knipperTimerTijd = 1000;

knop.addEventListener("click", myFunction);
play.addEventListener("click", () => intervID = setInterval(intFunc, knipperTimerTijd));
pause.addEventListener("click", function () {console.log("pauze"); clearInterval(intervID);});

sendRequest(5, uit)

function myFunction() {
  var uurInput = parseInt(document.getElementById("uurInput").value);
  var minutenInput = parseInt(document.getElementById("minutenInput").value);
  var secondenInput = parseInt(document.getElementById("secondenInput").value);
  var uurOutput = document.getElementById("uurOutput")

  uurOutput.innerHTML = uurInput + " : " + minutenInput + " : " + secondenInput;
  sendRequest(5, groenAan);
  var uurSecondes = uurInput *60 *60;
  var minutenSecondes = minutenInput *60;
  secondenTimer = uurSecondes + minutenSecondes + secondenInput;

  // alert(secondenTimer);

  intervID = setInterval(intFunc, knipperTimerTijd);
  // alert(secondenTimer)
}

function intFunc () {
  console.log("aan het tellen...")
  secondenTimer -= 1 ;
  if (secondenTimer <= 0){
    clearInterval(intervID);
    console.log("oke klaar")
    // als klaar doe dit
  if (secondenTimer <= 0){
      knipperinterval = setInterval(knipperen, 1000)

    }
  else if (secondenTimer > 0){
    sendRequest(5, groenAan);
  }
  }

  uurOutput.innerHTML = secondenNaarTijdstring(secondenTimer);
}

function knipperen (){
  if (!aan){
    sendRequest(5, roodAan)
    aan = true;
  } else {
    sendRequest(5, uit)
    aan = false;
  }
}

function secondenNaarTijdstring(secondenTimer) {
    let uur = Math.floor(secondenTimer / 60 / 60);
    secondenTimer = secondenTimer - 3600 * uur;
    let minuten = Math.floor(secondenTimer / 60);
    secondenTimer = secondenTimer - 60 * minuten;
    let seconden = Math.floor(secondenTimer)

    return uur + " : " + minuten + " : " + seconden;
}

function sendRequest(lampNumber, body){
	let http = new XMLHttpRequest();
       let url = BASE_URL + lampNumber + "/state";
	http.open("PUT", url);  //We gebruiken de URL om een PUT request naartoe te sturen
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200){
			console.log(http.responseText);
		}
	}
	http.send(body);  //Stuur de body van je request naar de bridge
}
