"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[23105],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=m(r),k=a,g=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return r?n.createElement(g,o(o({ref:e},u),{},{components:r})):n.createElement(g,o({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14693:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_position:5},o=void 0,i={unversionedId:"v5/account/collateral-info",id:"v5/account/collateral-info",title:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",description:"\u7372\u53d6\u7576\u524d\u7d71\u4e00\u4fdd\u8b49\u91d1\u8cec\u6236\u7684\u62b5\u62bc\u54c1\u4fe1\u606f\uff0c\u5305\u62ec\u501f\u8cb8\u5229\u7387\uff0c\u53ef\u85c9\u8cb8\u91d1\u984d\u4ee5\u53ca\u62b5\u62bc\u54c1\u6298\u7b97\u7387\uff0c\u662f\u5426\u53ef\u62b5\u62bc\u4f5c\u70ba\u4fdd\u8b49\u91d1\u7b49\u4fe1\u606f\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/account/collateral-info.mdx",sourceDirName:"v5/account",slug:"/v5/account/collateral-info",permalink:"/bybitDocs/zh-TW/v5/account/collateral-info",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_position:5},sidebar:"v5SideBar",previous:{title:"\u6279\u91cf\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e",permalink:"/bybitDocs/zh-TW/v5/account/batch-set-collateral"},next:{title:"\u67e5\u8a62Greeks\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/v5/account/coin-greeks"}},p={},m=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},d=u("Button"),c=u("Tabs"),k=u("TabItem"),g={toc:m};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7372\u53d6\u7576\u524d\u7d71\u4e00\u4fdd\u8b49\u91d1\u8cec\u6236\u7684\u62b5\u62bc\u54c1\u4fe1\u606f\uff0c\u5305\u62ec\u501f\u8cb8\u5229\u7387\uff0c\u53ef\u85c9\u8cb8\u91d1\u984d\u4ee5\u53ca\u62b5\u62bc\u54c1\u6298\u7b97\u7387\uff0c\u662f\u5426\u53ef\u62b5\u62bc\u4f5c\u70ba\u4fdd\u8b49\u91d1\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/account/collateral-info")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"currency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u524d\u6240\u6709\u62b5\u62bc\u54c1\u7684\u8cc7\u7522\u5e63\u7a2e")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> currency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u524d\u6240\u6709\u62b5\u62bc\u54c1\u7684\u8cc7\u7522\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> hourlyBorrowRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5c0f\u6642\u85c9\u6b3e\u5229\u7387")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> maxBorrowingAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u53ef\u85c9\u8cb8\u984d\u5ea6. \u8a72\u503c\u7531\u6bcd\u5b50\u5e33\u865f\u5171\u4eab")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> freeBorrowingLimit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u514d\u606f\u501f\u6b3e\u984d\u4e0a\u9650 ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u50c5\u5408\u7d04\u6d6e\u8667\u6642\u7522\u751f\u7684\u501f\u6b3e\u64c1\u6709\u514d\u606f\u984d\u5ea6"),(0,a.kt)("li",null,"\u69d3\u687f\u4ea4\u6613\u7684\u501f\u8cb8\u7e3d\u662f\u7522\u751f\u5229\u606f")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> freeBorrowAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u501f\u6b3e\u7e3d\u984d\u4e2d\u514d\u606f\u90e8\u5206\u7684\u501f\u6b3e\u91d1\u984d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> borrowAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5df2\u7528\u501f\u8cb8\u984d\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> availableToBorrow"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u5269\u9918\u53ef\u85c9\u984d\u5ea6. \u8a72\u503c\u7531\u6bcd\u5b50\u5e33\u865f\u5171\u4eab")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> borrowable"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u53ef\u85c9\u8cb8\u7684\u5e63\u7a2e, ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),": \u662f. ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),": \u5426")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> freeBorrowingAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ee2\u68c4\u5b57\u6bb5, \u7e3d\u662f\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32, \u8acb\u53c3\u8003",(0,a.kt)("inlineCode",{parentName:"td"},"freeBorrowingLimit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> borrowUsageRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u501f\u8cb8\u8cc7\u91d1\u4f7f\u7528\u7387: borrowAmount/maxBorrowingAmount. \u9019\u662f\u4e00\u500b\u771f\u5be6\u503c, 0.5\u5219\u8868\u793a50%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> marginCollateral"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4f5c\u70ba\u4fdd\u8b49\u91d1\u62b5\u62bc\u5e63\u7a2e(\u5e73\u53f0\u7dad\u5ea6), ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),": \u662f. ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),": \u5426 ",(0,a.kt)("li",null,"\u7576marginCollateral=false\u6642, \u5247collateralSwitch\u7121\u610f\u7fa9"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> collateralSwitch"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u662f\u5426\u958b\u555f\u4fdd\u8b49\u91d1\u5e63\u7a2e\u62b5\u62bc(\u7528\u6236\u7dad\u5ea6), ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),": \u662f. ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),": \u5426 ",(0,a.kt)("li",null,"\u50c5\u7576marginCollateral=true\u6642, \u624d\u80fd\u4e3b\u52d5\u9078\u64c7\u958b\u95dc\u62b5\u62bc"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> collateralRatio"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62b5\u62bc\u54c1\u5e63\u7a2e\u6298\u7b97\u70ba\u4fdd\u8b49\u91d1\u7684\u6298\u7b97\u7387")))),(0,a.kt)("a",{href:"/api-explorer/v5/account/collateral-info"},(0,a.kt)(d,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(c,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(k,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/account/collateral-info?currency=BTC HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672127952719\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,a.kt)(k,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.get_collateral_info(\n    currency="BTC",\n))\n')))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "availableToBorrow": "3",\n                "freeBorrowingAmount": "",\n                "freeBorrowAmount": "0",\n                "maxBorrowingAmount": "3",\n                "hourlyBorrowRate": "0.00000147",\n                "borrowUsageRate": "0",\n                "collateralSwitch": true,\n                "borrowAmount": "0",\n                "borrowable": true,\n                "currency": "BTC",\n                "marginCollateral": true,\n                "freeBorrowingLimit": "0",\n                "collateralRatio": "0.95"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1691565901952\n}\n')))}s.isMDXComponent=!0}}]);