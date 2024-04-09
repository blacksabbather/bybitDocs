"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[77937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Frequently Asked Questions",slug:"/faq"},o=void 0,l={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Where are Bybit's servers located?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/bybitDocs/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"Frequently Asked Questions",slug:"/faq"}},s={},c=[{value:"Where are Bybit&#39;s servers located?",id:"where-are-bybits-servers-located",level:3},{value:"<code>reduceOnly</code> and <code>closeOnTrigger</code> - what&#39;s the difference?",id:"reduceonly-and-closeontrigger---whats-the-difference",level:3},{value:"Why aren&#39;t all my orders showing on the website?",id:"why-arent-all-my-orders-showing-on-the-website",level:3},{value:"Calculating order size based on available wallet balance",id:"calculating-order-size-based-on-available-wallet-balance",level:3},{value:"Can I exchange assets with the API?",id:"can-i-exchange-assets-with-the-api",level:3},{value:"How do I get funds for testnet?",id:"how-do-i-get-funds-for-testnet",level:3},{value:"Why are my Closed PNL prices inaccurate?",id:"why-are-my-closed-pnl-prices-inaccurate",level:3},{value:"How can I ensure I am using up-to-date data?",id:"how-can-i-ensure-i-am-using-up-to-date-data",level:3},{value:"What is the difference between turnover and volume?",id:"what-is-the-difference-between-turnover-and-volume",level:3},{value:"Why is the price returned in the place market order response wrong?",id:"why-is-the-price-returned-in-the-place-market-order-response-wrong",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"where-are-bybits-servers-located"},"Where are Bybit's servers located?"),(0,n.kt)("p",null,"AWS Singapore, ",(0,n.kt)("a",{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones"},"Availability Zone")," ID apse1-az3."),(0,n.kt)("h3",{id:"reduceonly-and-closeontrigger---whats-the-difference"},(0,n.kt)("inlineCode",{parentName:"h3"},"reduceOnly")," and ",(0,n.kt)("inlineCode",{parentName:"h3"},"closeOnTrigger")," - what's the difference?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To close your position, submit an order and specify ",(0,n.kt)("inlineCode",{parentName:"li"},"reduceOnly")," to true. ",(0,n.kt)("inlineCode",{parentName:"li"},"closeOnTrigger")," is not strictly applicable here, but you can also set it to true if it's required."),(0,n.kt)("li",{parentName:"ul"},"reduceOnly is the one that really matters for closing position, and we will improve the interface in the future."),(0,n.kt)("li",{parentName:"ul"},"Be careful when you specify closeOnTrigger to true as it could cause conflict when reduceOnly is false.")),(0,n.kt)("h3",{id:"why-arent-all-my-orders-showing-on-the-website"},"Why aren't all my orders showing on the website?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users who have bots which place large numbers of laddered orders will be restricted by the frontend interface, which only shows a maximum of 50 orders on-screen."),(0,n.kt)("li",{parentName:"ul"},"Don't worry, your orders are still in the system and can be queried by the API, but the frontend cannot show more than 50.")),(0,n.kt)("h3",{id:"calculating-order-size-based-on-available-wallet-balance"},"Calculating order size based on available wallet balance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"price * availableBalance * leverage * perc * (1 - (0.0006 * 2))")),(0,n.kt)("li",{parentName:"ul"},"Unfortunately this is not a perfectly accurate formula; the real calculation is complex and may be published in the docs at a later date.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"price")," - last price (or your entry price) - can be found with the ",(0,n.kt)("a",{parentName:"li",href:"/v5/market/tickers#"},"Tickers"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"availableBalance")," - can be found with the ",(0,n.kt)("a",{parentName:"li",href:"/v5/position#"},"Position Info")," endpoint."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"leverage")," - up to the respective maximum leverage for the market and your risk limit (eg 2, 10, 50)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"perc")," - 0.1 for 10%, 0.25 for 25%, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1 - (0.0006 * 2)")," - used to calculate the maximum order cost (always assumes entry & exit orders use taker fee regardless actual fee).")))),(0,n.kt)("h3",{id:"can-i-exchange-assets-with-the-api"},"Can I exchange assets with the API?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is no endpoint to exchange assets. This can only be done on the ",(0,n.kt)("a",{href:"https://www.bybit.com/app/assets/assets-exchange"},"website"),"."),(0,n.kt)("li",{parentName:"ul"},"However, it is possible to access your ",(0,n.kt)("a",{parentName:"li",href:"/v5/asset/exchange#"},"Asset Exchange Records"),".")),(0,n.kt)("h3",{id:"how-do-i-get-funds-for-testnet"},"How do I get funds for testnet?"),(0,n.kt)("p",null,"To get testnet funds, just go to master account asset page to request."),(0,n.kt)("h3",{id:"why-are-my-closed-pnl-prices-inaccurate"},"Why are my Closed PNL prices inaccurate?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"entryPrice")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"exitPrice")," returned by Closed PNL endpoints are not the actual execution prices of the orders."),(0,n.kt)("li",{parentName:"ul"},"It is based on the total costs of the order\n(whether or not the position was only opened/closed by one order executed at one price - it is more complicated if multiple orders opened/closed a position.)"),(0,n.kt)("li",{parentName:"ul"},"For instance, the entry_price and exit_price reported by this endpoint are influenced by the fee paid/received on the orders.")),(0,n.kt)("h3",{id:"how-can-i-ensure-i-am-using-up-to-date-data"},"How can I ensure I am using up-to-date data?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is possible, although unlikely, that the REST API or (even less likely) the websocket could return/push old data."),(0,n.kt)("li",{parentName:"ul"},"For the greatest level of data resilience, we recommend clients to:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"firstly, rely on the websocket, which will not only ensure you get the latest data as fast as possible, but will also ensure you get complete data"),(0,n.kt)("li",{parentName:"ul"},"secondly, query the REST API to fill in any discrepencies in data - or between websocket disconnections."))),(0,n.kt)("li",{parentName:"ul"},"The best practice is to save all of this data locally in your own database or cache."),(0,n.kt)("li",{parentName:"ul"},"This frees up your rate limits for other requests and also ensures a level of redundancy against the exchange in case of data delays.")),(0,n.kt)("h3",{id:"what-is-the-difference-between-turnover-and-volume"},"What is the difference between turnover and volume?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Turnover"),": is in the opposite currency to the quantity's currency"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Volume"),": is in the same currency as the quantity's currency")),(0,n.kt)("h3",{id:"why-is-the-price-returned-in-the-place-market-order-response-wrong"},"Why is the price returned in the place market order response wrong?"),(0,n.kt)("p",null,'Market orders are (in the backend) just limit orders submitted at a worse price. This is to reduce the chance of a flash crash or a similar event, where a trader might submit a market order which executes at a significantly worse price than they expected it to. The price returned here is that internal limit order price. This "inaccurate" price is returned because the place order endpoint is asynchronous, meaning the response is returned to you before the order is actually executed.'),(0,n.kt)("p",null,"If you want the true execution price (",(0,n.kt)("inlineCode",{parentName:"p"},"execPrice"),") you should subscribe to the ",(0,n.kt)("a",{parentName:"p",href:"https://bybit-exchange.github.io/docs/v5/websocket/private/execution"},"execution websocket"),"."))}d.isMDXComponent=!0}}]);