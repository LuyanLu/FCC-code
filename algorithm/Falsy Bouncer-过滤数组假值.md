## 过滤数组假值

（真假美猴王）

删除数组中的所有假值。

在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
```
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(val) {
    return (Boolean(val) !== false);
  });
}

bouncer([7, "ate", "", false, 9]);

```