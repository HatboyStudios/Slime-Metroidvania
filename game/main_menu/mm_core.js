main_menu = function(sketch) {
    sketch.setup = function() {
        let mm_screen = this.createCanvas(800,450);
        mm_screen.position(0,0);

        title = new this.Sprite(400, 100, 200, 100);
        title.color = 'green';
        title.textSize = 20;
        title.textColor = 'lime';
        title.text = "Slime Metroidvania"

        new_game = new this.Sprite(350, 225, 100, 50);
        new_game.text = "Start Game";
        new_game.color = 'blue';

        continue_game = new this.Sprite(450, 225, 100, 50);
        continue_game.text = "Continue Game";
        continue_game.color = 'blue';
    }

    sketch.draw = function() {
        this.background("black");
    }
}

function mmSetup() {
    new p5(main_menu);
}

function mmDraw() {
    mmButtons();
}