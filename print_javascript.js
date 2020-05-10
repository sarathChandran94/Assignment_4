// 9. Write a JavaScript program to print the letters of the word “Javascript” as below in
// each line using for…of.

function printJavascriptFunction() {
    console.log(`Answer for Q9.${`\n`}`)
    let x = ["J","A","V","A","S","C","R","I","P","T"];
    let jav = "";
    for(let i=0; i<x.length; i++) {
        for(elem of x[0]){
            jav += x[i];
            console.log(jav);
        }
    }
}
