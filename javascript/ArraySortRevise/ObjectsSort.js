var cars = [
    {
        name: "Suzuki",
        price: "2000"
    },
    {
        name: "Luzuki",
        price: "200"
    },
    {
        name: "Huzuki",
        price: "20000"
    },
    {
        name: "Puzuki",
        price: "1000"
    },

]

// cars.sort(function (a, b) {
//     return a.price - b.price;
// })
// console.log(cars);

function compare(a,b){
    var x=a.name.toUpperCase();
    var y=b.name.toUpperCase();
    if(x>y){
        return 1;
    }
    if(x<y)
    {
        return -1;
    }
    return 0;
}
console.log(cars.sort(compare))
