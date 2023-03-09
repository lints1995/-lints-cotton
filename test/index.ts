import C, { getQueryParams } from "../src/index";
console.log("000->", C.getQueryParams("?foo=121"));
console.log("000->", getQueryParams("?foo=121"));
