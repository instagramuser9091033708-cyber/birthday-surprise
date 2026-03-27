let birthDate = new Date("2008-05-10");

setTimeout(()=>nextPage(2),3000);

function nextPage(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

function start(){
  document.getElementById("music").play().catch(()=>{});
  nextPage(4);
}

// DOB
window.onload = function(){
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("birth").innerText = birthDate.toDateString();
  document.getElementById("age").innerText = "Age: " + age;
};

// Candle
function lightCandle(){
  document.querySelectorAll(".flame").forEach(f=>{
    f.style.opacity = 1;
  });
  startConfetti();
}

// Balloons
let words = ["You","are","a","cutie"];
let i = 0;

function createBalloons(){
  let box = document.getElementById("balloonBox");
  let message = document.getElementById("message");

  box.innerHTML="";
  message.innerText="";
  i=0;

  for(let j=0;j<4;j++){
    let b=document.createElement("div");
    b.className="balloon";
    b.style.background=["red","blue","green","purple"][j];

    b.onclick=function(){
      if(i<words.length){
        message.innerText += " " + words[i];
        i++;
      }
      b.style.display="none";
    };

    box.appendChild(b);
  }
}

/* Confetti */
let canvas=document.getElementById("confetti");
let ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];

function startConfetti(){
  pieces=[];
  for(let i=0;i<120;i++){
    pieces.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:Math.random()*6+2,
      d:Math.random()*100,
      color:["red","yellow","blue","green","pink","orange"][Math.floor(Math.random()*6)]
    });
  }
  animateConfetti();
}

function animateConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  pieces.forEach(p=>{
    ctx.fillStyle=p.color;
    ctx.fillRect(p.x,p.y,p.r,p.r);

    p.y+=2;
    p.x+=Math.sin(p.d);

    if(p.y>canvas.height){
      p.y=0;
      p.x=Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animateConfetti);
}

window.onresize=function(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
};
