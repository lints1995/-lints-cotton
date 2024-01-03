/**
 * 节流
 **/
const throttle = function (fn: () => void, delay?: number): () => void {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay ?? 1000);
  };
};

export default throttle;
