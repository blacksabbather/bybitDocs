"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[67813],{28780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>c,toc:()=>y});var r=a(87462),o=(a(67294),a(3905)),i=a(26389),s=a(94891),n=a(74933),p=(a(47507),a(24310)),l=(a(63303),a(75035),a(85162));const m={id:"repay",title:"Repay",description:"Repay",sidebar_label:"Repay",hide_title:!0,hide_table_of_contents:!0,api:{tags:["normal-margin-trade"],operationId:"Repay",parameters:[{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{coin:{type:"string",description:"Coin name",example:"USDT"},qty:{type:"string",description:"Amount to repay",example:"1000"},completeRepayment:{type:"integer",description:"Whether to pay off all debts. 0\uff1afalse, 1\uff1atrue",enum:[0,1],example:0},required:["coin"]}}}}},description:"Repay",method:"post",path:"/v5/spot-cross-margin-trade/repay",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{coin:"USDT",qty:"1000",completeRepayment:0},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade (normal)"},postman:{name:"Repay",description:{type:"text/plain"},url:{path:["v5","spot-cross-margin-trade","repay"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use normal mode account API KEY",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use normal mode account API SECRET",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/spot-margin-normal/bybit-open-api-v-5-explorer-spot-margin-trade-normal"},d=void 0,c={unversionedId:"api-explorer/v5/spot-margin-normal/repay",id:"api-explorer/v5/spot-margin-normal/repay",title:"Repay",description:"Repay",source:"@site/docs/api-explorer/v5/spot-margin-normal/repay.api.mdx",sourceDirName:"api-explorer/v5/spot-margin-normal",slug:"/api-explorer/v5/spot-margin-normal/repay",permalink:"/bybitDocs/zh-TW/api-explorer/v5/spot-margin-normal/repay",draft:!1,tags:[],version:"current",frontMatter:{id:"repay",title:"Repay",description:"Repay",sidebar_label:"Repay",hide_title:!0,hide_table_of_contents:!0,api:{tags:["normal-margin-trade"],operationId:"Repay",parameters:[{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{coin:{type:"string",description:"Coin name",example:"USDT"},qty:{type:"string",description:"Amount to repay",example:"1000"},completeRepayment:{type:"integer",description:"Whether to pay off all debts. 0\uff1afalse, 1\uff1atrue",enum:[0,1],example:0},required:["coin"]}}}}},description:"Repay",method:"post",path:"/v5/spot-cross-margin-trade/repay",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{coin:"USDT",qty:"1000",completeRepayment:0},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - Spot margin trade (normal)"},postman:{name:"Repay",description:{type:"text/plain"},url:{path:["v5","spot-cross-margin-trade","repay"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use normal mode account API KEY",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use normal mode account API SECRET",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/spot-margin-normal/bybit-open-api-v-5-explorer-spot-margin-trade-normal"},sidebar:"apiExplorerSideBar",previous:{title:"Borrow",permalink:"/bybitDocs/zh-TW/api-explorer/v5/spot-margin-normal/borrow"},next:{title:"Get Borrow Order Detail",permalink:"/bybitDocs/zh-TW/api-explorer/v5/spot-margin-normal/borrow-order"}},u={},y=[{value:"Repay",id:"repay",level:2}],h={toc:y};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"repay"},"Repay"),(0,o.kt)("p",null,"Repay"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Header Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please use normal mode account API KEY",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please use normal mode account API SECRET",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)(s.Z,{mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"coin",required:!1,schemaDescription:"Coin name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"qty",required:!1,schemaDescription:"Amount to repay",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"completeRepayment",required:!1,schemaDescription:"Whether to pay off all debts. 0\uff1afalse, 1\uff1atrue",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`, `1`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"required",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"successful operation")),(0,o.kt)("div",null)))))}v.isMDXComponent=!0}}]);