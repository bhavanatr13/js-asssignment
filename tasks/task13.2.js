
console.log("js is started");

let a = 'bhavana tr '

let array = a.split('');

console.log(array)


let duplicate = array.filter((ele,index) => array.indexOf(ele) !== index)

console.log(duplicate,'dup')

console.log("js is ended");