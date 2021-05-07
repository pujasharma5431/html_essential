var car = [
    {
    name: "Hundai",
    price: "2000"
    },
    {
    name: "Dustur",
    price: "1000"
    },
    {
    name: "BMW",
    price: "5000"
    }

]

car.sort();

// car.sort(function (a, b) {
//     return a.price - b.price;
// })

function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  
  car.sort( compare );

console.log(car);