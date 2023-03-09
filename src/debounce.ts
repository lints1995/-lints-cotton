/**
 * 防抖
 */

const debounce = (fn: () => void, delay?: number) => {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delay ?? 0);
  };
};

export default debounce;
