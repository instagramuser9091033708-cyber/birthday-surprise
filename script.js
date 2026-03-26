let birthDate = new Date("2008-05-10");

// loading
setTimeout(()=>nextPage(2),3000);

function nextPage(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

// start music
function start(){
  document.getElementById("music").play();
  nextPage(4);
}

// DOB
let today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

document.getElementById("birth").innerText = birthDate.toDateString();
document.getElementById("age").innerText = "Age: " + age;

// decorate
function decorate(){
  document.getElementById("bunting").style.display="block";
}

// candle
function lightCandle(){
  document.getElementById("flame").style.display="block";
}

// BALLOON MESSAGE LOGIC
let messages = ["You","are","a","cutie"];
let index = 0;

function showBalloons(){
  if(index < messages.length){
    document.getElementById("balloonText").innerText = messages[index];
    index++;
  }
}
