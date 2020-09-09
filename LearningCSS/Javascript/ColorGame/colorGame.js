var squares = document.querySelectorAll(".square");
var rgbGoal = document.getElementById("rgbGoal");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newGameButton = document.getElementById("newGameButton");
var modeButtons = document.querySelectorAll(".mode");

var colors = [];
var pickedColor;
var numOfSquares = 6;
var bgColor = "#232323";

startNewGame(true);

function onModeButtonClick()
{
    for(var i = 0; i < modeButtons.length; i++)
    {
        if(modeButtons[i] === this)
        {
            modeButtons[i].classList.add("selected");
            numOfSquares = this.textContent === "EASY" ? 3 : 6;
        }
        else
        {
            modeButtons[i].classList.remove("selected");
        }
    }
    startNewGame(false);
}

function startNewGame(shouldAddListeners)
{
    colors = getRandomColors(numOfSquares);
    assignColors();
    pickedColor = getRandomSquare();
    rgbGoal.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    newGameButton.textContent = "NEW COLORS";
    if(shouldAddListeners)
    {
        newGameButton.addEventListener("click", startNewGame);
        for(var i = 0; i < modeButtons.length; i++)
        {
            modeButtons[i].addEventListener("click", onModeButtonClick);
        }
    }
}

function assignColors()
{
    for(i = 0; i < squares.length; i++)
    {
        if(i < numOfSquares)
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].addEventListener("click", onSquareClicked);
            squares[i].style.display = "block";
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
}

function onSquareClicked()
{
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor)
    {
        onCorectSquareClicked(this);
    }
    else
    {
        onWrongSquareClicked(this);
    }
}

function onCorectSquareClicked(square)
{
    messageDisplay.textContent = "Correct!";
    squares.forEach(element => {
        element.style.backgroundColor = pickedColor;
    });
    h1.style.backgroundColor = pickedColor;
    newGameButton.textContent = "PLAY AGAIN?";
}

function getRandomSquare()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getRandomColors(count)
{
    var randomColors = [];
    for(i = 0; i < count; i++)
    {
        var random = generateRandomColor();
        randomColors.push(random);
    }
    
    return randomColors;
}

function generateRandomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function onWrongSquareClicked(square)
{
    square.style.backgroundColor = bgColor;
    messageDisplay.textContent = "Try Again!";
}
    