/**
 * 防抖
 */

const debounce = function (fn: () => void, delay?: number): () => void {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delay ?? 0);
  };
};

export default debounce;
