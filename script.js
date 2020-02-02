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

 const turns = ["X","O","X","O","X","O","X","O","X",];

let playerStatus = document.querySelector("footer p");
let p1Turn = true;
let p2Turn = false;

turns.length % 2 === 1 ? p1Turn = true : p2Turn = true;

if (p1Turn) {
    playerStatus.textContent = "It is player 1's turn";
} else {
    playerStatus.textContent = "It is player 2's turn";
};