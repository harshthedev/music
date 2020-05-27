window.addEventListener('load',()=>{
const sounds=document.querySelectorAll('.sound');
const pads=document.querySelectorAll('.pads div');
const visuals=document.querySelector('.visuals');
   
  const colors=["#60d395","#d36060","#c060d3","#d3d160","#6860d3","#e606"];
     
     console.log(sounds);
     
     

    pads.forEach((pad,index)=>{
     pad.addEventListener("click",function() {
         sounds[index].currentTime=0;
         sounds[index].play();
         createbubbles(index);
         
         
     });


    });
  const createbubbles=index=>{
  const bubbles=document.createElement("div");
  visuals.appendChild(bubbles);
  bubbles.style.backgroundColor=colors[index];
  bubbles.style.animation="jump 1s ease";
bubbles.addEventListener("animationend",function(){
    visuals.removeChild(this);
});

    };
});