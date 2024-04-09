"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[81981],{90277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),n=(r(94891),r(74933)),o=(r(47507),r(24310),r(63303),r(75035),r(85162));const d={id:"borrow-order",title:"Get Borrow Order Detail",description:"Get Borrow Order Detail",sidebar_label:"Get Borrow Order Detail",hide_title:!0,hide_table_of_contents:!0,api:{tags:["normal-margin-trade"],operationId:"borrow-order",parameters:[{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"status",in:"query",description:"Status filter. 0\uff1aget all kinds of status, 1\uff1auncleared, 2\uff1acleared",required:!1,schema:{type:"string",enum:[0,1,2]}},{name:"limit",in:"query",description:"Limit for data size per page. 1 - 500. Default\uff1a500",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},description:"Get Borrow Order Detail",method:"get",path:"/v5/spot-cross-margin-trade/orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade (normal)"},postman:{name:"Get Borrow Order Detail",description:{type:"text/plain"},url:{path:["v5","spot-cross-margin-trade","orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Status filter. 0\uff1aget all kinds of status, 1\uff1auncleared, 2\uff1acleared",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Limit for data size per page. 1 - 500. Default\uff1a500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use normal mode account API KEY",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use normal mode account API SECRET",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/spot-margin-normal/bybit-open-api-v-5-explorer-spot-margin-trade-normal"},p=void 0,m={unversionedId:"api-explorer/v5/spot-margin-normal/borrow-order",id:"api-explorer/v5/spot-margin-normal/borrow-order",title:"Get Borrow Order Detail",description:"Get Borrow Order Detail",source:"@site/docs/api-explorer/v5/spot-margin-normal/borrow-order.api.mdx",sourceDirName:"api-explorer/v5/spot-margin-normal",slug:"/api-explorer/v5/spot-margin-normal/borrow-order",permalink:"/bybitDocs/api-explorer/v5/spot-margin-normal/borrow-order",draft:!1,tags:[],version:"current",frontMatter:{id:"borrow-order",title:"Get Borrow Order Detail",description:"Get Borrow Order Detail",sidebar_label:"Get Borrow Order Detail",hide_title:!0,hide_table_of_contents:!0,api:{tags:["normal-margin-trade"],operationId:"borrow-order",parameters:[{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}},{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},{name:"status",in:"query",description:"Status filter. 0\uff1aget all kinds of status, 1\uff1auncleared, 2\uff1acleared",required:!1,schema:{type:"string",enum:[0,1,2]}},{name:"limit",in:"query",description:"Limit for data size per page. 1 - 500. Default\uff1a500",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},description:"Get Borrow Order Detail",method:"get",path:"/v5/spot-cross-margin-trade/orders",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade (normal)"},postman:{name:"Get Borrow Order Detail",description:{type:"text/plain"},url:{path:["v5","spot-cross-margin-trade","orders"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The start timestamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timestamp (ms)",type:"text/plain"},key:"endTime",value:""},{disabled:!1,description:{content:"Coin name",type:"text/plain"},key:"coin",value:""},{disabled:!1,description:{content:"Status filter. 0\uff1aget all kinds of status, 1\uff1auncleared, 2\uff1acleared",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Limit for data size per page. 1 - 500. Default\uff1a500",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use normal mode account API KEY",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use normal mode account API SECRET",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/spot-margin-normal/bybit-open-api-v-5-explorer-spot-margin-trade-normal"},sidebar:"apiExplorerSideBar",previous:{title:"Repay",permalink:"/bybitDocs/api-explorer/v5/spot-margin-normal/repay"},next:{title:"Get Repayment Order Detail",permalink:"/bybitDocs/api-explorer/v5/spot-margin-normal/repay-order"}},l={},c=[{value:"Get Borrow Order Detail",id:"get-borrow-order-detail",level:2}],u={toc:c};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-borrow-order-detail"},"Get Borrow Order Detail"),(0,i.kt)("p",null,"Get Borrow Order Detail"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timestamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"coin",in:"query",description:"Coin name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"status",in:"query",description:"Status filter. 0\uff1aget all kinds of status, 1\uff1auncleared, 2\uff1acleared",required:!1,schema:{type:"string",enum:[0,1,2]}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Limit for data size per page. 1 - 500. Default\uff1a500",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);