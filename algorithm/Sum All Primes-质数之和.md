## 质数之和
求小于等于给定数值的质数之和。

只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

给定的数不一定是质数。
```
function sumPrimes(num) {
  var arr = [];
  var ifPrime = function(num){
    if(num < 2){
      return false;
    }
    if(num === 2){
      return true;
    }
    if(num % 2 === 0){
      return false;
    }
    for(var i = 3; i <= Math.sqrt(num); i+=2){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  };
  for(var i = 2; i <= num; i++){
    if(ifPrime(i)){
      arr.push(i);
    }
  }
  return arr.reduce(function(prev,cur,index,array){
     return prev + cur;
  },0);
}

sumPrimes(10);

```