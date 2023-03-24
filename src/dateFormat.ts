/**
 * 时间戳转日期格式
 * @param times
 * @returns
 */

const dateFormat = (time: number, format = "YYYY-MM-DD hh:mm:ss") => {
  try {
    if (!time) return "";
    const len: number = String(parseInt(String(time))).length;
    if (len != 10 && len != 13) throw "timestamp format error";
    time = len === 10 ? time * 1000 : time;
    const [front, after] = format.split(" ")
      ? format.split(" ")
      : "YYYY-MM-DD hh:mm:ss";
    const date = new Date(time);
    const Y = date.getFullYear();
    const M = addZero(date.getMonth() + 1);
    const D = addZero(date.getDate());
    const h = addZero(date.getHours());
    const m = addZero(date.getMinutes());
    const s = addZero(date.getSeconds());
    const frontArr = front.split("");
    const afterArr = after.split("");
    return `${Y}${frontArr[4]}${M}${frontArr[7]}${D} ${h}${afterArr[2]}${m}${afterArr[5]}${s}`;
  } catch (err) {
    throw "timestamp format error";
  }
};
const addZero = (num: number) => {
  // 不满10前面加0
  return num < 10 ? `0${num}` : num;
};

export default dateFormat;
