const e=e=>{if(!e)return null;const t=e.slice(e.indexOf("?")+1).split("&"),l={};return t.map((e=>{const[t,r]=e.split("=");l[t]=decodeURIComponent(r)})),l},t=e=>{var t,l;if(!e)return"";let r=parseFloat(e).toFixed(2).split(".");e=null===(t=r[0])||void 0===t?void 0:t.replace(/\b(0+)/g,"").split("").reverse();const n=null===(l=r[1])||void 0===l?void 0:l.replace(/(0+)\b/g,"").split("");let i="";const o={0:"零",1:"壹",2:"贰",3:"叁",4:"肆",5:"伍",6:"陆",7:"柒",8:"捌",9:"玖"},s={0:"",1:"拾",2:"佰",3:"仟"},a={0:"角",1:"分"},c=e=>{if(e&&!(e.length>4))return e.map(((e,t)=>"0"===e?o[0]:`${o[e]}${s[t]}`)).reverse().join("").replace(/(零+)$/g,"")};switch(!0){case e.length<5:i=c(e);break;case e.length<9:i=`${c(e.slice(4,e.length))}万${c(e.slice(0,4))}`;break;case e.length<13:i=`${c(e.slice(8,e.length))}亿${c(e.slice(4,8))}万${c(e.slice(0,4))}`}let u;return i=`${i.replace(/零零零/g,"零").replace(/零零/g,"零")}`,n&&(u=n.map(((e,t)=>{if("0"!==e)return`${o[e]}${a[t]}`})).join("")),i=u?`${i?`${i}元`:i}${u}`:`${i}元整`,i},l=(e,t)=>{let l=null;return function(){l&&clearTimeout(l),l=setTimeout((()=>{e.apply(this)}),null!=t?t:0)}},r=(e,t)=>{let l=null;return function(){l||(l=setTimeout((()=>{e.apply(this,arguments),l=null}),null!=t?t:1e3))}},n=e=>{if(!e)return!1;return/^1[3,4,5,6,7,8,9]\d{9}$/.test(e)},i=e=>Object.prototype.toString.call(e).replace(/\[object\s(.+)\]/,"$1").toLowerCase();var o={getQueryParams:e,getAmountInWords:t,validatePhoneNum:n,getDataType:i,debounce:l,throttle:r};export{l as debounce,o as default,t as getAmountInWords,i as getDataType,e as getQueryParams,r as throttle,n as validatePhoneNum};
