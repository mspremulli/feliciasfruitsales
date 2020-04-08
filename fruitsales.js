//fruit stand

let storeName="Felicia's Fruit Stand";
let slogan="Buy Felicia";
let fruitNames=['Apple','Orange','Pear'];
let fruitCosts=[1.5,1,2];
let fruitSales=[125,230,59];

console.log(`Come ${slogan} at ${storeName}!`)

for(let i=0;i<fruitCosts.length;i++){
    console.log(`${fruitNames[i]}s cost $${fruitCosts[i].toFixed(2)} each. We sold ${fruitSales[i]} today.`);
}
//add some new loops here
