//initilazation of array
let numbers = [10,20,30,40,50];
console.log("Array Elements:", numbers);

//accessing elements
console.log("first element:",numbers[0]);

//operation
/*
  1. push() => adds an element at the end of the array.
  2. pop() => removes the last element of the array.
  3. shift() => removes the first element of the array.
  4. unshift() => adds an element at the beginning of the array.
  5. indexof() => returns the index of the first occurrence of a element, returns -1 if not found.
  6. includes() => return true if element is present, else false.
  7. slice() => require two arguments(starting index, ending index) and return a new array containing the extracted elements.
  8. [...arr] => know as spread operator, it can be use to copy array elements to another array.
  9. split() => it is used to split a array into multiple sub-arrays based on a specified condition, it takes regex as an argument.
*/

//implementation of operations
console.log("before push() operation: ",numbers);
console.log("after push() operation: ",numbers.push(60)); //adds 60 at the end
console.log("before pop() operation: ",numbers);
console.log("after pop() operation: ",numbers.pop()); //removes last element

console.log("before shift() operation: ",numbers);
console.log("after shift() operation: ",numbers.shift()); //removes first element

console.log("before unshift() operation: ",numbers);
console.log("after  unshift() operation: ",numbers.unshift(0)); //adds 0 at the beginning



let array = [3,5,7,8];

let res = array.map((value) => value * 2);
console.log("array after map operation: ",res);

let array1 = [1,2,3,4,5,6,7,8,9,10];
let result = array1.filter((value) => value%2==0)
                   .map((value) => value * 2);
console.log("array after filter and map: ",result);

let a = [10,20,30,40,50];
let answer = a.find((value) => value > 25);
console.log(answer);


