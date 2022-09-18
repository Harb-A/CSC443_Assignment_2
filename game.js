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

    //Grab the "S", if the site is idle and the game is playable make the site active
    const startBtn = document.getElementById("start");
    wePlay = () => {
        if (gameState == true && siteState == false)
        {
            siteState = true;
            console.log(siteState);
        }
    }
    startBtn.addEventListener("mouseover", wePlay);


/*Possible losing scenarios section*/
    //Get all the boundary elements and put them in a collection
    //redParentDOM is to avoid the small little box in the bottom from being colored
    const redParentDOM = document.getElementById("game");
    const redZones = redParentDOM.getElementsByClassName('boundary');

    //When both the site and game are active, if you touch a nono zone it disables both and flags your screen with the message and red colors
    setRed = () => {
        if (siteState == true && gameState == true){
            siteState = false;
            gameState = false;
            console.log(gameState);
            for (var i = 0 ; i < redZones.length ; i++)
            {
                redZones[i].style.backgroundColor = "red";
            }
            document.getElementById("status").innerText = "You Lost !"
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
            document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\"";
        }
    }
    startBtn.addEventListener("click", cleanUp);
}






    


