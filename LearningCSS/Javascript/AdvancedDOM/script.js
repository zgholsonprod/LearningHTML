var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var button = document.querySelector("button");
var isActive = false;

button.addEventListener("click", function(){   
    document.body.classList.toggle("purple");
});

h1.addEventListener("click", function(){
    alert("H1 was clicked");
});

h1.addEventListener("click", function(){
    h1.style.background = "orange";
});

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++)
{
    lis[i].addEventListener("click", function(){
        this.textContent = "I was clicked";
    });
}