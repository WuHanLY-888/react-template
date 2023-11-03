// var data = [
//   { userId: 8, title: 'title1' },
//   { userId: 11, title: 'other' },
//   { userId: 15, title: null },
//   { userId: 19, title: 'title2' },
// ];
// var find = function (origin) {
//   //your code are here...
//   function _filterFun(key, Reg, arr) {
//     return arr.filter((item) => Reg.test(item[key]));
//   }
//   const that = {
//     filterArr: origin,
//     where(keys) {
//       for (let key in keys) {
//         // 遍历where中的过滤条件
//         this.filterArr = _filterFun(key, keys[key], this.filterArr);
//       }
//       return this;
//     },
//     orderBy(key, seq) {
//       if (seq === 'desc') {
//         this.filterArr.sort((a, b) => b[key] - a[key]);
//       } else {
//         this.filterArr.sort((a, b) => a[key] - b[key]);
//       }

//       return this.filterArr;
//     },
//   };
//   return that;
// };
// //查找data中，符合条件的数据，并进行排序
// var result = find(data)
//   .where({
//     title: /\d$/,
//   })
//   .orderBy('userId', 'desc');

// console.log(result);


// let arr = []

// arr.reduce((pre, current, index, arr) => {
//   // xxx
// }, init)

function customReduce(callback, init) {
  // this 即是数组
  let lastReturn = init
  for (let i in this) {
    lastReturn = callback(lastReturn, this[i], i, this)
  }
  return lastReturn

}

Array.prototype.customReduce = customReduce

let list = [1, 2, 3, 4, 5, 6, 7]

const res = list.customReduce((pre, current, index, arr) => {
  // console.log({ pre, current, index, arr });
  return pre + current
}, 0)

console.log(res);




