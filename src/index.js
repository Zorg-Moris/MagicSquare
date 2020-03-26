"use strict";

function displayStartSquare(array, id) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let cell = document.getElementById(id);
            let div = document.createElement("div");
            div.classList.add("cell");
            div.innerHTML = array[i][j];
            cell.appendChild(div);
        }
    }
};


function displayInfo(total, timer) {
    let res = document.getElementById("result");
    res.innerHTML = total;
    let time = document.getElementById("timer");
    time.innerHTML = timer;
}

//test array
// let magicSquare = [
//     [4, 7, 1],
//     [5, 9, 2],
//     [8, 6, 5]
// ];

let magicSquare = [
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6]
];

let newMagicSquare = magicSquare;
const magicConst = 15;

displayStartSquare(magicSquare, "firstSquare");

 function magicSquareFunc(magicSquare) {
            let totalCoast = 0;
            let digitCount = 0;

    for (let i = 0, length = magicSquare.length; i < length; i++) {
        let resultColumn = 0;
        let resultRow = 0;
        let arrayColumn = [];
        let arrayRow = [];

        for (let j = 0, length = magicSquare.length; j < length; j++) {
            if (j >= i) {
                arrayColumn.push(magicSquare[j][i]);
            }
            resultColumn = magicSquare[j][i] + resultColumn;
        }

        if (resultColumn !== magicConst) {
            let difference = Math.abs(resultColumn - magicConst);
            if (resultColumn > magicConst) {
                let index = arrayColumn.indexOf(Math.max(...arrayColumn));
                let res = arrayColumn[index] - difference;
                totalCoast = totalCoast + difference;
                newMagicSquare[index + digitCount][i] = res;
            }

            if (resultColumn < magicConst) {
                let index = arrayColumn.indexOf(Math.min(...arrayColumn));
                let res = arrayColumn[index] + difference;
                totalCoast = totalCoast + difference;
                newMagicSquare[index + digitCount][i] = res;
            }
        }

        digitCount = i === 1 ? digitCount + 1 : digitCount;

        for (let j = 0, length = magicSquare.length; j < length; j++) {
            if (j >= i) {
                arrayRow.push(magicSquare[i][j]);
            }
            resultRow = magicSquare[i][j] + resultRow;
        }

        if (resultRow !== magicConst) {
            let difference = Math.abs(resultRow - magicConst);
            if (resultRow > magicConst) {
                let index = arrayRow.indexOf(Math.max(...arrayRow));
                let res = Math.abs(arrayRow[index] - difference);
                totalCoast = totalCoast + difference;
                newMagicSquare[i][index + i] = res;
            }

            if (resultRow < magicConst) {
                let index = arrayRow.indexOf(Math.min(...arrayRow));
                let res = Math.abs(arrayRow[index] + difference);
                totalCoast = totalCoast + difference;
                newMagicSquare[i][index + digitCount] = res;
            }
        }
        digitCount = digitCount !== 2 ? digitCount + 1 : digitCount;
    }
    return totalCoast;
}


let startTime = performance.now();
let totalCoast = magicSquareFunc(newMagicSquare);
let endTime = performance.now();

let timer = endTime - startTime;

displayStartSquare(newMagicSquare, "resSquare");
displayInfo(totalCoast, timer);