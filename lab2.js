// COMP3133 Lab 2 Practice Questions
// Thomas Carlberg 101155271

// Ex 1
function compareNumToTen(value) {
    return new Promise((resolve, reject) => {
        if (value >= 10){
            resolve(value + " is greater than or equal to 10, success!");
        } else {
            reject(value + " is less than 10, error!");
        }
    })
}

compareNumToTen(8)
    .then(result => console.log(result))
    .catch(result => console.log(result))


// Ex 2
function makeUpperCase(words) {
    return new Promise((resolve, reject) => {
        for (word in words) {
            if (typeof(word) != 'string'){
                reject('Error! Not all items in the array are strings!');
            }
        }
        var result = words.map(word => word.toUpperCase());
        resolve(result);
    })
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        for (word in words) {
            if (typeof(word) != 'string'){
                reject('Error! Not all items in the array are strings!');
            }
        }
        var result = words.sort();
        resolve(result);
    })
}

makeUpperCase(['zoo', 'gorilla', 'tiger', 'lion'])
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))


// Ex 3
var promise1 = 101;
var promise2 = 'follow the white';
var promise3 = new Promise(function(resolve, reject) {
    resolve('rabbit... Neo');
});
Promise.all([promise1, promise2, promise3]).then(function(values){
    console.log(values);
})


// Ex 4
const delayedPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    })
}

async function asyncPromise(num) {
    var result = await delayedPromise(num);
    return result;
}

delayedPromise(5)
    .then(result => console.log(result))

asyncPromise(6)
    .then(result => console.log(result))
