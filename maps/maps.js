const countFrequency = (arr) => {
    const frequencyMap = new Map();
    for(const element of arr){
        if(frequencyMap.has(element)){
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        }else {
            frequencyMap.set(element, 1);
        }
        
    }
    return frequencyMap;
}

const number =[2, 3, 4, 5, 2, 3, 3, 4, 4, 4];
const frequency = countFrequency(number);
console.log(frequency)