## 脊柱型命名
将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
```
function spinalCase(str) {
    var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase();
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
}

spinalCase('This Is Spinal Tap');

```