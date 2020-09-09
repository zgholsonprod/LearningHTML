var h1 = document.getElementsByTagName("h1");

h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(() => {
    if(isBlue)
    {
        body.style.background = "white";
    }
    else
    {
        body.style.background = "blue";
    }
    isBlue = !isBlue;
}, 10000000000);
