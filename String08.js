let string = "programming";
console.log("Original String: " + string);
console.log("duplicate characters in the given string:");
let chars = string.split('');
let duplicates = {};
for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (duplicates[char]) {
        duplicates[char]++;
    } else {
        duplicates[char] = 1;
    }
}

for (let char in duplicates) {
    if (duplicates[char] > 1) {
        console.log(char );
    }
}
