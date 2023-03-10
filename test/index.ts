// import C, { getQueryParams } from "../src/index";
import C, { validatePhoneNum } from "../dist/index";
console.log(C.getQueryParams("?foo=121"));
console.log(validatePhoneNum("13888888888"));
