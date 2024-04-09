"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[41916],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(a),g=n,u=s["".concat(o,".").concat(g)]||s[g]||k[g]||l;return a?r.createElement(u,i(i({ref:e},m),{},{components:a})):r.createElement(u,i({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},20767:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u67e5\u8a62\u7d93\u7d00\u5546\u7684\u5b50\u5e33\u865f\u5145\u503c\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u7d93\u7d00\u5546\u7684\u5b50\u5e33\u865f\u5145\u503c\u7d00\u9304",sidebar_position:3},i=void 0,p={unversionedId:"v5/broker/sub-deposit-record",id:"v5/broker/sub-deposit-record",title:"\u67e5\u8a62\u7d93\u7d00\u5546\u7684\u5b50\u5e33\u865f\u5145\u503c\u7d00\u9304",description:"\u7d93\u7d00\u5546\u50c5\u80fd\u901a\u904e\u4e3b\u5e33\u865f\u7684API key\u4f86\u67e5\u8a62\u5b50\u5e33\u865f\u7684\u5145\u503c\u7d00\u9304",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/broker/sub-deposit-record.mdx",sourceDirName:"v5/broker",slug:"/v5/broker/sub-deposit-record",permalink:"/bybitDocs/zh-TW/v5/broker/sub-deposit-record",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u67e5\u8a62\u7d93\u7d00\u5546\u7684\u5b50\u5e33\u865f\u5145\u503c\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u7d93\u7d00\u5546\u7684\u5b50\u5e33\u865f\u5145\u503c\u7d00\u9304",sidebar_position:3},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62\u7d93\u7d00\u5546\u5e33\u6236\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/v5/broker/account-info"},next:{title:"\u8a02\u95b1WebSocket",permalink:"/bybitDocs/zh-TW/v5/ws/connect"}},o={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},k=m("Tabs"),s=m("TabItem"),g={toc:d};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u7d93\u7d00\u5546\u50c5\u80fd\u901a\u904e",(0,n.kt)("strong",{parentName:"p"},"\u4e3b\u5e33\u865f"),"\u7684API key\u4f86\u67e5\u8a62\u5b50\u5e33\u865f\u7684\u5145\u503c\u7d00\u9304"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"API\u983b\u7387: 300\u6b21/\u5206")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"endTime")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"startTime")," \u9700\u8981\u5c0f\u65bc\u7b49\u65bc30\u5929. \u9ed8\u8a8d\u67e5\u8a62\u6700\u8fd130\u5929\u7684\u7d00\u9304")),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/v5/broker/asset/query-sub-member-deposit-record")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"subMemberId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b50\u5e33\u865f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"50"),"]",". \u9ed8\u8a8d: ",(0,n.kt)("inlineCode",{parentName:"td"},"50"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rows"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> subMemberId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b50\u5e33\u6236UID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> chain"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u93c8\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> amount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u91d1\u984d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> txID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613Id. \u5145\u503c\u5931\u6557\u6216\u53d6\u6d88\u5145\u503c\u6642\u70ba\u7a7a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../enum#depositstatus"},"status")),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u72c0\u614b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> toAddress"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u7684\u76ee\u6a19\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> tag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u76ee\u6a19\u5730\u5740\u7684tag")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> depositFee"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u624b\u7e8c\u8cbb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> successAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6700\u5f8c\u66f4\u65b0\u6642\u9593")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> confirmations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u533a\u5757\u7684\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> txIndex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e8f\u5217\u53f7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> blockHash"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u93c8\u4e0a\u7684\u54c8\u5e0c\u6578")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> batchReleaseLimit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5e63\u93c8\u6bcf\u65e5\u5145\u503c\u9650\u984d. ",(0,n.kt)("inlineCode",{parentName:"td"},'"-1"'),"\u8868\u793a\u7121\u9650\u5236")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> depositType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5165\u91d1\u985e\u578b. ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),": \u6b63\u5e38\u5145\u503c, ",(0,n.kt)("inlineCode",{parentName:"td"},"10"),": \u5145\u503c\u89f8\u767c\u6bcf\u65e5\u9650\u984d, ",(0,n.kt)("inlineCode",{parentName:"td"},"20"),": \u7570\u5e38\u5145\u503c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)(k,{groupId:"programming-languages",mdxType:"Tabs"},(0,n.kt)(s,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/broker/asset/query-sub-member-deposit-record?coin=USDT&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672192441294\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,n.kt)(s,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "rows": [],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1672192441742\n}\n')))}u.isMDXComponent=!0}}]);