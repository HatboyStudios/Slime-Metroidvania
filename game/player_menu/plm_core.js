function plSetup() {
    new p5(main_menu);
}

function plDraw() {

}

player_menu = function(sketch) {
    sketch.setup = function() {
        let plm_screen = this.createCanvas(800,450);
        plm_screen.position(0,0);
    }

    sketch.draw = function() {
        this.background("black");
    }
}