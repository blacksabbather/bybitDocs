"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[52021],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58121:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u65b0\u5efa\u5b50\u5e33\u6236",sidebar_label:"\u65b0\u5efa\u5b50\u5e33\u6236",sidebar_position:1,slug:"/account-asset/create-subuid"},i=void 0,u={unversionedId:"v3/account-asset/user/create-subuid",id:"v3/account-asset/user/create-subuid",title:"\u65b0\u5efa\u5b50\u5e33\u6236",description:"\u5275\u5efa\u65b0\u7684\u5b50\u5e33\u6236\u3002\u9700\u4f7f\u7528\u6bcd\u5e33\u6236\u7684API key\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/user/create-subuid.mdx",sourceDirName:"v3/account-asset/user",slug:"/account-asset/create-subuid",permalink:"/bybitDocs/zh-TW/account-asset/create-subuid",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u65b0\u5efa\u5b50\u5e33\u6236",sidebar_label:"\u65b0\u5efa\u5b50\u5e33\u6236",sidebar_position:1,slug:"/account-asset/create-subuid"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5b50\u5e33\u6236\u5145\u503c\u5730\u5740\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/account-asset/sub-deposit-addr"},next:{title:"\u65b0\u5efa\u5b50\u5e33\u6236\u7684API Key",permalink:"/bybitDocs/zh-TW/account-asset/create-subuid-apikey"}},o={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5275\u5efa\u65b0\u7684\u5b50\u5e33\u6236\u3002\u9700\u4f7f\u7528",(0,r.kt)("b",null,"\u6bcd"),"\u5e33\u6236\u7684API key\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u8abf\u7528\u63a5\u53e3\u6642\uff0c\u4f7f\u7528\u7684API key\u81f3\u5c11\u9700\u8981\u64c1\u6709\u4ee5\u4e0b\u5176\u4e2d\u4e00\u7a2e\u6b0a\u9650"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'\u6bcdAPI key: "Account Transfer\uff08\u8cc7\u7522\u5e33\u6236\u5283\u8f49\uff09", "Subaccount Transfer\uff08\u6bcd\u5b50\u5e33\u6236\u5283\u8f49\uff09", "Withdrawal\uff08\u63d0\u5e63\uff09"'))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/v3/private/create-sub-member")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"username"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d66\u65b0\u7684\u5b50\u5e33\u6236\u5275\u5efa\u4e00\u500b\u7528\u6236\u540d\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,"6-16\u4f4d\u5b57\u7b26\uff0c\u9808\u540c\u6642\u542b\u6709\u6578\u5b57\u548c\u5b57\u6bcd\u3002"),(0,r.kt)("li",null,"\u4e0d\u80fd\u8207\u5df2\u5b58\u5728\u6216\u5df2\u522a\u9664\u7684\u5e33\u6236\u7528\u6236\u540d\u91cd\u8907\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d66\u65b0\u7684\u5b50\u5e33\u6236\u8a2d\u7f6e\u4e00\u500b\u5bc6\u78bc\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,"8-30\u4f4d\u5b57\u7b26\uff0c\u9808\u540c\u6642\u542b\u6709\u6578\u5b57\u548c\u5927\u5c0f\u5beb\u5b57\u6bcd\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memberType"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"),": \u666e\u901a\u5b50\u5e33\u6236, ",(0,r.kt)("inlineCode",{parentName:"td"},"6"),": \u8a17\u7ba1\u5b50\u5e33\u6236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"switch"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null," ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),": \u95dc\u9589\u5feb\u6377\u767b\u9678 (\u9ed8\u8a8d\u95dc\u9589)"),(0,r.kt)("li",null,"  ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),": \u6253\u958b\u5feb\u6377\u767b\u9678.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isUta"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null," ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),": \u5275\u5efa\u7d71\u4e00\u5e33\u6236"),(0,r.kt)("li",null,"  ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"(\u9ed8\u8a8d): \u5275\u5efa\u666e\u901a\u5e33\u6236")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"note"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u7f6e\u5099\u8a3b")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"uid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u5e33\u6236userId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"username"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d66\u65b0\u7684\u5b50\u5e33\u6236\u5275\u5efa\u4e00\u500b\u7528\u6236\u540d ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"6-16\u4f4d\u5b57\u7b26\uff0c\u9808\u540c\u6642\u542b\u6709\u6578\u5b57\u548c\u5b57\u6bcd\u3002"),(0,r.kt)("li",null,"\u4e0d\u80fd\u8207\u5df2\u5b58\u5728\u6216\u5df2\u522a\u9664\u7684\u5e33\u6236\u7528\u6236\u540d\u91cd\u8907\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memberType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"),": \u666e\u901a\u5b50\u5e33\u6236, ",(0,r.kt)("inlineCode",{parentName:"td"},"6"),": \u8a17\u7ba1\u5b50\u5e33\u6236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e33\u6236\u72c0\u614b",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),": \u6b63\u5e38"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"2"),": \u767b\u9678\u5c01\u7981"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"4"),": \u51cd\u7d50 ")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u7f6e\u7684\u5099\u8a3b")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /user/v3/private/create-sub-member HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671174837503\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\nContent-Length: 109\n\n{\n    "username": "testsubaccount",\n    "memberType": 1,\n    "switch": 1,\n    "note": "testnet subaccount"\n}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "uid": "111111111",\n        "username": "testsubaccount",\n        "memberType": 1,\n        "status": 1,\n        "remark": "testnet subaccount"\n    },\n    "retExtInfo": {},\n    "time": 1671174837668\n}\n')))}s.isMDXComponent=!0}}]);