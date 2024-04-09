"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[37486],{19603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var o=r(87462),i=(r(67294),r(3905)),a=r(26389),n=(r(94891),r(74933)),s=(r(47507),r(24310),r(63303),r(75035),r(85162));const p={id:"orderbook",title:"Get Orderbook",description:"Get order book data",sidebar_label:"Get Orderbook",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get order book data",operationId:"orderbook",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"spot\uff1a1-50\uff0cdefault\uff1a1. linear&inverse\uff1a1-200\uff0cdefault\uff1a25. option\uff1a1-25\uff0cdefault\uff1a1",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/orderbook",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Orderbook",description:{content:"Get order book data",type:"text/plain"},url:{path:["v5","market","orderbook"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"spot\uff1a1-50\uff0cdefault\uff1a1. linear&inverse\uff1a1-200\uff0cdefault\uff1a25. option\uff1a1-25\uff0cdefault\uff1a1",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},d=void 0,l={unversionedId:"api-explorer/v5/market/orderbook",id:"api-explorer/v5/market/orderbook",title:"Get Orderbook",description:"Get order book data",source:"@site/docs/api-explorer/v5/market/orderbook.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/orderbook",permalink:"/bybitDocs/api-explorer/v5/market/orderbook",draft:!1,tags:[],version:"current",frontMatter:{id:"orderbook",title:"Get Orderbook",description:"Get order book data",sidebar_label:"Get Orderbook",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get order book data",operationId:"orderbook",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"spot\uff1a1-50\uff0cdefault\uff1a1. linear&inverse\uff1a1-200\uff0cdefault\uff1a25. option\uff1a1-25\uff0cdefault\uff1a1",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/orderbook",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Orderbook",description:{content:"Get order book data",type:"text/plain"},url:{path:["v5","market","orderbook"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"spot\uff1a1-50\uff0cdefault\uff1a1. linear&inverse\uff1a1-200\uff0cdefault\uff1a25. option\uff1a1-25\uff0cdefault\uff1a1",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Instrument Info",permalink:"/bybitDocs/api-explorer/v5/market/instrument"},next:{title:"Get Tickers",permalink:"/bybitDocs/api-explorer/v5/market/tickers"}},m={},u=[{value:"Get Orderbook",id:"get-orderbook",level:2}],c={toc:u};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-orderbook"},"Get Orderbook"),(0,i.kt)("p",null,"Get order book data"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","option","spot"]}}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"spot\uff1a1-50\uff0cdefault\uff1a1. linear&inverse\uff1a1-200\uff0cdefault\uff1a25. option\uff1a1-25\uff0cdefault\uff1a1",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(s.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);