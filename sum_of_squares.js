// 4. Write a JavaScript program to find the sum of squares of the elements of an array.

function squaresFunction() {
    let myArray = [];
    let sqArray = [];
    let sqSum = 0;
    myArray = prompt("Enter the Numbers (separated by commas): ").split(",");
    for(let i=0;i<myArray.length;i++) {
        sqArray[i] = myArray[i]*myArray[i];
        sqSum += sqArray[i];
    }
    console.log(`Answer for Q.4:${`\n`}Squares of the array '${myArray}' = ${sqArray}${`\n`}The sum of the squares of array '${myArray}' = ${sqSum}`);
}
