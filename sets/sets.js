function findUniqueCharacters(str) {
    const uniqueChars = new Set();

    for(let i = 0; i < str.length; i++){
        const currentChar = str[i];
        console.log(currentChar);
        uniqueChars.add(currentChar);
    }
    return uniqueChars;
}

const inputString = "hello world";
const uniqueCharacters = findUniqueCharacters(inputString);
console.log(uniqueCharacters);  // Output will be:  { 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' }
