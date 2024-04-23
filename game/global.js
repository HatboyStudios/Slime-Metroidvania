// Tier 1 Variables: control the actual game system and data management (game states, save data, etc.)
var gameState = checkCurrentGameState();

// Tier 2 Variables: all the variables that are used within the game enviorment (sprites, values, etc.)
var main_menu, the_game, player_menu, pause_menu;

// Global Functions: have direct impact on the game, all functions and behaviors are called from here

function checkCurrentGameState() {
    //checks the session storage data for the user's current game state, to prevent them from restarting if the page is refreshed
    let state = sessionStorage.getItem("game state");

    if(state !== null) {
        return state;
    }else {
        return "main_menu";
    }
}

function setup() {
    let screen = createCanvas(800,450);
    screen.position(0,0);

    if(gameState === "main_menu"){
        mmSetup();
    }else if(gameState === "pause_menu"){
        pmSetup();
    }else if(gameState === "player_menu"){
        plmSetup();
    }else if(gameState === "the_game"){
        gameSetup();
    }
}

function draw() {
    if(gameState === "main_menu") {
        mmDraw();
    }else if(gameState === "pause_menu") {
        pmDraw();
    }else if(gameState === "player_menu") {
        plmDraw();
    }else if(gameState === "the_game") {
        gameDraw();
    }
}