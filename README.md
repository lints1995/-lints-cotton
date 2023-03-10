## 说明

**通用工具方法库**

## 使用

```shell
npm install @lints/cotton or yarn add @lints/cotton
```

<p style="font-size:14px">可以全部默认导入，也可以按需导入</p>

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

<p style="font-size:14px">获取 url 参数</p>

```ts
getQueryParams("https://www.baidu.com?foo=123");
// output: { foo: '123' }
```

### getAmountInWords

<p style="font-size:14px">金额转中文大写金额</p>

```ts
getAmountInWords(20.5);
// output: 贰拾元伍角
```

### validatePhoneNum

<p style="font-size:14px">验证手机号码</p>

```ts
validatePhoneNum("122");
// output: false

validatePhoneNum("13888888888");
// output: true
```

### getDataType

<p style="font-size:14px">数据类型判断</p>

```ts
getDataType({});
// output: object

getDataType("");
// output: string
```

### throttle

<p style="font-size:14px">节流函数</p>

```ts
const throttleFn = throttle(foo(), 1000);
throttleFn();
```

### debounce

<p style="font-size:14px">防抖函数</p>

```ts
const debounceFn = debounce(foo(), 1000);
debounceFn();
```
