const getQueryParams = (url) => {
    if (!url)
        return null;
    const paramArr = url.slice(url.indexOf("?") + 1).split("&");
    const params = {};
    paramArr.map((param) => {
        const [key, val] = param.split("=");
        params[key] = decodeURIComponent(val);
    });
    return params;
};

const getAmountInWords = (money) => {
    if (!money)
        return "";
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
        if (!item || item.length > 4)
            return;
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
            resMoney = `${getInfo(money.slice(4, money.length))}万${getInfo(money.slice(0, 4))}`;
            break;
        case money.length < 13:
            resMoney = `${getInfo(money.slice(8, money.length))}亿${getInfo(money.slice(4, 8))}万${getInfo(money.slice(0, 4))}`;
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

const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this);
        }, delay ?? 0);
    };
};

const throttle = (fn, delay) => {
    let timer = null;
    return function () {
        if (timer)
            return;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay ?? 1000);
    };
};

const validatePhoneNum = (phone) => {
    if (!phone)
        return false;
    const reg = /^1[3,4,5,6,7,8,9]\d{9}$/;
    return reg.test(phone);
};

const getDataType = (data) => {
    return Object.prototype.toString
        .call(data)
        .replace(/\[object\s(.+)\]/, "$1")
        .toLowerCase();
};

export { debounce, getAmountInWords, getDataType, getQueryParams, throttle, validatePhoneNum };
