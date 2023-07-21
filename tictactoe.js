let button1 = document.getElementById("btn_1");
let button2 = document.getElementById("btn_2");
let button3 = document.getElementById("btn_3");
let button4 = document.getElementById("btn_4");
let button5 = document.getElementById("btn_5");
let button6 = document.getElementById("btn_6");
let button7 = document.getElementById("btn_7");
let button8 = document.getElementById("btn_8");
let button9 = document.getElementById("btn_9");
let players_turn = 0;

function addValue(button) {
    if(button.innerText == "") {
        if (players_turn % 2 == 0) {
            button.innerText = "X";
        } else {
            button.innerText = "O";
        }
        ++players_turn; 
    }
}

function checkButtons(button_x, button_y, button_z) {
    if (button_x.innerText == "X" && button_y.innerText == button_x.innerText && button_x.innerText == button_z.innerText) {
        return 1;
    }
    if (button_x.innerText == "O" && button_y.innerText == button_x.innerText && button_x.innerText == button_z.innerText) {
        return 2;
    }
    return 0;
}

function checkWinner() {
    if (checkButtons(button1, button2, button3) == 1 || checkButtons(button1, button4, button7) == 1 || checkButtons(button1, button5, button9) == 1 || checkButtons(button4, button5, button6) == 1 || checkButtons(button7, button8, button9) == 1 || checkButtons(button2, button5, button8) == 1 || checkButtons(button3, button6, button9) == 1 || checkButtons(button3, button5, button7) == 1) {
        alert("Player 1 wins");
    } else if (checkButtons(button1, button2, button3) == 2 || checkButtons(button1, button4, button7) == 2 || checkButtons(button1, button5, button9) == 2 || checkButtons(button4, button5, button6) == 2 || checkButtons(button7, button8, button9) == 2 || checkButtons(button2, button5, button8) == 2 || checkButtons(button3, button6, button9) == 2 || checkButtons(button3, button5, button7) == 2) {
        alert("Player 2 wins");
    }
}

function button_1(){
    addValue(button1);
    checkWinner();
}

function button_2() {
    addValue(button2);
    checkWinner();
}
function button_3() {
    addValue(button3);
    checkWinner();
}
function button_4() {
    addValue(button4);
    checkWinner();
}

function button_5() {
    addValue(button5);
    checkWinner();
}
function button_6() {
    addValue(button6);
    checkWinner();
}

function button_7() {
    addValue(button7);
    checkWinner();
}

function button_8() {
    addValue(button8);
    checkWinner();
}
function button_9() {
    addValue(button9);
    checkWinner();
}
