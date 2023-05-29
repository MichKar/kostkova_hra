//////////////základní proměnné

var totalScore, actualScore, activePlayer, dice, playGame;

novaHra();
nulovani();


/////////////tlačítko Hod kostkou

document.querySelector(".btn5").addEventListener("click",hod);

function hod(){
    if(playGame){
//  měníme kostku dle náhodného čísla
    var dice = document.querySelector(".dice");
    var nahCislo = Math.ceil(Math.random()*6);
    var nahKostka = document.querySelector(".diceImage");  
    dice.style.display = "block";
    console.log(nahKostka.src = "img/" + nahCislo + ".jpg");
    
    if(nahCislo !== 1){
        //  Nasčítávání čísel z kostky do round score
        roundScore = roundScore + nahCislo;
        document.querySelector(".actualScore"+activePlayer).textContent = roundScore;
    } 
    else {
        //  Pokud se hodí 1, tak vynuluj actual score a hraje 2.hráč
        zmenaHrace();
    };
         };
};

//////////tlačítko Přiřad score

document.querySelector(".btn6").addEventListener("click",prirad);

    function prirad(){
        if (playGame){
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        document.querySelector(".totalScore" + activePlayer).textContent = totalScore[activePlayer];
        if(totalScore[activePlayer] >= 20){
            document.querySelector(".player"+ activePlayer).textContent = "VÍTĚZ!!!";
            document.querySelector(".player"+ activePlayer).style.color = "red";
            playGame = false;
            document.querySelector(".btn5").hover.style.backgroundColor = "red";
        }
        else {
            zmenaHrace();
        };
    };   
};


///////////tlačítko Nová hra
document.querySelector(".btn7").addEventListener("click",novaHra);

function novaHra(){
    nulovani();
    totalScore = [0,0];
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
    
    
////////////fce změna aktivního hráče

function zmenaHrace (){
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer=0;
        };
        roundScore = 0;
        document.querySelector(".btn1").classList.toggle("active");
        document.querySelector(".btn2").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".actualScore0").textContent = 0;
        document.querySelector(".actualScore1").textContent = 0;
};
    


////////////fce Vynulování score a odstranění kostky

function nulovani() {
    document.querySelector(".totalScore0").textContent = 0;
    document.querySelector(".totalScore1").textContent = 0;
    document.querySelector(".actualScore0").textContent = 0;
    document.querySelector(".actualScore1").textContent = 0;
    document.querySelector(".dice").style.display = "none";
}