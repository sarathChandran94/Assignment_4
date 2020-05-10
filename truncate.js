// 6. Write a JavaScript function to truncate a string if it is longer than the specified
// number of characters

function truncateFunction() {
    let myInp = prompt("Enter the characters:");
    let lim = prompt("Enter the limit(Number): ");
    let inpLength = myInp.length;
    let newInp = myInp.slice(0,lim);
    console.log(`Answer for Q6.${`\n`}Original Input(${inpLength} characters): ${myInp}${`\n`}`);
    console.log(`Truncated output (${lim} characters): ${newInp}`)
}
