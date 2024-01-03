/**
 * @param {s} string 接收YYYY-MM-DD hh:mm:ss日期字符串
 * 获取13位毫秒时间戳
 */
const getTimeStamp = (s?: string): number => {
  return !s ? new Date().valueOf() : new Date(s).valueOf();
};
export default getTimeStamp;
