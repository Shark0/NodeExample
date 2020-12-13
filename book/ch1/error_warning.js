let fs = require('fs');
let file = 'error_warn.txt'
let encoding = 'UTF-8';
fs.readFile(file, encoding, (err, data) => {
    if(err) {
        console.error("err - \n %s", err);
        console.error("warn - \n %s", err);
    } else {
        console.log(data);
    }
})