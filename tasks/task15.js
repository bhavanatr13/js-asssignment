//15.1

function checkMultipleOfThree(num) {
  if (num % 3 === 0) {
    console.log(num + " is a multiple of 3");
  } else {
    console.log(num + " is not a multiple of 3");
  }
}

checkMultipleOfThree(900);

//output:900 is a multiple of 3

//15.2

let A= "I am learning js";
let B = "reactjs";

if (A.includes(B)) {
  console.log(`'${B}' exists in the sentence.`);
} else {
  console.log(`'${B}' does not exist in the sentence.`);
}

//output:'reactjs' does not exist in the sentence






