## 改动字符串
把指定的字符串翻译成 pig latin。

Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。

如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
```
function translate(str) {
  var yuan = ["a","e","i","o","u"];
  if(yuan.indexOf(str[0]) >= 0){
    return str + "way";
  }
  while(yuan.indexOf(str[0]) < 0){
    str = str.substr(1) + str.substr(0,1);
  }
  return str + "ay";
}

translate("consonant");

```