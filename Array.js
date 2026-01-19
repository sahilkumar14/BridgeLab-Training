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
  5. indexOf() => returns the index of the first occurrence of a element, returns -1 if not found.
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


let obj = [
    {"_id":1,"quantity":5,"price":25,"targetPrice":100},
    {"_id":2,"quantity":10,"price":15,"targetPrice":120},
    {"_id":3,"quantity":6,"price":35,"targetPrice":100},
    {"_id":4,"quantity":5,"price":55,"targetPrice":150},
    {"_id":5,"quantity":5,"price":55,"targetPrice":150}
];

let res1 = obj.filter((para) => para.quantity > 5 && para.price < 50 && para.targetPrice > 50);
console.log(res1);

let json = `[
{"_id":{"$oid":"64c2342de32f4a51b19b924e"},"name":"Electronics","slug":"electronics"},
{"_id":{"$oid":"64c2342de32f4a51b19b924f"},"name":"Home & Kitchen","slug":"home-kitchen"},
{"_id":{"$oid":"64c2342de32f4a51b19b9250"},"name":"Fashion","slug":"fashion"},
{"_id":{"$oid":"64c2342de32f4a51b19b9251"},"name":"Health & Beauty","slug":"health-beauty"},
{"_id":{"$oid":"64c2342de32f4a51b19b9252"},"name":"Sports & Outdoors","slug":"sports-outdoors"},
{"_id":{"$oid":"64c2342de32f4a51b19b9253"},"name":"Toys & Games","slug":"toys-games"},
{"_id":{"$oid":"64c2342de32f4a51b19b9254"},"name":"Automotive","slug":"automotive"},
{"_id":{"$oid":"64c2342de32f4a51b19b9255"},"name":"Books & Stationery","slug":"books-stationery"},
{"_id":{"$oid":"64c2342de32f4a51b19b9256"},"name":"Food & Beverages","slug":"food-beverages"},
{"_id":{"$oid":"64c2342de32f4a51b19b9257"},"name":"Pet Supplies","slug":"pet-supplies"},
{"_id":{"$oid":"64c2342de32f4a51b19b9258"},"name":"Furniture","slug":"furniture"},
{"_id":{"$oid":"64c2342de32f4a51b19b9259"},"name":"Jewelry & Accessories","slug":"jewelry-accessories"},
{"_id":{"$oid":"64c2342de32f4a51b19b925a"},"name":"Garden & Outdoor","slug":"garden-outdoor"},
{"_id":{"$oid":"64c2342de32f4a51b19b925b"},"name":"Electrical Appliances","slug":"electrical-appliances"},
{"_id":{"$oid":"64c2342de32f4a51b19b925c"},"name":"Baby & Kids","slug":"baby-kids"},
{"_id":{"$oid":"64c2342de32f4a51b19b925d"},"name":"Office Supplies","slug":"office-supplies"},
{"_id":{"$oid":"64c2342de32f4a51b19b925e"},"name":"Fitness & Wellness","slug":"fitness-wellness"},
{"_id":{"$oid":"64c2342de32f4a51b19b925f"},"name":"Arts & Crafts","slug":"arts-crafts"},
{"_id":{"$oid":"64c2342de32f4a51b19b9260"},"name":"Music & Instruments","slug":"music-instruments"},
{"_id":{"$oid":"64c2342de32f4a51b19b9261"},"name":"Travel & Luggage","slug":"travel-luggage"}
]`;

let obj2 = JSON.parse(json);

let res2 = obj2.filter((para) => para.name.includes("Health") || para.name.includes("Beauty"));
console.log(res2);



