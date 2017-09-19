## 比较数组
比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
```
function diff(arr1, arr2) {
  var a = arr1.filter(function(item) {
    return arr2.indexOf(item) < 0;
  });
  var b = arr2.filter(function(item) {
    return arr1.indexOf(item) < 0;
  });
  return a.concat(b);
/*  var newArr = [];
  for( var i=0; i<arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }
  for( var j=0; j<arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) < 0) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;*/
}

diff([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);

```