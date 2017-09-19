## 构造对象
用下面给定的方法构造一个对象.

方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

所有有参数的方法只接受一个字符串参数.

所有的方法只与实体对象交互.
```
var Person = (function(firstAndLast) {
  var name;
  return function(firstAndLast) {
    name = firstAndLast;
    this.getFullName = function() {
      return name;
    };
    
    this.getFirstName = function() {
      var arrName = name.split(' ');
      return arrName[0];
    };
    
    this.getLastName = function() {
      var arrName = name.split(' ');
      return arrName[1];
    };
    
    this.setFirstName = function(first) {
      var arrName = name.split(' ');
      arrName[0] = first;
      name = arrName.join(' ');
      return name;
    };
    
    this.setLastName = function(last) {
      var arrName = name.split(' ');
      arrName[1] = last;
      name = arrName.join(' ');
      return name;
    };
    
    this.setFullName = function(firstAndLast) {
      var arrName = name.split(' ');
      name = firstAndLast;
      return name;
    };
    
  };
})();


var bob = new Person('Bob Ross');
bob.getFullName();

```