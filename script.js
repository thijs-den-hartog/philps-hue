let knop = document.getElementById('knop')
let interv;
let secondenTimer;

knop.addEventListener("click", myFunction)

function myFunction() {
  var uurInput = parseInt(document.getElementById("uurInput", 10).value);
  var minutenInput = parseInt(document.getElementById("minutenInput", 10).value);
  var secondenInput = parseInt(document.getElementById("secondenInput", 10).value);
  var uurOutput = document.getElementById("uurOutput")
  var minutenOutput = document.getElementById("minutenOutput")
  var secondenOutput = document.getElementById("secondenOutput")

  uurOutput.innerHTML = uurInput;
  minutenOutput.innerHTML = minutenInput;
  secondenOutput.innerHTML = secondenInput;

  // var secondenTimer = seconden + minuten / 60  + uur / 3600;
  var uurSecondes = uurInput *60 *60;
  var minutenSecondes = minutenInput *60;
  var secondenTimer = uurSecondes + minutenSecondes + secondenInput;


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
}
