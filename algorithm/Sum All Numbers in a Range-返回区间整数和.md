## 返回区间内所有整数和
我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。

最小的数字并非总在最前面。
```
function sumAll(arr) {
  arr.sort(function(a, b) { return a - b; });
  var sum = 0;
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

```