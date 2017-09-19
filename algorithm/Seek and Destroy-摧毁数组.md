## 摧毁数组

金克斯的迫击炮！

实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
```
function destroyer(arr, rest) {
  // Remove all the values
  var args = Array.from(arguments);
  firstArg = args.shift();

  return firstArg.filter(function(val) {
    return args.indexOf(val) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```