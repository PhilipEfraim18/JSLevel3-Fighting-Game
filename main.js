let playerHealth = 5000;
let enemyHealth = 5000;
let healPotion = 2;
let enemyHealthPotion = 2;
let currentTurn = "player";

const attackButton = document.getElementById("attackButton");
const healButton = document.getElementById("healButton");



// function disableButtons(){
//     healButton.disabled = true;
//     attackButton.disabled = true;
// }

// function enableButtons(){
//     healButton.disabled = false;
//     attackButton.disabled = false;
// }

//Game Moves
function getAttack(){
    return Math.floor(Math.random() * (1000 - 500 +1) + 500);
}

function getHealing(){
    return Math.floor(Math.random() * (1000 - 500 +1) + 500);
}

//Player Moves
function playerAttack(){
    if(currentTurn === "player"){
        enemyHealth -= getAttack();
        document.querySelector("#eHealth").innerHTML = "Health:" + enemyHealth;
        currentTurn = "enemy";
        setTimeout(computerTurn, 3000);
        checkGameOver();
        // disableButtons();
    }
}

function playerHeal(){
    if(currentTurn === "player"){
        if(healPotion <= 0){
            checkGameOver();
        }
        else{
            playerHealth += getHealing();
            healPotion -= 1;
            document.querySelector("#pHealth").innerHTML = "Health:" + playerHealth;
            document.querySelector("#healPotions").innerHTML = "Health Potions: " + healPotion;
            currentTurn = "enemy";
            setTimeout(computerTurn, 3000);
            checkGameOver();
            // disableButtons();
        }
    }
}

//Computer Moves
function computerAttack(){
    if(currentTurn === "enemy"){
        playerHealth -= getAttack();
        document.querySelector("#pHealth").innerHTML = "Health: " + playerHealth;
        currentTurn = "player";
    }
}

function computerHeal(){
    if(currentTurn === "enemy"){
        enemyHealth += getHealing();
        enemyHealthPotion -= 1;
        document.querySelector("#enemyHealPotions").innerHTML = "Health Potions: " + enemyHealthPotion;
        currentTurn = "player";
    }
}

function computerTurn(){
    if(currentTurn === "enemy"){
        if(enemyHealthPotion > 0){
            let choice = Math.floor(Math.random() * 2);
            if (choice === 0) {
                computerAttack();
                document.querySelector("#pHealth").innerHTML = "Health: " + playerHealth;
            } 
            else {
                computerHeal();
                document.querySelector("#eHealth").innerHTML = enemyHealth;
                document.querySelector("#enemyHealPotions").innerHTML = "Health Potions: " + enemyHealthPotion;
            }
        }
        else{
            computerAttack();
            document.querySelector("#pHealth").innerHTML = playerHealth;
        }
        // enableButtons();
        
    }
}

//Check game over
function checkGameOver(){
    if(playerHealth <= 0){ 
        document.getElementById("game").style.display = "none";
        document.getElementById("Game-Over").style.display = "flex";
    }
    else if(enemyHealth <= 0){
        document.getElementById("game").style.display = "none";
        document.getElementById("Game-Won").style.display = "flex";
    }
}
