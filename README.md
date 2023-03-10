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
// output: { foo: '123' }
```

### getAmountInWords

金额转中文大写金额

```ts
getAmountInWords(20.5);
// output: 贰拾元伍角
```

### validatePhoneNum

验证手机号码

```ts
validatePhoneNum("122");
// output: false

validatePhoneNum("13888888888");
// output: true
```

### getDataType

数据类型判断

```ts
getDataType({});
// output: object

getDataType("");
// output: string
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
