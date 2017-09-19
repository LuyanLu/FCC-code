## 找最小公倍数
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。
```
function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  arr = [];
  for (var i = min; i <= max; i++) {
    arr.push(i);
  }
  function gcd (a, b) {
    if (b) {
      return gcd(b, a % b);
    }
    return a;
  }
  return arr.reduce(function(a, b) {
    return a * b / gcd(a, b);
  });
}


smallestCommons([1,5]);

```