"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[70520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,c=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5,slug:"/derivatives/public/orderbook"},i=void 0,o={unversionedId:"v3/derivatives/rest-public/orderbook",id:"v3/derivatives/rest-public/orderbook",title:"Order Book (\u6df1\u5ea6)",description:"\u7372\u53d6\u6df1\u5ea6\u6578\u64da",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-public/orderbook.mdx",sourceDirName:"v3/derivatives/rest-public",slug:"/derivatives/public/orderbook",permalink:"/bybitDocs/zh-TW/derivatives/public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5,slug:"/derivatives/public/orderbook"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u6ea2\u50f9\u6307\u6578\u50f9\u683cK\u7dda\u6578\u64da",permalink:"/bybitDocs/zh-TW/derivatives/public/premium-index-kline"},next:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/derivatives/public/ticker"}},p={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=m("Tabs"),u=m("TabItem"),k={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7372\u53d6\u6df1\u5ea6\u6578\u64da"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u97ff\u61c9\u662f\u7576\u524d\u6642\u9593\u7684\u5207\u7247\u6578\u64da")),(0,a.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/public/order-book/L2")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,a.kt)("inlineCode",{parentName:"td"},"option"),". \u9ed8\u8a8d: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", \u7576\u4e0d\u50b3\u6642\uff0c\u97ff\u61c9\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"td"},'""'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("b",null,"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31. \u67e5\u8a62\u671f\u6b0a\u6642\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"category"),"\u9700",(0,a.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236 ","[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"500"),"]",". \u9ed8\u8a8d: ",(0,a.kt)("inlineCode",{parentName:"td"},"25"),". ",(0,a.kt)("inlineCode",{parentName:"td"},"option"),"\u50c525\u53ef\u7528")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid, \u8cb7\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask, \u8ce3\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"u"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u6578\u64da\u9023\u7e8c\u6027\u7684id")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(u,{value:"console-linear",label:"linear",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/order-book/L2?category=linear&symbol=BTCPERP&limit=2 HTTP/1.1\nHost: api.bybit.com\u200b\n"))),(0,a.kt)(u,{value:"console-option",label:"option",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /derivatives/v3/public/order-book/L2?category=option&symbol=BTC-30DEC22-19000-C&limit=25 HTTP/1.1\nHost: api.bybit.com\u200b\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(u,{value:"js linear",label:"linear",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "s": "BTCPERP",\n    "b": [\n        [\n            "16818", // \u50f9\u683c\n            "0.156" // \u6578\u91cf\n        ],\n        [\n            "16818.5",\n            "0.183"\n        ]\n        ],\n    "a": [\n        [\n            "16819",\n            "0.454"\n        ],\n        [\n            "16819.5",\n            "0.054"\n        ]\n    ],\n    "ts": 1671969122791,\n    "u": 6404345\n},\n    "retExtInfo": {},\n    "time": 1671969122869\n}\n'))),(0,a.kt)(u,{value:"js option",label:"option",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "SUCCESS",\n    "result": {\n    "s": "BTC-30DEC22-19000-C",\n    "b": [\n        [\n            "5",\n            "0.49"\n        ],\n        [\n            "10",\n            "0.01"\n        ]\n    ],\n    "a": [\n        [\n            "20",\n            "12.7"\n        ],\n        [\n            "25",\n            "9.11"\n        ],\n        [\n            "60",\n            "14"\n        ],\n        [\n            "100",\n            "15.5"\n        ],\n        [\n            "120",\n            "15.5"\n        ]\n    ],\n    "u": 2424603561,\n    "ts": 1671969202988\n},\n    "retExtInfo": {},\n    "time": 1671969281606\n}\n')))))}c.isMDXComponent=!0}}]);