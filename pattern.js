// 10. Write a JavaScript program to construct the following pattern,
// using a nested for loop.

function printPattern() {
let n = 4;
let pat = "";
for(let i=0;i<n;i++) {
    for(let j=n-1;j<i;j++) {
        pat += " ";
    }
    for(let k=0;k<=i;k++) {
        pat += "*";
    }
    pat += "\n";

}
console.log(`Answer for Q.10:${`\n`}${pat}`);
}
