function gameSetup() {
    new p5(main_menu);
}

function gameDraw() {

}

the_game = function(sketch) {
    sketch.setup = function() {
        let game_screen = this.createCanvas(800,450);
        game_screen.position(0,0);
    }

    sketch.draw = function() {
        this.background("black");
    }
}