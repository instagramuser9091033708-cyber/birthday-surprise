let currentPage = 1;

/* LOADING */
setTimeout(() => nextPage(), 3000);

/* NEXT PAGE */
function nextPage(){
  document.getElementById("page"+currentPage).classList.remove("active");
  currentPage++;
  document.getElementById("page"+currentPage).classList.add("active");
}

/* DATE + AGE */
let birthDate = new Date("2008-05-10"); // CHANGE
let today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

document.getElementById("birthText").innerText = birthDate.toDateString();
document.getElementById("ageText").innerText = "Age: " + age;

/* MUSIC */
function startMusic(){
  document.getElementById("bgMusic").play();
}

/* DECORATE */
function decorate(){
  document.getElementById("flags").style.display = "block";
}

/* LIGHT CANDLE */
function lightCandle(){
  document.getElementById("flame").style.display = "block";

  for(let i=0;i<40;i++){
    let c = document.createElement("div");
    c.className="confetti";
    c.style.left = Math.random()*100+"%";
    c.style.background = ["red","yellow","blue","green"][Math.floor(Math.random()*4)];
    document.body.appendChild(c);
  }
}

/* BALLOONS */
function showBalloons(){
  let words = ["You","are","a","cutie"];
  let container = document.getElementById("balloons");
  container.innerHTML = "";

  words.forEach(word=>{
    let b = document.createElement("div");
    b.className="balloon";
    b.innerHTML="🎈<br>"+word;
    b.onclick=()=>b.innerHTML="💥";
    container.appendChild(b);
  });
}

/* MESSAGE */
function openMessage(){
  document.getElementById("page4").classList.remove("active");
  currentPage=4;
  nextPage();
}
