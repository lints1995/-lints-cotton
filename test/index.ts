import C from "../src/index";

console.log(C.getQueryParams("?foo=121"));
console.log(C.validatePhoneNum("13888888888"));
console.log(C.getAmountInWords("101"));
console.log(C.getDataType(null));
console.log(C.getDataType(""));
const foo = () => {};
const fooDebounce = C.debounce(foo);
const fooThrottle = C.throttle(foo);
fooDebounce();
fooThrottle();
console.log(C.dateFormat(1678434136000, "YYYY-MM-DD hh:mm:ss"));
console.log(C.getTimeStamp("2023-03-10 15:42:16"));
