"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1325],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),g=o(r),s=n,f=g["".concat(p,".").concat(s)]||g[s]||k[s]||l;return r?a.createElement(f,i(i({ref:e},m),{},{components:r})):a.createElement(f,i({ref:e},m))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=g;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},64747:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_label:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_position:3,slug:"/derivatives/unified/replace-order"},i=void 0,d={unversionedId:"v3/derivatives/rest-unified/order/replace-order",id:"v3/derivatives/rest-unified/order/replace-order",title:"\u4fee\u6539\u59d4\u8a17\u55ae",description:"\u60a8\u53ea\u80fd\u4fee\u6539\u90a3\u4e9b\u672a\u6210\u4ea4\u6216\u8005\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-unified/order/replace-order.mdx",sourceDirName:"v3/derivatives/rest-unified/order",slug:"/derivatives/unified/replace-order",permalink:"/bybitDocs/zh-TW/derivatives/unified/replace-order",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_label:"\u4fee\u6539\u59d4\u8a17\u55ae",sidebar_position:3,slug:"/derivatives/unified/replace-order"}},p={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:o};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u60a8\u53ea\u80fd\u4fee\u6539\u90a3\u4e9b\u672a\u6210\u4ea4\u6216\u8005\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u3002")),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/unified/v3/private/order/replace")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"option"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId. ",(0,n.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,n.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId. ",(0,n.kt)("inlineCode",{parentName:"td"},"orderId"),"\u548c",(0,n.kt)("inlineCode",{parentName:"td"},"orderLinkId"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Order"),": \u666e\u901a\u55ae, ",(0,n.kt)("inlineCode",{parentName:"td"},"StopOrder"),": \u689d\u4ef6\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"iv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u96b1\u542b\u6ce2\u52d5\u7387. \u50c5\u5c0d\u671f\u6b0a\u6709\u6548. \u6309\u7167\u5be6\u969b\u503c\u50b3\u5165, e.g., \u5c0d\u65bc10%, \u5247\u50b3\u51650.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"triggerPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c. \u82e5\u5e0c\u671b\u5e02\u5834\u8da8\u52e2\u662f\u4e0a\u6f32\u81f3\u89f8\u767c\u689d\u4ef6\u55ae, \u5247\u78ba\u4fdd:",(0,n.kt)("br",null)," ",(0,n.kt)("em",{parentName:"td"},"triggerPrice > max(market price, basePrice)")," \u5426\u5247,",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"triggerPrice < min(market price, basePrice)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u8a02\u55ae\u6578\u91cf. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u8a02\u55ae\u50f9\u683c. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u6b62\u76c8\u50f9\u683c. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5f8c\u7684\u6b62\u640d\u50f9\u683c. \u82e5\u4e0d\u4fee\u6539\uff0c\u8acb\u4e0d\u8981\u50b3\u8a72\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c\u89f8\u767c\u985e\u578b. \u82e5\u4e0b\u55ae\u6642\u672a\u8a2d\u7f6e\u8a72\u503c\uff0c\u5247\u8abf\u7528\u8a72\u63a5\u53e3\u4fee\u6539\u6b62\u76c8\u50f9\u683c\u6642\uff0c\u8a72\u5b57\u6bb5",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c\u89f8\u767c\u985e\u578b. \u82e5\u4e0b\u55ae\u6642\u672a\u8a2d\u7f6e\u8a72\u503c\uff0c\u5247\u8abf\u7528\u8a72\u63a5\u53e3\u4fee\u6539\u6b62\u640d\u50f9\u683c\u6642\uff0c\u8a72\u5b57\u6bb5",(0,n.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#triggerby"},"triggerBy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c\u7684\u89f8\u767c\u985e\u578b")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request POST 'https://api-testnet.bybit.com/unified/v3/private/order/replace' \\\n--header 'X-BAPI-SIGN-TYPE: 2' \\\n--header 'X-BAPI-SIGN: XXXXX' \\\n--header 'X-BAPI-API-KEY: {api key}' \\\n--header 'X-BAPI-TIMESTAMP: 1657871228347' \\\n--header 'X-BAPI-RECV-WINDOW: 5000' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"category\": \"linear\",\n    \"symbol\":\"BTCUSDT\",\n    \"orderId\":\"1a1ae001-2034-4a6b-8b25-45aa9100b1ec\",\n    \"price\":\"35000\"\n    }'\n")),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "orderId": "1a1ae001-2034-4a6b-8b25-45aa9100b1ec",\n        "orderLinkId": "e80d558e-ed"\n    }\n}\n')))}k.isMDXComponent=!0}}]);