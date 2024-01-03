/**
 * 金额转人民币大写
 * @param money
 * @returns
 */
const getAmountChineseNumeral = function (money): string {
  if (!money) return "";
  let moneyArr = parseFloat(money).toFixed(2).split(".");
  money = moneyArr[0]
    ?.replace(/\b(0+)/g, "")
    .split("")
    .reverse();
  const digit = moneyArr[1]?.replace(/(0+)\b/g, "").split("");
  let resMoney = "";
  const dic = {
    0: "零",
    1: "壹",
    2: "贰",
    3: "叁",
    4: "肆",
    5: "伍",
    6: "陆",
    7: "柒",
    8: "捌",
    9: "玖"
  };
  const dicUnit = {
    0: "",
    1: "拾",
    2: "佰",
    3: "仟"
  };
  const digitDicUnit = {
    0: "角",
    1: "分"
  };
  const getInfo = (item) => {
    if (!item || item.length > 4) return;
    return item
      .map((subItem, index) => {
        if (subItem === "0") {
          return dic[0];
        }
        return `${dic[subItem]}${dicUnit[index]}`;
      })
      .reverse()
      .join("")
      .replace(/(零+)$/g, "");
  };
  switch (true) {
    case money.length < 5:
      resMoney = getInfo(money);
      break;
    case money.length < 9:
      resMoney = `${getInfo(money.slice(4, money.length))}万${getInfo(
        money.slice(0, 4)
      )}`;
      break;
    case money.length < 13:
      resMoney = `${getInfo(money.slice(8, money.length))}亿${getInfo(
        money.slice(4, 8)
      )}万${getInfo(money.slice(0, 4))}`;
      break;
  }
  resMoney = `${resMoney.replace(/零零零/g, "零").replace(/零零/g, "零")}`;
  let digitMoney;
  if (digit) {
    digitMoney = digit
      .map((digitItem, index) => {
        if (digitItem === "0") {
          return;
        }
        return `${dic[digitItem]}${digitDicUnit[index]}`;
      })
      .join("");
  }
  !!digitMoney
    ? (resMoney = `${resMoney ? `${resMoney}元` : resMoney}${digitMoney}`)
    : (resMoney = `${resMoney}元整`);

  return resMoney;
};

export default getAmountChineseNumeral;
