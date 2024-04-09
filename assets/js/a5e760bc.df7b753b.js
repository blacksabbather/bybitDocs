"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[33527],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=u(n),d=i,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(y,o(o({ref:e},s),{},{components:n})):r.createElement(y,o({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12893:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"Rate Limit",sidebar_label:"Rate Limit",slug:"/copy-trade/rate-limit"},o=void 0,l={unversionedId:"v3/copy-trade/rate-limit",id:"v3/copy-trade/rate-limit",title:"Rate Limit",description:"IP Rate Limit",source:"@site/docs/v3/copy-trade/rate-limit.mdx",sourceDirName:"v3/copy-trade",slug:"/copy-trade/rate-limit",permalink:"/bybitDocs/copy-trade/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"Rate Limit",sidebar_label:"Rate Limit",slug:"/copy-trade/rate-limit"}},p={},u=[{value:"IP Rate Limit",id:"ip-rate-limit",level:2},{value:"API Rate Limit",id:"api-rate-limit",level:2},{value:"API Rate Limit Table",id:"api-rate-limit-table",level:3},{value:"How to increase API Limit",id:"how-to-increase-api-limit",level:2}],s={toc:u};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ip-rate-limit"},"IP Rate Limit"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you receive an ",(0,i.kt)("strong",{parentName:"p"},"HTTP 403")," (Access Denied) response, your IP has been either temporarily or permanently banned.\n",(0,i.kt)("strong",{parentName:"p"},"You should immediately review the below guidelines to ensure your application does not continue to violate the limit."),"\nIf you are still banned after 30 minutes, you likely have a permanent ban.")),(0,i.kt)("p",null,"We do not recommend running your application at the very edge of these limits in case abnormal network activity results\nin an unexpected violation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," method (shared):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No more than 600 requests are allowed in any 5-second window.")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"All traffic to ",(0,i.kt)("inlineCode",{parentName:"p"},"api.bybit.com")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"api.bytick.com")," share this limit regardless of if it accesses Spot, Derivatives or Options.")),(0,i.kt)("p",null,"After violating the limit your IP will be banned for a set period of time (usually 30 minutes). Continually violating\nthe limit will result in a permanent ban. We cannot undo permanent bans or shorten temporary bans."),(0,i.kt)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you receive ",(0,i.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"')," in the JSON response, you have hit the API rate limit.")),(0,i.kt)("p",null,"The API rate limit is based on the ",(0,i.kt)("strong",{parentName:"p"},"rolling time window per minute and UID"),". In other words, it is per minute per UID.\nEvery request to the API returns response header shown in the code panel:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - your remaining requests for current endpoint"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - your current limit for current endpoint"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - the timestamp indicating when your request limit resets if you have exceeded your rate_limit. Otherwise, this is just the current timestamp.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Http Response Header Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,i.kt)("h3",{id:"api-rate-limit-table"},"API Rate Limit Table"),(0,i.kt)("span",{class:"blocky_table"},(0,i.kt)("table",{border:"0.8"},(0,i.kt)("tr",null,(0,i.kt)("th",null,"Path"),(0,i.kt)("th",null,"Limit"),(0,i.kt)("th",null,"Consume")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/position/set-leverage"),(0,i.kt)("td",{rowSpan:"3"},"75 req/min"),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/position/close"),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/position/list"),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/order/create"),(0,i.kt)("td",{rowSpan:"4"},"100 req/min"),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/order/close"),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/order/cancel"),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/order/list "),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/wallet/balance"),(0,i.kt)("td",{rowSpan:"2"},"120 req/min"),(0,i.kt)("td",null,"1/request")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"/contract/v3/private/copytrading/wallet/transfer"),(0,i.kt)("td",null,"1/request")))),(0,i.kt)("h2",{id:"how-to-increase-api-limit"},"How to increase API Limit"),(0,i.kt)("p",null,"Please email ",(0,i.kt)("a",{parentName:"p",href:"mailto:api@bybit.com"},"api@bybit.com")," with the following information. We will reply within 1-4 working days:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your name and your company details"),(0,i.kt)("li",{parentName:"ol"},"Your Bybit UID or registered email, and the assets you are trading"),(0,i.kt)("li",{parentName:"ol"},"General description of your trading strategy and reasons for higher rate limits"),(0,i.kt)("li",{parentName:"ol"},"Screenshot of previous monthly trading volume (maker/taker) on other platforms"),(0,i.kt)("li",{parentName:"ol"},"Optional: your order history in CSV format")))}m.isMDXComponent=!0}}]);