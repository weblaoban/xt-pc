import b from"./footer.1b202901.js";import{_ as y,z as I,A as P,B as W,C as D,x,r as N,o as d,c as l,d as s,w as r,j as u,v as _,n as w,k as v,g as c,t as g,D as f,e as T,s as V,E as S,G as U}from"./index.7cc1cd3e.js";import{_ as B}from"./logo.ba36431f.js";import{_ as L}from"./kefu.806a5f75.js";import{_ as C,a as k,b as M}from"./hide.6b7632d5.js";const R={name:"register",components:{mainFooter:b},data(){return{showtwoPassword:!1,showPassword:!1,showContact:!1,userName:"",passWord:"",twopassWord:"",phone:"",gender:0,smsCode:"",originTime:30,code:"",timeDown:30,timer:null,products:[{name:"\u540D\u79F0"},{name:"\u540D\u79F0"},{name:"\u540D\u79F0"},{name:"\u540D\u79F0"}],contact:{name:"",phone:"",message:""},captcha:"",time:new Date().getTime(),errInfo:""}},mounted(){this.getCaptcha()},methods:{getCaptcha(){I({time:this.time}).then(i=>{const t=new FileReader,h=this;t.onloadend=function(p){h.captcha=p.target.result},t.readAsDataURL(i.data)})},refershCode(){this.time=new Date().getTime(),this.code="",this.getCaptcha()},checkCaptcha(){if(!this.code){this.errInfo="\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801";return}P({time:this.time,code:this.code}).then(({data:i})=>{i.data?(this.sendSms(),this.errInfo=""):(this.errInfo="\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u56FE\u5F62\u9A8C\u8BC1\u7801",this.refershCode())})},sendSms(){W({mobile:this.phone}).then(i=>{i&&i.data&&i.data.success&&this.timeDownfn()})},timeDownfn(){this.timer=setTimeout(()=>{this.timeDown=this.timeDown-1,this.timeDown<=1?(this.timeDown=this.originTime,this.timer&&clearTimeout(this.timer)):(this.timer&&clearTimeout(this.timer),this.timeDownfn())},1e3)},backLogin(){this.$router.replace("/index")},onRegister(){const{userName:i,passWord:t,gender:h,smsCode:p,phone:e,twopassWord:n}=this;if(!i||!t||!p||!e){this.errInfo="\u8BF7\u8F93\u5165\u5B8C\u6574\u4FE1\u606F";return}if(!n){this.errInfo="\u8BF7\u786E\u8BA4\u5BC6\u7801";return}D({mobile:e,nickName:i,userMobile:e,passWord:x(t),sex:h===0?"M":"F",code:p,t:this.time}).then(m=>{m.data.success?(this.$message.success("\u6CE8\u518C\u6210\u529F\uFF0C\u8BF7\u767B\u5F55"),this.backLogin()):(this.$message.error(m.data.msg),this.refershCode())})},onMenuClick(i){i.link&&this.$router.push(i.link)},twoPasswordChange(){console.log(this.twopassWord,this.passWord),this.twopassWord&&this.passWord&&this.twopassWord!==this.passWord?this.errInfo="\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u68C0\u67E5":this.errInfo=""}}},a=i=>(S("data-v-eb5c032c"),i=i(),U(),i),F={class:"index-container"},z=V('<div class="header" data-v-eb5c032c><div class="container" data-v-eb5c032c><span data-v-eb5c032c>Hi </span>\u6B22\u8FCE\u60A8\u7684\u8BBF\u95EE</div></div><div class="logoContent" data-v-eb5c032c><div class="container" data-v-eb5c032c><div class="logo" data-v-eb5c032c><img src="'+B+'" alt="" data-v-eb5c032c></div><div class="phone" data-v-eb5c032c><img src="'+L+'" alt="" data-v-eb5c032c><div class="phoneInfo" data-v-eb5c032c><p class="phonenumber" data-v-eb5c032c>400-820-8820</p><p class="time" data-v-eb5c032c>\u5DE5\u4F5C\u65F6\u95F4\uFF1A9:00-17:00</p></div></div></div></div>',2),A={class:"bannerContent"},E={class:"carouseCard",style:{height:"675px"}},j=a(()=>s("img",{src:M,alt:""},null,-1)),G={class:"loginContent register"},H=a(()=>s("h4",{class:"loginTitle"},"\u6CE8\u518C",-1)),q={class:"genderCon"},J={class:"inputItem"},K={class:"placeholder",for:"userName"},O=a(()=>s("div",{class:"cut"},null,-1)),Q={class:"gender"},X={class:"genderItem"},Y=["checked"],Z=["checked"],$={class:"inputItem"},ss={class:"placeholder",for:"phone"},es=a(()=>s("div",{class:"cut"},null,-1)),ts={class:"smscodeCon"},os={class:"inputItem"},is={class:"placeholder",for:"code"},ns=a(()=>s("div",{class:"cut"},null,-1)),rs={class:"sendBtn"},ds=["src"],ls={class:"smscodeCon"},as={class:"inputItem"},cs={class:"placeholder",for:"smsCode"},ps=a(()=>s("div",{class:"cut"},null,-1)),hs={class:"sendBtn"},ms={key:1,class:"hasSend"},us={class:"inputItem"},_s=["type"],ws={key:0,class:"placeholder",for:"passWord"},vs=a(()=>s("div",{class:"cut"},null,-1)),gs={class:"inputItem"},fs=["type"],Cs={key:0,class:"placeholder",for:"twopassWord"},ks=a(()=>s("div",{class:"cut"},null,-1)),bs={class:"errInfo"},ys={class:"other"},Is=a(()=>s("p",null,null,-1));function Ps(i,t,h,p,e,n){const m=N("main-footer");return d(),l("div",F,[z,s("div",A,[s("div",E,[j,s("div",G,[H,s("div",q,[s("div",J,[r(s("input",{autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=o=>e.userName=o),class:"input",id:"userName",type:"text"},null,512),[[u,e.userName]]),r(s("label",K,"\u8F93\u5165\u60A8\u7684\u59D3\u540D",512),[[_,!e.userName]]),O]),s("div",Q,[s("div",X,[s("label",{onClick:t[1]||(t[1]=o=>e.gender=0),class:"radio"},[s("span",{class:w({"radio-inner":!0,active:e.gender===0})},null,2),s("input",{type:"radio",name:"gender",checked:e.gender===0},null,8,Y),v(" \u5148\u751F ")]),s("label",{class:"radio",onClick:t[2]||(t[2]=o=>e.gender=1)},[s("span",{class:w({"radio-inner":!0,active:e.gender===1})},null,2),s("input",{type:"radio",name:"gender",checked:e.gender===1},null,8,Z),v(" \u5973\u58EB ")])])])]),s("div",$,[r(s("input",{autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=o=>e.phone=o),class:"input",id:"phone",type:"text"},null,512),[[u,e.phone]]),r(s("label",ss,"\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7",512),[[_,!e.phone]]),es]),s("div",ts,[s("div",os,[r(s("input",{autocomplete:"off","onUpdate:modelValue":t[4]||(t[4]=o=>e.code=o),class:"input",id:"code",type:"text"},null,512),[[u,e.code]]),r(s("label",is,"\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801",512),[[_,!e.code]]),ns]),s("div",rs,[s("img",{src:e.captcha,alt:"",onClick:t[5]||(t[5]=(...o)=>n.refershCode&&n.refershCode(...o))},null,8,ds)])]),s("div",ls,[s("div",as,[r(s("input",{autocomplete:"off","onUpdate:modelValue":t[6]||(t[6]=o=>e.smsCode=o),class:"input",id:"smsCode",type:"text"},null,512),[[u,e.smsCode]]),r(s("label",cs,"\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801",512),[[_,!e.smsCode]]),ps]),s("div",hs,[e.timeDown===e.originTime?(d(),l("div",{key:0,class:"send",onClick:t[7]||(t[7]=(...o)=>n.checkCaptcha&&n.checkCaptcha(...o))}," \u53D1\u9001 ")):c("",!0),e.timeDown!==e.originTime?(d(),l("div",ms,g(e.timeDown),1)):c("",!0)])]),s("div",us,[r(s("input",{autocomplete:"off","onUpdate:modelValue":t[8]||(t[8]=o=>e.passWord=o),class:"input",id:"passWord",onInput:t[9]||(t[9]=(...o)=>n.twoPasswordChange&&n.twoPasswordChange(...o)),type:e.showPassword?"text":"password"},null,40,_s),[[f,e.passWord]]),e.passWord?c("",!0):(d(),l("label",ws,"\u8F93\u5165\u60A8\u7684\u767B\u5F55\u5BC6\u7801")),vs,e.showPassword?(d(),l("img",{key:1,onClick:t[10]||(t[10]=o=>e.showPassword=!1),src:C,alt:"",class:"togglePassword"})):c("",!0),e.showPassword?c("",!0):(d(),l("img",{key:2,onClick:t[11]||(t[11]=o=>e.showPassword=!0),src:k,alt:"",class:"togglePassword"}))]),s("div",gs,[r(s("input",{autocomplete:"off","onUpdate:modelValue":t[12]||(t[12]=o=>e.twopassWord=o),class:"input",id:"twopassWord",onInput:t[13]||(t[13]=(...o)=>n.twoPasswordChange&&n.twoPasswordChange(...o)),type:e.showtwoPassword?"text":"password"},null,40,fs),[[f,e.twopassWord]]),e.twopassWord?c("",!0):(d(),l("label",Cs,"\u518D\u6B21\u8F93\u5165\u767B\u5F55\u5BC6\u7801")),ks,e.showtwoPassword?(d(),l("img",{key:1,onClick:t[14]||(t[14]=o=>e.showtwoPassword=!1),src:C,alt:"",class:"togglePassword"})):c("",!0),e.showtwoPassword?c("",!0):(d(),l("img",{key:2,onClick:t[15]||(t[15]=o=>e.showtwoPassword=!0),src:k,alt:"",class:"togglePassword"}))]),s("p",bs,g(e.errInfo),1),s("div",{class:"button",onClick:t[16]||(t[16]=(...o)=>n.onRegister&&n.onRegister(...o))},"\u7ACB\u5373\u6CE8\u518C"),s("div",ys,[Is,s("p",{onClick:t[17]||(t[17]=(...o)=>n.backLogin&&n.backLogin(...o))},"\u8FD4\u56DE\u767B\u9646")])])])]),T(m)])}var Vs=y(R,[["render",Ps],["__scopeId","data-v-eb5c032c"]]);export{Vs as default};
