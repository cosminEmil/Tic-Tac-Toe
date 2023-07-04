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

function button_1() {
    if (button1.innerText == "" && players_turn % 2 == 0) {
        button1.innerText = "X";
        ++players_turn;
    } else if (button1.innerText == "" && players_turn % 2) {
        button1.innerText = "O";
        ++players_turn;
    }

    if (button1.innerText == "X" && (button2.innerText == "X" && button3.innerText == "X" || button4.innerText == "X" && button7.innerText == "X" || button5.innerText == "X" && button9.innerText == "X")) {
        alert("Player 1 wins");
    } else if (button1.innerText == "O" && (button2.innerText == "O" && button3.innerText == "O" || button4.innerText == "O" && button7.innerText == "O" || button5.innerText == "O" && button9.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_2() {
    if (button2.innerText == "" && players_turn % 2 == 0) {
        button2.innerText = "X";
        ++players_turn;
    } else if(button2.innerText == "" && players_turn % 2) {
        button2.innerText = "O";
        ++players_turn;
    } 

    if (button2.innerText == "X" && (button1.innerText == "X" && button3.innerText == "X" || button5.innerText == "X" && button8.innerText == "X")) {
        alert("Player 1 wins");
    } else if (button1.innerText == "O" && (button3.innerText == "O" || button5.innerText == "O" && button8.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_3() { 
    if (button3.innerText == "" && players_turn % 2 == 0) {
        button3.innerText = "X";
        ++players_turn;
    } else if (button3.innerText == "" && players_turn % 2) {
        button3.innerText = "O";
        ++players_turn;
    }

    if (button3.innerText == "X" && (button2.innerText == "X" && button1.innerText == "X" || button5.innerText == "X" && button7.innerText == "X" || button6.innerText == "X" && button9.innerText == "X")) {
        alert("Player 1 wins"); 
    } else if (button3.innerText == "O" && (button2.innerText == "O" && button1.innerText == "O" || button5.innerText == "O" && button7.innerText == "O" || button6.innerText == "O" && button9.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_4() {
    if (button4.innerText == "" && players_turn % 2 == 0) {
        button4.innerText = "X";
        ++players_turn;
    } else if (button4.innerText == "" && players_turn % 2) {
        button4.innerText = "O";
        ++players_turn;
    }

    if (button4.innerText == "X" && (button1.innerText == "X" && button7.innerText == "X" || button5.innerText == "X" && button6.innerText == "X")) {
        alert("Player1 wins");
    } else if (button4.innerText == "O" && (button1.innerText == "O" && button7.innerText == "O" || button5.innerText == "O" && button6.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_5() {
    if (button5.innerText == "" && players_turn % 2 == 0) {
        button5.innerText = "X";
        ++players_turn;
    } else if (button5.innerText == "" && players_turn % 2) {
        button5.innerText = "O";
        ++players_turn;
    }

    if (button5.innerText == "X" && (button4.innerText == "X" && button6.innerText == "X" || button1.innerText == "X" && button9.innerText == "X" || button3.innerText == "X" && button7.innerText == "X")) {
        alert("Player 1 wins"); 
    } else if (button5.innerText == "O" && (button4.innerText == "O" && button6.innerText == "O" || button1.innerText == "O" && button9.innerText == "O" || button3.innerText == "O" && button7.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_6() {
    if (button6.innerText == "" && players_turn % 2 == 0) {
        button6.innerText = "X";
        ++players_turn;
    } else if (button6.innerText == "" && players_turn % 2){
        button6.innerText = "O";
        ++players_turn;
    }

    if (button6.innerText == "X" && (button4.innerText == "X" && button5.innerText == "X" || button3.innerText == "X" && button9.innerText == "X")) {
        alert("Player 1 wins");
    } else if (button6.innerText == "O" && (button4.innerText == "O" && button5.innerText == "O" || button3.innerText == "O" && button9.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_7() {
    if (button7.innerText == "" && players_turn % 2 == 0) {
        button7.innerText = "X";
        ++players_turn;
    } else if (button7.innerText == "" && players_turn % 2) {
        button7.innerText = "O";
        ++players_turn;
    }

    if (button7.innerText == "X" && (button1.innerText == "X" && button4.innerText == "X" || button3.innerText == "X" && button5.innerText == "X" || button8.innerText == "X" && button9.innerText == "X")) {
        alert("Player 1 wins"); 
    } else if (button7.innerText == "O" && (button1.innerText == "O" && button4.innerText == "O" || button3.innerText == "O" && button5.innerText == "O" || button8.innerText == "O" && button9.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_8() {
    if (button8.innerText == "" && players_turn % 2 == 0) {
        button8.innerText = "X";
        ++players_turn;
    } else if (button8.innerText == "" && players_turn % 2) {
        button8.innerText = "O";
        ++players_turn;
    }

    if (button8.innerText == "X" && (button2.innerText == "X" && button5.innerText == "X" || button7.innerText == "X" && button9.innerText == "X")) {
        alert("Player 1 wins");
    } else if (button8.innerText == "O" && (button2.innerText == "O" && button5.innerText == "O" || button7.innerText == "O" && button9.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}

function button_9() {
    if (button9.innerText == "" && players_turn % 2 == 0) {
        button9.innerText = "X";
        ++players_turn;
    } else if (button9.innerText == "" && players_turn % 2) {
        button9.innerText = "O";
        ++players_turn;
    }

    if (button9.innerText == "X" && (button1.innerText == "X" && button5.innerText == "X" || button3.innerText == "X" && button6.innerText == "X" || button7.innerText == "X" && button8.innerText == "X")) {
        alert("Player 1 wins");
    } else if (button9.innerText == "O" && (button1.innerText == "O" && button5.innerText == "O" || button3.innerText == "O" && button6.innerText == "O" || button7.innerText == "O" && button8.innerText == "O")) {
        alert("Player 2 wins");
    } else if (players_turn == 9) {
        alert("Remiza");
    }
}
