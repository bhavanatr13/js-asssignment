
const numbers = [1,2,3,4,5];
let max = numbers[0];

for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}

console.log("Largest number is:", max);