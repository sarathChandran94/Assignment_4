// 8. Write a JavaScript program using for…in to read the objects from an array entered
// by an user and to arrange it in alphabetical order.

let forSort = prompt().split(",");
console.log(`User input: ${forSort}`);
// forSort.sort();
// console.log(`Alphabetically arranged output: ${forSort}`);
let myelem = [];
let Felem = [];
for(myelem of forSort) {
    // console.log(`${myelem}`);
    Felem += [myelem] + "\n";
}
    console.log(`${Felem[0]}`);
