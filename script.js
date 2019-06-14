let knop = document.getElementById('knop')


knop.addEventListener("click", myFunction)
alert("hallo");
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

}

let timerseconde = 0
// secondenTimer = timerseconde;
timerseconde = prompt("schrijf je tijd in sekondes")
alert(timerseconde);



let interv = setInterval(intFunc, 1000);

function intFunc () {
  console.log("ik stop ermee")
  timerseconde -= 1 ;
  if (timerseconde <= 0){
    clearInterval(interv);
    console.log("ik stop er nu egt mee!!!")
    alert("cool")
  }
}
