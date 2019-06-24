let knop = document.getElementById('knop')
let interv;
let secondenTimer;

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

  alert(secondenTimer);

  interv = setInterval(intFunc, 1000);
  alert(secondenTimer)
}

function intFunc () {
  console.log("aan het tellen...")
  secondenTimer -= 1 ;
  if (secondenTimer <= 0){
    clearInterval(interv);
    console.log("oke klaar")
    alert("cool")
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
