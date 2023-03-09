/**
 * 节流
 **/
const throttle = (fn: () => void, delay?: number) => {
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
