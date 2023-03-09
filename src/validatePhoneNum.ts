/**
 * 校验手机号码
 * @param {string} phone
 */
const validatePhoneNum = (phone: string) => {
  if (!phone) return false;
  const reg = /^1[3,4,5,6,7,8,9]\d{9}$/;
  return reg.test(phone);
};

export default validatePhoneNum;
