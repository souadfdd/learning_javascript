randomNumber1=Math.floor(Math.random() * 6)+1;
randomNumber2=Math.floor(Math.random() * 6)+1;
//The querySelector() method returns the first element that matches a CSS selector.
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
img1.src=`images//dice${randomNumber1}.png`;
img2.src=`images//dice${randomNumber2}.png`;
const h=document.querySelector("h1")
if(randomNumber1<randomNumber2){
    h.innerHTML="Player 2 wins"
}
else if(randomNumber1>randomNumber2){
    h.innerHTML="Player 1 wins"
}
else{
    h.innerHTML="Draw"
}
