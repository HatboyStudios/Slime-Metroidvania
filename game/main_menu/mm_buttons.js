function mmButtons() {
    if(new_game.mouse.hovering()) {
        new_game.color = 'green';
    }else {
        new_game.color = 'blue';
    }

    if(continue_game.mouse.hovering()) {
        continue_game.color = 'green';
    }else {
        continue_game.color = 'blue';
    }
}