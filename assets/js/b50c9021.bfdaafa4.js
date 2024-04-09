"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[70633],{71041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),l=a(26389),r=(a(94891),a(74933)),c=(a(47507),a(24310),a(63303),a(75035),a(85162));const s={id:"wallet",title:"Get Wallet Balance",description:"Get wallet balance",sidebar_label:"Get Wallet Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get wallet balance",operationId:"wallet",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT"]}},{name:"coin",in:"query",description:"Coin name. You can pass mutiple coins like USDT,USDC",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/wallet-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Wallet Balance",description:{content:"Get wallet balance",type:"text/plain"},url:{path:["v5","account","wallet-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Coin name. You can pass mutiple coins like USDT,USDC",type:"text/plain"},key:"coin",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},o=void 0,p={unversionedId:"api-explorer/v5/account/wallet",id:"api-explorer/v5/account/wallet",title:"Get Wallet Balance",description:"Get wallet balance",source:"@site/docs/api-explorer/v5/account/wallet.api.mdx",sourceDirName:"api-explorer/v5/account",slug:"/api-explorer/v5/account/wallet",permalink:"/bybitDocs/api-explorer/v5/account/wallet",draft:!1,tags:[],version:"current",frontMatter:{id:"wallet",title:"Get Wallet Balance",description:"Get wallet balance",sidebar_label:"Get Wallet Balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get wallet balance",operationId:"wallet",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT"]}},{name:"coin",in:"query",description:"Coin name. You can pass mutiple coins like USDT,USDC",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/wallet-balance",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Wallet Balance",description:{content:"Get wallet balance",type:"text/plain"},url:{path:["v5","account","wallet-balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Account type",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Coin name. You can pass mutiple coins like USDT,USDC",type:"text/plain"},key:"coin",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Account",permalink:"/bybitDocs/api-explorer/v5/account/account"},next:{title:"Upgrade to Unified Account",permalink:"/bybitDocs/api-explorer/v5/account/upgrade-unified-account"}},d={},u=[{value:"Get Wallet Balance",id:"get-wallet-balance",level:2}],m={toc:u};function y(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-wallet-balance"},"Get Wallet Balance"),(0,i.kt)("p",null,"Get wallet balance"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"accountType",in:"query",description:"Account type",required:!0,schema:{type:"string",enum:["UNIFIED","CONTRACT","SPOT"]}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name. You can pass mutiple coins like USDT,USDC",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);