let knop = document.getElementById('knop')


knop.addEventListener("click", myFunction)

function myFunction() {
  var uur = document.getElementById("uur").value;
  var minuten = document.getElementById("minuten").value;
  var seconden = document.getElementById("seconden").value;
  var uur1 = document.getElementById("uur1")
  var minuten1 = document.getElementById("minuten1")
  var seconden1 = document.getElementById("seconden1")

  uur1.innerHTML = uur;
  minuten1.innerHTML = minuten;
  seconden1.innerHTML = seconden;

  var secondenTimer = seconden + minuten * 60  + uur * 3600;
  alert(secondenTimer)
  let secondenTimer = timerseconde
  alert(secondenTimer)
  while (true) {
    setTimeout(tijdmineen, 1000);

  }
  function myFunction() {
    let timerseconde -=
}
