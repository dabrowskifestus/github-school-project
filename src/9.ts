function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(getRandomInt(10));
}
console.log(numbers);
