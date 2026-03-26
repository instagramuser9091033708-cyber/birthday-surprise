let birthDate = new Date("2008-05-10");

// loading
setTimeout(()=>nextPage(2),3000);

function nextPage(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

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

// Balloon logic (MAIN FIX)
let words = ["You","are","a","cutie"];
let i = 0;

function createBalloons(){
  let box = document.getElementById("balloonBox");
  box.innerHTML = "";

  for(let j=0;j<4;j++){
    let b = document.createElement("div");
    b.className = "balloon";
    b.style.background = ["red","blue","green","purple"][j];

    b.onclick = function(){
      if(i < words.length){
        document.getElementById("message").innerText += " " + words[i];
        i++;
      }
      b.remove();
    };

    box.appendChild(b);
  }
}
