// COMP3133 Lab Test 1
// Thomas Carlberg 101155271

// Question 2
function delayedPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(num * num)
        }, 500);
    })
}

function delayedPromise2(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(num * num)
        }, 500);
    })
}

Promise.all([delayedPromise(6), delayedPromise2(7)])
    .then(result => console.log(result));