// Generate a random TS code snippet
const randomNumber = Math.floor(Math.random() * 10);
let code = '';
if (randomNumber <= 5) {
  code += 'console.log("Hello, world!");';
} else if (randomNumber >= 6 && randomNumber <= 8) {
  code += 'const name: string = "Alice";';
} else {
  code += 'function greet(name: string): void { console.log(`Hello, ${name}!`); }';
}
return code;
