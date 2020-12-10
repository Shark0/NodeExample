console.log("\n");
console.log("Fibonacci");
console.log("\n");
var fibonacciOutput = 'fibonacci: 1, 1'
var i = 1, j = 1, s = i + j;
while (s <= 1000) {
    fibonacciOutput = fibonacciOutput + ', ' + s;
    i = j;
    j = s;
    s = i + j;
}
console.log(fibonacciOutput);