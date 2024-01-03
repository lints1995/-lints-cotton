/**
 * 判断数据类型
 * @param data
 */

const getDataType = function (data): string {
  return Object.prototype.toString
    .call(data)
    .replace(/\[object\s(.+)\]/, "$1")
    .toLowerCase();
};
export default getDataType;
