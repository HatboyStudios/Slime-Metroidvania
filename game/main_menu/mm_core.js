function mmSetup() {
    new p5(main_menu);
}

function mmDraw() {

}

main_menu = function(sketch) {
    sketch.setup = function() {
        let mm_screen = this.createCanvas(800,450);
        mm_screen.position(0,0);
    }

    sketch.draw = function() {
        this.background("black");
    }
}