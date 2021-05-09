//Map

// var number = [1, 2, 3, 4, 5, 6]

// var numberTwice = number.map(doubleGarde)

// function doubleGarde(number) {
//     return number*2;
// }

// console.log(numberTwice);

//Filter 

// var number = [1, 2, 3, 4, 5, 6]

// var numberTwice = number.filte(doubleGarde)

// function doubleGarde(number) {
//     return number>2;
// }

// console.log(numberTwice);

//Reduce 

var number = [1, 2, 3, 4, 5, 6]

var numberTwice = number.reduce(doubleGarde)

function doubleGarde(total,value) {
    return total+value;
}

console.log(numberTwice);