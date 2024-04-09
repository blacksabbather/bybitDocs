"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[48954],{37722:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var a=i(87462),r=(i(67294),i(3905)),s=i(26389),n=(i(94891),i(74933)),o=(i(47507),i(24310),i(63303),i(75035),i(85162));const p={id:"iv",title:"Get Historical Volatility",description:"Get historical volatility",sidebar_label:"Get Historical Volatility",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get historical volatility",operationId:"iv",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["option"]}}},{name:"baseCoin",in:"query",description:"Base coin. If not passed, BTC returned by default",required:!1,schema:{type:"string",default:"BTC"}},{name:"period",in:"query",description:"Period. If not passed, it returns 7 days by default. SOL does not have 180 and 270",required:!1,schema:{type:"array",items:{type:"integer",enum:[7,14,21,30,60,90,180,270]}}},{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/historical-volatility",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Historical Volatility",description:{content:"Get historical volatility",type:"text/plain"},url:{path:["v5","market","historical-volatility"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Base coin. If not passed, BTC returned by default",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Period. If not passed, it returns 7 days by default. SOL does not have 180 and 270",type:"text/plain"},key:"period",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"endTime",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},l=void 0,d={unversionedId:"api-explorer/v5/market/iv",id:"api-explorer/v5/market/iv",title:"Get Historical Volatility",description:"Get historical volatility",source:"@site/docs/api-explorer/v5/market/iv.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/iv",permalink:"/bybitDocs/api-explorer/v5/market/iv",draft:!1,tags:[],version:"current",frontMatter:{id:"iv",title:"Get Historical Volatility",description:"Get historical volatility",sidebar_label:"Get Historical Volatility",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get historical volatility",operationId:"iv",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["option"]}}},{name:"baseCoin",in:"query",description:"Base coin. If not passed, BTC returned by default",required:!1,schema:{type:"string",default:"BTC"}},{name:"period",in:"query",description:"Period. If not passed, it returns 7 days by default. SOL does not have 180 and 270",required:!1,schema:{type:"array",items:{type:"integer",enum:[7,14,21,30,60,90,180,270]}}},{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"integer"}},{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"integer"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/historical-volatility",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Historical Volatility",description:{content:"Get historical volatility",type:"text/plain"},url:{path:["v5","market","historical-volatility"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"Base coin. If not passed, BTC returned by default",type:"text/plain"},key:"baseCoin",value:""},{disabled:!1,description:{content:"Period. If not passed, it returns 7 days by default. SOL does not have 180 and 270",type:"text/plain"},key:"period",value:""},{disabled:!1,description:{content:"The start timstamp (ms)",type:"text/plain"},key:"startTime",value:""},{disabled:!1,description:{content:"The end timstamp (ms)",type:"text/plain"},key:"endTime",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Open Interest",permalink:"/bybitDocs/api-explorer/v5/market/open-interest"},next:{title:"Get Insurance",permalink:"/bybitDocs/api-explorer/v5/market/insurance"}},m={},c=[{value:"Get Historical Volatility",id:"get-historical-volatility",level:2}],y={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-historical-volatility"},"Get Historical Volatility"),(0,r.kt)("p",null,"Get historical volatility"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["option"]}}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"baseCoin",in:"query",description:"Base coin. If not passed, BTC returned by default",required:!1,schema:{type:"string",default:"BTC"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"period",in:"query",description:"Period. If not passed, it returns 7 days by default. SOL does not have 180 and 270",required:!1,schema:{type:"array",items:{type:"integer",enum:[7,14,21,30,60,90,180,270]}}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"startTime",in:"query",description:"The start timstamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"endTime",in:"query",description:"The end timstamp (ms)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null)))))}u.isMDXComponent=!0}}]);