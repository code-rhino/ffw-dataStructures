# Sets in javascript
[Video](https://vimeo.com/935020631/6bdd415f1c?share=copy)

### Step 1: Define the Function
Create a function named `findUniqueCharacters` that accepts a single parameter, `str`, which represents the string from which you want to remove repeated characters.

```javascript
function findUniqueCharacters(str) {
    // Steps to process the string will be defined here
}
```

### Step 2: Initialize a Set
Inside the function, initialize a `Set` to store each character from the string. Since a `Set` automatically removes duplicates, only unique characters will be stored.

```javascript
const uniqueChars = new Set();
```

### Step 3: Loop Through the String
Use a `for` loop to iterate over each character in the string. This loop will allow you to examine each character and add it to the `Set`.

```javascript
for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    // Add character to Set in the next step
}
```

### Step 4: Add Each Character to the Set
Within the loop, add each character to the `Set`. If the character is already in the `Set`, it will not be added again. This step ensures all characters in the `Set` are unique.

```javascript
uniqueChars.add(currentChar);
```

Optionally, include a `console.log` statement to output each character being processed. This helps visualize the function's operation when running the script.

```javascript
console.log(currentChar);
```

### Step 5: Return the Set
After the loop completes, return the `Set` containing all the unique characters. Since the `Set` may not be the most useful format for all use cases, you might want to convert it to a string or array before returning, depending on the requirement.

```javascript
return uniqueChars;
```

### Complete Function
Combining all the steps, the complete function looks like this:

```javascript
function findUniqueCharacters(str) {
    const uniqueChars = new Set();
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        console.log(currentChar);
        uniqueChars.add(currentChar);
    }
    return uniqueChars;
}
```

### Step 6: Test the Function
To test the function, define a string and call `findUniqueCharacters`, passing the string as an argument. Print the result to see the unique characters.

```javascript
const inputString = "hello world";
const uniqueCharacters = findUniqueCharacters(inputString);
console.log(uniqueCharacters);  // Output will be: Set { 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' }
```

### Output
The output will display the unique characters from the input string in the form of a `Set`. This shows that duplicate characters are successfully removed, demonstrating the utility of the `Set` data structure in JavaScript for ensuring uniqueness.

This sequence of steps and code samples will help you effectively complete the assignment and demonstrate the practical use of `Sets` to handle unique collections of items in JavaScript.