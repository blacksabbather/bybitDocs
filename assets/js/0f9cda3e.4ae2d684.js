"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[67861],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>p});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),o=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=o(t.components);return l.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),k=o(n),p=r,m=k["".concat(s,".").concat(p)]||k[p]||c[p]||i;return n?l.createElement(m,u(u({ref:e},d),{},{components:n})):l.createElement(m,u({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,u=new Array(i);u[0]=k;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:r,u[1]=a;for(var o=2;o<i;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},16833:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var l=n(87462),r=(n(67294),n(3905));const i={title:"Tickers",sidebar_label:"Tickers",sidebar_position:3,slug:"/copy-trade/ws-public/ticker"},u=void 0,a={unversionedId:"v3/copy-trade/wss-public/tickers",id:"v3/copy-trade/wss-public/tickers",title:"Tickers",description:"Get latest information of the symbol",source:"@site/docs/v3/copy-trade/wss-public/tickers.mdx",sourceDirName:"v3/copy-trade/wss-public",slug:"/copy-trade/ws-public/ticker",permalink:"/bybitDocs/copy-trade/ws-public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tickers",sidebar_label:"Tickers",sidebar_position:3,slug:"/copy-trade/ws-public/ticker"}},s={},o=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscription Example",id:"subscription-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},c=d("Tabs"),k=d("TabItem"),p={toc:o};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get latest information of the symbol"),(0,r.kt)("admonition",{title:"important",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Have ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"delta")," types. If a key does not exist in the field, it means the value is not changed.")),(0,r.kt)("p",null,"Push frequency: ",(0,r.kt)("strong",{parentName:"p"},"real-time")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(k,{value:"future",label:"Linear",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Data type. ",(0,r.kt)("code",null,"snapshot"),",",(0,r.kt)("code",null,"delta"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Cross sequence")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"The timestamp (ms) that the system generates the data")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tickDirection"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tick direction ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price 24 hours ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price an hour ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Next funding timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Funding rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask size "))))),(0,r.kt)("h3",{id:"subscription-example"},"Subscription Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n        "tickers.BTCUSDT"\n    ],\n    "req_id": "test" // optional\n}\n')),(0,r.kt)("h3",{id:"stream-example"},"Stream Example"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(k,{value:"ws-linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCUSDT",\n    "type": "snapshot",\n    "data": {\n        "symbol": "BTCUSDT",\n        "tickDirection": "MinusTick",\n        "price24hPcnt": "0.017367",\n        "lastPrice": "17222.00",\n        "prevPrice24h": "16928.00",\n        "highPrice24h": "17281.50",\n        "lowPrice24h": "16915.00",\n        "prevPrice1h": "17238.00",\n        "markPrice": "17224.40",\n        "indexPrice": "17234.84",\n        "openInterest": "68795.534",\n        "openInterestValue": "1184961795.83",\n        "turnover24h": "1572429119.324499",\n        "volume24h": "91823.449",\n        "nextFundingTime": "1673280000000",\n        "fundingRate": "-0.000211",\n        "bid1Price": "17222.00",\n        "bid1Size": "220.358",\n        "ask1Price": "17222.50",\n        "ask1Size": "3.902"\n    },\n    "cs": 24988405605,\n    "ts": 1673273043686\n}\n')))))}m.isMDXComponent=!0}}]);