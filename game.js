/*
This is so you wait for all the DOM elements to exist before 
you can actually work rather than having to deal with 
"Cannot read properties of null" for 20 minutes :(
*/
window.onload = () => {

    //Get all the boundary elements and put them in a collection
    const redParentDOM = document.getElementById("game");
    const redZones = redParentDOM.getElementsByClassName('boundary');

    //Create the arrow functions that sets them all to red
    setRed = () => {
        for (var i = 0 ; i < redZones.length ; i++)
        {
            redZones[i].style.backgroundColor = "red";
        }
    };

    //Give all the boundaries the function under the event of mouseover
    for (var i = 0 ; i < redZones.length ; i++)
    {
        redZones[i].addEventListener("mouseover", setRed);
    }
}




    


