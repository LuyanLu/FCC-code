## 扁平化数组
对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
```
function steamroller(arr) {
2
  // I'm a steamroller, baby
3
  var result = [];
4
  for(var i = 0; i < arr.length; i++){
5
    if(Array.isArray(arr[i])){
6
      result = result.concat(steamroller(arr[i]));
7
    }else{
8
      result.push(arr[i]);
9
    }
10
  }
11
  return result;
12
}
13
​
14
steamroller([1, [2], [3, [[4]]]]);
15
​
```