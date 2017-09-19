## 找缺失字母
从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。
```
function fearNotLetter(str) {
  var arr = str.split('');
  var ml = '';
  var item = '';
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length - 1);
  for(var i = start; i < end; i++) {
    item = String.fromCharCode(i);
    if (arr[0] !== item) {
       ml += item;
    } else {
    arr.shift();
    }
  }
  return ml !== '' ? ml : undefined;
}

fearNotLetter("bcf");

```