"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[53302],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=o(a),u=r,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},13057:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u8a62\u63d0\u73fe\u8a18\u9304",sidebar_label:"\u67e5\u8a62\u63d0\u73fe\u8a18\u9304",sidebar_position:4,slug:"/account-asset/withdraw-record"},i=void 0,d={unversionedId:"v3/account-asset/withdraw-deposit/withdraw-record",id:"v3/account-asset/withdraw-deposit/withdraw-record",title:"\u67e5\u8a62\u63d0\u73fe\u8a18\u9304",description:"\u63d0\u73fe\u8a18\u9304\u67e5\u8a62",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/withdraw-deposit/withdraw-record.mdx",sourceDirName:"v3/account-asset/withdraw-deposit",slug:"/account-asset/withdraw-record",permalink:"/bybitDocs/zh-TW/account-asset/withdraw-record",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u67e5\u8a62\u63d0\u73fe\u8a18\u9304",sidebar_label:"\u67e5\u8a62\u63d0\u73fe\u8a18\u9304",sidebar_position:4,slug:"/account-asset/withdraw-record"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5145\u503c\u8a18\u9304 (\u5e73\u53f0\u8f6c\u8d26)",permalink:"/bybitDocs/zh-TW/account-asset/internal-deposit-record"},next:{title:"\u67e5\u8a62\u5e63\u7a2e\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/account-asset/coin-info"}},p={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:o};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u63d0\u73fe\u8a18\u9304\u67e5\u8a62"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u898f\u5247\uff1a\u6309id\u5012\u5e8f\u9032\u884c\uff0c\u958b\u59cb\u6642\u9593\u548c\u622a\u6b62\u6642\u9593\u5dee\u6700\u5927\u9650\u5236\u70ba30\u5929")),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/withdraw/record/query")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"withdrawID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73feID\u3002 (\u63d0\u73feAPI\u97ff\u61c9\u53c3\u6578\u4e2d\u7684\u63d0\u73fe\u8acb\u6c42ID)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"txID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u54c8\u5e0cID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593 (\u6beb\u79d2)\u3002 \u9ed8\u8a8d\u70ba\u7576\u524d\u6642\u9593\u4e4b\u524d30\u5929")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593 (\u6beb\u79d2)\u3002 \u9ed8\u8a8d\u70ba\u7576\u524d\u6642\u9593")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"enum#coin"},"coin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\uff1a\u8209\u4f8b\uff0cBTC\u3002\u9ed8\u8a8d\u5168\u90e8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"withdrawType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0 (\u9ed8\u8a8d)"),"\uff1a\u93c8\u4e0a\u63d0\u73fe.")," ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u5e73\u53f0\u5167\u90e8\u8f49\u5e33."),(0,r.kt)("li",null," ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),"\uff1a\u93c8\u4e0a\u63d0\u73fe\u548c\u5167\u90e8\u8f49\u5e33")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\u4fe1\u606f\uff1a\u7528\u4f86\u5206\u9801\u3002 \u9ed8\u8a8d\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u689d\u6578\u3002","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"50"),"]",", \u9ed8\u8a8d\u70ba50")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rows"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"enum#coin"},"coin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73fe\u7684\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"enum#chain"},"chain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u93c8\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73fe\u7684\u6578\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> txID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613ID\u3002\u63d0\u73fe\u5931\u6557/\u63d0\u73fe\u64a4\u92b7\uff1a\u70ba\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"enum#withdrawStatus"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73fe\u72c0\u614b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> toAddress"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73fe\u76ee\u6a19\u5730\u5740. \u5167\u90e8\u8f49\u5e33\uff1a\u986f\u793a\u90f5\u7bb1\u6216\u624b\u6a5f\u865f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73fe\u76ee\u6a19\u5730\u5740\u7684tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> withdrawFee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73fe\u624b\u7e8c\u8cbb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> createTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u767c\u8d77\u63d0\u5e63\u6642\u9593")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> updateTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u5e63\u72c0\u614b\u66f4\u65b0\u6642\u9593")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> withdrawId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73feID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> withdrawType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51fa\u91d1\u985e\u578b.",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\uff1a\u93c8\u4e0a\u51fa\u91d1;")," ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u5167\u90e8\u5730\u5740\u8f49\u5e33")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\u4fe1\u606f\uff1a\u7528\u4f86\u5206\u9801")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /asset/v3/private/withdraw/record/query HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671171632559\nX-BAPI-RECV-WINDOW: 50000\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "rows": [\n            {\n                "coin": "USDT",\n                "chain": "TRX",\n                "amount": "10",\n                "txID": "",\n                "status": "CancelByUser",\n                "toAddress": "xxxxxxxxxxx",\n                "tag": "",\n                "withdrawFee": "1",\n                "createTime": "1670906044000",\n                "updateTime": "1670906050000",\n                "withdrawId": "9965",\n                "withdrawType": 0\n            },\n            {\n                "coin": "USDT",\n                "chain": "TRX",\n                "amount": "10",\n                "txID": "",\n                "status": "CancelByUser",\n                "toAddress": "xxxxxxxxxxx",\n                "tag": "",\n                "withdrawFee": "1",\n                "createTime": "1670905993000",\n                "updateTime": "1670906001000",\n                "withdrawId": "9964",\n                "withdrawType": 0\n            }\n        ],\n        "nextPageCursor": "eyJtaW5JRCI6OTk2NCwibWF4SUQiOjk5NjV9"\n    },\n    "retExtInfo": {},\n    "time": 1671171632649\n}\n')))}k.isMDXComponent=!0}}]);