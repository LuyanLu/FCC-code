## 重复输出字符串

（重要的事情说3遍）

重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
```
function repeat(str, num) {
  if (num < 0) {
    return '';
  }
  if (num === 1) {
    return str;
  }
  return str.concat(repeat(str, num - 1));
}

repeat("abc", 3);

```