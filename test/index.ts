/**
 * 测试环境入口文件
 */
import C from "../src/index";
import FUNC_NAME from "../src/name";

console.log(
  FUNC_NAME.getQueryParams,
  C.getQueryParams("https://www.foo.com?foo=121")
);
console.log(FUNC_NAME.validatePhoneNum, C.validatePhoneNum("13888888888"));
console.log(
  FUNC_NAME.getAmountChineseNumeral,
  C.getAmountChineseNumeral("101")
);
console.log(FUNC_NAME.getDataType, C.getDataType(null));
console.log(FUNC_NAME.getDataType, C.getDataType(""));
const foo = () => {};
const fooDebounce = C.debounce(foo);
const fooThrottle = C.throttle(foo);
fooDebounce();
fooThrottle();
console.log(
  FUNC_NAME.dateFormat,
  C.dateFormat(1678434136000, "YYYY-MM-DD hh:mm:ss")
);
console.log(FUNC_NAME.getTimeStamp, C.getTimeStamp("2023-03-10 15:42:16"));
console.log(FUNC_NAME.equalNullObject, C.equalNullObject({}));
console.log(FUNC_NAME.equalNullObject, C.equalNullObject({ foo: 1 }));
console.log(FUNC_NAME.equalNullObject, C.equalNullObject(123123));
