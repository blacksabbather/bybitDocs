"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[33410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Withdraw",sidebar_label:"Withdraw",sidebar_position:16},i=void 0,o={unversionedId:"v5/asset/withdraw",id:"v5/asset/withdraw",title:"Withdraw",description:"Withdraw assets from your Bybit account. You can make an off-chain transfer if the target wallet address is from Bybit. This means that no blockchain fee will be charged.",source:"@site/docs/v5/asset/withdraw.mdx",sourceDirName:"v5/asset",slug:"/v5/asset/withdraw",permalink:"/bybitDocs/v5/asset/withdraw",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Withdraw",sidebar_label:"Withdraw",sidebar_position:16},sidebar:"v5SideBar",previous:{title:"Get Withdrawable Amount",permalink:"/bybitDocs/v5/asset/delay-amount"},next:{title:"Cancel Withdrawal",permalink:"/bybitDocs/v5/asset/cancel-withdraw"}},s={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),u=p("TabItem"),c={toc:d};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Withdraw assets from your Bybit account. You can make an off-chain transfer if the target wallet address is from Bybit. This means that no blockchain fee will be charged."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"UTA does not have SPOT account"),(0,r.kt)("li",{parentName:"ul"},"How do I know if my account is a UTA account? Call ",(0,r.kt)("a",{parentName:"li",href:"../user/apikey-info#"},"this endpoint"),", and if ",(0,r.kt)("inlineCode",{parentName:"li"},"uta"),"=1, then it is a UTA account."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Make sure you have whitelisted your wallet address ",(0,r.kt)("a",{href:"https://www.bybit.com/user/assets/money-address"},"here")),(0,r.kt)("li",{parentName:"ul"},"Can query by the master UID's api key ",(0,r.kt)("strong",{parentName:"li"},"only")))),(0,r.kt)("admonition",{title:"formula",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"feeType=0:")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"withdrawPercentageFee != 0: ",(0,r.kt)("em",{parentName:"li"},"handlingFee = inputAmount / (1 - withdrawPercentageFee) * withdrawPercentageFee + withdrawFee")),(0,r.kt)("li",{parentName:"ul"},"withdrawPercentageFee = 0: ",(0,r.kt)("em",{parentName:"li"},"handlingFee = withdrawFee"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"feeType=1:")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"withdrawPercentageFee != 0: ",(0,r.kt)("em",{parentName:"li"},"handlingFee = withdrawFee + (inputAmount - withdrawFee) * withdrawPercentageFee")),(0,r.kt)("li",{parentName:"ul"},"withdrawPercentageFee = 0: ",(0,r.kt)("em",{parentName:"li"},"handlingFee = withdrawFee")))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/asset/withdraw/create")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Chain ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"forceChain"),"=0 or 1: this field is ",(0,r.kt)("strong",{parentName:"td"},"required")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"forceChain"),"=2: this field can be null")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"forceChain"),"=0 or 1: fill wallet address, and make sure you add address in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.bybit.com/user/assets/money-address"},"address book")," first. Please note that the address is case sensitive, so use the exact same address added in address book"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"forceChain"),"=2: fill Bybit UID, and it can only be another Bybit main account UID. Make sure you add UID in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.bybit.com/user/assets/money-address"},"address book")," first")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"Required")," if tag exists in the wallet address list."),(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"Note"),": please do not set a tag/memo in the address book if the chain does not support tag")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Current timestamp (ms). Used for preventing from withdraw replay")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"forceChain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not to force an on-chain withdrawal",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),"(default): If the address is parsed out to be an internal address, then internal transfer"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),": Force the withdrawal to occur on-chain"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"2"),": Use UID to withdraw")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the wallet to be withdrawn from ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"SPOT"),"\uff1aspot wallet (default)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"FUND"),"\uff1aFunding wallet")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"feeType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Handling fee option ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),"(default): input amount is the actual amount received, so you have to calculate handling fee manually"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),": input amount is not the actual amount you received, the system will help to deduct the handling fee automatically")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Customised ID, globally unique, it is used for idempotent verification ",(0,r.kt)("li",null,"A combination of letters (case sensitive) and numbers, which can be pure letters or pure numbers and the length must be between 1 and 32 digits"))))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Withdrawal ID")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(m,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.kt)(u,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/asset/withdraw/create HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672196570254\nX-BAPI-RECV-WINDOW: 5000\nX-BAPI-SIGN: XXXXX\nContent-Type: application/json\n\n{\n    "coin": "USDT",\n    "chain": "ETH",\n    "address": "0x99ced129603abc771c0dabe935c326ff6c86645d",\n    "tag": null,\n    "amount": "24",\n    "timestamp": 1672196561407,\n    "forceChain": 0,\n    "accountType": "FUND"\n}\n'))),(0,r.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.withdraw(\n    coin="USDT",\n    chain="ETH",\n    address="0x99ced129603abc771c0dabe935c326ff6c86645d",\n    amount="24",\n    timestamp=1672196561407,\n    forceChain=0,\n    accountType="FUND",\n))\n')))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "id": "10195"\n    },\n    "retExtInfo": {},\n    "time": 1672196571239\n}\n')))}k.isMDXComponent=!0}}]);