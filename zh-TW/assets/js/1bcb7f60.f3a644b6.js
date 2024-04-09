"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[5253],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96821:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u7d93\u7d00\u5546\u5e33\u6236\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u7d93\u7d00\u5546\u5e33\u6236\u4fe1\u606f",sidebar_position:3},o=void 0,i={unversionedId:"v5/broker/account-info",id:"v5/broker/account-info",title:"\u67e5\u8a62\u7d93\u7d00\u5546\u5e33\u6236\u4fe1\u606f",description:"* \u4f7f\u7528\u7d93\u7d00\u5546\u7684\u6bcd\u5e33\u6236\u9032\u884c\u67e5\u8a62",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/broker/account-info.mdx",sourceDirName:"v5/broker",slug:"/v5/broker/account-info",permalink:"/bybitDocs/zh-TW/v5/broker/account-info",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u67e5\u8a62\u7d93\u7d00\u5546\u5e33\u6236\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u7d93\u7d00\u5546\u5e33\u6236\u4fe1\u606f",sidebar_position:3},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62\u7d93\u7d00\u5546\u8fd4\u4f63\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/v5/broker/exchange-earning"},next:{title:"\u67e5\u8a62\u7d93\u7d00\u5546\u7684\u5b50\u5e33\u865f\u5145\u503c\u7d00\u9304",permalink:"/bybitDocs/zh-TW/v5/broker/sub-deposit-record"}},p={},c=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},d=u("Tabs"),s=u("TabItem"),m={toc:c};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7d93\u7d00\u5546\u7684\u6bcd\u5e33\u6236\u9032\u884c\u67e5\u8a62"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API\u983b\u7387: 10\u6b21/\u79d2")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/broker/account-info")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subAcctQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5df2\u5275\u5efa\u7684\u5b50\u5e33\u6236\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"maxSubAcctQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5141\u8a31\u5275\u5efa\u7684\u5b50\u5e33\u6236\u6578\u91cf\u4e0a\u9650")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"baseFeeRebateRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u790e\u8cbb\u7387\u8fd4\u4f63")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> spot"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u73fe\u8ca8\u4ea4\u6613\u57fa\u790e\u8cbb\u7387\u8fd4\u4f63, \u4f8b\u5982, 10.00%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> derivatives"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u671f\u8ca8\u4ea4\u6613\u57fa\u790e\u8cbb\u7387\u8fd4\u4f63, \u4f8b\u5982, 10.00%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"markupFeeRebateRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a0\u9ede\u8cbb\u7387\u8fd4\u4f63")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> spot"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u73fe\u8ca8\u4ea4\u6613\u52a0\u9ede\u8cbb\u7387\u8fd4\u4f63, \u4f8b\u5982, 10.00%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> derivatives"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u671f\u8ca8\u4ea4\u6613\u52a0\u9ede\u8cbb\u7387\u8fd4\u4f63, \u4f8b\u5982, 10.00%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7d71\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(d,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(s,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/broker/account-info HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1701399431920\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n"))),(0,a.kt)(s,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "subAcctQty": "2",\n        "maxSubAcctQty": "20",\n        "baseFeeRebateRate": {\n            "spot": "10.0%",\n            "derivatives": "10.0%"\n        },\n        "markupFeeRebateRate": {\n            "spot": "6.00%",\n            "derivatives": "9.00%"\n        },\n        "ts": "1701395633402"\n    },\n    "retExtInfo": {},\n    "time": 1701395633403\n}\n')))}k.isMDXComponent=!0}}]);