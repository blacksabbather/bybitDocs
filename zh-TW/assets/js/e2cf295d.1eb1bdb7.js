"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6729],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>p});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),s=d(n),p=a,v=s["".concat(c,".").concat(p)]||s[p]||u[p]||l;return n?r.createElement(v,o(o({ref:e},k),{},{components:n})):r.createElement(v,o({ref:e},k))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60580:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6a21\u64ec\u4ea4\u6613",sidebar_label:"\u6a21\u64ec\u4ea4\u6613"},o=void 0,i={unversionedId:"v5/demo",id:"v5/demo",title:"\u6a21\u64ec\u4ea4\u6613",description:"\u6982\u89bd",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/demo.mdx",sourceDirName:"v5",slug:"/v5/demo",permalink:"/bybitDocs/zh-TW/v5/demo",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6a21\u64ec\u4ea4\u6613",sidebar_label:"\u6a21\u64ec\u4ea4\u6613"},sidebar:"v5SideBar",previous:{title:"\u5982\u4f55\u4f7f\u7528API\u5e36\u55ae",permalink:"/bybitDocs/zh-TW/v5/copytrade"},next:{title:"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da",permalink:"/bybitDocs/zh-TW/v5/market/kline"}},c={},d=[{value:"\u6982\u89bd",id:"\u6982\u89bd",level:2},{value:"\u5275\u5efaAPI Key",id:"\u5275\u5efaapi-key",level:2},{value:"\u4f7f\u7528\u898f\u5247",id:"\u4f7f\u7528\u898f\u5247",level:2},{value:"\u57df\u540d",id:"\u57df\u540d",level:2},{value:"\u53ef\u7528\u63a5\u53e3\u5217\u8868",id:"\u53ef\u7528\u63a5\u53e3\u5217\u8868",level:2},{value:"\u7372\u53d6\u6a21\u64ec\u8cc7\u91d1\u63a5\u53e3",id:"\u7372\u53d6\u6a21\u64ec\u8cc7\u91d1\u63a5\u53e3",level:3},{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:4},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:4}],k={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u89bd"},"\u6982\u89bd"),(0,a.kt)("p",null,"Bybit v5 Open API\u652f\u6301\u6a21\u64ec\u4ea4\u6613\u5e33\u6236, \u4f46\u662f\u7531\u65bc\u6a21\u64ec\u4ea4\u6613\u7684\u4e3b\u8981\u76ee\u7684\u662f\u70ba\u4e86\u9ad4\u9a57\u57fa\u790e\u4ea4\u6613\u529f\u80fd, \u50c5\u652f\u6301\u6709\u9650\u7684\u529f\u80fd, \u6240\u4ee5\u90e8\u5206\u63a5\u53e3\u4e0d\u652f\u6301\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u5275\u5efaapi-key"},"\u5275\u5efaAPI Key"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u60a8\u9700\u8981\u767b\u5165\u5230",(0,a.kt)("a",{parentName:"li",href:"https://www.bybit.com/"},"Bybit \u4e3b\u7db2"),"\u5e33\u6236;"),(0,a.kt)("li",{parentName:"ol"},"\u5207\u63db\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"\u6a21\u64ec\u4ea4\u6613"),", \u6ce8\u610f: \u6a21\u64ec\u4ea4\u6613\u64c1\u6709\u81ea\u5df1\u7368\u7acb\u7684\u5e33\u6236ID;"),(0,a.kt)("li",{parentName:"ol"},'\u61f8\u505c\u9f20\u6a19\u5728\u7528\u6236\u982d\u50cf\u4e0a, \u7136\u5f8c\u9ede\u64ca"API" \u4f86\u5275\u5efakey\u548csecret;')),(0,a.kt)("h2",{id:"\u4f7f\u7528\u898f\u5247"},"\u4f7f\u7528\u898f\u5247"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u790e\u4ea4\u6613\u898f\u5247\u548c\u5be6\u76e4\u4fdd\u6301\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u64ec\u76e4\u7684\u8a02\u55ae\u50c5\u4fdd\u7559",(0,a.kt)("strong",{parentName:"li"},"7\u5929")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8a8d\u8acb\u6c42\u983b\u7387, \u7121\u6cd5\u63d0\u983b")),(0,a.kt)("h2",{id:"\u57df\u540d"},"\u57df\u540d"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u7db2\u6a21\u64ec\u76e4:"),(0,a.kt)("br",null),"\nRest API: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-demo.bybit.com"),(0,a.kt)("br",null),"\nWebsocket : ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-demo.bybit.com")),(0,a.kt)("h2",{id:"\u53ef\u7528\u63a5\u53e3\u5217\u8868"},"\u53ef\u7528\u63a5\u53e3\u5217\u8868"),(0,a.kt)("span",{class:"blocky_table"},(0,a.kt)("table",{border:"0.8"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u76ee\u9304"),(0,a.kt)("th",null,"\u63a5\u53e3\u540d"),(0,a.kt)("th",null,"\u8def\u7531")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u516c\u6709\u884c\u60c5"),(0,a.kt)("td",{align:"center"},"\u6240\u6709"),(0,a.kt)("td",{align:"center"},"\u6240\u6709\u63a5\u53e3")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"10"},"\u4ea4\u6613"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/create-order"},"\u5275\u5efa\u59d4\u8a17\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/create")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/amend-order"},"\u4fee\u6539\u59d4\u8a17\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/amend")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/cancel-order"},"\u64a4\u92b7\u59d4\u8a17\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/cancel")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/open-order"},"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u6bb5")),(0,a.kt)("td",{align:"center"},"/v5/order/realtime")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/cancel-all"},"\u64a4\u92b7\u6240\u6709\u8a02\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/cancel-all")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/order-list"},"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/history")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/execution"},"\u67e5\u8a62\u6210\u4ea4\u7d00\u9304")),(0,a.kt)("td",{align:"center"},"/v5/execution/list")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/batch-place"},"\u6279\u91cf\u5275\u5efa\u59d4\u8a17\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/create-batch (\u671f\u8ca8/\u671f\u6b0a)")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/batch-amend"},"\u6279\u91cf\u4fee\u6539\u59d4\u8a17\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/amend-batch (\u671f\u8ca8/\u671f\u6b0a)")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/order/batch-cancel"},"\u6279\u91cf\u64a4\u92b7\u59d4\u8a17\u55ae")),(0,a.kt)("td",{align:"center"},"/v5/order/cancel-batch (\u671f\u8ca8/\u671f\u6b0a)")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"7"},"\u6301\u5009"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position"},"\u67e5\u8a62\u6301\u5009")),(0,a.kt)("td",{align:"center"},"/v5/position/list")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/leverage"},"\u8a2d\u7f6e\u69d3\u687f")),(0,a.kt)("td",{align:"center"},"/v5/position/set-leverage")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/position-mode"},"\u5207\u63db\u6301\u5009\u6a21\u5f0f")),(0,a.kt)("td",{align:"center"},"/v5/position/switch-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/trading-stop"},"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d")),(0,a.kt)("td",{align:"center"},"/v5/position/trading-stop")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/auto-add-margin"},"\u8a2d\u7f6e\u81ea\u52d5\u8ffd\u52a0\u4fdd\u8b49\u91d1")),(0,a.kt)("td",{align:"center"},"/v5/position/set-auto-add-margin")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/manual-add-margin"},"\u624b\u52d5\u589e\u52a0\u6216\u6e1b\u5c11\u4fdd\u8b49\u91d1")),(0,a.kt)("td",{align:"center"},"/v5/position/add-margin")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/position/close-pnl"},"\u67e5\u8a62\u5e73\u5e38\u76c8\u8667")),(0,a.kt)("td",{align:"center"},"/v5/position/closed-pnl")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"9"},"\u5e33\u6236"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/wallet-balance"},"\u67e5\u8a62\u9322\u5305\u9918\u984d")),(0,a.kt)("td",{align:"center"},"/v5/account/wallet-balance")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/borrow-history"},"\u67e5\u8a62\u5229\u606f\u7d00\u9304")),(0,a.kt)("td",{align:"center"},"/v5/account/borrow-history")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/set-collateral"},"\u8a2d\u7f6e\u62b5\u62bc\u54c1\u5e63\u7a2e")),(0,a.kt)("td",{align:"center"},"/v5/account/set-collateral-switch")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/collateral-info"},"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f")),(0,a.kt)("td",{align:"center"},"/v5/account/collateral-info")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/coin-greeks"},"\u67e5\u8a62Greeks\u4fe1\u606f")),(0,a.kt)("td",{align:"center"},"/v5/asset/coin-greeks")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/account-info"},"\u67e5\u8a62\u5e33\u6236\u914d\u7f6e")),(0,a.kt)("td",{align:"center"},"/v5/account/info")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/transaction-log"},"\u67e5\u8a62\u4ea4\u6613\u65e5\u8a8c")),(0,a.kt)("td",{align:"center"},"/v5/account/transaction-log")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/set-margin-mode"},"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f")),(0,a.kt)("td",{align:"center"},"/v5/account/set-margin-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/account/set-spot-hedge"},"\u8a2d\u7f6e\u73fe\u8ca8\u5c0d\u885d")),(0,a.kt)("td",{align:"center"},"/v5/account/set-hedging-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"\u8cc7\u7522"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/asset/delivery"},"\u67e5\u8a62\u4ea4\u5272\u7d00\u9304")),(0,a.kt)("td",{align:"center"},"/v5/asset/delivery-record")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/asset/settlement"},"\u67e5\u8a62USDC\u7d50\u7b97\u7d00\u9304")),(0,a.kt)("td",{align:"center"},"/v5/asset/settlement-record")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"3"},"\u5168\u5009\u69d3\u687f"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/spot-margin-uta/switch-mode"},"\u5168\u5009\u69d3\u687f\u958b\u95dc")),(0,a.kt)("td",{align:"center"},"/v5/spot-margin-trade/switch-mode")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/spot-margin-uta/set-leverage"},"\u5168\u5009\u69d3\u687f\u8a2d\u7f6e")),(0,a.kt)("td",{align:"center"},"/v5/spot-margin-trade/set-leverage")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"/v5/spot-margin-uta/status"},"\u67e5\u8a62\u958b\u95dc\u72c0\u614b\u548c\u500d\u6578")),(0,a.kt)("td",{align:"center"},"/v5/spot-margin-uta/status")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"/v5/websocket/private/position"},"WS\u79c1\u6709\u63a8\u9001")),(0,a.kt)("td",{align:"center"},"order,execution,position,wallet,greeks"),(0,a.kt)("td",{align:"center"},"/v5/private")))),(0,a.kt)("h3",{id:"\u7372\u53d6\u6a21\u64ec\u8cc7\u91d1\u63a5\u53e3"},"\u7372\u53d6\u6a21\u64ec\u8cc7\u91d1\u63a5\u53e3"),(0,a.kt)("h4",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/account/demo-apply-money")),(0,a.kt)("h4",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"POST /v5/account/demo-apply-money HTTP/1.1\nHost: api-demo.bybit.com\nX-BAPI-SIGN: XXXXXXX\nX-BAPI-API-KEY: XXXXXXX\nX-BAPI-TIMESTAMP: 1711420489915\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\nContent-Length: 2\n\n{}\n")))}u.isMDXComponent=!0}}]);