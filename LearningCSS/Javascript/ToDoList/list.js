var todos = [];
var input = " ";

window.setTimeout(function(){
    
    //code goes here because chrome
    while(input != null && input.toLocaleUpperCase() !== "QUIT")
    {
        input = prompt("What would you like to do?");
        while(input == null)
        {
            input = prompt("What would you like to do?");
        }
        if(input.toLocaleUpperCase() == "NEW")
        {
            AddTodo();
        }
        else if(input.toLocaleUpperCase() === "LIST")
        {
            LogTodos();
        }
        else if(input.toLocaleUpperCase() === "DELETE")
        {
            DeleteEntry();
        }
        else if(input.toLocaleUpperCase() === "QUIT")
        {
            alert("Goodbye");
        }
        else
        {
            alert("Invalid input detected");
        }
    }
    

}, 500);


function LogTodos()
{
    for(i = 0; i < todos.length; i++)
    {
        console.log(i + ": " + todos[i]);
    }
}

function AddTodo()
{
    todos.push(prompt("What is your todo?"));
    alert("Added to do");
}

function DeleteEntry()
{
    var index = prompt("Which index should be deleted?");
    if(0 < index && index < todos.length)
    {
        todos.splice(index, 1);
        alert("Item deleted");
    }
    else
    {
        alert("Invalid index");
    }
    
}