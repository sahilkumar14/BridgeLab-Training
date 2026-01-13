let string = "babad"
console.log("Original String: " + string);

function LongestPalindromicSubstring(str){
    const str_list = [];
    let n = str.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j <= n; j++){
            str_list.push(str.slice(i, j));
        }
    }
    let maxLength = 0;
    let longestPalindrome = "";
    for(let substr of str_list){
        let rev_substr = substr.split('').reverse().join('');
        if(substr === rev_substr && substr.length > maxLength){
            maxLength = substr.length;
            longestPalindrome = substr;
            str_list.push(longestPalindrome);
        }
    }
    return str_list;
}

let result = LongestPalindromicSubstring(string);
console.log("All possible substrings: " + result);