"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[62781],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=k(a),g=r,u=N["".concat(p,".").concat(g)]||N[g]||o[g]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},15454:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={title:"Websocket\u4e0b\u55ae\u6307\u5357",sidebar_label:"Websocket\u4e0b\u55ae\u6307\u5357",sidebar_position:1},i=void 0,d={unversionedId:"v5/websocket/trade/guideline",id:"v5/websocket/trade/guideline",title:"Websocket\u4e0b\u55ae\u6307\u5357",description:"\u7576\u524d\u50c5testnet\u53ef\u7528",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/websocket/trade/guideline.mdx",sourceDirName:"v5/websocket/trade",slug:"/v5/websocket/trade/guideline",permalink:"/bybitDocs/zh-TW/v5/websocket/trade/guideline",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Websocket\u4e0b\u55ae\u6307\u5357",sidebar_label:"Websocket\u4e0b\u55ae\u6307\u5357",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"\u65b7\u7dda\u4fdd\u8b77 (\u671f\u6b0a)",permalink:"/bybitDocs/zh-TW/v5/websocket/private/dcp"},next:{title:"\u983b\u7387\u9650\u5236",permalink:"/bybitDocs/zh-TW/v5/rate-limit"}},p={},k=[{value:"\u8def\u5f91",id:"\u8def\u5f91",level:2},{value:"\u652f\u6301\u7bc4\u570d",id:"\u652f\u6301\u7bc4\u570d",level:2},{value:"\u9452\u6b0a\u8acb\u6c42",id:"\u9452\u6b0a\u8acb\u6c42",level:2},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3},{value:"\u4e0b\u55ae/\u6539\u55ae/\u64a4\u55ae",id:"\u4e0b\u55ae\u6539\u55ae\u64a4\u55ae",level:2},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578-1",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578-1",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b-1",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b-1",level:3},{value:"Ping",id:"ping",level:2},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578-2",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578-2",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b-2",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b-2",level:3}],m={toc:k};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7576\u524d\u50c5",(0,r.kt)("strong",{parentName:"p"},"testnet"),"\u53ef\u7528")),(0,r.kt)("h2",{id:"\u8def\u5f91"},"\u8def\u5f91"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wss://stream-testnet.bybit.com/v5/trade")),(0,r.kt)("h2",{id:"\u652f\u6301\u7bc4\u570d"},"\u652f\u6301\u7bc4\u570d"),(0,r.kt)("p",null,"\u7d71\u4e00\u5e33\u6236"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"category=linear, spot, option")),(0,r.kt)("h2",{id:"\u9452\u6b0a\u8acb\u6c42"},"\u9452\u6b0a\u8acb\u6c42"),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reqId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9078\u53c3\u6578, \u53ef\u7528\u65bc\u5339\u914d\u97ff\u61c9 ",(0,r.kt)("li",null,"\u82e5\u4e0d\u50b3, \u8a72\u5b57\u6bb5\u4e0d\u6703\u5f9e\u97ff\u61c9\u7a2e\u8fd4\u56de"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"op"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Op\u985e\u578b ",(0,r.kt)("inlineCode",{parentName:"td"},"auth"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"args"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'["api\u5bc6\u9470", \u904e\u671f\u6642\u9593, "\u7c3d\u540d"]',". \u8acb\u53c3\u95b1",(0,r.kt)("a",{parentName:"td",href:"/v5/ws/connect#%E9%91%92%E6%AC%8A"},"\u9019\u88e1"),"\u4f86\u751f\u6210\u7c3d\u540d")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reqId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"\u82e5\u8acb\u6c42\u6709\u50b3, \u5247\u97ff\u61c9\u5b58\u5728\u8a72\u5b57\u6bb5"),(0,r.kt)("li",null,"\u82e5\u8acb\u6c42\u4e0d\u50b3, \u5247\u97ff\u61c9\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),": \u9452\u6b0a\u6210\u529f"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"20001"),": \u91cd\u8907\u8acb\u6c42"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"10004"),": \u7121\u6548\u7c3d\u540d"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"10001"),": \u53c3\u6578\u932f\u8aa4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"OK")),(0,r.kt)("li",null,"\u5831\u932f\u4fe1\u606f"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"op"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Op\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"connId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9023\u63a5\u7684\u552f\u4e00id")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "auth",\n    "args": [\n        "XXXXXX",\n        1711010121452,\n        "ec71040eff72b163a36153d770b69d6637bcb29348fbfbb16c269a76595ececf"\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "op": "auth",\n    "connId": "cnt5leec0hvan15eukcg-2t"\n}\n')),(0,r.kt)("h2",{id:"\u4e0b\u55ae\u6539\u55ae\u64a4\u55ae"},"\u4e0b\u55ae/\u6539\u55ae/\u64a4\u55ae"),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578-1"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reqId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8acb\u6c42reqId, \u53ef\u4f5c\u70ba\u8acb\u6c42\u7684\u552f\u4e00\u6a19\u8b58, \u82e5\u6709\u50b3, \u5247\u97ff\u61c9\u6703\u8fd4\u56de\u8a72\u5b57\u6bb5 ",(0,r.kt)("li",null,'\u7576\u50b3, \u9700\u4fdd\u8b49\u552f\u4e00, \u5426\u5247\u5c07\u6703\u62ff\u5230\u932f\u8aa4 "20006"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8acb\u6c42\u982d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> X-BAPI-TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u6642\u9593\u6233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> X-BAPI-RECV-WINDOW"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8a8d5000(\u6beb\u79d2). \u8acb\u6c42\u7684\u6642\u9593\u9700\u8981\u6eff\u8db3\u8a72\u516c\u5f0f: ",(0,r.kt)("i",null,"Bybit\u670d\u52d9\u5668\u6642\u9593 - X-BAPI-RECV-WINDOW <= X-BAPI-TIMESTAMP < Bybit\u670d\u52d9\u5668\u6642\u9593 + 1000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Referer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"API broker\u7528\u6236\u8fd4\u4f63\u6a19\u8b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"op"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Op\u985e\u578b ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.create"),": \u5275\u5efa\u8a02\u55ae")," ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.amend"),": \u4fee\u6539\u8a02\u55ae")," ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.cancel"),": \u64a4\u92b7\u8a02\u55ae"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"args"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array","<","object",">"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53c3\u6578\u6578\u7d44, \u76ee\u524d\u50c5\u652f\u6301\u4e00\u500b\u5143\u7d20 ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.create"),": \u8acb\u53c3\u95b1",(0,r.kt)("a",{parentName:"td",href:"../../order/create-order#%E8%AB%8B%E6%B1%82%E5%8F%83%E6%95%B8"},"\u5275\u5efa\u8a02\u55ae\u8acb\u6c42\u53c3\u6578")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.amend"),": \u8acb\u53c3\u95b1",(0,r.kt)("a",{parentName:"td",href:"../../order/amend-order#%E8%AB%8B%E6%B1%82%E5%8F%83%E6%95%B8"},"\u4fee\u6539\u8a02\u55ae\u53c3\u6578")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.cancel"),": \u8acb\u53c3\u95b1",(0,r.kt)("a",{parentName:"td",href:"../../order/cancel-order#%E8%AB%8B%E6%B1%82%E5%8F%83%E6%95%B8"},"\u64a4\u92b7\u8a02\u55ae\u53c3\u6578")))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578-1"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reqId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"\u82e5\u8acb\u6c42\u6709\u50b3, \u5247\u97ff\u61c9\u5b58\u5728\u8a72\u5b57\u6bb5"),(0,r.kt)("li",null,"\u82e5\u8acb\u6c42\u4e0d\u50b3, \u5247\u97ff\u61c9\u6c92\u6709\u8a72\u5b57\u6bb5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),": \u6210\u529f"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"10404"),": 1. op\u985e\u578b\u672a\u627e\u5230; 2. ",(0,r.kt)("inlineCode",{parentName:"td"},"category"),"\u4e0d\u652f\u6301/\u672a\u627e\u5230"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"20006"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"reqId"),"\u91cd\u8907"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"10016"),": 1.\u5167\u90e8\u932f\u8aa4; 2. \u670d\u52d9\u91cd\u555f"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"10019"),": ws\u4e0b\u55ae\u670d\u52d9\u6b63\u5728\u91cd\u555f, \u62d2\u7d55\u65b0\u7684\u8acb\u6c42, \u6b63\u5728\u8655\u7406\u4e2d\u7684\u8acb\u6c42\u4e0d\u53d7\u5f71\u97ff. \u60a8\u53ef\u4ee5\u91cd\u65b0/\u65b0\u5efa\u9023\u63a5, \u6703\u5206\u914d\u5230\u6b63\u5e38\u7684\u670d\u52d9\u4e0a"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"OK")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("li",null,"\u5831\u932f\u4fe1\u606f"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"op"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Op\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u696d\u52d9\u6578\u64da, \u548crest api\u97ff\u61c9\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"result"),"\u5b57\u6bb5\u696d\u52d9\u6578\u64da\u4e00\u81f4 ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.create"),": \u8acb\u53c3\u95b1",(0,r.kt)("a",{parentName:"td",href:"../../order/create-order#%E9%9F%BF%E6%87%89%E5%8F%83%E6%95%B8"},"\u5275\u5efa\u8a02\u55ae\u97ff\u61c9\u53c3\u6578")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.amend"),": \u8acb\u53c3\u95b1",(0,r.kt)("a",{parentName:"td",href:"../../order/amend-order#%E9%9F%BF%E6%87%89%E5%8F%83%E6%95%B8"},"\u4fee\u6539\u8a02\u55ae\u97ff\u61c9\u53c3\u6578")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"order.cancel"),": \u8acb\u53c3\u95b1",(0,r.kt)("a",{parentName:"td",href:"../../order/cancel-order#%E9%9F%BF%E6%87%89%E5%8F%83%E6%95%B8"},"\u53d6\u6d88\u8a02\u55ae\u97ff\u61c9\u53c3\u6578")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u97ff\u61c9\u982d\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> TraceId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Trace ID, \u7528\u65bc\u8ffd\u8e64\u8acb\u6c42\u93c8\u8def (\u5167\u90e8\u4f7f\u7528)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> Timenow"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u6642\u9593\u6233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> X-Bapi-Limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a72\u985e\u578b\u8acb\u6c42\u7684\u5e33\u6236\u7e3d\u983b\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> X-Bapi-Limit-Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a72\u985e\u578b\u8acb\u6c42\u7684\u5e33\u6236\u5269\u9918\u53ef\u7528\u983b\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> X-Bapi-Limit-Reset-Timestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u60a8\u5df2\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u4e0b\u500b\u53ef\u7528\u6642\u9593\u7a97\u53e3\u7684\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09\u5373\u4ec0\u9ebd\u6642\u5019\u53ef\u4ee5\u6062\u5fa9\u8a2a\u554f\uff1b\u5982\u679c\u60a8\u672a\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u8fd4\u56de\u7684\u662f\u7576\u524d\u670d\u52d9\u5668\u6642\u9593\uff08\u6beb\u79d2).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"connId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9023\u63a5\u7684\u552f\u4e00id")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b-1"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reqId": "test-005",\n    "headers": {\n        "X-BAPI-TIMESTAMP": "1711001595207",\n        "X-BAPI-RECV-WINDOW": "8000",\n        "Referer": "bot-001" // for api broker\n    },\n    "op": "order.create",\n    "args": [\n        {\n            "symbol": "ETHUSDT",\n            "side": "Buy",\n            "orderType": "Limit",\n            "qty": "0.2",\n            "price": "2800",\n            "category": "linear",\n            "timeInForce": "PostOnly"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b-1"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reqId": "test-005",\n    "retCode": 0,\n    "retMsg": "OK",\n    "op": "order.create",\n    "data": {\n        "orderId": "a4c1718e-fe53-4659-a118-1f6ecce04ad9",\n        "orderLinkId": ""\n    },\n    "header": {\n        "X-Bapi-Limit": "10",\n        "X-Bapi-Limit-Status": "9",\n        "X-Bapi-Limit-Reset-Timestamp": "1711001595208",\n        "Traceid": "38b7977b430f9bd228f4b19724794dfd",\n        "Timenow": "1711001595209"\n    },\n    "connId": "cnt5leec0hvan15eukcg-2v"\n}\n')),(0,r.kt)("h2",{id:"ping"},"Ping"),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578-2"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"op"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Op\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"ping"))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578-2"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u97ff\u61c9\u78bc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u97ff\u61c9\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"op"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Op\u985e\u578b ",(0,r.kt)("inlineCode",{parentName:"td"},"pong"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6578\u7d44\u6703\u6709\u6709\u4e00\u500b\u5143\u7d20, \u7576\u524d\u6642\u9593\u6233 (\u5b57\u7b26\u4e32\u985e\u578b)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"connId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9023\u63a5\u7684\u552f\u4e00id")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b-2"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "ping"\n}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b-2"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "op": "pong",\n    "data": [\n        "1711002002529"\n    ],\n    "connId": "cnt5leec0hvan15eukcg-2v"\n}\n')))}o.isMDXComponent=!0}}]);