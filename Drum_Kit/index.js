const buttons=document.querySelectorAll(".drum");
buttons[0].addEventListener('click',()=>{
    var audio = new Audio('sounds/crash.mp3');
         audio.play();

})
buttons[1].addEventListener('click',()=>{
    var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();

})
buttons[2].addEventListener('click',()=>{
    var audio = new Audio('sounds/snare.mp3');
         audio.play();

})
buttons[3].addEventListener('click',()=>{
    var audio = new Audio('sounds/tom-1.mp3');
         audio.play();

})
buttons[4].addEventListener('click',()=>{
    var audio = new Audio('sounds/tom-2.mp3');
         audio.play();

})
buttons[5].addEventListener('click',()=>{
    var audio = new Audio('sounds/tom-3.mp3');
         audio.play();

})
buttons[6].addEventListener('click',()=>{
    var audio = new Audio('sounds/tom-4.mp3');
         audio.play();

})




/* const drum=document.querySelector(".drum");
const w=document.querySelector(".w");
const a=document.querySelector(".a");
const s=document.querySelector(".s");
const d=document.querySelector(".d");
const j=document.querySelector(".j");
const k=document.querySelector(".k");
const l=document.querySelector(".l");
w.addEventListener('click',()=>{
    
   const audio= document.createElement('audio');
   audio.src=`sounds/crash.mp3`;
   audio.play();
});
a.addEventListener('click',()=>{
    
   const audio= document.createElement('audio');
   audio.src=`sounds/kick-bass.mp3`;
   audio.play();
});
s.addEventListener('click',()=>{
   
   const audio= document.createElement('audio');
   audio.src=`sounds/snare.mp3`;
   audio.play();
});
d.addEventListener('click',()=>{
    
   const audio= document.createElement('audio');
   audio.src=`sounds/tom-1.mp3`;
   audio.play();
});
j.addEventListener('click',()=>{
    
   const audio= document.createElement('audio');
   audio.src=`sounds/tom-2.mp3`;
   audio.play();
});
k.addEventListener('click',()=>{
    
   const audio= document.createElement('audio');
   audio.src=`sounds/tom-3.mp3`;
   audio.play();
});
l.addEventListener('click',()=>{
  
   const audio= document.createElement('audio');
   audio.appendChild(w);
   audio.src=`sounds/tom-4.mp3`;
   audio.play();

}); */