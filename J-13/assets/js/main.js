window.addEventListener("DOMContentLoaded", function(event){

});

function getNextSection(current)
{
    if(currend.id === "red")
    {return document.getElementById("orange")
}
    if(currend.id ==="orange")
    {return document.getElementById("yellow")
}
    if (currend.id ==="yellow")
    {return document.getElementById("green")
    }    
    if (currend.id ==="green")
    {return document.getElementById("blue")
    }
    if(currend.id ==="blue")
    {return document.getElementById("purple")

let sections=document.querySelectorAll("body > main > section")
let currentScrollPosition = document.documentElement.scrollTop;

let positionToGo = 760;
 scroll(0,positionToGo)