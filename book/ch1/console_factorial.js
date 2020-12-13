let readline = require('readline');
var rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("inpu factorial number: ", (input) => {
    let result = input + "! = " + factorial(input);
    console.info(result);
    rl.close();
});

function factorial(n) {
    let result = 1;
    if(n > 0) {
        if(n == 1) {
            return result;
        } else {
            result = n * factorial(n - 1);
        }
    }
    return result;
}