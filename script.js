const BRIDGE_URL = "192.168.178.172"  // IP adres van de bridge
const API_KEY = "l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB"  //sleutel om de bridge aan te sturen
const BASE_URL = `http://${BRIDGE_URL}/api/${API_KEY}/lights/` //beginstuk van de url

let knop = document.getElementById('knop')
let interv;
let secondenTimer;
let roodAan = '{"hue": 0, "bri": 255, "on": true}';

knop.addEventListener("click", myFunction)

function myFunction() {
  var uurInput = parseInt(document.getElementById("uurInput").value);
  var minutenInput = parseInt(document.getElementById("minutenInput").value);
  var secondenInput = parseInt(document.getElementById("secondenInput").value);
  var uurOutput = document.getElementById("uurOutput")

  uurOutput.innerHTML = uurInput + " : " + minutenInput + " : " + secondenInput;

  var uurSecondes = uurInput *60 *60;
  var minutenSecondes = minutenInput *60;
  secondenTimer = uurSecondes + minutenSecondes + secondenInput;

  // alert(secondenTimer);

  interv = setInterval(intFunc, 1000);
  // alert(secondenTimer)
}

function intFunc () {
  console.log("aan het tellen...")
  secondenTimer -= 1 ;
  if (secondenTimer <= 0){
    clearInterval(interv);
    console.log("oke klaar")
    // alert("cool")
    sendRequest(1, roodAan);
  }

  uurOutput.innerHTML = secondenNaarTijdstring(secondenTimer);
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
