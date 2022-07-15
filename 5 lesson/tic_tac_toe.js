/**
 * Tic-Tac-Toe Checker
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
[0, 1, 2],
[2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots and no winners),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw, all spots are filled).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 */
//

let arr = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0],
];

// function ttt(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(0)) return console.log('-1');
//     if (
//       ((arr[0][0] === arr[0][1]) === arr[0][2] ||
//         (arr[1][0] === arr[1][1]) === arr[1][2] ||
//         (arr[2][0] === arr[2][1]) === arr[2][2] ||
//         (arr[0][0] === arr[1][0]) === arr[2][0] ||
//         (arr[0][1] === arr[1][1]) === arr[2][1] ||
//         (arr[0][2] === arr[1][2]) === arr[2][2] ||
//         (arr[0][0] === arr[1][1]) === arr[2][2] ||
//         (arr[0][2] === arr[1][1]) === arr[2][0]) === 1
//     )
//       return console.log('1');
//   }
//   return console.log('2');
// }

// console.log(ttt(arr));

function ticTacToeChecker(arr) {
  // Your code here
  let boardArray = arr.split("");
  let winner = "";
  let row1 = boardArray[0] + boardArray[1] + boardArray[2];
  let row2 = boardArray[3] + boardArray[4] + boardArray[5];
  let row3 = boardArray[6] + boardArray[7] + boardArray[8];
  let col1 = boardArray[0] + boardArray[3] + boardArray[6];
  let col2 = boardArray[1] + boardArray[4] + boardArray[7];
  let col3 = boardArray[2] + boardArray[5] + boardArray[8];
  let diag1 = boardArray[0] + boardArray[4] + boardArray[8];
  let diag2 = boardArray[2] + boardArray[4] + boardArray[6];
  if (row1 === "XXX" || row1 === "OOO") {
    winner = row1[0];
  } else if (row2 === "XXX" || row2 === "OOO") {
    winner = row2[0];
  } else if (row3 === "XXX" || row3 === "OOO") {
    winner = row3[0];
  } else if (col1 === "XXX" || col1 === "OOO") {
    winner = col1[0];
  } else if (col2 === "XXX" || col2 === "OOO") {
    winner = col2[0];
  } else if (col3 === "XXX" || col3 === "OOO") {
    winner = col3[0];
  } else if (diag1 === "XXX" || diag1 === "OOO") {
    winner = diag1[0];
  } else if (diag2 === "XXX" || diag2 === "OOO") {
    winner = diag2[0];
  }
  if (winner === "X") { return 1; };
  if (winner === "O") { return 2; };
  if (winner === "") { return 0; };
} 
ticTacToeChecker(arr)