module.exports.magicSquareFunc = (array) => {
    let totalCoast = 0;
    let digitCount = 0;
    const magicConst = 15;
    let newarray = array;

    for (let i = 0; i < array.length; i++) {
        let resultColumn = 0;
        let resultRow = 0;
        let arrayColumn = [];
        let arrayRow = [];

        for (let j = 0; j < array.length; j++) {
            if (j >= i) {
                arrayColumn.push(array[j][i]);
            }
            resultColumn = array[j][i] + resultColumn;
        }

        if (resultColumn !== magicConst) {
            let difference = Math.abs(resultColumn - magicConst);
            if (resultColumn > magicConst) {
                let index = arrayColumn.indexOf(Math.max(...arrayColumn));
                let res = arrayColumn[index] - difference;
                totalCoast = totalCoast + difference;
                newarray[index + digitCount][i] = res;
            }

            if (resultColumn < magicConst) {
                let index = arrayColumn.indexOf(Math.min(...arrayColumn));
                let res = arrayColumn[index] + difference;
                totalCoast = totalCoast + difference;
                newarray[index + digitCount][i] = res;
            }
        }

        digitCount = i === 1 ? digitCount + 1 : digitCount;

        for (let j = 0; j < array.length; j++) {
            if (j >= i) {
                arrayRow.push(array[i][j]);
            }
            resultRow = array[i][j] + resultRow;
        }

        if (resultRow !== magicConst) {
            let difference = Math.abs(resultRow - magicConst);
            if (resultRow > magicConst) {
                let index = arrayRow.indexOf(Math.max(...arrayRow));
                let res = Math.abs(arrayRow[index] - difference);
                totalCoast = totalCoast + difference;
                newarray[i][index + i] = res;
            }

            if (resultRow < magicConst) {
                let index = arrayRow.indexOf(Math.min(...arrayRow));
                let res = Math.abs(arrayRow[index] + difference);
                totalCoast = totalCoast + difference;
                newarray[i][index + digitCount] = res;
            }
        }
        digitCount = digitCount !== 2 ? digitCount + 1 : digitCount;
    }
    return totalCoast;
}