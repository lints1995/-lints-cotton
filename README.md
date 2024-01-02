## 说明

**通用工具方法库**

## 使用

```shell
npm install @lints/cotton or yarn add @lints/cotton
```

可以全部默认导入，也可以按需导入

```ts
import C, { validatePhoneNum } from "@lints/cotton";
console.log(C.getQueryParams("?foo=121"));
console.log(validatePhoneNum("13888888888"));
```

### 浏览器中使用

```html
<script src="../dist/index.umd.js"></script>
<script>
  $c.getQueryParams("https://www.foo.com?foo=123");
  $c.validatePhoneNum("13888888888");
</script>
```

## 文档

### getQueryParams

获取 url 参数

```ts
getQueryParams("https://www.baidu.com?foo=123");
// 输出: { foo: '123' }
```

### dateFormat

时间戳转 YYYY-MM-DD hh:mm:ss

```ts
dateFormat(1678434136000);
// 输出: 2023-03-10 15:42:16

dateFormat(1678434136000, "YYYY/MM/DD hh:mm:ss");
// 输出: 2023/03/10 15:42:16
```

### getTimeStamp

YYYY-MM-DD hh:mm:ss 转换成毫秒时间戳

```ts
getTimeStamp("2023-03-10 15:42:16");
// 输出: 1678434136000
```

### getAmountChineseNumeral

金额转中文大写金额

```ts
getAmountChineseNumeral(20.5);
// 输出: 贰拾元伍角
```

### validatePhoneNum

验证手机号码

```ts
validatePhoneNum("122");
// 输出: false

validatePhoneNum("13888888888");
// 输出: true
```

### getDataType

数据类型判断

```ts
getDataType({});
// 输出: object

getDataType("");
// 输出: string
```

### throttle

节流函数

```ts
const throttleFn = throttle(foo(), 1000);
throttleFn();
```

### debounce

防抖函数

```ts
const debounceFn = debounce(foo(), 1000);
debounceFn();
```

### equalNullObject

对象是否为空对象

```ts
equalNullObject({});
// 输出: true

equalNullObject({ foo: 1 });
// 输出: false

equalNullObject(123123);
// 输出: 传入的数据类型必须是对象类型
```
