"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[87074],{59444:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var i=o(87462),s=(o(67294),o(3905)),a=o(26389),n=o(94891),r=o(74933),p=(o(47507),o(24310)),d=(o(63303),o(75035),o(85162));const l={id:"set-spot-hedge",title:"Set Spot Hedging",description:"Set spot hedging for Portfolio margin",sidebar_label:"Set Spot Hedging",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Set spot hedging for Portfolio margin",operationId:"set-spot-hedge",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{setHedgingMode:{type:"string",description:"on or off spot hedging mode",enum:["ON","OFF"],example:"ON"}},required:["setHedgingMode"]}}}},method:"post",path:"/v5/account/set-hedging-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{setHedgingMode:"ON"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Set Spot Hedging",description:{content:"Set spot hedging for Portfolio margin",type:"text/plain"},url:{path:["v5","account","set-hedging-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},c=void 0,u={unversionedId:"api-explorer/v5/account/set-spot-hedge",id:"api-explorer/v5/account/set-spot-hedge",title:"Set Spot Hedging",description:"Set spot hedging for Portfolio margin",source:"@site/docs/api-explorer/v5/account/set-spot-hedge.api.mdx",sourceDirName:"api-explorer/v5/account",slug:"/api-explorer/v5/account/set-spot-hedge",permalink:"/bybitDocs/zh-TW/api-explorer/v5/account/set-spot-hedge",draft:!1,tags:[],version:"current",frontMatter:{id:"set-spot-hedge",title:"Set Spot Hedging",description:"Set spot hedging for Portfolio margin",sidebar_label:"Set Spot Hedging",hide_title:!0,hide_table_of_contents:!0,api:{tags:["account"],description:"Set spot hedging for Portfolio margin",operationId:"set-spot-hedge",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{setHedgingMode:{type:"string",description:"on or off spot hedging mode",enum:["ON","OFF"],example:"ON"}},required:["setHedgingMode"]}}}},method:"post",path:"/v5/account/set-hedging-mode",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{setHedgingMode:"ON"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Set Spot Hedging",description:{content:"Set spot hedging for Portfolio margin",type:"text/plain"},url:{path:["v5","account","set-hedging-mode"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/account/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Set Margin Mode",permalink:"/bybitDocs/zh-TW/api-explorer/v5/account/set-margin-mode"},next:{title:"Asset",permalink:"/bybitDocs/zh-TW/api-explorer/v5/asset/asset"}},g={},m=[{value:"Set Spot Hedging",id:"set-spot-hedging",level:2}],y={toc:m};function h(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"set-spot-hedging"},"Set Spot Hedging"),(0,s.kt)("p",null,"Set spot hedging for Portfolio margin"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"setHedgingMode",required:!0,schemaDescription:"on or off spot hedging mode",schemaName:"string",qualifierMessage:"**Possible values:** [`ON`, `OFF`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}h.isMDXComponent=!0}}]);