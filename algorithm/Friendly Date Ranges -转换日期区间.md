## 转换日期区间
让日期区间更友好！

把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。

易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).

记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了；在这种情况下，如果月份开始和结束日期如果在同一个月，则结束日期月份也不用写了。

另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。

例如:

包含当前年份和相同月份的时候，makeFriendlyDates(["2017-01-02", "2017-01-05"]) 应该返回 ["January 2nd","5th"]

不包含当前年份，makeFriendlyDates(["2003-08-15", "2009-09-21"]) 应该返回 ["August 15th, 2003", "September 21st, 2009"]。

请考虑清楚所有可能出现的情况，包括传入的日期区间是否合理。对于不合理的日期区间，直接返回 undefined 即可。
```
function makeFriendlyDates(arr) {
  // 月份数组
  var mounth = [
    "January", "February", "March", "April", "May", "June",
    "July",  "August", "September", "October", "November", "December"
  ];
  // 日期后缀数组
  var dayNth = ["st","nd","rd","th"];
  // 设置当前年份
  var nowYear = '2016';
  
  var res = getTime(arr);
  return res;
  
  function getTime(arr) {
    var r = [];
    var timeF = arr[0].split('-');
    var timeB = arr[1].split('-');
    
    var yearB = diffYear(arr[0], arr[1]) ? "" : ", " + timeB[0];
    var mounthB = (timeB[0] === timeF[0] && timeB[1] === timeF[1]) ? "" : mounth[timeB[1]-1] + " ";
    var dayB = parseInt(timeB[2]);
    
    var yearF = ( timeF[0] === nowYear && diffYear(arr[0], arr[1]) ) ? "" : ", " + timeF[0];
    var mounthF = mounth[timeF[1]-1] + " ";
    var dayF = parseInt(timeF[2]);
    
    if( arr[0] === arr[1] ) {
      return [mounth[timeB[1]-1] + " " + dayB + dayNth[nthNum(dayB)] + ", " + timeB[0]];
    }
    
    var rF = mounthF + dayF + dayNth[nthNum(dayF)] + yearF;
    var rB = mounthB + dayB + dayNth[nthNum(dayB)] + yearB;
    r.push(rF, rB);
    
    return r;
  }
  
  function diffYear(time1, time2) {
    var diff = new Date(time2) - new Date(time1);
    if(diff/1000/60/60/24 < 365) {
      return true;
    }
    return false;
  }
  
  function nthNum(x) {
    if(x >= 4) {
      x = 4 - 1;
    }
    else{
      x = x - 1;
    }
    return x;
  }
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

```