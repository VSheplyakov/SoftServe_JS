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
 // [[0, 0, 1], [0, 1, 2], [2, 1, 0]];

 let arr = [[0, 0, 1], [0, 1, 2], [2, 1, 0]];
 let arr1 = arr[0];
 let arr2 = arr[1];
 let arr3 = arr[2];

 console.log(arr1)
 console.log(arr[0][2])

 for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(0)) 
    return console.log('-1')
    if ((arr1[0] === arr1[1] === arr1[2] && arr2[0] === arr2[1] === arr2[2] && arr3[0] === arr3[1] === arr3[2]) === 1) {
        return console.log('1')
    } else if ((arr1[0] === arr1[1] === arr1[2] && arr2[0] === arr2[1] === arr2[2] && arr3[0] === arr3[1] === arr3[2]) === 2)
    return console.log('2')
}
 
