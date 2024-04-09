"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[69043],{73941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),r=a(26389),s=(a(94891),a(74933)),o=(a(47507),a(24310),a(63303),a(75035),a(85162));const p={id:"transaction-log",title:"Get Transaction Log",description:"Get transaction log",sidebar_label:"Get Transaction Log",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get transaction log",operationId:"transaction-log",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Support `UNIFIED` for now",required:!1,schema:{type:"string",enum:["UNIFIED"]}},{name:"category",in:"query",description:"Product category",required:!1,schema:{type:"string",enum:["spot","linear","option"]}},{name:"currency",in:"query",description:"Currency",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"type",in:"query",description:"Transaction log type",required:!1,schema:{type:"string",enum:["TRANSFER_IN","TRANSFER_OUT","TRADE","SETTLEMENT","DELIVERY","LIQUIDATION","BONUS","FEE_REFUND","INTEREST","CURRENCY_BUY","CURRENCY_SELL"]}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size for each page. 1-50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/transaction-log",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Transaction Log",description:{content:"Get transaction log",type:"text/plain"},url:{path:["v5","account","transaction-log"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Support `UNIFIED` for now",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Product category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Currency",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Transaction log type",type:"text/plain"},key:"type",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size for each page. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},c=void 0,d={unversionedId:"api-explorer/v5/account/transaction-log",id:"api-explorer/v5/account/transaction-log",title:"Get Transaction Log",description:"Get transaction log",source:"@site/docs/api-explorer/v5/account/transaction-log.api.mdx",sourceDirName:"api-explorer/v5/account",slug:"/api-explorer/v5/account/transaction-log",permalink:"/bybitDocs/zh-TW/api-explorer/v5/account/transaction-log",draft:!1,tags:[],version:"current",frontMatter:{id:"transaction-log",title:"Get Transaction Log",description:"Get transaction log",sidebar_label:"Get Transaction Log",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Get transaction log",operationId:"transaction-log",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"accountType",in:"query",description:"Support `UNIFIED` for now",required:!1,schema:{type:"string",enum:["UNIFIED"]}},{name:"category",in:"query",description:"Product category",required:!1,schema:{type:"string",enum:["spot","linear","option"]}},{name:"currency",in:"query",description:"Currency",required:!1,schema:{type:"string"}},{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},{name:"type",in:"query",description:"Transaction log type",required:!1,schema:{type:"string",enum:["TRANSFER_IN","TRANSFER_OUT","TRADE","SETTLEMENT","DELIVERY","LIQUIDATION","BONUS","FEE_REFUND","INTEREST","CURRENCY_BUY","CURRENCY_SELL"]}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size for each page. 1-50",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/account/transaction-log",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Transaction Log",description:{content:"Get transaction log",type:"text/plain"},url:{path:["v5","account","transaction-log"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Support `UNIFIED` for now",type:"text/plain"},key:"accountType",value:""},{disabled:!1,description:{content:"Product category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Currency",type:"text/plain"},key:"currency",value:""},{disabled:!1,description:{content:"Base coin",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Transaction log type",type:"text/plain"},key:"type",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size for each page. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Account Info",permalink:"/bybitDocs/zh-TW/api-explorer/v5/account/account-info"},next:{title:"Set Margin Mode",permalink:"/bybitDocs/zh-TW/api-explorer/v5/account/set-margin-mode"}},m={},u=[{value:"Get Transaction Log",id:"get-transaction-log",level:2}],l={toc:u};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-transaction-log"},"Get Transaction Log"),(0,n.kt)("p",null,"Get transaction log"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"accountType",in:"query",description:"Support `UNIFIED` for now",required:!1,schema:{type:"string",enum:["UNIFIED"]}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product category",required:!1,schema:{type:"string",enum:["spot","linear","option"]}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"currency",in:"query",description:"Currency",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"type",in:"query",description:"Transaction log type",required:!1,schema:{type:"string",enum:["TRANSFER_IN","TRANSFER_OUT","TRADE","SETTLEMENT","DELIVERY","LIQUIDATION","BONUS","FEE_REFUND","INTEREST","CURRENCY_BUY","CURRENCY_SELL"]}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size for each page. 1-50",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);