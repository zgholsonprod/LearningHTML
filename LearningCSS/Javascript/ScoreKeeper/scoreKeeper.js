var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var scoreInput = document.getElementById("scoreInput");
var h1 = document.querySelector("h1");
var playToValue = document.getElementById("playToValue");
var p1ScoreText = document.getElementById("p1Score");
var p2ScoreText = document.getElementById("p2Score");
var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", onP1Clicked);
p2Button.addEventListener("click", onP2Clicked);
resetButton.addEventListener("click", onResetClicked);
scoreInput.addEventListener("change", onScoreInputChange);

function onScoreInputChange()
{
    winningScore = scoreInput.value;
    playToValue.textContent = winningScore;
}

function onP1Clicked()
{
    if(gameOver)
    {
        return;
    }
    p1Score++;
    evaluateAndUpdateScores();
}

function onP2Clicked()
{
    if(gameOver)
    {
        return;
    }
    p2Score++;
    evaluateAndUpdateScores();
}

function onResetClicked()
{
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreText.classList.remove("winner");
    p2ScoreText.classList.remove("winner");
    evaluateAndUpdateScores();
}

function evaluateAndUpdateScores()
{
    if(p1Score >= winningScore)
    {
        p1Score = winningScore;
        gameOver = true;
        p1ScoreText.classList.add("winner");
    }
    if(p2Score >= winningScore)
    {
        p2Score = winningScore;
        gameOver = true;
        p2ScoreText.classList.add("winner");
    }
    p1ScoreText.textContent = p1Score;
    p2ScoreText.textContent = p2Score;
}