## 无连续重复的字母组合
把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准

例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).
```
function permAlone(string) {
 
  var consecutive = /(.)\1/;
 
  return heap(string).filter(function(currentPerm) {
    return !consecutive.test(currentPerm);
  }).length;  
 
  function heap(string) {
    var arr = string.split(''),
      permutations = [];
 
    function swap(a, b) {
      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }
 
    function gen(n) {
      if (n === 1) {
        permutations.push(arr.join(''));
      } else {
        for (var i = 0; i != n; i++) {
          gen(n - 1);
          swap(n % 2 ? 0 : i, n - 1);
        }
      }
    }
 
    gen(arr.length);
    return permutations;
  }
}


permAlone('aab');

```