<!-- 集合信托 -->
<template>
	<div class="index-container">
        <main-header :active="1"></main-header>
		<div class="combineCon">
            <div class="combineBanner">
                <div class="input">

                    <input type="text" placeholder="状态｜期限｜门槛｜付息方式｜领域">
                    <img src="/img/search.png" alt="" class="search">
                </div>
            </div>
            <div class="combineContent">
                <div class="container">
                    <div class="searchCard">
                        <div class="searchList">
                            <div class="searchItem" v-for="item in searchs" :key="item.prop">
                                <div class="label">{{ item.label }}</div>
                                <ul>
                                    <li :class="{
                                        active:selected[item.prop].value===option.value
                                    }" v-for="option in item.options" @click="onSelectSearch(option,item.prop)" :key="option.value">{{ option.label }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="border"></div>


                        <div class="searchList selected">
                            <div class="searchItem">
                                <div class="label">已选条件：</div>
                                <ul>
                                    <li v-show="option.value!=='-1'" class="active" v-for="(option,index) in selected" @click="onSelectSearch(option,item.prop)" :key="option.value">{{ option.label }} <el-icon @click="removeSelected(index)" :size="20"  style="vertical-align: middle"><Close /></el-icon></li>
                                </ul>
                                <div class="resetCon">
                                    <span class="reset" @click="resetSearch">还原默认</span>
                                    <span class="total">共{{page.total}}款产品符合条件</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="prodList">
                        <div class="prodItem head">
                           <div class="ths" v-for="item in propColumn" :key="item.value">{{ item.label }}</div>
                           <div class="ths">操作</div>
                        </div>
                        <div :class="{
                            prodItem:true, valid:item.status!==1, notValid:item.status==1
                        }" v-for="(item,index) in prodList" :key="index">
                           <div class="ths" v-for="item in propColumn" :key="item.value">{{ item.label }}</div>
                           <div class="ths can yuyue">我要预约</div>
                        </div>
                    </div>

                    <div class="paginationCon">
                        <el-pagination
  background
  layout="prev, pager, next"
  :page-size="page.pageSize"
  :current-page="page.current"
  :total="page.total"
  @current-change="currentChange"
  >
</el-pagination>
                    </div>
                </div>
            </div>
        </div>
	<main-footer></main-footer>
	</div>
</template>

<script>
import mainFooter from '../common/footer.vue'
import mainHeader from '../common/header.vue'
import {list} from '@/api/prod.js'
export default {
	name: "jeZi",
	components: {
        mainFooter,
        mainHeader
	},
	data() {
		return {
            searchs:[
                {
                    label:'产品状态：',
                    prop:'status',
                    options:[
                        {
                            label:'不限',
                        value:'-1'
                        }
                        ,
                        {
                            label:'预售',
                        value:'1'
                        },
                        {
                            label:'在售',
                        value:'2'
                        },
                        {
                            label:'售罄',
                        value:'3'
                        }
                    ]
                },
                {
                    label:'产品期限：',
                    prop:'investLimitId',
                    options:[
                        {
                            label:'不限',
                        value:'-1'
                        }
                        ,
                        {
                            label:'一年内（含）',
                        value:'1'
                        },
                        {
                            label:'一年至两年（含）',
                        value:'2'
                        },
                        {
                            label:'两年以上',
                        value:'3'
                        }
                    ]
                },
                {
                    label:'投资门槛：',
                    prop:'pmStand',
                    options:[
                        {
                            label:'不限',
                        value:'-1'
                        }
                        ,
                        {
                            label:'50万以内（含）',
                        value:'1'
                        },
                        {
                            label:'50万至100万（含）',
                        value:'2'
                        },
                        {
                            label:'100万至300万（含）',
                        value:'3'
                        },
                        {
                            label:'300万以上',
                        value:'4'
                        }
                    ]
                },
                {
                    label:'付息方式：',
                    prop:'inrestMethodId',
                    options:[
                        {
                            label:'不限',
                        value:'-1'
                        }
                        ,
                        {
                            label:'按月付息',
                        value:'1'
                        },
                        {
                            label:'按季付息',
                        value:'2'
                        },
                        {
                            label:'半年付息',
                        value:'3'
                        },
                        {
                            label:'按年付息',
                        value:'4'
                        },
                        {
                            label:'到期付息',
                        value:'5'
                        }
                    ]
                },
                {
                    label:'投资领域：',
                    prop:'prodEffid',
                    options:[
                        {
                            label:'不限',
                        value:'-1'
                        },
                        {
                            label:'工商企业类',
                        value:'0'
                        }
                        ,
                        {
                            label:'金融市场类',
                        value:'1'
                        },
                        {
                            label:'基础设施类',
                        value:'2'
                        },
                        {
                            label:'房地产类',
                        value:'3'
                        },
                        {
                            label:'资金池类',
                        value:'4'
                        },
                        {
                            label:'其他',
                        value:'5'
                        }
                    ]
                },
            ],
            selected:{
                status:{
                            label:'不限',
                        value:'-1'},
                investLimitId:{
                            label:'不限',
                        value:'-1'},
                pmStand:{
                            label:'不限',
                        value:'-1'},
                inrestMethodId:{
                            label:'不限',
                        value:'-1'},
                prodEffid:{
                            label:'不限',
                        value:'-1'}
            },
            prodList:[{},{}],
            propColumn:[{
                label:'产品名称',
                value:'name',
                align:'left'
            },{
                label:'状态',
                value:'status'
            },{
                label:'类型',
                value:'categoryId'
            },{
                label:'期限',
                value:'investLimitId'
            },{
                label:'业绩比较基准',
                value:'brief'
            },{
                label:'投资门槛',
                value:'pmStand'
            },{
                label:'付息方式',
                value:'inrestMethodId'
            },{
                label:'投资领域',
                value:'prodEffid'
            },{
                label:'防控评级',
                value:'lev'
            }],

            page:{
                pageSize:15,
                total:23,
                current:1
            }
		};
	},
	created() {this.fetchList()},
	methods: {
        fetchList(){
            const {selected,page} = this
            const selectObj = {};
            for(let i in selected){
                selectObj[i] = selected[i].value
            }
            console.log(selectObj)
            console.log(page)
// console.log(list);
// list()
        },
        onSelectSearch(value,prop){
            console.log(value,prop)
            this.selected[prop] = value
        },
        removeSelected(key){
this.selected[key]={
                            label:'不限',
                        value:'-1'}
        },
        resetSearch(){
            this.selected={
                status:{
                            label:'不限',
                        value:'-1'},
                investLimitId:{
                            label:'不限',
                        value:'-1'},
                pmStand:{
                            label:'不限',
                        value:'-1'},
                inrestMethodId:{
                            label:'不限',
                        value:'-1'},
                prodEffid:{
                            label:'不限',
                        value:'-1'}
            }
        },
        currentChange(current){
            this.page.current = current
            console.log(current)
        }
    },
};
</script>

<style lang="scss">
.combineBanner{
    width: 100%;
height: 274px;
background: linear-gradient(90deg, #F2C775, #EF836D, #FFE8E0, #FDD3AB, #FFDDC1);
position:relative;
.input{
    width: 550px;
height: 48px;
background: rgba(234,186,99,0.5);
border: 1px solid #836C4C;
opacity: 0.3;
border-radius: 6px;
position:absolute;
top:93px;
left:50%;
input{
    width: 550px;
height: 48px;
box-sizing: border-box;
padding-left:23px;
padding-right:55px;border: 1px solid rgba(131, 108, 76, 0.3);
// opacity: 0.3;
border-radius: 6px;

&::placeholder{

font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #836C4C;
opacity: 0.8;
}
}
.search{
    position:absolute;
    width:22px;
    height:22px;
    top:0;
    bottom:0;
    right:31px;
    margin:auto;
}


}

}

.combineContent{
    transform: translateY(-50px);
    .searchCard{
        width:100%;
        height: 358px;
background: #FFFFFF;
box-shadow: 0px 0px 16px 4px rgba(154,154,156,0.15);
border-radius: 6px;
box-sizing: border-box;
padding:30px 50px;
margin-bottom:30px;
ul,li{
    list-style: none;
    margin:0;
    padding:0;
}
.searchItem{
    padding-left:90px;
    box-sizing: border-box;
    position:relative;
    margin-bottom:16px;
    .label{
        position:absolute;
        left:0;top:0;
        line-height: 26px;
font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;
    }
    ul{
        width:100%;
        height:26px;
        li{
            float: left;
            line-height: 26px;
            padding:0 15px;
font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;
cursor: pointer;
            &.active{
                color:#fff;
                background: #EABA63;
border-radius: 3px;

            }
        }
    }
}

.selected{
    ul{
        width:auto;
        max-width:800px;
        li{
            margin-left:16px;
            i{
                line-height: 26px;
            }
        }
    }
    .resetCon{
        position:absolute;
        right:0px;
        top:0;
        span{
            line-height: 26px;
font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
        }
        .reset{
            color:#EC5E2A;
            margin-right:50px;
cursor: pointer;
        }
        .total{
            color:#9A9A9C;
        }
    }
}

.border{
    height: 1px;
background: #9A9A9C;
opacity: 0.2;
margin-top:30px;
margin-bottom:36px;
}
    }
    
}


.prodList{
    .prodItem{
            height:76px;font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: 30333B;
display: flex;
align-items: center;
box-sizing: border-box;
padding: 0 50px;
            border-bottom:1px solid rgba(154, 154, 156, 0.2);

        &.head{
            height:60px;background: rgba(173,181,193,0.05);
border: 1px solid #E9E9E9;
border-radius: 6px 6px 0px 0px;
color: #9A9A9C;

        }
        &:last-child{
            border:none;
        }
            
.ths{

text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
&:nth-child(1){
    width:220px ;
    flex-shrink: 0;
    text-align: left;
}
&:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(6),&:nth-child(7),&:nth-child(9){
    width:76px ;
    flex-shrink: 0;
}
&:nth-child(5){
    width:160px;
    flex-shrink: 0;
}
&:nth-child(8){
    width:160px;
    flex-shrink: 0;
}
&:nth-child(10){
    width:100px;
    flex-shrink: 0;
    &.can{
        color:#EABA63;
        display: none;
    }
}
}
&.valid{
    &:hover{
            color:#EABA63;
            background: rgba(234, 186, 99, 0.1);
            .can{
                width: 83px;
height: 36px;
background: #EABA63;
border-radius: 6px;

color:#fff;
line-height: 36px;
margin-left:20px;
            }
        }
        .can{
            display: block !important;
        }
        .ths{
            &:nth-child(5){
            color:#EABA63 !important;
}
        }

}
&.notValid{
color: #9A9A9C;
.ths{
            &:nth-child(5){
            color:#EABA63 !important;
}
        }
}
   
    }
}

.paginationCon{
    margin-top:30px;
    .el-pagination{
        justify-content: center;
        font-size: 16px;
        .btn-prev,.btn-next{
            width: 42px;
height: 36px;
background: linear-gradient(0deg, #FFFFFF, #F0F0F0);
border: 1px solid #EBEBEB;

        }
        .el-pager li.number{

            background: linear-gradient(0deg, #FFFFFF, #F0F0F0);
border: 1px solid #EBEBEB;
        }
        .el-pager li:not(.is-disabled).is-active{

background: #EABA63;
&:hover{
    color:#fff !important;
}
        }
        .el-pager li:hover{
            color:#EABA63 !important;
        }
    }
    .el-pagination.is-background .btn-next:hover:not([disabled]), .el-pagination.is-background .btn-prev:hover:not([disabled]){

        color:#EABA63 !important;
    }
}
</style>
