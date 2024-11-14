console.log("Hello World");

const params = process.argv; //process => obj /// argv => key
const node = params[0];
const filePath = params[1];

// console.log(params);
console.log(node);
console.log(filePath);

const myWord = params[2];

if (myWord) {
  console.log("Hello", myWord);
  console.log(`Hello ${myWord}`);
} else {
  console.log("nessuna parola inserita come parametro");
}

// myWord
//   ? console.log(`Hello ${myWord}`)
//   : console.log("nessun parametro inserito");
