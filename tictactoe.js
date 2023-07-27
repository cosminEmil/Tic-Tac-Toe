let container = document.getElementById("buttonsContainer");
let buttons = container.getElementsByTagName("button");
let players_turn = 0;

function addValue(button) {
    if(button.innerText == "") {
        if (players_turn % 2 == 0) {
            button.innerText = "X";
        } else {
            button.innerText = "O";
        }
        ++players_turn; 
        if (players_turn == 9) {
            alert("Draw");
        }
    }
}

function checkButtons(button1, button2, button3) {
    if (button1.innerText == "X" && button2.innerText == button1.innerText && button1.innerText == button3.innerText) {
        return 1;
    }
    if (button1.innerText == "O" && button2.innerText == button1.innerText && button1.innerText == button3.innerText) {
        return 2;
    }
    return 0;
}

function checkWinner() {
    let xWinner = 0;
    let oWinner = 0;
    for (let i = 0; i < 7; i += 3) {
        let check = checkButtons(buttons[i], buttons[i + 1], buttons[i + 2]);
        if (check == 1) {
            ++xWinner;
        } else if (check == 2) {
            ++oWinner;
        }
    }

    for (let i = 0; i < 3; ++i) {
        let check = checkButtons(buttons[i], buttons[i + 3], buttons[i + 6]);
        if (check == 1) {
            ++xWinner;
        } else if (check == 2) {
            ++oWinner;
        }
    }

    let mainDiagonal = checkButtons(buttons[0], buttons[4], buttons[8]);
    let secondaryDiagonal = checkButtons(buttons[2], buttons[4], buttons[6]);

    if (mainDiagonal == 1 || secondaryDiagonal == 1) {
        ++xWinner;
    } else if (mainDiagonal == 2 || secondaryDiagonal == 2) {
        ++oWinner;
    }

    if (xWinner) {
        alert("Player 1 wins");
        window.location.reload();
    } else if (oWinner) {
        alert("Player 2 wins");
        window.location.reload();
    }
}


function btn(button) {
    addValue(button);
    checkWinner();
}
