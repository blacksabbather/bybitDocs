"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[93543],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,g=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74735:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Get Product Info",sidebar_label:"Get Product Info",sidebar_position:1},i=void 0,o={unversionedId:"v5/otc/margin-product-info",id:"v5/otc/margin-product-info",title:"Get Product Info",description:"* This endpoint can be queried without api key and secret, then it returns public product data",source:"@site/docs/v5/otc/margin-product-info.mdx",sourceDirName:"v5/otc",slug:"/v5/otc/margin-product-info",permalink:"/bybitDocs/v5/otc/margin-product-info",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Product Info",sidebar_label:"Get Product Info",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"Get Status And Leverage",permalink:"/bybitDocs/v5/spot-margin-uta/status"},next:{title:"Get Margin Coin Info",permalink:"/bybitDocs/v5/otc/margin-coin-convert-info"}},p={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:d};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This endpoint can be queried without api key and secret, then it returns public product data"),(0,r.kt)("li",{parentName:"ul"},"If your uid is bound with OTC loan product, then you can get your private product data by calling the endpoint with api key and secret"),(0,r.kt)("li",{parentName:"ul"},"If your uid is not bound with OTC loan product but api key and secret are also passed, it will return public data only"))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/ins-loan/product-infos")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"productId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product Id. If not passed, then return all products info")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"marginProductInfo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> productId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product Id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> leverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum leverage for this loan product")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> supportSpot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support Spot. 0:false; 1:true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> supportContract"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support USDT Perpetual. 0:false; 1:true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> supportMarginTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support Spot margin trading. 0:false; 1:true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> deferredLiquidationLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Line for deferred liquidation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> deferredLiquidationTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Time for deferred liquidation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> withdrawLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line for withdrawal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> transferLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line for transfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> spotBuyLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line for Spot buy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> spotSellLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line for Spot trading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> contractOpenLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line for USDT Perpetual open position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> liquidationLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Line for liquidation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> stopLiquidationLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Line for stop liquidation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> contractLeverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The allowed default leverage for USDT Perpetual")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> transferRatio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The transfer ratio for loan funds to transfer from Spot wallet to Contract wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> spotSymbols"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The whitelist of spot trading pairs ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If ",(0,r.kt)("inlineCode",{parentName:"td"},"supportSpot"),'="0", then it returns "[]"'),(0,r.kt)("li",null,"If empty array, then you can trade any symbols"),(0,r.kt)("li",null,"If not empty, then you can only trade listed symbols")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> contractSymbols"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The whitelist of contract trading pairs ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If ",(0,r.kt)("inlineCode",{parentName:"td"},"supportContract"),'="0", then it returns "[]"'),(0,r.kt)("li",null,"If empty array, then you can trade any symbols"),(0,r.kt)("li",null,"If not empty, then you can only trade listed symbols")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> supportUSDCContract"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support USDC contract. ",(0,r.kt)("inlineCode",{parentName:"td"},"'0'"),":false; ",(0,r.kt)("inlineCode",{parentName:"td"},"'1'"),":true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> supportUSDCOptions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support Option. ",(0,r.kt)("inlineCode",{parentName:"td"},"'0'"),":false; ",(0,r.kt)("inlineCode",{parentName:"td"},"'1'"),":true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDTPerpetualOpenLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line to open USDT Perpetual position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDCContractOpenLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line to open USDC Contract position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDCOptionsOpenLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line to open Option position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDTPerpetualCloseLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line to trade USDT Perpetual")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDCContractCloseLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line to trade USDC Contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDCOptionsCloseLine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict line to trade Option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDCContractSymbols"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The whitelist of USDC contract trading pairs ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If ",(0,r.kt)("inlineCode",{parentName:"td"},"supportContract"),'="0", then it returns "[]"'),(0,r.kt)("li",null,"If no whitelist symbols, it is ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"),", and you can trade any"),(0,r.kt)("li",null,'If supportUSDCContract="0", it is ',(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDCOptionsSymbols"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The whitelist of Option symbols ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If ",(0,r.kt)("inlineCode",{parentName:"td"},"supportContract"),'="0", then it returns "[]"'),(0,r.kt)("li",null,"If no whitelisted, it is ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"),", and you can trade any"),(0,r.kt)("li",null,'If supportUSDCOptions="0", it is ',(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> marginLeverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The allowable maximum leverage for Spot margin trading. If ",(0,r.kt)("inlineCode",{parentName:"td"},"supportMarginTrading"),'=0, then it returns ""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDTPerpetualLeverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object ",(0,r.kt)("ul",null,(0,r.kt)("li",null,'If supportContract="0", it is ',(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("li",null,"If no whitelist USDT perp symbols, it returns all trading symbols and leverage by default"),(0,r.kt)("li",null,"If there are whitelist symbols, it return those whitelist data")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> leverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum leverage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> USDCContractLeverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object ",(0,r.kt)("ul",null,(0,r.kt)("li",null,'If supportUSDCContract="0", it is ',(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("li",null,"If no whitelist USDC contract symbols, it returns all trading symbols and leverage by default"),(0,r.kt)("li",null,"If there are whitelist symbols, it return those whitelist data")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> leverage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum leverage")))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/ins-loan/product-infos?productId=91 HTTP/1.1\nHost: api-testnet.bybit.com\n")),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "marginProductInfo": [\n            {\n                "productId": "91",\n                "leverage": "4.00000000",\n                "supportSpot": 1,\n                "supportContract": 0,\n                "withdrawLine": "",\n                "transferLine": "",\n                "spotBuyLine": "",\n                "spotSellLine": "",\n                "contractOpenLine": "",\n                "liquidationLine": "0.75",\n                "stopLiquidationLine": "0.35000000",\n                "contractLeverage": "0",\n                "transferRatio": "0",\n                "spotSymbols": [],\n                "contractSymbols": [],\n                "supportUSDCContract": 0,\n                "supportUSDCOptions": 0,\n                "USDTPerpetualOpenLine": "",\n                "USDCContractOpenLine": "",\n                "USDCOptionsOpenLine": "",\n                "USDTPerpetualCloseLine": "",\n                "USDCContractCloseLine": "",\n                "USDCOptionsCloseLine": "",\n                "USDCContractSymbols": [],\n                "USDCOptionsSymbols": [],\n                "marginLeverage": "0",\n                "USDTPerpetualLeverage": [],\n                "USDCContractLeverage": [],\n                "deferredLiquidationLine":"",\n                "deferredLiquidationTime":"",\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1689747746332\n}\n')))}s.isMDXComponent=!0}}]);