/**
 * 对象为空对象判断
 * @param {object} object
 * @return {true/false} Boolean
 */
import FUNC_NAME from "./name";
import getDataType from "./getDataType";

const equalNullObject = function (obj: Object) {
  if (getDataType(obj) !== "object")
    throw `${FUNC_NAME.equalNullObject}: 传入的数据类型必须是对象类型`;
  return (
    Object.getOwnPropertyNames(obj).concat(
      Object.getOwnPropertySymbols(obj) as any[]
    ).length === 0
  );
};

export default equalNullObject;
