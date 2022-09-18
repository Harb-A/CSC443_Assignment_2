/*
This is so you wait for all the DOM elements to exist before 
you can actually work rather than having to deal with 
"Cannot read properties of null" for 20 minutes :(
*/
window.onload = () => {


/*Start maze section*/
    //On launch, website is idle so you dont get red markers while navigating, game status is on meaning you can play only if you hover "S"
    let siteState = false;
    let gameState = true;
    let counter = 0;

    //Grab the "S", if the site is idle and the game is playable make the site active
    const startBtn = document.getElementById("start");
    wePlay = () => {
        if (gameState == true && siteState == false)
        {
            siteState = true;
            document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\" Points: " + counter;
        }
    }
    startBtn.addEventListener("mouseover", wePlay);


/*Possible losing scenarios section*/
    //Get all the boundary elements and put them in a collection
    //redParentDOM is to avoid the small little box in the bottom from being colored
    const redParentDOM = document.getElementById("game");
    const redZones = redParentDOM.getElementsByClassName('boundary');

    //When both the site and game are active, if you touch a nono zone it disables both and flags your screen with the message and red colors
    //It also decrements your counter
    setRed = () => {
        if (siteState == true && gameState == true){
            siteState = false;
            gameState = false;
            counter -= 10;
            for (var i = 0 ; i < redZones.length ; i++)
            {
                redZones[i].style.backgroundColor = "red";
            }
            document.getElementById("status").innerText = "You lost 10 points!";
        }
    };
    for (var i = 0 ; i < redZones.length ; i++)
    {
        redZones[i].addEventListener("mouseover", setRed);
    }


/*Reset section*/
    //You can only click this when you lose, reset the site back to a playable state
    cleanUp = () => {
        if (gameState == false){
            siteState = true;
            gameState = true;
            for (var i = 0 ; i < redZones.length ; i++)
            {
                redZones[i].style.backgroundColor = "white";
            }
            document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\". Points: " + counter;
        }
    }
    startBtn.addEventListener("click", cleanUp);


/*Win section*/
    //Grab "E", if the site and game are both on, means you didnt trigger a loss scenario so get your points, 
    //also reset the state so you dont get free points :P
    //also gives you 5 points
    const endBtn = document.getElementById("end");
    getPoints = () => {
        if (siteState == true && gameState == true){
            counter += 5;
            document.getElementById("status").innerText = "You won 5 points!";
            siteState = false;
        }
    }
    endBtn.addEventListener("mouseover", getPoints);


/*Cheat catch section*/
    //Why on earth would you wanna cheat, im not paying you for getting a highscore and the game is offline anyways

    //Entire maze is in the "game" div, if you leave the game div you're probably cheating dude
    const anitCheatSupreme = document.getElementById("game");
    cheatDetected = () => {
        if (siteState == true && gameState == true)
        {
            siteState = false;
            gameState = false;
            for (var i = 0 ; i < redZones.length ; i++)
            {
                redZones[i].style.backgroundColor = "red";
            }
            document.getElementById("status").innerText = "You seriously cheating bruh? -10 points!";
        }
    }
    anitCheatSupreme.addEventListener("mouseleave", cheatDetected);


    
}






    


