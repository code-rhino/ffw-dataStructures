# Maps in Javascript

[Video](https://vimeo.com/935013439/cd185f9d1c?share=copy)

### Step 1: Define the Function
Create a function `countFrequency` that takes an array `arr` as its parameter. This function will be used to count how many times each element appears in the array.

```javascript
const countFrequency = (arr) => {
    // Function body will be defined in the next steps
};
```

### Step 2: Initialize a Map
Inside the function, initialize a new `Map` object called `frequencyMap`. This map will store each element of the array as a key and its corresponding frequency as the value.

```javascript
const frequencyMap = new Map();
```

### Step 3: Loop Through the Array
Use a `for...of` loop to iterate through each element of the array. This loop will help in examining each element to either initialize its frequency or update it.

```javascript
for (const element of arr) {
    // Check and update frequency inside the loop
}
```

### Step 4: Check and Update Frequency
Inside the loop, use an `if` statement to check if the element is already a key in the `frequencyMap`. If it is, increment its value by one. If it is not, set its value to 1.

```javascript
if (frequencyMap.has(element)) {
    frequencyMap.set(element, frequencyMap.get(element) + 1);
} else {
    frequencyMap.set(element, 1);
}
```

### Step 5: Return the Frequency Map
After the loop completes, return the `frequencyMap` from the function. This map contains the frequency of all elements.

```javascript
return frequencyMap;
```

### Complete Function
Here is how the complete function looks:

```javascript
const countFrequency = (arr) => {
    const frequencyMap = new Map();
    for (const element of arr) {
        if (frequencyMap.has(element)) {
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
            frequencyMap.set(element, 1);
        }
    }
    return frequencyMap;
};
```

### Step 6: Test the Function
To test the function, define an array with some repeating numbers and call `countFrequency` passing this array. Then, log the output to see the frequency of each element.

```javascript
const numbers = [2, 3, 4, 5, 2, 3, 3, 4, 4, 4];
const frequency = countFrequency(numbers);
console.log(frequency);
```

### Output
The output will be a `Map` object showing the frequency of each element. The elements will appear as keys in the map with their counts as values. The output in the console will represent this map showing how many times each number occurs in the array.

By following these steps, you can successfully create a JavaScript function to count the frequency of elements in an array using a map, demonstrating efficient data handling and manipulation.