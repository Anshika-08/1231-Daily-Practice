function earth(){
    var weight = document.getElementById("name").value;
    var earth = document.getElementById("name").value;
    var earth = weight * 1;
    document.getElementById("uc").innerHTML = "Your weight On Earth is: " + earth+" Kg";
    let user=document.querySelector('#uc');
    user.classList.toggle("hide");
}
function sun(){
  var weight = document.getElementById("name").value;
  var sun = document.getElementById("name").value;
  var sun = weight * 27.01;
  document.getElementById("uf").innerHTML = "Your weight On Sun is: " + sun+" Kg";
  let user=document.querySelector('#uf');
  user.classList.toggle("hide");
}
function moon(){
  var weight = document.getElementById("name").value;
  var moon = document.getElementById("name").value;
  var moon = weight * 0.1667;
  document.getElementById("ue").innerHTML = "Your weight On Moon is: " + moon+" Kg";
  let user=document.querySelector('#ue');
  user.classList.toggle("hide");
}

function jupiter(){
    var weight = document.getElementById("name").value;
    var jupiter = document.getElementById("name").value;
    var jupiter = weight * 2.34;
    document.getElementById("la").innerHTML = "Your weight On Jupiter is: " + jupiter+" Kg";
    let user=document.querySelector('#la');
    user.classList.toggle("hide");
}
function mars(){
    var weight = document.getElementById("name").value;
    var mars = document.getElementById("name").value;
    var mars = weight * 0.38;
    document.getElementById("ud").innerHTML = "Your weight On Mars  is: " + mars+" Kg";
    let user=document.querySelector('#ud');
   user.classList.toggle("hide");
}
function mercury(){
    var weight = document.getElementById("name").value;
    var mercury = document.getElementById("name").value;
    var mercury = weight * 0.37;
    document.getElementById("ua").innerHTML = "Your weight On Mercury is: " + mercury+" Kg";
  let user=document.querySelector('#ua');
   user.classList.toggle("hide");
}
function neptune(){
    var weight = document.getElementById("name").value;
    var neptune = document.getElementById("name").value;
    var neptune = weight * 1.19;
    document.getElementById("ld").innerHTML = "Your weight On Neptune is: " + neptune+" Kg";
  let user=document.querySelector('#ld');
   user.classList.toggle("hide");
}
function saturn(){
    var weight = document.getElementById("name").value;
    var saturn = document.getElementById("name").value;
    var saturn = weight * 1.06;
    document.getElementById("lb").innerHTML = "Your weight On Saturn is: " + saturn+" Kg";
  let user=document.querySelector('#lb');
   user.classList.toggle("hide");
}
function uranus(){
    var weight = document.getElementById("name").value;
    var uranus = document.getElementById("name").value;
    var uranus = weight * 0.92;
    document.getElementById("lc").innerHTML = "Your weight On Uranus is: " + uranus+" Kg";
  let user=document.querySelector('#lc');
  user.classList.toggle("hide");
}
function venus(){
    var weight = document.getElementById("name").value;
    var venus = document.getElementById("name").value;
    var venus = weight * 0.91;
    document.getElementById("ub").innerHTML = "Your weight On Venus is: " + venus+" Kg";
  let user=document.querySelector('#ub');
   user.classList.toggle("hide");
}