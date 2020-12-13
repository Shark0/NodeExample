let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('NodeJs> ');
rl.prompt();
rl.on('line', (line) => {
    let input = line.trim();
    switch (input) {
        case 'name':
            console.log('king!');
            break;
        case 'code':
            console.log('Node.js');
            break;
        case 'time':
            console.log('2015!');
            break;
        default:
            console.log('Say what? I might have heard \'' + line.trim(), '\'');
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit();
});