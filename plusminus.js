'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let zero = 0;
    let par = 0;
    let impar = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero += 1;
        } else if (arr[i] >= 0) {
            par += 1;
        } else {
            impar += 1;
        }
    }

    const soma = par + impar + zero;
    const rpar = (par / soma).toFixed(6);
    const rimpar = (impar / soma).toFixed(6);
    const rzero = (zero / soma).toFixed(6);
    
    console.log(rpar);
    console.log(rimpar);
    console.log(rzero);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
