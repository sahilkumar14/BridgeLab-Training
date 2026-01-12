let string = "Hello World";
console.log("Original String: " + string);
console.log("number of vowels in the string: " + countVowels(string));
console.log("number of consonants in the string: " + countConsonants(string));

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
function countConsonants(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
