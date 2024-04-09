"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[68224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u914d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f (\u5ee2\u68c4)",sidebar_label:"\u914d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f (\u5ee2\u68c4)",sidebar_position:6,slug:"/account-asset/enable-unitransfer"},o=void 0,i={unversionedId:"v3/account-asset/transfer/enable-uni-transfer",id:"v3/account-asset/transfer/enable-uni-transfer",title:"\u914d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f (\u5ee2\u68c4)",description:"\u914d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f\u5217\u8868",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/transfer/enable-uni-transfer.mdx",sourceDirName:"v3/account-asset/transfer",slug:"/account-asset/enable-unitransfer",permalink:"/bybitDocs/zh-TW/account-asset/enable-unitransfer",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u914d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f (\u5ee2\u68c4)",sidebar_label:"\u914d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f (\u5ee2\u68c4)",sidebar_position:6,slug:"/account-asset/enable-unitransfer"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5b50\u8cec\u865f\u5217\u8868",permalink:"/bybitDocs/zh-TW/account-asset/sub-uid-list"},next:{title:"\u842c\u80fd\u5283\u8f49",permalink:"/bybitDocs/zh-TW/account-asset/uni-transfer"}},s={},u=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u914d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f\u5217\u8868"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u7121\u9700\u518d\u914d\u7f6e\u53ef\u5283\u8f49\u7684\u5b50\u5e33\u865f, \u8a72\u9650\u5236\u5df2\u79fb\u9664, \u9ed8\u8a8d\u4efb\u610f\u5b50\u5e33\u865f\u4e4b\u9593\u53ef\u4ee5\u5283\u8f49")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u842c\u80fd\u8f49\u8cec\u4f7f\u60a8\u53ef\u4ee5\u5728\u5169\u500b\u5b50\u8cec\u6236\u6216\u8005\u6bcd\u5b50\u5e33\u6236\u5728\u5404\u7a2e",(0,a.kt)("a",{parentName:"p",href:"enum#accounttype"},"\u8cec\u6236\u985e\u578b"),"(CONTRACT\u3001SPOT\u7b49)\u4e4b\u9593\u5283\u8f49\u3002")),(0,a.kt)("p",null,"\u4f60\u9700\u8981\u901a\u904e\u9019\u500b\u63a5\u53e3\u4f86\u8a2d\u7f6e\u53ef\u4e92\u76f8\u5283\u8f49\u7684\u5b50\u8cec\u865f\u3002\u5982\u679c\u4e0d\u8a2d\u7f6e\uff0c\u9019\u4e9b\u5b50\u8cec\u6236\u4e4b\u9593\u4e0d\u80fd\u4e92\u76f8\u5283\u8f49"),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/transfer/transfer-sub-member-save")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subMemberIds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array","<","string",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9017\u865f\u9694\u958b\u7684id\u5217\u8868\uff0c\u4f8b\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},'"123,45,14,26,46"'),(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u82e5\u4e0d\u50b3\uff0c\u5247\u8868\u793a\u79fb\u9664\u5b50\u5e33\u6236\u842c\u80fd\u5283\u8f49\u7684\u80fd\u529b")))))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /asset/v3/private/transfer/transfer-sub-member-save HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1670928736473\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\nContent-Length: 43\n\n{\n    "subMemberIds": ["1111111","2222222"]\n}\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1670928736727\n}\n')))}p.isMDXComponent=!0}}]);