## 转为罗马数字
将给定的数字转换成罗马数字。

所有返回的 罗马数字 都应该是大写形式。
```
function convert(num) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans =["m","cm","d","cd","c","xc","l","xl","x","ix","v","iv","i"];
  var str = '';
  nums.forEach(function(item, index, array) {
    while (num >= item) {
      num -= item;
      str += romans[index];
    }
  });
 return str.toUpperCase();
}

convert(36);

```