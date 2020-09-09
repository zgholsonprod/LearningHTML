var paragraph = document.getElementsByTagName("p")[0];
paragraph.classList.add("big");

paragraph.textContent = "This is a new string assigned via text content";
paragraph.addEventListener("click", function(){
    alert("H1 was clicked");
});

var ul = document.querySelector("ul");