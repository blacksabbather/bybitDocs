"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[11053],{65114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var i=r(87462),a=(r(67294),r(3905)),s=r(26389),o=(r(94891),r(74933)),n=(r(47507),r(24310),r(63303),r(75035),r(85162));const p={id:"borrow-history",title:"Get Borrow History",description:"Get borrow history",sidebar_label:"Get Borrow History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get borrow history",operationId:"borrow-history",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"currency",in:"query",description:"e.g., USDC, USDT, BTC, ETH",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit per page. 1-50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"Cusor, used for pagiation",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/borrow-history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Borrow History",description:{content:"Get borrow history",type:"text/plain"},url:{path:["v5","account","borrow-history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"e.g., USDC, USDT, BTC, ETH",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit per page. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cusor, used for pagiation",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},d=void 0,c={unversionedId:"api-explorer/v5/account/borrow-history",id:"api-explorer/v5/account/borrow-history",title:"Get Borrow History",description:"Get borrow history",source:"@site/docs/api-explorer/v5/account/borrow-history.api.mdx",sourceDirName:"api-explorer/v5/account",slug:"/api-explorer/v5/account/borrow-history",permalink:"/bybitDocs/api-explorer/v5/account/borrow-history",draft:!1,tags:[],version:"current",frontMatter:{id:"borrow-history",title:"Get Borrow History",description:"Get borrow history",sidebar_label:"Get Borrow History",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get borrow history",operationId:"borrow-history",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"currency",in:"query",description:"e.g., USDC, USDT, BTC, ETH",required:!1,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit per page. 1-50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"Cusor, used for pagiation",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/borrow-history",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Borrow History",description:{content:"Get borrow history",type:"text/plain"},url:{path:["v5","account","borrow-history"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"e.g., USDC, USDT, BTC, ETH",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit per page. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cusor, used for pagiation",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set Collateral Coin",permalink:"/bybitDocs/api-explorer/v5/account/set-collateral"},next:{title:"Get Collateral Info",permalink:"/bybitDocs/api-explorer/v5/account/collateral-info"}},m={},l=[{value:"Get Borrow History",id:"get-borrow-history",level:2}],u={toc:l};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-borrow-history"},"Get Borrow History"),(0,a.kt)("p",null,"Get borrow history"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"currency",in:"query",description:"e.g., USDC, USDT, BTC, ETH",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit per page. 1-50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cusor, used for pagiation",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);