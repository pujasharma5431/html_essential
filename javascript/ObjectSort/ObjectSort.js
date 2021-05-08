var fruit = [{

  name: "Kiwi",
  price: "50"
},

{
  name: "Mango",
  price: "30"

},
{
  name: "Graves",
  price: "30"

},
{
  name: "Graphes",
  price: "30"

},
{
  name: "Watermelon",
  price: "40"

},
]

function compare(a,b){

  if(a.name<b.name){
    return -1;
  }
  if(a.name>b.name){
    return 1;
  }
  return 0;
}

console.log(
  fruit.sort(compare));