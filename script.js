// Auto loading page change
setTimeout(()=>{
  nextPage(2);
},2000);

function nextPage(num){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+num).classList.add("active");
}

function decorate(){
  document.body.style.background = "linear-gradient(135deg,#ff758c,#ff7eb3)";
}

function lightCandle(){
  document.querySelector(".candle").style.background="yellow";
}

function showBalloons(){
  nextPage(5);
}

function pop(el){
  el.style.display="none";
}
