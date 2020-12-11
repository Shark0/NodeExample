let object1 = {
    "shark1": "a",
    "shark2": "b",
    "shark3": "c"
}
console.log(object1.shark1);
console.log(Object.keys(object1));
console.log(Object.values(object1));

for(let key in Object.keys(object1)) {
    console.log('key: ' + key);
}

Object.keys(object1).forEach(key => {
    console.log('key: ' + key);
});

for(let value in Object.values(object1)) {
    console.log('value: ' + value);
}

Object.values(object1).forEach(value => {
    console.log('value: ' + value);
});
