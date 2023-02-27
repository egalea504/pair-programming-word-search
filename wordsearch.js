//transpose function loops through the inner arrays of the
//index and pushes the letter into an array
const transpose = function (letters) {
    // defining result array which will contain transposed arrays
    const result = [];
    // loop through outside array and let row equal to an empty array
    for (let i = 0; i < letters[0].length; i++) {
        const row = [];
        // loop through inner array and push items to row
        for (let j = 0; j < letters.length; j++) {
            row.push(letters[j][i]);
        }
        result.push(row);
    }
    return result;
}


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        // if word is found - return true else if false, move on to next mapping test
        if (l.includes(word)) return true;
    }

    // takes letters and will reverse the each array before joining indexes into a string
    const horizontalJoinBackwards = letters.map(ls => ls.reverse().join(''))
    for (l of horizontalJoinBackwards) {
        
        if (l.includes(word)) return true;
        
    }
    // variable containing array that is transposed
    const lettersTransposed = transpose(letters);

    // this loops through each inner array and will join 
    //them into a string - and checks if string letters match word letters
    const verticalJoin = lettersTransposed.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    // takes lettersTransposed and will reverse each array before joining indexes into a string
    // loops through the backwards array and checks if the string matches word
    const verticalJoinBackwards = lettersTransposed.map(ls => ls.reverse().join(''));
    for (l of verticalJoinBackwards) {
        if (l.includes(word)) return true;
    }

    return false;
}
module.exports = wordSearch



// diagonal function - work in progress - will be plugged into our word search function as soon as it's properly implemented
//   const transposeDiagonal = (letters) => {
//     for (let i = 0; i < letters.length; i++) {
//         const diagonals = [];
//         for (let j = 0; j < letters[i].length; j++) {
//             diagonals.push([]);
//         }

//         // i = 0; j = 1; k = 2; diagonals[j] = [S]
//         for (let j = 0; j < diagonals.length; j++) {
//             for (let k = 0; k < letters[j].length - j; k++) {
//                 if (j === 0) {
//                     if (k === 0) {
//                         diagonals[j].push(letters[i][k]);
//                     } else {
//                         diagonals[j].push(letters[i + k][k]);
//                     }
//                 } else {
//                      if (j > 0 && k === 0) {
//                         diagonals[j].push(letters[i][j]);
//                     } else {
//                         diagonals[j].push(letters[k][k + j]);
//                     }
//                 }
//             }
           
//         }
//         console.log(diagonals);
        
//     }
    
// };

    // const lettersTransposedDiagonally = transposeDiagonal(letters);
    // console.log(lettersTransposedDiagonally);

    // const diagonalJoin = lettersTransposedDiagonally.map(ls => ls.join(''));
    // for (l of diagonalJoin) {
    //     if (l.includes(word)) return true;
    // }