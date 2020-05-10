// 6. Write a JavaScript function to truncate a string if it is longer than the specified
// number of characters

function truncateFunction() {
    let myInp = prompt("Enter the characters:");
    let inpLength = myInp.length;
    let newInp = myInp.slice(0,10);
    console.log(`Answer for Q6.${`\n`}Original Input(${inpLength} characters): ${myInp}${`\n`}`);

    if(inpLength<=10) {
        console.log(`Input is between the limits: ${newInp}`);
    }
    else{
        console.log(`Truncated Output (10 Characters): ${newInp}`);
    }
}
