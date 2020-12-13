let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("what is your name? ", (answer) => {
    console.log("My name is", answer);
    rl.close();
})

rl.question("How old are you? ", (answer) => {
    console.log("I'm", answer);
    rl.close();
})