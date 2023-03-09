import getQueryParams from "./getQueryParams";
import getAmountInWords from "./getAmountInWords";
import debounce from "./debounce";
import throttle from "./throttle";
import validatePhoneNum from "./validatePhoneNum";
import getDataType from "./getDataType";
declare const _default: {
    getQueryParams: (url: string) => {};
    getAmountInWords: (money: any) => string;
    validatePhoneNum: (phone: string) => boolean;
    getDataType: (data: any) => any;
    debounce: (fn: () => void, delay?: number) => () => void;
    throttle: (fn: () => void, delay?: number) => () => void;
};
export default _default;
export { getQueryParams, getAmountInWords, validatePhoneNum, getDataType, debounce, throttle };
