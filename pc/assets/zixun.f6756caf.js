import u from"./footer.1b202901.js";import g from"./header.4e69dc22.js";import{zxlist as m}from"./prod.4d2b285d.js";import{_ as f,r as a,o as i,c as r,e as c,d as t,F as v,l as x,t as l}from"./index.7cc1cd3e.js";import"./logo.ba36431f.js";import"./kefu.806a5f75.js";const z={name:"jeZi",components:{mainFooter:u,mainHeader:g},data(){return{page:{pageSize:15,total:0,current:1},list:[]}},created(){this.fetchList()},methods:{fetchList(){const{page:e}=this;console.log(e),m({...e,status:0,categoryId:8}).then(s=>{console.log(s),this.list=s.data.data.records,this.page.total=s.data.data.total})},currentChange(e){this.page.current=e,this.fetchList()},onSelectSearch(e,s){console.log(e,s),this.selected[s]=e},goDetail(e){this.$router.push("/trustQaDetail/"+e.id)}}},C={class:"index-container zixun"},k=t("div",{class:"banner"},null,-1),y={class:"container"},L={class:"zixunCon"},S={class:"zixunList"},D=["onClick"],B={class:"ellipsis"},F={class:"ellipsis"},b={class:"time"},I={class:"paginationCon"};function N(e,s,V,j,o,_){const d=a("main-header"),p=a("el-pagination"),h=a("main-footer");return i(),r("div",C,[c(d,{active:6}),k,t("div",y,[t("div",L,[t("div",S,[(i(!0),r(v,null,x(o.list,n=>(i(),r("div",{class:"zixunItem",onClick:E=>_.goDetail(n),key:n.id},[t("h4",B,l(n.title),1),t("p",F,l(n.des),1),t("span",b,l(n.uploadTime),1)],8,D))),128))]),t("div",I,[c(p,{background:"",layout:"prev, pager, next","page-size":o.page.pageSize,"current-page":o.page.current,total:o.page.total,onCurrentChange:_.currentChange},null,8,["page-size","current-page","total","onCurrentChange"])])])]),c(h)])}var A=f(z,[["render",N]]);export{A as default};
