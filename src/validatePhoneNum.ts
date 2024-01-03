/**
 * 校验手机号码
 * @param {phone} string
 */
const validatePhoneNum = function (phone: string): boolean {
  if (!phone) return false;
  const reg = /^1[3,4,5,6,7,8,9]\d{9}$/;
  return reg.test(phone);
};

export default validatePhoneNum;
