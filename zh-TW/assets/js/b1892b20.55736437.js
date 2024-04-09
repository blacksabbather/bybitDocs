"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[71386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u522a\u9664\u5b50\u5e33\u6236\u4e0b\u7684API Key",sidebar_label:"\u522a\u9664\u5b50\u5e33\u6236\u4e0b\u7684API Key",sidebar_position:9},o=void 0,l={unversionedId:"v5/user/rm-sub-apikey",id:"v5/user/rm-sub-apikey",title:"\u522a\u9664\u5b50\u5e33\u6236\u4e0b\u7684API Key",description:"\u522a\u9664\u5b50\u5e33\u6236\u4e0b\u7684api key\u3002\u4f7f\u7528\u5f85\u522a\u9664\u7684\u5b50\u5e33\u6236api key\u8abf\u7528\u63a5\u53e3\u6216\u8005\u4f7f\u7528\u6bcd\u5e33\u6236\u8abf\u7528\u522a\u9664\u6307\u5b9aapi key",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/user/rm-sub-apikey.mdx",sourceDirName:"v5/user",slug:"/v5/user/rm-sub-apikey",permalink:"/bybitDocs/zh-TW/v5/user/rm-sub-apikey",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u522a\u9664\u5b50\u5e33\u6236\u4e0b\u7684API Key",sidebar_label:"\u522a\u9664\u5b50\u5e33\u6236\u4e0b\u7684API Key",sidebar_position:9},sidebar:"v5SideBar",previous:{title:"\u522a\u9664\u6bcd\u5e33\u6236\u7684API Key",permalink:"/bybitDocs/zh-TW/v5/user/rm-master-apikey"},next:{title:"\u67e5\u8a62\u4ee3\u7406\u7528\u6236\u4fe1\u606f",permalink:"/bybitDocs/zh-TW/v5/user/affiliate-info"}},p={},u=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=s("Tabs"),d=s("TabItem"),m={toc:u};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u522a\u9664\u5b50\u5e33\u6236\u4e0b\u7684api key\u3002\u4f7f\u7528\u5f85\u522a\u9664\u7684\u5b50\u5e33\u6236api key\u8abf\u7528\u63a5\u53e3\u6216\u8005\u4f7f\u7528\u6bcd\u5e33\u6236\u8abf\u7528\u522a\u9664\u6307\u5b9aapi key"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8abf\u7528\u63a5\u53e3\u6642\uff0c\u4f7f\u7528\u7684API key\u81f3\u5c11\u9700\u8981\u64c1\u6709\u4ee5\u4e0b\u5176\u4e2d\u4e00\u7a2e\u6b0a\u9650"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'\u5b50API key: "Account Transfer\uff08\u8cc7\u7522\u5e33\u6236\u5283\u8f49\uff09", "Subaccount Transfer\uff08\u6bcd\u5b50\u5e33\u6236\u5283\u8f49\uff09"'),(0,a.kt)("li",{parentName:"ul"},'\u6bcdAPI key: "Account Transfer\uff08\u8cc7\u7522\u5e33\u6236\u5283\u8f49\uff09", "Subaccount Transfer\uff08\u6bcd\u5b50\u5e33\u6236\u5283\u8f49\uff09", "Withdrawal\uff08\u63d0\u5e63\uff09"'))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u7576\u5fc3! \u7528\u65bc\u8abf\u7528\u672c\u63a5\u53e3\u5f8c, \u5c0d\u61c9\u7684\u5b50\u5e33\u6236api key\u6703\u7acb\u99ac\u5931\u6548\u3002")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/user/delete-sub-api")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"apikey"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b50\u5e33\u6236\u7684api key ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u7576\u60a8\u8981\u4f7f\u7528\u6bcd\u5e33\u6236\u4f86\u7ba1\u7406\u5b50\u5e33\u6236\u7684key\u6642, \u8a72\u5b57\u6bb5\u5fc5\u50b3"),(0,a.kt)("li",null,"\u5982\u679c\u60a8\u662f\u7528\u5c0d\u61c9\u7684\u5b50\u5e33\u6236api key\u4fee\u6539\u672c\u8eab, \u8a72\u5b57\u6bb5\u8acb\u4e0d\u8981\u50b3\u5165, \u5426\u5247\u5831\u932f")))))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(c,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(d,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"POST /v5/user/delete-sub-api HTTP/1.1\nHost: api.bybit.com\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1676431922953\nX-BAPI-RECV-WINDOW: 5000\nX-BAPI-SIGN: XXXXXX\nContent-Type: application/json\n\n{\n\n}\n"))),(0,a.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.delete_sub_api_key())\n')))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1676431924719\n}\n')))}y.isMDXComponent=!0}}]);