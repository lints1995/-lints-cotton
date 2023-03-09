## 说明

**使用 rollup 打包的 ES Module 规范的工具方法库**

## 安装

```shell
npm install @lints/cotton or yarn add @lints/cotton
```

## 文档

### getQueryParams

_获取 url 参数_

```ts
getQueryParams("https://www.baidu.com?foo=123");
// output: { foo: '123' }
```

### getAmountInWords

_金额转中文大写金额_

```ts
getAmountInWords(20.5);
// output: 贰拾元伍角
```

### validatePhoneNum

_验证手机号码_

```ts
validatePhoneNum("122");
// output: false

validatePhoneNum("13888888888");
// output: true
```

### getDataType

_数据类型判断_

```ts
getDataType({});
// output: object

getDataType("");
// output: string
```

### throttle

_节流函数_

```ts
const throttleFn = throttle(foo(), 1000);
throttleFn();
```

### debounce

_防抖函数_

```ts
const debounceFn = debounce(foo(), 1000);
debounceFn();
```
