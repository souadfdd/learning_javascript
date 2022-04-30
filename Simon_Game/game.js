//this array for storing color that choose randomly by the function Math.random
var gamePattern=[]
//this array represent all the color that we have in this game
var buttonColor=["red","blue","green","yellow"]
//this array store all the color that the user click 
var userClickedPattern = [];
//this variable represent the stat of the game 
var started = false;
//this variable represent the level of the player
var level = 0;
//this function is for game management 
function nextSequence() {
    //this initialize every round (level) for stating clicking in the button from the fist element untill the last one
    userClickedPattern = [];
    //increment the level in evrey call after finish every round  
    level++;
     //change the title of the level 
    document.querySelector("#level-title").textContent="Level " + level 
    //generate a random value and store it in gamePattern for generating a random color 
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColor[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern)
    //add flash and sound to the color 
    const butt=document.querySelector(`#${gamePattern[0]}`)
     animateflash(randomChosenColour);
     //playSound(randomChosenColour)
}
  //add some animation to a div of the type button
function animateflash(currentColour){
    document.querySelector(`#${currentColour}`).classList.add("flash");
    setTimeout(function () {
      document.querySelector(`#${currentColour}`).classList.remove("flash");
    }, 1000);
  
}
//add event click to all button 
var buttons = document.getElementsByClassName("btn");
Array.from(buttons).forEach(v=>{
v.addEventListener("click",function(){
    //get the id of the element that has been clicked
    var userChosenColour =this.getAttribute("id");
    //console.log(userChosenColour)
    //add the color of user that they click
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    // console.log(userClickedPattern.length-1   )
    //give the last element from the array userClickedPattern to the function to check if that element is click or not 
    //the last element is because we add the color that has click to the end of array userClickedPattern
    checkAnswer(userClickedPattern.length-1)
})
});
//3. Take the code we used to play sound .
function playSound(name) {
         var audio = new Audio("./sounds/" + name + ".mp3");
        audio.play();
   
   
  }
  //handler event of keypress to stat the game
  document.addEventListener('keypress',function() {

    if (!started) {

        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        document.querySelector("#level-title").textContent="Level " + level
        nextSequence();
        started = true;
      }
     
    });
//check if the answer of the user and of gamePattern
    function checkAnswer( currentLevel){
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
               console.log("success")
               // check if the most recent user answer is the same as the game pattern 
               if (userClickedPattern.length === gamePattern.length){
                      //5. Call nextSequence() after a 1000 millisecond delay.
                        setTimeout(function () {
                            nextSequence();
                        }, 100);
                
                        }
                    } else {

                        console.log("wrong");
                        console.log("wrong");

                        //there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
                        playSound("wrong");
                  
                        //apply t to the class game-over he body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
                        document.querySelector("body").classList.add("game-over");
                        setTimeout(function () {
                            document.querySelector("body").classList.remove("game-over");
                        }, 200);
                  
                        // Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
                        document.querySelector("#level-title").textContent="Game Over, Press Any Key to Restart"
                        startOver();
                  
                      }
                  
    }
function startOver() {

  // Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}



