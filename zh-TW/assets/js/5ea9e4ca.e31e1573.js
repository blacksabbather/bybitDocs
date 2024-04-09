"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7415],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=o(a),s=r,u=N["".concat(d,".").concat(s)]||N[s]||k[s]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},63909:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u8a62\u5b50\u5e33\u6236\u7684\u6240\u6709API Key\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u5b50\u5e33\u6236\u7684\u6240\u6709API Key\u4fe1\u606f",sidebar_position:5.4},i=void 0,p={unversionedId:"v5/user/list-sub-apikeys",id:"v5/user/list-sub-apikeys",title:"\u67e5\u8a62\u5b50\u5e33\u6236\u7684\u6240\u6709API Key\u4fe1\u606f",description:"\u67e5\u8a62\u67d0\u500b\u5b50\u5e33\u6236\u4e0b\u6240\u6709\u7684api key",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/user/list-sub-apikeys.mdx",sourceDirName:"v5/user",slug:"/v5/user/list-sub-apikeys",permalink:"/bybitDocs/zh-TW/v5/user/list-sub-apikeys",draft:!1,tags:[],version:"current",sidebarPosition:5.4,frontMatter:{title:"\u67e5\u8a62\u5b50\u5e33\u6236\u7684\u6240\u6709API Key\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u5b50\u5e33\u6236\u7684\u6240\u6709API Key\u4fe1\u606f",sidebar_position:5.4},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62API Key\u76f8\u95dc\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/v5/user/apikey-info"},next:{title:"\u67e5\u8a62\u5e33\u6236\u652f\u6301\u7684\u9322\u5305\u985e\u578b",permalink:"/bybitDocs/zh-TW/v5/user/wallet-type"}},d={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},k=m("Button"),N=m("Tabs"),s=m("TabItem"),u={toc:o};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u67e5\u8a62\u67d0\u500b\u5b50\u5e33\u6236\u4e0b\u6240\u6709\u7684api key"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4efb\u610f\u6b0a\u9650\u53ef\u4ee5\u8a2a\u554f\u8a72\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u50c5\u652f\u6301\u6bcd\u5e33\u6236\u8abf\u7528"))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/user/sub-apikeys")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"subMemberId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u5e33\u6236UID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"20"),"]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"result"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00id. \u5167\u90e8\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ips"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d81\u5b9a\u7684IP, \u672a\u7d81\u5b9aIP\u5247\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> apiKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Api key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> note"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5099\u8a3b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u72c0\u614b ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),": \u6c38\u4e45, ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),": \u5df2\u904e\u671f, ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),": \u4ecd\u5728\u6709\u6548\u671f\u5167, ",(0,r.kt)("inlineCode",{parentName:"td"},"4"),": \u5373\u5c07\u904e\u671f (\u5c11\u65bc7\u5929)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> expiredAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"API key\u7684\u904e\u671f\u65e5. \u91dd\u5c0d\u90a3\u4e9b\u672a\u7d81\u5b9aIP\u7684api key\u6216\u8005\u4fee\u6539\u904e\u5bc6\u78bc\u7684\u5e33\u6236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> createdAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"API key\u7684\u5275\u5efa\u65e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Api key\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\uff1a\u500b\u4eba\u4f7f\u7528, ",(0,r.kt)("inlineCode",{parentName:"td"},"2"),"\uff1a\u7d81\u5b9a\u5230\u7b2c\u4e09\u65b9\u61c9\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> permissions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b0a\u9650\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> ContractTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u4ea4\u6613\u7684\u6b0a\u9650 ",(0,r.kt)("inlineCode",{parentName:"td"},"Order"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Position"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> Spot"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73fe\u8ca8\u4ea4\u6613\u7684\u6b0a\u9650 ",(0,r.kt)("inlineCode",{parentName:"td"},"SpotTrade"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> Wallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u7684\u6b0a\u9650 ",(0,r.kt)("inlineCode",{parentName:"td"},"AccountTransfer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SubMemberTransferList"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> Options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"USDC\u5408\u7d04\u7684\u6b0a\u9650. \u8a72\u6b0a\u9650\u652f\u6301USDC\u5408\u7d04\u4e0b\u7684\u671f\u6b0a\u548c\u6c38\u7e8c\u4ea4\u6613 ",(0,r.kt)("inlineCode",{parentName:"td"},"OptionsTrade"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> Derivatives"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d71\u4e00\u4ea4\u6613\u5e33\u6236\u9ed8\u8a8d\u8ce6\u4e88\u7684\u6b0a\u9650")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> CopyTrading"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7e3d\u662f[], \u56e0\u70ba\u5e36\u55ae\u5e33\u6236\u53ea\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"td"},"ContractTrade"),"\u6b0a\u9650\u4f86\u9032\u884cAPI\u5e36\u55ae")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> BlockTrade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5927\u5b97\u4ea4\u6613\u7684\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301\uff0c\u7e3d\u662f[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> Exchange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u514c\u63db\u7684\u6b0a\u9650 ",(0,r.kt)("inlineCode",{parentName:"td"},"ExchangeHistory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> NFT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"NFT\u7684\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301, \u7e3d\u662f[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> Affiliate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u5546\u6b0a\u9650. \u5b50\u5e33\u6236\u66ab\u4e0d\u652f\u6301, \u7e3d\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7e3d\u662f",(0,r.kt)("inlineCode",{parentName:"td"},'"******"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff1a\u53ef\u8b80\u53ef\u5beb. ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\uff1a\u53ea\u8b80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> deadlineDay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"API key\u5931\u6548\u7684\u5012\u6578\u65e5. \u91dd\u5c0d\u90a3\u4e9b\u672a\u7d81\u5b9aIP\u7684api key\u6216\u8005\u4fee\u6539\u904e\u5bc6\u78bc\u7684\u5e33\u6236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> flag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"API Key\u7684\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("a",{href:"/api-explorer/v5/user/list-sub-apikeys"},(0,r.kt)(k,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)(N,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.kt)(s,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/user/sub-apikeys?subMemberId=100400345 HTTP/1.1\nHost: api.bybit.com\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1699515251088\nX-BAPI-RECV-WINDOW: 5000\nX-BAPI-SIGN: XXXXXX\nContent-Type: application/json\n"))),(0,r.kt)(s,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "result": [\n            {\n                "id": "24828209",\n                "ips": [\n                    "*"\n                ],\n                "apiKey": "XXXXXX",\n                "note": "UTA",\n                "status": 3,\n                "expiredAt": "2023-12-01T02:36:06Z",\n                "createdAt": "2023-08-25T06:42:39Z",\n                "type": 1,\n                "permissions": {\n                    "ContractTrade": [\n                        "Order",\n                        "Position"\n                    ],\n                    "Spot": [\n                        "SpotTrade"\n                    ],\n                    "Wallet": [\n                        "AccountTransfer",\n                        "SubMemberTransferList"\n                    ],\n                    "Options": [\n                        "OptionsTrade"\n                    ],\n                    "Derivatives": [\n                        "DerivativesTrade"\n                    ],\n                    "CopyTrading": [],\n                    "BlockTrade": [],\n                    "Exchange": [\n                        "ExchangeHistory"\n                    ],\n                    "NFT": [],\n                    "Affiliate": []\n                },\n                "secret": "******",\n                "readOnly": false,\n                "deadlineDay": 21,\n                "flag": "hmac"\n            }\n        ],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1699515251698\n}\n')))}g.isMDXComponent=!0}}]);