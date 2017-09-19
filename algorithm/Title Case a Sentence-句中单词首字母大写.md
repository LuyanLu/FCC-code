## 句中单词首字母大写

确保字符串的每个单词首字母都大写，其余部分小写。

像'the'和'of'这样的连接符同理。
```
function titleCase(str) {
 return str.split(' ').map(function(str) {
    return str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase());
  }).join(' ');

}

titleCase("I'm a little tea pot");

```