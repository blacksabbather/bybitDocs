"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[93822],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),d=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(r),c=n,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||i;return r?a.createElement(k,l(l({ref:e},m),{},{components:r})):a.createElement(k,l({ref:e},m))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35932:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"\u67e5\u8a62\u5408\u7d04\u98a8\u96aa\u9650\u984d",sidebar_label:"\u67e5\u8a62\u5408\u7d04\u98a8\u96aa\u9650\u984d",sidebar_position:9,slug:"/derivatives/public/risk-limit"},l=void 0,p={unversionedId:"v3/derivatives/rest-public/risk-limit",id:"v3/derivatives/rest-public/risk-limit",title:"\u67e5\u8a62\u5408\u7d04\u98a8\u96aa\u9650\u984d",description:"\u67e5\u8a62\u671f\u8ca8\u5408\u7d04\u7684\u98a8\u96aa\u9650\u984d\u8868",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-public/risk-limit.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/risk-limit",permalink:"/bybitDocs/zh-TW/derivatives/public/risk-limit",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u67e5\u8a62\u5408\u7d04\u98a8\u96aa\u9650\u984d",sidebar_label:"\u67e5\u8a62\u5408\u7d04\u98a8\u96aa\u9650\u984d",sidebar_position:9,slug:"/derivatives/public/risk-limit"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5e73\u53f0\u6210\u4ea4\u6b77\u53f2",permalink:"/bybitDocs/zh-TW/derivatives/public/trade"},next:{title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",permalink:"/bybitDocs/zh-TW/derivatives/public/funding-rate"}},o={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},s=m("Tabs"),u=m("TabItem"),c={toc:d};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u67e5\u8a62\u671f\u8ca8\u5408\u7d04\u7684\u98a8\u96aa\u9650\u984d\u8868"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4ec0\u9ebc\u662f\u98a8\u96aa\u9650\u984d? ",(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001164"},"\u98a8\u96aa\u9650\u984d(USDT\u5408\u7d04)"))),(0,n.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/risk-limit/list")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"),". \u9ed8\u8a8d: ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),", \u7576\u4e0d\u50b3\u6642\uff0c\u97ff\u61c9\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},'""'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"category"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u98a8\u96aa\u9650\u984did")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u98a8\u96aa\u9650\u5236\u984d\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> maintainMargin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7dad\u6301\u4fdd\u8b49\u91d1\u7387")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> initialMargin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u4fdd\u8b49\u91d1\u7387")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> isLowerRisk"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u6700\u4f4e\u98a8\u96aa\u9650\u984d. ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),": true, ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),": false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> maxLeverage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a72\u98a8\u96aa\u9650\u984d\u5141\u8a31\u7684\u6700\u5927\u69d3\u687f")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)(s,{mdxType:"Tabs"},(0,n.kt)(u,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/risk-limit/list?symbol=ETHPERP HTTP/1.1\nHost: api.bybit.com\n")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)(s,{mdxType:"Tabs"},(0,n.kt)(u,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "",\n        "list": [\n            {\n                "id": 1,\n                "symbol": "ETHPERP",\n                "limit": "500000",\n                "maintainMargin": "0.01",\n                "initialMargin": "0.015",\n                "isLowestRisk": 1,\n                "maxLeverage": "66.67"\n            },\n        ...,\n\n            ]\n        },\n    "retExtInfo": {},\n    "time": 1671970615467\n}\n')))))}k.isMDXComponent=!0}}]);