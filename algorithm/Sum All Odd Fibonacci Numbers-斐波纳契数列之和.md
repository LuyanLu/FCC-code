## 斐波纳契数列之和
给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。

例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。

提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。

参考文档：[博客园](http://www.cnblogs.com/meteoric_cry/archive/2010/11/29/1891241.html)，[Issue](https://github.com/FreeCodeCampChina/freecodecamp.cn/issues/19)
```
function sumFibs(num) {
  var fibo = [1, 1];
  var oddSum = 2;
  var irem = 1;
  while(true){
    item = fibo[0] + fibo[1];
    if(num < item){
      return oddSum;
    }
    if(item % 2){
      oddSum += item;    
    }
    fibo[0] = fibo[1];
    fibo[1] = item;
  }
}

sumFibs(4);

```