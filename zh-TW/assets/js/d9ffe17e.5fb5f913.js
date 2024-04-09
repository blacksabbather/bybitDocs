"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[94089],{26804:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>l});var r=i(87462),a=(i(67294),i(3905)),s=i(26389),n=(i(94891),i(74933)),d=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"withdraw-record",title:"Get Withdraw Records",description:"Get withdraw record",sidebar_label:"Get Withdraw Records",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get withdraw record",operationId:"withdraw-record",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"withdrawID",in:"query",description:"Withdraw ID",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"withdrawType",in:"query",description:"Withdraw type. 0=on chain, 1=off chain, 2=all",required:!1,schema:{type:"integer",enum:[0,1,2],default:0}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/withdraw/query-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Withdraw Records",description:{content:"Get withdraw record",type:"text/plain"},url:{path:["v5","asset","withdraw","query-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Withdraw ID",type:"text/plain"},key:"withdrawID",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Withdraw type. 0=on chain, 1=off chain, 2=all",type:"text/plain"},key:"withdrawType",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},o=void 0,m={unversionedId:"api-explorer/v5/asset/withdraw-record",id:"api-explorer/v5/asset/withdraw-record",title:"Get Withdraw Records",description:"Get withdraw record",source:"@site/docs/api-explorer/v5/asset/withdraw-record.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/withdraw-record",permalink:"/bybitDocs/zh-TW/api-explorer/v5/asset/withdraw-record",draft:!1,tags:[],version:"current",frontMatter:{id:"withdraw-record",title:"Get Withdraw Records",description:"Get withdraw record",sidebar_label:"Get Withdraw Records",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get withdraw record",operationId:"withdraw-record",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"withdrawID",in:"query",description:"Withdraw ID",required:!1,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"withdrawType",in:"query",description:"Withdraw type. 0=on chain, 1=off chain, 2=all",required:!1,schema:{type:"integer",enum:[0,1,2],default:0}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/withdraw/query-record",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Withdraw Records",description:{content:"Get withdraw record",type:"text/plain"},url:{path:["v5","asset","withdraw","query-record"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Withdraw ID",type:"text/plain"},key:"withdrawID",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Withdraw type. 0=on chain, 1=off chain, 2=all",type:"text/plain"},key:"withdrawType",value:""},{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Limit size. 1-50",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"Cursor, used to pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Coin Info",permalink:"/bybitDocs/zh-TW/api-explorer/v5/asset/coin-info"},next:{title:"User",permalink:"/bybitDocs/zh-TW/api-explorer/v5/user/user"}},c={},l=[{value:"Get Withdraw Records",id:"get-withdraw-records",level:2}],u={toc:l};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-withdraw-records"},"Get Withdraw Records"),(0,a.kt)("p",null,"Get withdraw record"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"withdrawID",in:"query",description:"Withdraw ID",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"withdrawType",in:"query",description:"Withdraw type. 0=on chain, 1=off chain, 2=all",required:!1,schema:{type:"integer",enum:[0,1,2],default:0}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit size. 1-50",required:!1,schema:{type:"integer",default:50}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"Cursor, used to pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);