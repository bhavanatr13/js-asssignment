
// 20.1

const data = [20, 15, 22, 25, 18];
const firstAbove20 = data.find(value => value > 20);             
console.log(firstAbove20); 

//output:22



// 20.2


const values = [20, 19, 30, 12, 10];
const firstBelow20 = values.find(val => val < 20);
console.log(firstBelow20);                                

// Output: 19



// 20.3

const users = [
  { id: 101, name: "Bhavana" },
  { id: 102, name: "Tara" },
  
];


const targetId = 102;

const filteredUser = users.filter(user => user.id === targetId);

console.log(filteredUser);                                     

//Output:[ { id: 102, name: 'Tara' } ]



// 20.4

const numbers = [90, 89, 56, 45];

const result = numbers.map(num => {
  return `${num} is ${num % 2 === 0 ? 'even' : 'odd'}`;
});

console.log(result);  

//output:[ '90 is even', '89 is odd', '56 is even', '45 is odd' ]