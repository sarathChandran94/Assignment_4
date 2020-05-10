// 1. Write a JavaScript function to get an array and to read the first element of an array.
// Check whether it is prime or not.


function primeFunction() {
    let numb = prompt("Enter the Numbers (separated by a comma):").split(',');
    console.log(`Answer for Q1.${`\n`}Entered array: ${numb.toString()}`);
    let fNumb = Number(numb[0]);
    console.log(`First number: ${fNumb}`);
    function myPrime() {
        if(fNumb == 0) {
            console.log(`It's neither Prime nor Composite.`);
            return false;
        }
        if(fNumb == 1) {
            console.log(`It's neither Prime nor Composite.`);
            return false;
        }
        if(fNumb == 2) {
            console.log(`It's a Prime number.`);
            return true;
        }
        else {
            for (let x = 2; x < fNumb; x++) {
                if(fNumb % x == 0) {
                    console.log(`It's not a Prime number.`);
                    return false;
                }
                else {
                console.log(`It's a Prime number.`);
                }

            }

            return true;
        }
    }
    myPrime();
}
