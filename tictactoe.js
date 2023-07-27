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
        alert("Player 1 Wins");
        window.location.reload();
    } else if (button1.innerText == "O" && button2.innerText == button1.innerText && button1.innerText == button3.innerText) {
        alert("Player 2 Wins");
        window.location.reload();
    }
    return 0;
}

function checkWinner() {
    for (let i = 0; i < 7; i += 3) {
        let check = checkButtons(buttons[i], buttons[i + 1], buttons[i + 2]);
    }
    for (let i = 0; i < 3; ++i) {
        let check = checkButtons(buttons[i], buttons[i + 3], buttons[i + 6]);
    }
    let mainDiagonal = checkButtons(buttons[0], buttons[4], buttons[8]);
    let secondaryDiagonal = checkButtons(buttons[2], buttons[4], buttons[6]);
}

function btn(button) {
    addValue(button);
    checkWinner();
}
