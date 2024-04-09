"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[25382],{80551:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=s(87462),a=(s(67294),s(3905)),r=s(26389),n=(s(94891),s(74933)),u=(s(47507),s(24310),s(63303),s(75035),s(85162));const l={id:"list-sub-apikeys",title:"Get Sub Account All API Keys",description:"Get Sub Account All API Keys",sidebar_label:"Get Sub Account All API Keys",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"Get Sub Account All API Keys",operationId:"list-sub-apikeys",parameters:[{name:"apiKey",in:"header",description:"Please use main account API key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use main account secret key",required:!0,schema:{type:"string"}},{name:"subMemberId",in:"query",description:"Sub UID",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"1-20. max 20",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/user/sub-apikeys",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - User"},postman:{name:"Get Sub Account All API Keys",description:{content:"Get Sub Account All API Keys",type:"text/plain"},url:{path:["v5","user","sub-apikeys"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Sub UID",type:"text/plain"},key:"subMemberId",value:""},{disabled:!1,description:{content:"1-20. max 20",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use main account API key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use main account secret key",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/user/bybit-open-api-v-5-explorer-user"},p=void 0,o={unversionedId:"api-explorer/v5/user/list-sub-apikeys",id:"api-explorer/v5/user/list-sub-apikeys",title:"Get Sub Account All API Keys",description:"Get Sub Account All API Keys",source:"@site/docs/api-explorer/v5/user/list-sub-apikeys.api.mdx",sourceDirName:"api-explorer/v5/user",slug:"/api-explorer/v5/user/list-sub-apikeys",permalink:"/bybitDocs/api-explorer/v5/user/list-sub-apikeys",draft:!1,tags:[],version:"current",frontMatter:{id:"list-sub-apikeys",title:"Get Sub Account All API Keys",description:"Get Sub Account All API Keys",sidebar_label:"Get Sub Account All API Keys",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"Get Sub Account All API Keys",operationId:"list-sub-apikeys",parameters:[{name:"apiKey",in:"header",description:"Please use main account API key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Please use main account secret key",required:!0,schema:{type:"string"}},{name:"subMemberId",in:"query",description:"Sub UID",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"1-20. max 20",required:!1,schema:{type:"integer",default:20}},{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/user/sub-apikeys",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer - User"},postman:{name:"Get Sub Account All API Keys",description:{content:"Get Sub Account All API Keys",type:"text/plain"},url:{path:["v5","user","sub-apikeys"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Sub UID",type:"text/plain"},key:"subMemberId",value:""},{disabled:!1,description:{content:"1-20. max 20",type:"text/plain"},key:"limit",value:""},{disabled:!1,description:{content:"cursor, used for pagination",type:"text/plain"},key:"cursor",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Please use main account API key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Please use main account secret key",type:"text/plain"},key:"secret",value:""}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/user/bybit-open-api-v-5-explorer-user"},sidebar:"apiExplorerSideBar",previous:{title:"Get API Key Information",permalink:"/bybitDocs/api-explorer/v5/user/apikey-info"},next:{title:"Get UID Wallet Type",permalink:"/bybitDocs/api-explorer/v5/user/wallet-type"}},c={},d=[{value:"Get Sub Account All API Keys",id:"get-sub-account-all-api-keys",level:2}],m={toc:d};function y(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-sub-account-all-api-keys"},"Get Sub Account All API Keys"),(0,a.kt)("p",null,"Get Sub Account All API Keys"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"subMemberId",in:"query",description:"Sub UID",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"1-20. max 20",required:!1,schema:{type:"integer",default:20}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"cursor",in:"query",description:"cursor, used for pagination",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Please use main account API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Please use main account secret key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);