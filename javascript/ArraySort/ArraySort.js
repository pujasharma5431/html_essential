var numbers=[3,4,6,7,12,90];


function findMaximumNumber(number){
    return Math.max.apply(null,number);
}

var maxNumber=findMaximumNumber(numbers);

console.log(maxNumber);