"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9624],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68822:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"Get Margin Coin Info",sidebar_label:"Get Margin Coin Info",sidebar_position:2},i=void 0,l={unversionedId:"v5/otc/margin-coin-convert-info",id:"v5/otc/margin-coin-convert-info",title:"Get Margin Coin Info",description:"* This endpoint can be queried without api key and secret, then it returns public margin data",source:"@site/docs/v5/otc/margin-coin-convert-info.mdx",sourceDirName:"v5/otc",slug:"/v5/otc/margin-coin-convert-info",permalink:"/bybitDocs/v5/otc/margin-coin-convert-info",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Get Margin Coin Info",sidebar_label:"Get Margin Coin Info",sidebar_position:2},sidebar:"v5SideBar",previous:{title:"Get Product Info",permalink:"/bybitDocs/v5/otc/margin-product-info"},next:{title:"Get Loan Orders",permalink:"/bybitDocs/v5/otc/loan-info"}},p={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c={toc:d};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"This endpoint can be queried without api key and secret, then it returns public margin data"),(0,a.kt)("li",{parentName:"ul"},"If your uid is bound with OTC loan product, then you can get your private margin data by calling the endpoint with api key and secret"),(0,a.kt)("li",{parentName:"ul"},"If your uid is not bound with OTC loan product but api key and secret are also passed, it will return public data only"))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/ins-loan/ensure-tokens-convert")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"productId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"ProductId. If not passed, then return all product margin coin. For spot, it returns coin that convertRation greater than 0.")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"marginToken"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> productId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product Id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> tokenInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Spot margin coin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Margin coin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> convertRatioList"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Margin coin convert ratio List")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">>> ladder"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"ladder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">>> convertRatio"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Margin coin convert ratio")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/ins-loan/ensure-tokens HTTP/1.1\nHost: api-testnet.bybit.com\n")),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "marginToken": [\n            {\n                "productId": "81",\n                "tokenInfo": [\n                    {\n                        "token": "USDT",\n                        "convertRatioList": [\n                            {\n                                "ladder": "0-500",\n                                "convertRatio": "0.95"\n                            },\n                            {\n                                "ladder": "500-1000",\n                                "convertRatio": "0.9"\n                            },\n                            {\n                                "ladder": "1000-2000",\n                                "convertRatio": "0.8"\n                            },\n                            {\n                                "ladder": "2000-4000",\n                                "convertRatio": "0.7"\n                            },\n                            {\n                                "ladder": "4000-99999999999",\n                                "convertRatio": "0.6"\n                            }\n                        ]\n                    }\n                  ...\n                ]\n            },\n            {\n                "productId": "82",\n                "tokenInfo": [\n                    ...\n                    {\n                        "token": "USDT",\n                        "convertRatioList": [\n                            {\n                                "ladder": "0-1000",\n                                "convertRatio": "0.7"\n                            },\n                            {\n                                "ladder": "1000-2000",\n                                "convertRatio": "0.65"\n                            },\n                            {\n                                "ladder": "2000-99999999999",\n                                "convertRatio": "0.6"\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                "productId": "84",\n                "tokenInfo": [\n                    ...\n                    {\n                        "token": "BTC",\n                        "convertRatioList": [\n                            {\n                                "ladder": "0-1000",\n                                "convertRatio": "1"\n                            },\n                            {\n                                "ladder": "1000-5000",\n                                "convertRatio": "0.9"\n                            },\n                            {\n                                "ladder": "5000-99999999999",\n                                "convertRatio": "0.55"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1683276016497\n}\n')))}s.isMDXComponent=!0}}]);