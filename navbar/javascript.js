
const butt=document.querySelector(".action-btn");
const links=document.querySelector(".link");
const link=document.querySelectorAll(".link li");
butt.addEventListener('click',() => { 
  links.classList.toggle('nav-active');
    link.forEach((lin,ind) =>{

      if( lin.style.animation){
        lin.style.animation=``
      }
      else{
        lin.style.animation=`linknav 0.3s ease forwards ${ind/4}s`;
      }
    });

   });
   function icon(){
     const ic= document.querySelector('i');
     if(ic.classList.contains('fa-bars')){
     
       ic.classList.remove('fa-bars');
       ic.classList.add('fa-times');

     }
     else{
      ic.classList.remove('fa-times');
      ic.classList.add('fa-bars');
     }
   }
   butt.addEventListener('click',icon); 
 
