// 8. Write a JavaScript program using for…in to read the objects from an array entered
// by an user and to arrange it in alphabetical order.


function alphaOrderFunction() {
console.log("Answer for Q8.: ");
let forSort = prompt().split(",");
// console.log(forSort);
console.log("User input: "+forSort);
let myElem = [];
let i = 0;
for(myElem[i] of forSort) {
    myElem;
    i++;
}
myElem.sort();
console.log("Alphabetically arranged output: "+myElem);
}
