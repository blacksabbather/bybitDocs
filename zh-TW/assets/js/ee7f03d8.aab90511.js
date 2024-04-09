"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[15114],{62932:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>n,metadata:()=>m,toc:()=>c});var a=s(87462),r=(s(67294),s(3905)),i=s(26389),d=(s(94891),s(74933)),p=(s(47507),s(24310),s(63303),s(75035),s(85162));const n={id:"master-deposit-addr",title:"Get Master Deposit Address",description:"Get master deposit address",sidebar_label:"Get Master Deposit Address",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get master deposit address",operationId:"master-deposit-addr",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!0,schema:{type:"string"}},{name:"chainType",in:"query",description:"Chain name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-address",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Master Deposit Address",description:{content:"Get master deposit address",type:"text/plain"},url:{path:["v5","asset","deposit","query-address"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Chain name",type:"text/plain"},key:"chainType",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},o=void 0,m={unversionedId:"api-explorer/v5/asset/master-deposit-addr",id:"api-explorer/v5/asset/master-deposit-addr",title:"Get Master Deposit Address",description:"Get master deposit address",source:"@site/docs/api-explorer/v5/asset/master-deposit-addr.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/master-deposit-addr",permalink:"/bybitDocs/zh-TW/api-explorer/v5/asset/master-deposit-addr",draft:!1,tags:[],version:"current",frontMatter:{id:"master-deposit-addr",title:"Get Master Deposit Address",description:"Get master deposit address",sidebar_label:"Get Master Deposit Address",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Get master deposit address",operationId:"master-deposit-addr",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},{name:"coin",in:"query",description:"Coin name",required:!0,schema:{type:"string"}},{name:"chainType",in:"query",description:"Chain name",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/asset/deposit/query-address",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Master Deposit Address",description:{content:"Get master deposit address",type:"text/plain"},url:{path:["v5","asset","deposit","query-address"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Chain name",type:"text/plain"},key:"chainType",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Internal Deposit Records (off-chain)",permalink:"/bybitDocs/zh-TW/api-explorer/v5/asset/internal-deposit-record"},next:{title:"Get Sub Deposit Address",permalink:"/bybitDocs/zh-TW/api-explorer/v5/asset/sub-deposit-addr"}},l={},c=[{value:"Get Master Deposit Address",id:"get-master-deposit-address",level:2}],u={toc:c};function y(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-master-deposit-address"},"Get Master Deposit Address"),(0,r.kt)("p",null,"Get master deposit address"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"chainType",in:"query",description:"Chain name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}y.isMDXComponent=!0}}]);