// COMP3133 Lab Test 1
// Thomas Carlberg 101155271

// Question 1
const mixedArray = ['Matrix', 1, true, 2, false, 3];

function multiplyNumbers(arr) {
    return new Promise((resolve, reject) => {
        var onlyNumbers = arr.filter(item => parseInt(item));
        var result = onlyNumbers.map(item => item * 5);
        resolve(result);
    })
}

multiplyNumbers(mixedArray)
    .then(result => console.log(result))
    .catch(err => console.log(err));