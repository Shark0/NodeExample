for(let i = 100; i < 1000; i++) {
    let a = parseInt(i / 100);
    let b = parseInt((i - a * 100) / 10);
    let c = parseInt(i - a * 100 - b * 10);
    let sum = a * a * a + b * b * b + c * c * c;
    if(i == sum) {
        console.info('%d', i);
    }
}