let n = 0;
console.time("1000 * 1000 times");
let value = 0;
for(let i = 0; i < 1000; i++) {
    for(let j = 0; j < 1000; j++) {
        value ++;
    }
}

console.timeEnd("1000 * 1000 times");
console.info('value: %d', value);