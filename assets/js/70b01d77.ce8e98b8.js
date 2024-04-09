"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[46976],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=m(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?r.createElement(k,o(o({ref:e},s),{},{components:a})):r.createElement(k,o({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65284:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"Get Long Short Ratio",sidebar_label:"Get Long Short Ratio",sidebar_position:15},o=void 0,i={unversionedId:"v5/market/long-short-ratio",id:"v5/market/long-short-ratio",title:"Get Long Short Ratio",description:"HTTP Request",source:"@site/docs/v5/market/long-short-ratio.mdx",sourceDirName:"v5/market",slug:"/v5/market/long-short-ratio",permalink:"/bybitDocs/v5/market/long-short-ratio",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Get Long Short Ratio",sidebar_label:"Get Long Short Ratio",sidebar_position:15},sidebar:"v5SideBar",previous:{title:"Get Delivery Price",permalink:"/bybitDocs/v5/market/delivery-price"},next:{title:"Place Order",permalink:"/bybitDocs/v5/order/create-order"}},p={},m=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},d=s("Button"),u=s("Tabs"),c=s("TabItem"),k={toc:m};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/v5/market/account-ratio")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Product type. ",(0,n.kt)("inlineCode",{parentName:"td"},"linear"),"(USDT Perpetual),",(0,n.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#datarecordingperiod"},"period")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Data recording period. ",(0,n.kt)("inlineCode",{parentName:"td"},"5min"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"15min"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"30min"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"1h"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"4h"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"1d"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"500"),"]",". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"50"))))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> buyRatio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ratio of users with net long position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> sellRatio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ratio of users with net short position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp (ms)")))),(0,n.kt)("a",{href:"/api-explorer/v5/market/long-short-ratio"},(0,n.kt)(d,{mdxType:"Button"},"RUN >>")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)(u,{groupId:"programming-languages",mdxType:"Tabs"},(0,n.kt)(c,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/account-ratio?category=linear&symbol=BTCUSDT&period=1d&limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,n.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},""))),(0,n.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import com.bybit.api.client.domain.CategoryType;\nimport com.bybit.api.client.domain.market.*;\nimport com.bybit.api.client.domain.market.request.MarketDataRequest;\nimport com.bybit.api.client.service.BybitApiClientFactory;\nvar client = BybitApiClientFactory.newInstance().newAsyncMarketDataRestClient();\nvar marketAccountRatioRequest = MarketDataRequest.builder().category(CategoryType.LINEAR).symbol("BTCUSDT").dataRecordingPeriod(DataRecordingPeriod.FIFTEEN_MINUTES).limit(10).build();\nclient.getMarketAccountRatio(marketAccountRatioRequest, System.out::println);\n'))),(0,n.kt)(c,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-n4js"},"")))),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "buyRatio": "0.5777",\n                "sellRatio": "0.4223",\n                "timestamp": "1695772800000"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1695785131028\n}\n')))}g.isMDXComponent=!0}}]);