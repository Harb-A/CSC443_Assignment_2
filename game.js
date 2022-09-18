/*
This is so you wait for all the DOM elements to exist before 
you can actually work rather than having to deal with 
"Cannot read properties of null" for 20 minutes :(
*/
window.onload = () => {

    //Get all the boundary elements and put them in a collection
    //redParentDOM is to avoid the small little box in the bottom from being colored
    const redParentDOM = document.getElementById("game");
    const redZones = redParentDOM.getElementsByClassName('boundary');

    //Create the arrow functions that sets them all to red
    setRed = () => {
        for (var i = 0 ; i < redZones.length ; i++)
        {
            redZones[i].style.backgroundColor = "red";
        }
        //Need to also display you lost message
        document.getElementById("status").innerText = "You Lost !"

    };

    //Give all the boundaries the function under the event of mouseover
    for (var i = 0 ; i < redZones.length ; i++)
    {
        redZones[i].addEventListener("mouseover", setRed);
    }

    //Grab the start button
    const startBtn = document.getElementById("start");

    //Arrow function to clean up the losers mess
    cleanUp = () => {
        for (var i = 0 ; i < redZones.length ; i++)
        {
            redZones[i].style.backgroundColor = "white";
        }
        //Reset the starting message too, cant have "you lost" there the entire time it'll make you sad
        document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\"";
    }

    //Give on click event listener and function
    startBtn.addEventListener("click", cleanUp);


}




    


