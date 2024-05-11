// document.getElementById("turn").style.color = "red";
let aiscore = 0;
let userscore = 0;
let player1Score = 0;
let player2Score = 0;
let player2Mode = false;
let player1choice = -1;
let player2choice = -1;
function play(number){
    let aimove = Math.floor (Math.random() * 3);
    const heading = document.getElementById("heading");
    const turnMenu = document.getElementById("turn");
    const scoreBoard = document.getElementById("scoreBoard");
    document.getElementById("startP").innerHTML = "Play again";
    if(aimove == 0){
        turnMenu.innerHTML = "computer chose paper";
    }else if(aimove == 1){
        turnMenu.innerHTML = "computer chose scissors";
    }else if(aimove == 2){
        turnMenu.innerHTML = "computer chose rock";
    }
    if(number == aimove){
        heading.innerHTML = "Draw!"; 
        heading.style.color = "white";
    }else if(number == 0 && aimove == 1){
        heading.innerHTML = "Computer won!"; 
        heading.style.color = "red";
        aiscore++;
    }else if(number == 0 && aimove == 2){
        heading.innerHTML = "you won!"; 
        heading.style.color = "rgb(24, 255, 3)";
        userscore++;
    }else if(number == 1 && aimove == 0){
        heading.innerHTML = "you won!"; 
        heading.style.color = "rgb(24, 255, 3)";
        userscore++;
    }else if(number == 1 && aimove == 2){
        heading.innerHTML = "Computer won!"; 
        heading.style.color = "red";
        aiscore++;
    }else if(number == 2 && aimove == 0){
        heading.innerHTML = "Computer won!"; 
        heading.style.color = "red";
        aiscore++;
    }else if(number == 2 && aimove == 1){
        heading.innerHTML = "you won!"; 
        heading.style.color = "rgb(24, 255, 3)";
        userscore++;
    }
    scoreBoard.innerHTML = `You ${userscore} : ${aiscore} Computer`
    
}
function play2(number1,number2){
    // let aimove = Math.floor (Math.random() * 3);
    // const heading = document.getElementById("heading");
    // const turnMenu = document.getElementById("turn");
    player1choice = -1;
    player2choice = -1;
    const scoreBoard = document.getElementById("playerScoreBoard");
    let heading = document.getElementById("playerStart");
    if(number1 == number2){
        heading.innerHTML = "Draw!"; 
        heading.style.color = "white";
    }else if(number1 == 0 && number2 == 1){
        heading.innerHTML = "Player 2 won!"; 
        heading.style.color = "red";
        player2Score++;
    }else if(number1 == 0 && number2 == 2){
        heading.innerHTML = "Player 1 won!"; 
        heading.style.color = "rgb(24, 255, 3)";
        player1Score++;
    }else if(number1 == 1 && number2 == 0){
        heading.innerHTML = "Player 1 won!"; 
        heading.style.color = "rgb(24, 255, 3)";
        player1Score++;
    }else if(number1 == 1 && number2 == 2){
        heading.innerHTML = "Player 2 won!"; 
        heading.style.color = "red";
        player2Score++;
    }else if(number1 == 2 && number2 == 0){
        heading.innerHTML = "Player 2 won!"; 
        heading.style.color = "red";
        player2Score++;
    }else if(number1 == 2 && number2 == 1){
        heading.innerHTML = "Player 1 won!"; 
        heading.style.color = "rgb(24, 255, 3)";
        player1Score++;
    }
    scoreBoard.innerHTML = `Player1 --- ${player1Score} : ${player2Score} --- Player2`
    
}
function changeGameMode(){
    let modeButton = document.getElementById("modeButton");
    let singlePlayerPage = document.getElementById("singlePlayerPage");
    let multiPlayerPage = document.getElementById("multiPlayerPage");
    if(player2Mode == true){
        const heading = document.getElementById("heading");
        heading.innerHTML = "Rock Paper Scissors"; 
        heading.style.color = "white";
        const turnMenu = document.getElementById("turn");
        turnMenu.innerHTML = "your turn!";
        const scoreBoard = document.getElementById("scoreBoard");
        scoreBoard.innerHTML = "You 0:0 Computer";
        document.getElementById("startP").innerHTML = "Start";
        aiscore = 0;
        userscore = 0;
        player2Mode = false;
        modeButton.innerHTML = "PvP";
        singlePlayerPage.style.display = "flex";
        multiPlayerPage.style.display = "none";

    }else if(player2Mode == false){
        const scoreBoard = document.getElementById("playerScoreBoard");
        scoreBoard.innerHTML = "Player1 --- 0 : 0 --- Player2";
        let heading = document.getElementById("playerStart");
        heading.innerHTML = "Start"; 
        heading.style.color = "white";
        player1Score = 0;
        player2Score = 0;
        player2Mode = true;
        modeButton.innerHTML = "single player";
        singlePlayerPage.style.display = "none";
        multiPlayerPage.style.display = "flex";
        
    }
}
document.getElementById("modeButton").onclick = () => changeGameMode();
document.getElementById("paper").onclick = () => {
    play(0);
}
document.getElementById("scissors").onclick = () => {
    play(1);
}
document.getElementById("rock").onclick = () => {
    play(2);
}
document.onkeydown = (event) =>{
    let key = event.key;
    console.log(key)
    if(player2Mode == true){
        if(key == "a" || key == "A"){
            player1choice = 0;
        }else if(key == "s" || key == "S"){
            player1choice = 1;
        }else if(key == "d" || key == "D"){
            player1choice = 2;
        }else if(key == "ArrowLeft" ){
            player2choice = 0;
        }else if(key == "ArrowUp" ){
            player2choice = 1;
        }else if(key == "ArrowRight" ){
            player2choice = 2;
        }
        if(player1choice != -1 && player2choice != -1){
            play2(player1choice,player2choice);
        }
    }
}