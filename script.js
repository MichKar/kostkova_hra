//////////////MAIN VARIABLES
var totalScore, actualScore, activePlayer, dice, playGame;
newGame();
zero();


/////////////BUTTON "HOD KOSTKOU" - button dice
document.querySelector(".btn5").addEventListener("click", dice);

function dice() {
    if (playGame) {
        //  changing dice according to random number
        var dice = document.querySelector(".dice");
        var randomNumber = Math.ceil(Math.random() * 6);
        var dicePicture = document.querySelector(".diceImage");
        dice.style.display = "block";
        console.log(dicePicture.src = "img/" + randomNumber + ".jpg");

        if (randomNumber !== 1) {
            //  adding numbers from dice to round score
            roundScore = roundScore + randomNumber;
            document.querySelector(".actualScore" + activePlayer).textContent = roundScore;
        }
        else {
            //  if random nuber is 1, actual score change to null and 2nd player is playinng
            changingPlayer();
        };
    };
};


//////////BUTTON "PŘIŘAĎ SCORE" - button adding score
document.querySelector(".btn6").addEventListener("click", addingScore);

function addingScore() {
    if (playGame) {
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        document.querySelector(".totalScore" + activePlayer).textContent = totalScore[activePlayer];
        if (totalScore[activePlayer] >= 20) {
            document.querySelector(".player" + activePlayer).textContent = "VÍTĚZ!!!";
            document.querySelector(".player" + activePlayer).style.color = "red";
            playGame = false;
            document.querySelector(".btn5").hover.style.backgroundColor = "red";
        }
        else {
            changingPlayer();
        };
    };
};


///////////BUTTON "NOVÁ HRA" - button "new game"
document.querySelector(".btn7").addEventListener("click", newGame);

function newGame() {
    zero();
    totalScore = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;
    document.querySelector(".btn1").classList.add("active");
    document.querySelector(".btn2").classList.remove("active");
    document.querySelector(".player0").textContent = ("HRÁČ 1");
    document.querySelector(".player1").textContent = ("HRÁČ 2");
    document.querySelector(".player1").style.color = "black";
    document.querySelector(".player0").style.color = "black";
};


////////////function change active player
function changingPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    };
    roundScore = 0;
    document.querySelector(".btn1").classList.toggle("active");
    document.querySelector(".btn2").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".actualScore0").textContent = 0;
    document.querySelector(".actualScore1").textContent = 0;
};


////////////function zero - null score and delete dice picture
function zero() {
    document.querySelector(".totalScore0").textContent = 0;
    document.querySelector(".totalScore1").textContent = 0;
    document.querySelector(".actualScore0").textContent = 0;
    document.querySelector(".actualScore1").textContent = 0;
    document.querySelector(".dice").style.display = "none";
}