
function countEvenOdd(start, end) {
  let even = 0;
  let odd = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log(`Even numbers: ${even}`);
  console.log(`Odd numbers: ${odd}`);
}

countEvenOdd(1, 999);
