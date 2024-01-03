/*
 * 获取路由参数
 * @param {string} url
 * @returns
 * */
const getQueryParams = (url: string): any => {
  if (!url) return null;
  const paramArr = url.slice(url.indexOf("?") + 1).split("&");
  const params = {};
  paramArr.map((param) => {
    const [key, val] = param.split("=");
    params[key] = decodeURIComponent(val);
  });
  return params;
};
export default getQueryParams;
