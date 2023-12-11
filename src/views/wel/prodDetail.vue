<template>
    <div class="prodDetail">
        <main-header :active="active"></main-header>
        <div class="banner"></div>
        <div class="prodDetailCon">

            <div class="container">
            <div class="section1">
                <div class="baseInfo">
                    <h4>{{ detail.name }}</h4>
                    <ul>
                        <li>
                            <div class="label">业绩比较标准</div>
                            <div class="con">{{ detail.brief || '--' }}</div>
                        </li>
                        <li>
                            <div class="label">投资期限</div>
                            <div class="con">{{ detail.investLimitId || '--' }}</div></li>
                        <li>
                            <div class="label">投资门槛</div>
                            <div class="con">{{ detail.pmStand || '--' }}</div></li>
                        <li>
                            <div class="label">付息方式</div>
                            <div class="con">{{ detail.inrestMethodId || '--' }}</div></li>
                    </ul>
                </div>
                <div class="zixun">
                    <h5>客户咨询</h5>
                    <p>请输入您想要了解的内容，客服将及时回电解答</p>
                    <el-input type="textarea" :rows="4" maxlength="300" :resize="'none'" v-model="content"></el-input>
                    <div class="button" @click="sendComm">确定</div>
                </div>
            </div>

            <div class="section2">
                <div class="title">产品概况</div>
                <el-row>
                    <el-col :span="24"><div class="infoItem"><div class="infoLabel">产品名称</div><div class="infoDesc">{{ detail.name }}</div></div></el-col>

                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">产品类别</div><div class="infoDesc">{{ type[active] }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">发行机构</div><div class="infoDesc">{{ detail.organid }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">投资领域</div><div class="infoDesc">{{ detail.prodEffId }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">收益类型</div><div class="infoDesc">{{ detail.investId }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">规模</div><div class="infoDesc">{{ detail.name }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">投资门槛</div><div class="infoDesc">{{ detail.pmStand }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">产品期限</div><div class="infoDesc">{{ detail.investLimitId }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">付息方式</div><div class="infoDesc">{{ detail.inrestMethodId }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">所在地域</div><div class="infoDesc">{{ detail.area }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">业绩比较基准</div><div class="infoDesc">{{ detail.brief }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">大小配额比</div><div class="infoDesc">{{ detail.investRatio }}</div></div></el-col>
                    <el-col :span="12"><div class="infoItem"><div class="infoLabel">风控级别</div><div class="infoDesc">{{ detail.lev }}</div></div></el-col>
                </el-row>


                <div class="title">产品进度</div>
                <div class="progress">
                    <div class="progressItem" v-for="item in detail.porder" :key="item">{{ item.detail }}</div>
                </div>
                <div class="title">产品详情</div>
                <div class="detailCon" v-html="detail.content"></div>
            </div>
        </div>
        </div>

		<!-- 协议 -->
		<div class="model" v-if="showAgreement">
			<div class="modelContent">
				<el-icon @click="showAgreement = false"><Close /></el-icon>
				<div class="agreement">
					<img class="logo" src="/img/logo.png" alt="" />
					<div class="agCon">
						<h1>《合格投资者认定》</h1>
						<p>
							本网谨遵中国银行业监督管理委员会发布的《信托公司集合资金信托计划管理办法》之规定，只向特定投资者展示信托产品信息，不构成任何投资推介建议。
						</p>
						<p>
							阁下如有意进行信托投资，请承诺符合《信托公司集合资金信托计划管理办法》之规定合格投资者的条件。
						</p>
						<p>
							即具备相应风险识别能力和风险承担能力，投资于单只信托产品金额不低于100万元，且符合下列相关标准之一：
						</p>
						<p class="red">
							1.承诺符合金融类资产不低于300万元;（金融资产包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、信托计划、保险产品、期货权益等）
						</p>
						<p class="red">或</p>
						<p class="red">
							2.承诺符合最近三年个人平均收入不低于50万元人民币；
						</p>
						<h1 style="margin-top: 50px">《免责条款》</h1>
						<p>
							一、本网致力于提供完整、准确的产品信息，信息内容绝大部份来自于本网的授权机构，本网尽谨慎注意和一致描述义务。尽
						</p>
					</div>
					<div class="checkBox">
						<img
							v-if="checked"
							src="/img/checked.png"
							@click="toggleCheck"
							alt=""
							class="checked"
						/>
						<img
							v-if="!checked"
							src="/img/unchecked.png"
							@click="toggleCheck"
							alt=""
							class="notCheced"
						/>
						<span
							>我接受 <span class="yel">《合格投资者认定》</span>、<span
								class="yel"
								>《免责条款》</span
							>中所有条款</span
						>
					</div>
					<div class="button" @click="onAgree">确定</div>
				</div>
			</div>
		</div>
	<main-footer></main-footer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import mainFooter from '../common/footer.vue'
import mainHeader from '../common/header.vue'
import { proddetail } from "@/api/prod.js";
import {addComment} from '@/api/index.js'
import { setStore, getStore } from "utils/store";
export default {
	name: "jeZi",
	components: {
        mainFooter,
        mainHeader
	},
	data() {
		return {
            detail:{},
            active:'',
            zixun:'',
            content:'',
            loading:false,
            type:{
                1:'集合信托',
                2:'集合资管',
                3:'私募基金',
            },
            showAgreement:false,
            checked:false
		};
	},
	computed: {
		...mapGetters(["userInfo"]),
	},
    mounted(){
window.scrollTo(0,0);
    },
	created() {
const checked = getStore({name:'checked'});
console.log(checked+'checked')
if(!checked){
    this.showAgreement = true
}
        this.getDetail();
},
mounted(){

},
	methods: {
        getDetail(){
            const id = this.$route.params.id
            const active =this.$route.query.type || 1
            this.active = active
            proddetail({id}).then(res=>{
                this.detail = res.data.data
                this.detail.porder = JSON.parse(this.detail.porder)
            })
        },
        sendComm(){
            if(this.loading){
                return;
            }
            const {realName:name,nickName:tel} = this.userInfo;
            const {content} = this;
            if(!name||!tel){
                this.$store.dispatch('setLoginDialog',true)
                return;
            }
            if(!content){
                this.$message.error('请输入咨询内容')
                return;
            }
            const id = this.$route.params.id
            this.loading = true;
            addComment({name,tel,content,prodId:id}).then(res=>{
                const data = res.data;
                if(data && data.success){
                    this.$message.success('提交成功');
                    this.content = ''
            this.loading = false;
                }
            }).catch(()=>{
                
            this.loading = false;
            })
        },
		toggleCheck() {
			this.checked = !this.checked;
		},
        onAgree(){
            if(!this.checked){
                this.$message.error('请先同意协议');
                return;
            }
            this.showAgreement = false
            setStore({name:'checked',content:true})
        },
    },
};
</script>

<style lang="scss" >
.prodDetail{
    .banner{
        width: 100%;
height: 330px;
background: linear-gradient(0deg, rgba(161,196,253,0.5), rgba(194,233,251,0.5));

    }
    .prodDetailCon{
        margin-top:-300px;
    }
    .section1{
        height:366px;background: #FFFFFF;
box-shadow: 0px 0px 16px 4px rgba(234,186,99,0.15);
border-radius: 6px;
margin-bottom:30px;

        .baseInfo{
            float: left;
            width:740px;
            height:366px;
		background-image: url(/img/prod2.png);
		background-size:  653px 249px;
		background-position: left bottom;
		background-repeat: no-repeat;
        padding:40px;
        box-sizing: border-box;
font-size: 30px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
h4{
    margin:0;
    margin-bottom:100px;
}
ul,li{
    list-style: none;
    margin:0;
    padding:0;
}
ul{
    height:70px;
}
li{
    width:25%;
    height:70px;
    float:left;
    border-right:1px solid #EBEBEB;
    box-sizing: border-box;
    padding-left:30px;
    &:last-child{
        border:none;
    }
    .label{

font-size: 18px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;
margin-bottom:20px;
    }
    .con{

font-size: 24px;
font-family: Heiti SC;
font-weight: 500;
color: #EABA63;
    }
}
        }
        .zixun{
            width:460px;
            height:366px;
            float:right;
		background-image: url(/img/prod1.png);
		background-size:  460px 366px;
		background-position: center center;
		background-repeat: no-repeat;
        box-sizing: border-box;
        padding:40px;
        h5{

font-size: 18px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
margin:0;
margin-bottom:20px;
        }
        p{

font-size: 18px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
margin:0;
margin-bottom:20px;
        }
        }

.el-textarea{

box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.09);
border-radius: 12px;
    border:none;
textarea{
    border:none;
    box-shadow: none !important;
    outline: none;
}
}
		.button {
			width: 180px;
			height: 44px;
			background: linear-gradient(163deg, #e1ad4f, #eaba63, #e0af56);
			box-shadow: 0px 3px 0px 0px #dea949;
			border-radius: 12px;
			margin: 33px auto 0;
			text-align: center;
			line-height: 44px;
			font-size: 18px;
			font-family: Heiti SC;
			font-weight: 500;
			color: #ffffff;
			cursor: pointer;
		}
    }
    .section2{
        padding:20px 10px 82px;
        box-sizing: border-box;
background: #FFFFFF;
border-radius: 6px;
        .title{

font-size: 24px;
font-family: Heiti SC;
font-weight: 500;
color: #EABA63;
line-height: 64px;
border-bottom:1px solid rgba(234, 186, 99, 0.2);
position:relative;
padding-left:31px;
box-sizing: border-box;
margin-bottom:30px;
&::after{
    content:'';
    display: block;width: 120px;
height: 4px;
background: #EABA63;
position:absolute;
bottom:0;
left:20px;
}
        }

.el-col{
    margin:0;
}
.el-row{
    width:1100px;
    margin:30px auto;
border: 1px solid #EBEBEB;
border-bottom:none;
}
        .infoItem{
            border-bottom:1px solid rgba(235, 235, 235, 1);
            height:50px;
            .infoLabel{
                width: 150px;
height: 50px;
line-height: 50px;
background: rgba(173, 181, 193,.1);
font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
text-align: center;
float:left;

            }
            .infoDesc{
padding-left:10px;
box-sizing: border-box;
font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
float:left;
line-height: 50px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width:calc(100% - 150px);
            }
        }
    }
}

.detailCon{
    img{
        max-width:100%;
    }
}

.progress{
    width: 1100px;
background: rgba(234,186,99,0.1);
border: 1px solid #EABA63;
border-radius: 6px;

padding:0 18px 50px;
.progressItem{
line-height: 50px;
    border-bottom: 1px dashed #EABA63;
font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
width:100%;
}

}

.model {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	// align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.6);
	overflow-y: scroll;
	.modelContent {
		padding: 0 38px;
		position: relative;
		margin: 100px auto 0;
		.el-icon {
			position: absolute;
			right: 0;
			top: 0;
			color: #fff;
			font-size: 18px;
		}
		.yuyue {
			width: 500px;
			height: 259px;
			background-image: url(/img/yuyuebg.png);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
			padding: 49px;
			box-sizing: border-box;
			h3 {
				font-size: 24px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #eaba63;
				margin-bottom: 27px;
				margin-top: 0;
			}
			p.desc {
				font-size: 18px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #30333b;
				margin: 0;
				margin-bottom: 10px;
			}
			p.title {
				font-size: 18px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #30333b;
				margin: 0;
				margin-bottom: 40px;
			}
		}
		.button {
			width: 180px;
			height: 44px;
			background: linear-gradient(163deg, #e1ad4f, #eaba63, #e0af56);
			box-shadow: 0px 3px 0px 0px #dea949;
			border-radius: 12px;
			margin: 0 auto;
			text-align: center;
			line-height: 44px;
			font-size: 18px;
			font-family: Heiti SC;
			font-weight: 500;
			color: #ffffff;
			cursor: pointer;
		}
		.agreement {
			width: 597px;
			height: 766px;
			background-image: url(/img/agreement.png);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100% 100%;
			padding: 30px;
			box-sizing: border-box;
			.logo {
				width: 161px;
				height: 47px;
				margin-bottom: 32px;
			}
			.agCon {
				width: 100%;
				height: 488px;
				background: #ffffff;
				box-shadow: 0px 4px 2px 0px rgba(234, 186, 99, 0.5);
				border-radius: 12px;
				overflow-y: scroll;
				padding: 26px;
				box-sizing: border-box;
				&::-webkit-scrollbar {
					width: 4px;
					background: #eaba63;
					opacity: 0.5;
					border-radius: 2px;
				}
				h1 {
					margin: 0 auto 20px;
					text-align: center;
					font-size: 20px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #30333b;
				}
				p {
					margin: 0 auto 6px;
					text-indent: 32px;
					font-size: 14px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #30333b;
					&.red {
						color: #ec5e2a;
					}
				}
			}
			.checkBox {
				margin-top: 25px;
				margin-bottom: 29px;
				img {
					width: 18px;
					height: 18px;
					vertical-align: middle;
					margin-right: 10px;
				}
				span {
					line-height: 18px;
					font-size: 14px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #9a9a9c;
					&.yel {
						color: #eaba63;
					}
				}
			}
		}
	}
}
</style>