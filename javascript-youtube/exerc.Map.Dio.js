const pencil = {
    value: 5,
}

const eraser = {
    value: 7,
}


function mapWithThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> pencil', mapWithThis(nums, pencil));

console.log('this -> eraser', mapWithThis(nums, eraser));