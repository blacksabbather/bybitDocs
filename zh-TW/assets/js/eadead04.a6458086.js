"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[35330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u78ba\u8a8d\u65b0\u7684\u98a8\u96aa\u9650\u984d",sidebar_label:"\u78ba\u8a8d\u65b0\u7684\u98a8\u96aa\u9650\u984d",sidebar_position:10,slug:"/derivatives/contract/confirm-mmr"},i=void 0,l={unversionedId:"v3/derivatives/rest-contract/position/confirm-mmr",id:"v3/derivatives/rest-contract/position/confirm-mmr",title:"\u78ba\u8a8d\u65b0\u7684\u98a8\u96aa\u9650\u984d",description:"\u50c5\u9069\u7528\u65bc\u7576\u7528\u6236\u88ab\u6a19\u8a18\u70ba\u50c5\u6e1b\u5009\u6642(\u8acb\u770b\u6301\u5009\u63a5\u53e3\u4e2d\u7684isReduceOnly\u5b57\u6bb5), \u5728\u7528\u6236\u4e3b\u52d5\u8abf\u6574\u98a8\u96aa\u6c34\u4f4d\u5f8c, \u8abf\u7528\u8a72\u63a5\u53e3\u4f86\u8a66\u7b97\u8abf\u6574\u5f8c\u7684\u98a8",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/position/confirm-mmr.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/confirm-mmr",permalink:"/bybitDocs/zh-TW/derivatives/contract/confirm-mmr",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u78ba\u8a8d\u65b0\u7684\u98a8\u96aa\u9650\u984d",sidebar_label:"\u78ba\u8a8d\u65b0\u7684\u98a8\u96aa\u9650\u984d",sidebar_position:10,slug:"/derivatives/contract/confirm-mmr"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5e73\u5009\u76c8\u8667",permalink:"/bybitDocs/zh-TW/derivatives/contract/closepnl"},next:{title:"\u9322\u5305\u9918\u984d",permalink:"/bybitDocs/zh-TW/derivatives/contract/wallet"}},c={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=s("Tabs"),u=s("TabItem"),d={toc:p};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u50c5\u9069\u7528\u65bc\u7576\u7528\u6236\u88ab\u6a19\u8a18\u70ba\u50c5\u6e1b\u5009\u6642(\u8acb\u770b",(0,a.kt)("a",{parentName:"p",href:"position-list#"},"\u6301\u5009"),"\u63a5\u53e3\u4e2d\u7684isReduceOnly\u5b57\u6bb5), \u5728\u7528\u6236\u4e3b\u52d5\u8abf\u6574\u98a8\u96aa\u6c34\u4f4d\u5f8c, \u8abf\u7528\u8a72\u63a5\u53e3\u4f86\u8a66\u7b97\u8abf\u6574\u5f8c\u7684\u98a8\n\u96aa\u6c34\u5e73, \u82e5\u901a\u904e(retCode=0), \u5247\u7cfb\u7d71\u6703\u79fb\u9664\u50c5\u6e1b\u5009\u6a19\u8a18, \u63a8\u85a6\u81ea\u884c\u518d\u8abf\u7528\u4e0b\u5009\u4f4d\u63a5\u53e3\u78ba\u8a8d",(0,a.kt)("inlineCode",{parentName:"p"},"isReduceOnly"),"\u5b57\u6bb5\u662f\u5426\u8b8a\u6210false"),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/confirm-pending-mmr")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(m,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(u,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/position/confirm-pending-mmr HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXXX\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1698051546759\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\nContent-Length: 32\n\n{\n\n    "symbol": "BTCUSDT"\n}\n'))),(0,a.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},""))),(0,a.kt)(u,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1698051124588\n}\n')))}v.isMDXComponent=!0}}]);