let knop = document.getElementById('knop')

lol

knop.addEventListener("click", myFunction)

function myFunction() {
  let uurInput = parseInt(document.getElementById("uurInput", 10).value);
  let minutenInput = parseInt(document.getElementById("minutenInput", 10).value);
  let secondenInput = parseInt(document.getElementById("secondenInput", 10).value);
  let uurOutput = document.getElementById("uurOutput")
  let minutenOutput = document.getElementById("minutenOutput")
  let secondenOutput = document.getElementById("secondenOutput")

  

  // var secondenTimer = seconden + minuten / 60  + uur / 3600;
  var uurSecondes = uurInput *60 *60;
  var minutenSecondes = minutenInput *60;
  var secondenTimer = uurSecondes + minutenSecondes + secondenInput;


  alert(secondenTimer);

  while (true) {
    uurOutput.innerHTML = uurInput;
    minutenOutput.innerHTML = minutenInput;
    secondenOutput.innerHTML = secondenInput;
  }
}
