function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot compute average of an empty array.");
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
