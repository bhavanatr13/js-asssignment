
const str = "bhavana";
const target = "a";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === target) {
    count++;
  }
}

console.log(`'${target}' appears ${count} times in "bhavana"`);

