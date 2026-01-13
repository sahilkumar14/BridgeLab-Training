let string = "java is awesome";
console.log("Original String: " + string);

function titleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}   

let titleCasedString = titleCase(string);
console.log("Title Cased String: " + titleCasedString);
