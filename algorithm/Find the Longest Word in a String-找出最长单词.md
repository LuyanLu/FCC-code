## 找出最长单词

在句子中找出最长的单词，并返回它的长度。

函数的返回值应该是一个数字。
```
function findLongestWord(str) {
  var words = str.split(' ');
  var longest = 0;
  
  words.forEach(function(word) {
    if (longest < word.length) {
      longest = word.length;
    }
  });
  
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

```