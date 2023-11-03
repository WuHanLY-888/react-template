function customReduce(callback, init) {
    let lastReturn = init
    for (let i of this) {
        lastReturn = callback(lastReturn, i, this.indexOf(i), this)
        // console.log(lastReturn);
    }
    return lastReturn

}
Array.prototype.customReduce = customReduce
let list = [1, 2, 3, 4, 5, 6, 7]

for (let i of list) {
    console.log(i);
}
console.log('---------------------------------');
for (let i in list) {
    console.log(i);
}

// const res = list.customReduce((pre, current, index, arr) => {
//     // console.log({ pre, current, index, arr });
//     return pre + current
// }, 0)
// console.log(res);
