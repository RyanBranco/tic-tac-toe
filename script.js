/*---------- game state data ----------*/

/* if an array's length is 3 and all the values are the same you have a winner */
const winningConditions = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

const turns = ["X","O","X","O","X","O","X","O","X"];

/*---------- Global variables ----------*/
const box = document.getElementsByTagName("td");
const playerStatus = document.querySelector("footer p");
let pXTurn = true;
let pOTurn = false;

/*---------- logic ----------*/

/* gives an click event listener to all the boxes */
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", event => {
        if (pXTurn) {
            event.target.innerHTML = "<p>X</p>"
        } else if (pOTurn) {
            event.target.innerHTML = "<p>O</p>"
        }
    })
}

/* pushes X or O to the correct arrays and td boxes */
function pushToArrays(...arrs) {
    for (let i = 0; i < arrs.length; i++) {
        if (pXTurn) {
            winningConditions[arrs[i]].push("X");
            // checkForWin();
        } else if (pOTurn) {
            winningConditions[arrs[i]].push("O");
            // checkForWin();  
        }
    }
    turns.pop();
    changePlayer();
}

function changePlayer() {
    if (turns.length % 2 === 1) {
        pXTurn = true;
        pOTurn = false;
        displayTurn();
    } else if (turns.length % 2 === 0) {    
        pXTurn = false;
        pOTurn = true;
        displayTurn();
    }
}

function displayTurn() {
    if (pXTurn) {
        playerStatus.textContent = "It is player X's turn";
    } else if (pOTurn){
        playerStatus.textContent = "It is player O's turn";
    };
}

function checkForWin() {

}