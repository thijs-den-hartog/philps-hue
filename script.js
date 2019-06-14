let knop = document.getElementById('knop')


knop.addEventListener("click", myFunction)

function myFunction() {
  var uurInput = document.getElementById("uurInput").value;
  var minutenInput = document.getElementById("minutenInput").value;
  var secondenInput = document.getElementById("secondenInput").value;
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
