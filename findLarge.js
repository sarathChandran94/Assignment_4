// 7. Write a JavaScript program that accept two integers and display the larger using
// findLarge() function.

function findLargeFunction() {
let num1 = Number(prompt("Enter the First number:"));
let num2 = Number(prompt("Enter the Second number:"));
function findLarge() {
    return Math.max(num1,num2);
}
console.log(`Answer for Q7.${`\n`}The two numbers are: ${num1},${num2}${`\n`}Largest number: ${findLarge()}`);
}
