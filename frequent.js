// 2. Write a JavaScript program to find the most frequent item of an array.

function frequentFunction() {
    let myArr = prompt("Enter the array (separated by a comma): ").split(",");
    console.log(`User input: ${myArr}`);
    let freq = 1;
    let item;
    let counter = 0;
    function myFrequent() {
        for(let i=0; i<myArr.length; i++) {
            for(let j=i; j<myArr.length; j++) {
                if(myArr[i] == myArr[j]) {
                    counter++;
                }
                if (freq<counter) {
                    freq=counter;
                    item = myArr[i];
                }
            }
            counter = 0;
        }
        console.log(`Most frequent item: ${item} (${freq} times)`);
    }
    myFrequent();
}

//FINISHED!
