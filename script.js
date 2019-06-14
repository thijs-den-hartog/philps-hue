let knop = document.getElementById('knop')

lol

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

  while (true) {

  }
}
