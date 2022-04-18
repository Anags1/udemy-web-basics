function filterPairs(arr) {
    return arr.filter(callback);   
}

function callback(item) {
    return item % 2 === 0;
}

const myArray = [1, 19, 15, 25, 33, 8, 51, 12];

console.log(filterPairs(myArray));