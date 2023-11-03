var data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' },
];
var find = function (origin) {
  //your code are here...
  function _filterFun(key, Reg, arr) {
    return arr.filter((item) => Reg.test(item[key]));
  }
  const that = {
    filterArr: origin,
    where(keys) {
      for (let key in keys) {
        // 遍历where中的过滤条件
        this.filterArr = _filterFun(key, keys[key], this.filterArr);
      }
      return this;
    },
    orderBy(key, seq) {
      if (seq === 'desc') {
        this.filterArr.sort((a, b) => b[key] - a[key]);
      } else {
        this.filterArr.sort((a, b) => a[key] - b[key]);
      }

      return this.filterArr;
    },
  };
  return that;
};
//查找data中，符合条件的数据，并进行排序
var result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy('userId', 'desc');

console.log(result);
