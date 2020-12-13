console.trace();
console.trace('start');
let fs = require('fs');
let file = 'error_warn.txt'
let encoding = 'UTF-8';
fs.readFile(file, encoding, (err, data) => {
    console.trace('fs start');
    if(err) {
        console.error("err - \n %s", err);
        console.error("warn - \n %s", err);
    } else {
        console.log(data);
    }
    console.trace('fs end');
})
console.trace('end');