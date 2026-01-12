let string1 = "programming";
let string2 = "language";
console.log("String 1: " + string1);
console.log("String 2: " + string2);
console.log("after removal of characters of string2 from string1: " + removeChars(string1, string2));

function removeChars(str1, str2) {
    let result = "";
    for (let char of str1) {
        if (!str2.includes(char)) {
            result += char;
        }
    }
    return result;
}
