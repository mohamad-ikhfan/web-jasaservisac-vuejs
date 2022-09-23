import{d as u,u as b,o as t,e as s,b as o,g as c,w as m,F as r,H as k,a as l,m as y,n as x,i as n,J as C}from"./app.3a833c91.js";import{J as w}from"./AuthenticationCard.eedece94.js";import{_ as V}from"./AuthenticationCardLogo.1f831f04.js";import{_ as $}from"./Button.13824f2e.js";import{_ as p}from"./Input.0d40509a.js";import{_ as v}from"./Label.1137f332.js";import{_ as F}from"./ValidationErrors.b4be66da.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I={class:"mb-4 text-sm text-gray-600"},T=n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. "),U=n(" Please confirm access to your account by entering one of your emergency recovery codes. "),B=["onSubmit"],J={key:0},N={key:1},H={class:"flex items-center justify-end mt-4"},P=["onClick"],R=n(" Use a recovery code "),S=n(" Use an authentication code "),j=n(" Log in "),Q={__name:"TwoFactorChallenge",setup(z){const a=u(!1),e=b({code:"",recovery_code:""}),_=u(null),f=u(null),h=async()=>{a.value^=!0,await C(),a.value?(_.value.focus(),e.code=""):(f.value.focus(),e.recovery_code="")},g=()=>{e.post(route("two-factor.login"))};return(A,i)=>(t(),s(r,null,[o(c(k),{title:"Two-factor Confirmation"}),o(w,null,{logo:m(()=>[o(V)]),default:m(()=>[l("div",I,[a.value?(t(),s(r,{key:1},[U],64)):(t(),s(r,{key:0},[T],64))]),o(F,{class:"mb-4"}),l("form",{onSubmit:y(g,["prevent"])},[a.value?(t(),s("div",N,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:c(e).recovery_code,"onUpdate:modelValue":i[1]||(i[1]=d=>c(e).recovery_code=d),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])])):(t(),s("div",J,[o(v,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:f,modelValue:c(e).code,"onUpdate:modelValue":i[0]||(i[0]=d=>c(e).code=d),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),l("div",H,[l("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(h,["prevent"])},[a.value?(t(),s(r,{key:1},[S],64)):(t(),s(r,{key:0},[R],64))],8,P),o($,{class:x(["ml-4",{"opacity-25":c(e).processing}]),disabled:c(e).processing},{default:m(()=>[j]),_:1},8,["class","disabled"])])],40,B)]),_:1})],64))}};export{Q as default};