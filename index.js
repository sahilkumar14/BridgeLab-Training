// 1 hello world
console.log("Hello, World!");

//2 Variables =>
/*
    let : is used to declare block-scoped variables, variables declared with let can be updated but not re-declared within the same scope.
    const : is used to declare variables that cannot be reassigned, variables declared with const must be initialized at the time of declaration.
    var: is used to globally declare variables, variable declared with var can be re-declared and updated.
*/
let name = "Sahil";    //String data type
let age = 21;      //Number data type
const country = "India";  //Constant variable
let isStudent = true;   //Boolean data type

//3 Object
/*
   it is a collection of key-value pairs.
   key can be string or number.
   value can be of any data type (string, number, boolean, array, object, etc.). 

   Object accessing methods:
   1. Dot Notation: 
      =>objectName.key
      =>it uses a dot (.) to access the value associated with a specific key in the object.

   2. Bracket Notation: 
      =>objectName["key"]
      => it uses square brackets ([]) to access the value associated with a specific key in the object.
      => it is useful when the key is stored in a variable or when the key contains special characters or spaces.
*/
let obj = {                   //object data type
    name: "Sahil",
    age: 21,
    country: "India",
    isStudent: true
}

/*
    console.log() => is used to print the output to the console.
    it can display strings, numbers, variables, and more.
    it can also used to print multiple values by separating them with commas.
    it can also display objects and arrays in a readable format.

    console.error() => is used to display error messages in the console.
    It is useful for debugging and indicating issues in the code.
    it shows the message in red color in the console to differentiate it from regular log messages.

    console.table() => is used to display data in a tabular format.
    It is particularly useful for displaying arrays or objects.
    it shows the data in rows and columns, making it easier to read and understand.

    console.warn() => is used to display warning messages in the console.
    It is useful for indicating issues or cautionary information.
    it shows the message in yellow color in the console to differentiate it from regular log messages.

    console.end() => is used to end the console output.
    it shows that the console output has ended.
 */
console.log("Name:", name); // Display the variable(name) value
console.log("Age:", age);   // Display the variable(age) value
console.log("Country:", country);  // Display the constant variable(country) value
console.log("Is Student:", isStudent);  // Display the variable(isStudent) value
console.log("Object:", obj);  // Display the object(obj) value

console.table(obj);  // Display the object(obj) in tabular format

console.error("This is an error message.");  // Display an error message

console.warn("This is a warning message.");  // Display a warning message

console.log("End of console output.");  // Indicate the end of console output

//Data types
/*
     1. Primitive Data types:
       => integer (number) : whole numbers without decimal points
       => double (number) : numbers with decimal points
       => string : sequence of characters enclosed in quotes
       => char : single character enclosed in quotes
       => boolean : true or false
       => float (number) : numbers with decimal points (single precision)
       => null : represent the absence of any value for a variable
       => undefined : variable that has been declared but not assigned a value

    2. Non-Primitive Data types:
       => object : collection of key-value pairs
       => array : ordered collection of values
       => function : block of reusable code, designed to perform a specific task
 */

let score;  //it shows undefined because no value is assigned
let height = null;  //it shows null because it is explicitly assigned to null
console.log("Score:", score);   
console.log("Height:", height);

//4 Operators
/*
   Arithmetic Operators:
   1. (+) => used to perform addition.
   2. (-) => used to perform subtraction.
   3. (*) => used to perform multiplication.
   4. (/) => used to perform division.
   5. (%) => used to find the remainder.

   Assignment Operators:
   1. (=) => used to assign data to variable.
   2. (+=) => perform addition then assign. 
   3. (-=) => perform subtraction then assign.
   4. (*=) => perform multiplication then assign.
   5. (/=) => perform division then assign.
   6. (%=) => perform modulus then assign.
   
   Comparsion Operators:
    1. (==) => checks equality of values.
    2. (===) => checks equality of values and data types.
    3. (!=) => checks inequality of values.
    4. (!==) => checks inequality of values and data types.
    5. (>) => greater than.
    6. (<) => less than.
    7. (>=) => greater than or equal to.
    8. (<=) => less than or equal to.

    Logical Operators:
    1. (&&) => logical AND.
    2. (||) => logical OR.
    3. (!) => logical NOT.
    4. (^) => logical XOR.

    Bitwise Operators:
    1. (&) => bitwise AND.
    2. (|) => bitwise OR.
    3. (^) => bitwise XOR.
    4. (~) => bitwise NOT.
    5. (<<) => left shift.
    6. (>>) => right shift.

*/
let a = 10;  //assigning value 10 to variable a
let b = 5;   //assigning value 5 to variable b

console.log("Logical AND: ",a && b); // Logical AND
console.log("Left Shift: ", a << b); // Left Shift
console.log("a =", a);
console.log("b =", b);

let sum = a + b;  //Perform addition
let difference = a - b;  //Perform subtraction

console.log("Sum(a+b):", sum);
console.log("Difference(a-b):", difference);

//Conditional Statements

/*
   1. if statement: used to execute a block of code if a specified condition is true.
   2. if...else statement: used to execute one block of code if a specified condition is true, and another block of code if the condition is false.
   3. else if statement: used to specify a new condition to test, if the first condition is false.
   4. switch statement: used to perform different actions based on different conditions.
*/

let loginAge = 18;

if(loginAge  >= 18){
    console.log("Allowed to login.");
} else {
    console.log("Not allowed to login.");
}
