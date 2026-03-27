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

window.onload = function(){
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  document.getElementById("birth").innerText = birthDate.toDateString();
  document.getElementById("age").innerText = "Age: " + age;
};

function lightCandle(){
  document.querySelectorAll(".flame").forEach(f=>{
    f.style.opacity = 1;
  });
  startConfetti();
}

let words=["You","are","a","cutie"];
let i=0;

function createBalloons(){
  let box=document.getElementById("balloonBox");
  let msg=document.getElementById("message");

  box.innerHTML="";
  msg.innerText="";
  i=0;

  for(let j=0;j<4;j++){
    let b=document.createElement("div");
    b.className="balloon";
    b.style.background=["red","blue","green","purple"][j];

    b.onclick=function(){
      if(i<words.length){
        msg.innerText+=" "+words[i];
        i++;
      }
      b.remove();
    };

    box.appendChild(b);
  }
}

/* confetti */
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
