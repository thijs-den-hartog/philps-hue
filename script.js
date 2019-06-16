let knop = document.getElementById('knop')
let interv;
let secondenTimer;

knop.addEventListener("click", myFunction)

function myFunction() {
  var uurInput = parseInt(document.getElementById("uur", 10).value);
  var minutenInput = parseInt(document.getElementById("minuten", 10).value);
  var secondenInput = parseInt(document.getElementById("seconden", 10).value);
  var uurOutput = document.getElementById("uur1")
  var minutenOutput = document.getElementById("minuten1")
  var secondenOutput = document.getElementById("seconden1")

  uurOutput.innerHTML = uurInput;
  minutenOutput.innerHTML = minutenInput;
  secondenOutput.innerHTML = secondenInput;


  var uurSecondes = uurInput *60 *60;
  var minutenSecondes = minutenInput *60;
  secondenTimer = uurSecondes + minutenSecondes + secondenInput;

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
}
