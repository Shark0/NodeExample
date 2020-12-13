let readline = require('readline');
let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question('Please enter number? ', (input) => {
   primeNum = ' 2 ';
   for(let i = 3; i < input; i++) {
       let flag = true;
       for(let j = 2; j < i; j++) {
           if(i % j == 0) {
               flag = false;
               break;
           }
       }
       if(flag == true) {
           primeNum = primeNum + i + " ";
       }
   }
   console.log("Prime number > ", primeNum);
   rl.close();
});