console.log("Hello World");

const params = process.argv; //process => obj /// argv => key
const node = params[0];
const filePath = params[1];

// console.log(params);
console.log(node);
console.log(filePath);

const myWord = params[2];

console.log("Hello", myWord);
console.log(`Hello ${myWord}`);
