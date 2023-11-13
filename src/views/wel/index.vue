<template>
	<div class="index-container">
		<div class="header">
			<div class="container"><span>Hi </span>欢迎您的访问</div>
		</div>
		<div class="logoContent">
			<div class="container">
				<div class="logo"><img src="/img/logo.png" alt="" /></div>
				<div class="phone">
					<img src="/img/kefu.png" alt="" />
					<div class="phoneInfo">
						<p class="phonenumber">400-820-8820</p>
						<p class="time">工作时间：9:00-17:00</p>
					</div>
				</div>
			</div>
		</div>
		<div class="menuContent">
			<div class="container">
				<div class="menuList">
					<div :class="{'active':index==0}" v-for="(item,index) in menuList" :key="item" class="menuItem"><img v-if="item.icon" :src="item.icon" alt="">{{item.name}} <div class="tag" v-if="item.notOpen">暂未开放</div></div>
				</div>
			</div>
		</div>
		<div class="bannerContent">
			<el-carousel height="500px" direction="vertical" :autoplay="false">
				<el-carousel-item v-for="item in 3" :key="item">
					<div class="carouseCard"></div>
				</el-carousel-item>
			</el-carousel>
			<div class="loginContent">
                <h4 class="loginTitle">登录</h4>
				<div class="inputItem">
					<input v-model="userName" class="input" id="userName" type="text" /><label
						class="placeholder"
						for="userName"
                        v-show="!userName"
						>您的手机号</label
					>
					<div class="cut"></div>
				</div>
				<div class="inputItem">
					<input v-model="passWord" class="input" id="passWord" type="password" /><label
						class="placeholder"
						for="passWord"
                        v-if="!passWord"
						>登录密码</label
					>
					<div class="cut"></div>
				</div>
                <div class="button" @click="onLogin">立即登录</div>
                <div class="other">
                    <p>还没有账号？ <span>立即注册</span></p>
                    <p>忘记密码</p>
                </div>
			</div>
		</div>
		<div class="cardContainer">
			<div class="container">
				<div class="cardContent">
					<div class="cardItem" v-for="item in cardItem" :key="item.id">
						<img :src="item.img" alt="" />
						<div class="cardDesc">
							<p class="title">{{ item.title }}</p>
							<p class="desc">{{ item.desc }}</p>
						</div>
					</div>
				</div>
                <div class="cardline"></div>
				<div class="amount">
					<div class="amountItem">累计交易<span>{{ amount }}</span>万元</div>
					<div class="amountItem">累计交易<span>{{ amount }}</span>万元</div>
                    <div class="customer"  @click="showContact=true"><img src="/img/message.png" alt="">在线客服</div>
				</div>
			</div>
		</div>
		<div class="productC">
			<div class="productContent product1">
				<div class="container">
					<div class="productTitle"><span>信托产品</span></div>
					<div class="products">
						<div class="productItem" v-for="item in products" :key="item">
							<div class="title">名称</div>
							<div class="desc">产品收益</div>
							<p class="count">9.7 <span>%</span></p>
							<div class="line"></div>
							<div class="duration">产品期限：6-12月</div>
							<div class="button">立即查看</div>
						</div>
					</div>
				</div>
			</div>
			<div class="productContent product2">
				<div class="container">
					<div class="productTitle">信托产品</div>
					<div class="products">
						<div class="productItem" v-for="item in products" :key="item">
							<div class="title">名称</div>
							<div class="desc">产品收益</div>
							<p class="count">9.7 <span>%</span></p>
							<div class="line"></div>
							<div class="duration">产品期限：6-12月</div>
							<div class="button">立即查看</div>
						</div>
					</div>
				</div>
			</div>
			<div class="productContent product3">
				<div class="container">
					<div class="productTitle">信托产品</div>
					<div class="products">
						<div class="productItem" v-for="item in products" :key="item">
							<div class="title">名称</div>
							<div class="desc">产品收益</div>
							<p class="count">9.7 <span>%</span></p>
							<div class="line"></div>
							<div class="duration">产品期限：6-12月</div>
							<div class="button">立即查看</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <!-- 客户咨询 -->
        <div class="contact" v-if="showContact">
            <div class="contactTitle">客户咨询</div>
            <img class="close el-icon-close" @click="showContact=false" src="/img/close.png" alt="">

            <div class="contactCon">
            <div class="contactTips">您好，请务必留下您的联系方式，客服会 根据您的问题及时回电</div>
            <div class="contactItem">
                <p class="label">姓名</p>
                <input v-model="contact.name" type="text">
            </div><div class="contactItem">
                <p class="label">手机号</p>
                <input v-model="contact.phone" type="text">
            </div><div class="contactItem">
                <p class="label">咨询内容</p>
                <input v-model="contact.message" type="textarea" class="textarea">
            </div>
            <div class="button">提交</div></div>
        </div>
		<div class="aboutUs">
			<div class="container">
				<div class="menuCard">
					<div class="menuCardItem"><span>信托问答</span></div>
					<div class="menuCardItem"><span>信托资讯</span></div>
					<div class="menuCardItem"><span>关于我们</span></div>
				</div>
				<div class="company">
					<h4>合作伙伴</h4>
                    <img src="/img/companyBg.png" alt="" class="companyBg">
                    <div class="partner"><div v-for="item in 6" :key="item" class="partnerItem"><img src="/img/company.png" alt=""></div></div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="container">
				<div class="footerLeft">
					<img src="/img/logo.png" alt="" class="logo" />
					<div class="linkInfo">
						<p class="linkTitle">联系方式</p>
						<ul>
							<li>客服电话：400—0000—000
</li>
							<li>客服邮箱：xxxxxxxxx@xx.com</li>
							<li>服务时间：9:00-12:00</li>
							<li>公司地址：xxxx省xxx市xxx区xxx街xxx号</li>
						</ul>
					</div>
				</div>
				<div class="footerRight">
					<div class="imgCon">
                        <div class="imgBg">

                            <img src="/img/code.png" alt="" />
                        </div>
						<p>微信公众号</p>
					</div>
					<div class="imgCon">
                        <div class="imgBg">

                            <img src="/img/code.png" alt="" />
                        </div>
						<p>客服微信</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import dashboard from "./dashboard.vue";
export default {
	name: "wel",
	components: {
		dashboard,
	},
	data() {
		return {
            showContact:false,
			cardItem: [{ title: "财富增值", desc: "稳健安全的资产配置", id: 0, img: "/img/icon1.png" },{ title: "产品安全", desc: "专业风控团队优中优选", id: 0, img: "/img/icon2.png" },{ title: "全面覆盖", desc: "信托资管私募全面覆盖", id: 0, img: "/img/icon3.png" },{ title: "专业服务", desc: "专业服务经理1对1服务", id: 0, img: "/img/icon4.png" }],
			amount: 111,
            menuList:[
                {
                    name:'首页',
                    icon:'/img/home.png'
                },{
                    name:'信托集合'
                },{
                    name:'集合资管'
                },{
                    name:'私募基金'
                },{
                    name:'集合保险',
                    notOpen:true
                },{
                    name:'信托问答'
                },{
                    name:'信托资讯'
                },{
                    name:'关于我们'
                }
            ],
            userName:'',
            passWord:'',
            products:[
                {
                    name:'名称'
                },
                {
                    name:'名称'
                },
                {
                    name:'名称'
                },
                {
                    name:'名称'
                },
            ],
            contact:{
                name:'',
                phone:'',
                message:''
            }
		};
	},
	computed: {
		...mapGetters(["userInfo"]),
	},
	created() {},
	methods: {
        onLogin(){
            const {userName,passWord} = this;
            
          this.$store.dispatch("LoginByUsername", {username:userName,password:passWord}).then(() => {
            // this.$router.push(this.tagWel);
            // location.reload()
          });
        }
    },
};
</script>

<style lang="scss">
.header{
    height: 40px;
background: #F7F7F7;
line-height: 40px;
color: #836C4C;
font-size: 14px;
font-weight: 500;
span{
    font-size: 16px;
    color: #EABA63;
    font-weight: 400;
}
}
.logoContent {
    height:120px;
background: #FFFFFF;
	.container {
        height:100%;
		display: flex;
		justify-content: space-between;
        align-items: center;
        .logo{
            img{
                width:274px;
                height:80px;
            }
        }
		.phone {
			display: flex;
            img{
                width:42px;
                height:42px;
                margin-right:10px;
            }
			.phoneInfo {
				p {
					margin: 0;
					padding: 0;
                    color:#EABA63;
                    &.phonenumber{
                        font-size: 32px;
font-family: Arial;
font-weight: 400;
                    }
                    &.time{
                        font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
                    }
				}
			}
		}
	}
}
.menuContent{
    height: 52px;
background: #30333B;
.menuList{
    display: flex;
    
.menuItem{
    width:12.5%;
    line-height:52px;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
font-size: 18px;
color:#fff;
    .tag{
        width:57px;

        text-align: center;
        position:absolute;font-size: 12px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
background-image: url(/img/notopen.png);
background-size:57px 19px;
background-position: center center;
background-repeat: no-repeat;
top:0;
left:110px;
height:20px;
line-height: 20px;
    }
    img{
        width:20px;
        height:20px;
    }
    &.active{
        color:#EABA63;
        &:after{
            content:'';
            display: block;
            width:100%;
            height:3px;
            position:absolute;
            bottom:0;
            left:0;
background: #EABA63;
        }
    }
}
}
}
.bannerContent .el-carousel__indicators--vertical {
	top: 50%;
	right: calc(50% - 520px);
	transform: translate(50%, -50%);
}
.bannerContent {
    position:relative;
	.carouseCard {
		width: 100%;
		height: 100%;
		background-image: url(/img/banner.png);
        background-size:100% 100%;
        background-position:center center;
        background-repeat: no-repeat;
	}
	.el-carousel__indicator--vertical .el-carousel__button {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #fff;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	.el-carousel__indicator--vertical {
        padding:0;
		width: 38px;
		height: 38px;
		position: relative;
		border-radius: 50%;
		background: transparent;
		box-sizing: border-box;
        margin-bottom:10px;
	}
	.el-carousel__indicator.is-active {
		border: 1px solid #fff;
	}
	.loginContent {
        position:absolute;
        top:56px;
        right:calc(50% - 490px);
        width: 320px;
height: 380px;
background: #FFFFFF;
box-shadow: 0px 0px 10px 10px rgba(234,186,99,0.1);
border-radius: 12px;
.other{
    display: flex;
    justify-content: space-between;
			width: 280px;
            margin:0 auto;
            p{
                font-size: 14px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;
span{
    font-size: 14px;
font-family: Heiti SC;
font-weight: 500;
color: #EABA63;
margin-left:10px;
}
            }
}
.button{
    margin-top:40px;margin-bottom:20px;
}
.loginTitle{

font-size: 20px;font-weight: 500;
color: #30333B;
position:relative;
text-align: center;
margin-bottom:40px;
&::after{
    position:absolute;
    content:'';
    display: block;
    width: 50px;
height: 4px;
background: #EABA63;
left:0;
right:0;
bottom:0;
margin:auto;
}
}
		.cut {
			background-color: #fff;
			border-radius: 10px;
			height: 20px;
			left: 20px;
			position: absolute;
			top: -20px;
			transform: translateY(0);
			transition: transform 200ms;
			width: 76px;
		}
		.inputItem {
			position: relative;
			width: 280px;
            margin:0 auto 22px;
		}
		.input {
			width: 280px;
height: 40px;
background: #FFFFFF;
border: 1px solid #F3F2F8;
border-radius: 8px;
padding-left:20px;
box-sizing: border-box;

		}
		.placeholder {
			font-size: 14px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;

			left: 20px;
			line-height: 14px;
			pointer-events: none;
			position: absolute;
			transform-origin: 0 50%;
			transition: transform 200ms, color 200ms;
			top: 16px;
		}
		.input:focus ~ .cut {
			transform: translateY(8px);
		}
		.input:focus ~ .placeholder {
			transform: translateY(-24px) translateX(10px) scale(0.75);
			color: #dc2f55;
            z-index:1;
		}
	}
}
.cardContainer{
    background:#fff;
    .cardContent{
        height: 144px;
        .cardItem{
            width:25%;
            height:100%;
            padding: 40px 0;
            box-sizing: border-box;
            float:left;
            display: flex;
            align-items: center;
            img{
                width:64px;height:64px;
                margin-left:13px;
            }
            .cardDesc{
                .title{
                    font-size: 24px;
font-family: Heiti SC;
font-weight: 500;
color: #EABA63;

                }
                .desc{
                    font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;

                }
            }
        }
    }
    .cardline{
        width:100%;
        height: 2px;
background: linear-gradient(90deg, #fff, #E9B963, #FFFFFF);
opacity: 0.2;

    }
    .amount{
        height:105px;
        position:relative;
        .customer{
            width: 189px;
height: 60px;
background: #EC5E2A;
box-shadow: 0px 3px 5px 0px rgba(115,89,41,0.5);
border-radius: 12px;

font-size: 20px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
position:absolute;
right:0;
bottom:-30px;
padding-left:30px;
display: flex;
align-items: center;
line-height: 1;
box-sizing: border-box;
img{
    width:36px;
    height:36px;
    margin-right:14px;
}

        }
        .amountItem{
            width:50%;
            text-align: center;
            float:left;

font-size: 18px;
font-family: Heiti SC;
font-weight: 500;
padding:30px 0 50px;
box-sizing: border-box;
color: #9A9A9C;
span{

font-size: 33px;
font-family: Arial;
font-weight: 400;
color: #EABA63;
}
        }
    }
}
.productContent {
    padding:80px 0;
background: #F8F8F8;
&:nth-child(2n){

background: #FFFFFF;
}
	.productTitle {
font-size: 36px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
text-align: center;
margin-bottom:89px;
line-height: 35px;
		&:after {
			content: "";
			display: block;
			width: 150px;
			height: 10px;
			background: linear-gradient(90deg, #69adff, #f68036);
			opacity: 0.5;
            left:0;
            right:0;
            bottom:30px;
            margin:auto;
            transform: translateY(-10px);
            z-index:0;
		}
	}
    .products{
        display: flex;
        justify-content: space-between;
        .productItem{
        width: 280px;
height: 377px;
background: #FFFFFF;
box-shadow: 0px 0px 21px 9px rgba(66,142,230,0.1);
border-radius: 12px;
text-align: center;
.title{

height: 94px;
background: linear-gradient(0deg, #89F7FE, #66A6FF);
border-radius: 12px 12px 0px 0px;
text-align: center;
line-height: 94px;font-size: 24px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
text-align: center;

}
&:nth-child(2n){
    
box-shadow: 0px 0px 21px 9px rgba(252,106,74,0.1);
    .title{

background: linear-gradient(0deg, #F28E26, #FD644F);
    }
}
.desc{

font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;
}.count{

font-size: 48px;
font-family: Arial;
font-weight: 400;
color: #EABA63;
margin:9px 0 30px;
span{

font-size: 24px;
font-weight: 400;
}
}
.line{
    width: 238px;
border-bottom: 1px dashed #9A9A9C;

margin:31px auto 20px;
}
.duration{

font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;
margin-bottom:30px;
}
.button{
    width:240px;
    height:54px;
    line-height:54px;
}
    }
    }
   
}

.product2{
    .products{
        .productItem{

            box-shadow: 0px 0px 21px 9px rgba(234,186,99,0.1);
            .title{
    background: linear-gradient(0deg, #FAD126, #F39800);
}
&:nth-child(2n){
    
box-shadow: 0px 0px 21px 9px rgba(130,135,222,0.1);
    .title{

        background: linear-gradient(0deg, #7683D9, #D8A0FE);
    }
}
        }
    }
}
.product3{
    .products{
        .productItem{

            box-shadow: 0px 0px 21px 9px rgba(252,107,109,0.1);
            .title{
background: linear-gradient(90deg, #FF934C, #FC686F);
}
&:nth-child(2n){
    
box-shadow: 0px 0px 21px 9px rgba(60,231,188,0.1);
    .title{

        background: linear-gradient(90deg, #38EBBA, #6FB1D2);
    }
}
        }
    }
}

.aboutUs{

background: #FFFFFF;
padding:80px 0;
.menuCard{
    display: flex;
    justify-content: space-between;
.menuCardItem{
    width: 380px;
height: 200px;
background: #000000;
opacity: 0.6;
border-radius: 12px;
position:relative;
span{
    font-size: 42px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
position:absolute;
bottom:34px;
right:39px;

}

}
}


.company{
    position:relative;
    margin-top:80px;
    h4{
        margin:0;
        text-align: center;font-size: 36px;
font-family: Heiti SC;
font-weight: 500;
color: #30333B;

    }
    .companyBg{
        position:absolute;
        top:60px;
        left:0;
        right:0;
        margin:auto;
        width:532px;
    }
    .partner{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .partnerItem{
            img{
                height:105px;
            }
        }
    }
}
}

.footer{

background: #13161C;
opacity: 0.9;
.container{
    height:400px;
}
.footerLeft{
    width:680px;
    float:left;
    img{
        height:74px;
        margin-bottom:42px;
        margin-top:40px;
    }
    .linkTitle{
        font-size: 24px;
font-family: Heiti SC;
font-weight: 500;
color: #EABA63;
line-height: 24px;
position:relative;
padding-left:20px;
margin-top:0;
&::after{
    content:'';
    display: block;
    width:5px;
    height:20px;

background: #EABA63;
position: absolute;
left:0;
top:0;
bottom:0;
margin:auto;
}
    }
    ul{
            list-style: none;
            margin:0;
            padding:0;
        li{
            list-style: none;
            margin:0;
            padding:0;font-size: 18px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
line-height: 24px;
margin-bottom:13px;

        }
    }
}

.footerRight{
    padding-top:97px;
    box-sizing: border-box;
    float: left;
    display: flex;
    .imgCon{
        &:first-child{
            margin-right:93px;
        }
        .imgBg{
            padding:22px;
background: #1A2541;
box-shadow: 0px 6px 16px 0px rgba(0,0,0,0.35);
opacity: 0.3;
            img{
                width:140px;
                height:140px;
            }
        }
        p{
text-align: center;
font-size: 20px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
line-height: 24px;
margin:0;
margin-top:18px;
        }
    }
}
}


.contact{
    width: 380px;
height: 554px;
background: #FFFFFF;
box-shadow: 0px 3px 5px 0px rgba(105,105,105,0.5);
border-radius: 6px;
position: relative;
box-sizing: border-box;
position:fixed;
top:200px;
z-index:400;

right:calc(50% - 600px);
.contactCon{

    padding:20px 30px;
    box-sizing: border-box;
}
.contactTitle{

height: 43px;
background: #DEA949;
border-radius: 6px 6px 0px 0px;
font-size: 18px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
line-height: 43px;
text-align: center;
}
.close{
    position:absolute;
    z-index:2;
    top:17px;
    right:18px;
    color:#fff;
    font-size: 17px;
    z-index:2;
    width:18px;
    height:18px;
    cursor: pointer;
}
.contactTips{
    background:#FDF8EF;font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9C;
line-height: 18px;
padding:15px;
margin-bottom:10px;
}
.contactItem{
    .label{

font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #9A9A9A;
line-height: 18px;
line-height: 26px;
margin:0 0 10px 0;
    }
input{
width:100%;
height: 40px;
background: #F8F8F8;
border-radius: 6px;
border:none;
outline: none;
padding:0 20px;
    box-sizing: border-box;
&.textarea{
    height:120px;
}
}
}
    .button{
        width:320px;
        margin-top:20px;
    }
}

.button{
    width: 280px;
height: 44px;
background: linear-gradient(163deg, #E1AD4F, #EABA63, #E0AF56);
box-shadow: 0px 3px 0px 0px #DEA949;
border-radius: 8px;

margin:0 auto;font-size: 18px;
font-family: Heiti SC;
font-weight: 500;
color: #FFFFFF;
text-align: center;
line-height: 44px;
cursor: pointer;

}
</style>
