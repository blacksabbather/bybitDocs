"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[40683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Set Leverage",sidebar_label:"Set Leverage",sidebar_position:2},o=void 0,i={unversionedId:"v5/position/leverage",id:"v5/position/leverage",title:"Set Leverage",description:"Set the leverage",source:"@site/docs/v5/position/leverage.mdx",sourceDirName:"v5/position",slug:"/v5/position/leverage",permalink:"/bybitDocs/v5/position/leverage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Set Leverage",sidebar_label:"Set Leverage",sidebar_position:2},sidebar:"v5SideBar",previous:{title:"Get Position Info",permalink:"/bybitDocs/v5/position/"},next:{title:"Switch Cross/Isolated Margin",permalink:"/bybitDocs/v5/position/cross-isolate"}},s={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("Button"),c=m("Tabs"),d=m("TabItem"),g={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Set the leverage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Unified account covers: USDT perpetual / USDC contract / Inverse contract"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Classic account covers: USDT perpetual / Inverse contract"))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/position/set-leverage")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Unified account: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse")),(0,a.kt)("li",null,"Classic account: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),". ",(0,a.kt)("em",{parentName:"td"},"Please note that ",(0,a.kt)("inlineCode",{parentName:"em"},"category")," is ",(0,a.kt)("strong",{parentName:"em"},"not")," involved with business logic"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"buyLeverage"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", max leverage of corresponding ",(0,a.kt)("a",{parentName:"td",href:"../market/risk-limit#"},"risk limit"),"] ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"one-way mode: ",(0,a.kt)("inlineCode",{parentName:"td"},"buyLeverage")," must be the same as ",(0,a.kt)("inlineCode",{parentName:"td"},"sellLeverage")),(0,a.kt)("li",null,"Hedge mode: ",(0,a.kt)("br",null),"Classic account & UTA (isolated margin): ",(0,a.kt)("inlineCode",{parentName:"td"},"buyLeverage")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"sellLeverage")," can be different; ",(0,a.kt)("br",null),"UTA (cross margin): ",(0,a.kt)("inlineCode",{parentName:"td"},"buyLeverage")," must be the same as ",(0,a.kt)("inlineCode",{parentName:"td"},"sellLeverage"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sellLeverage"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", max leverage of corresponding risk limit]")))),(0,a.kt)("a",{href:"/api-explorer/v5/position/leverage"},(0,a.kt)(u,{mdxType:"Button"},"RUN >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(c,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(d,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/position/set-leverage HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672281605082\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "category": "linear",\n    "symbol": "BTCUSDT",\n    "buyLeverage": "6",\n    "sellLeverage": "6"\n\n}\n'))),(0,a.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.set_leverage(\n    category="linear",\n    symbol="BTCUSDT",\n    buyLeverage="6",\n    sellLeverage="6",\n))\n'))),(0,a.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.bybit.api.client.domain.*;\nimport com.bybit.api.client.domain.position.*;\nimport com.bybit.api.client.domain.position.request.*;\nimport com.bybit.api.client.service.BybitApiClientFactory;\nvar client = BybitApiClientFactory.newInstance().newAsyncPositionRestClient();\nvar setLeverageRequest = PositionDataRequest.builder().category(CategoryType.LINEAR).symbol("BTCUSDT").buyLeverage("5").sellLeverage("5").build();\nclient.setPositionLeverage(setLeverageRequest, System.out::println);\n'))),(0,a.kt)(d,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n    testnet: true,\n    key: 'apikey',\n    secret: 'apisecret',\n});\n\nclient\n    .setLeverage({\n        category: 'linear',\n        symbol: 'BTCUSDT',\n        buyLeverage: '6',\n        sellLeverage: '6',\n    })\n    .then((response) => {\n        console.log(response);\n    })\n    .catch((error) => {\n        console.error(error);\n    });\n")))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1672281607343\n}\n')))}k.isMDXComponent=!0}}]);