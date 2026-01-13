let string = "abcabcbb"
console.log("Original String: " + string);

function LongestSubstringWithoutRepeatingChars(str) {
    let n = str.length;
    let maxLength = 0;
    let start = 0;
    let usedChar = {};
    for (let i = 0; i < n; i++) {
        let char = str[i];
        if (usedChar[char] !== undefined && usedChar[char] >= start) {
            start = usedChar[char] + 1;
        }
        usedChar[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

let result = LongestSubstringWithoutRepeatingChars(string);
console.log("Length of the longest substring without repeating characters: " + result);
