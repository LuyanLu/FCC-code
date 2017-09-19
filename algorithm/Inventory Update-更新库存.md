## 更新库存
依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
```
function updateInventory(arr1, arr2) {
 
    if (!Array.isArray(arr1)) {
        return [];
    }
 
    var currentInventory = createObject(arr1);
 
    arr2.forEach(function(current) {
        if (currentInventory.hasOwnProperty(current[1])) {
            currentInventory[current[1]] += current[0];
        } else {
            currentInventory[current[1]] = current[0];
        }
    });
 
    
    return createArray(currentInventory).sort(function(a, b) {
        if (a[1] < b[1]) return -1;     
        if (a[1] > b[1]) return 1;      
        return 0;                       
    });
    
    function createObject(array) {
        var obj = {};
        array.forEach(function(current) {
            obj[current[1]] = current[0];
        });
        return obj;
    }
 
    function createArray(object) {
        var array = [];
        for (var key in object) {
            array.push([object[key], key]);
        }
        return array;
    }
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

```