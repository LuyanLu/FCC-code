## 排序并集
写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。

换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。

非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。

请参照下面验证判断中的例子。
```
function unite(arr1, arr2, arr3) {
  var args = Array.from(arguments);
  var arr = args.reduce(function(prev,cur,index,array){
    return prev.concat(cur);
  });
  return Array.from(new Set(arr));
  //return arr.filter(function(item,index,array){
   // return array.indexOf(item) === index;
 // });
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

```