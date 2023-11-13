<template>
	<div class="index-container">
		<div class="header">
			<div class="container">欢迎您的光临</div>
		</div>
		<div class="logoContent">
			<div class="container">
				<div class="logo"><img src="" alt="" /></div>
				<div class="phone">
					<img src="" alt="" />
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
					<div class="menuItem">首页</div>
					<div class="menuItem"></div>
					<div class="menuItem"></div>
					<div class="menuItem"></div>
					<div class="menuItem"></div>
					<div class="menuItem"></div>
					<div class="menuItem"></div>
					<div class="menuItem"></div>
				</div>
			</div>
		</div>
		<div class="bannerContent">
			<el-carousel height="200px" direction="vertical" :autoplay="true">
				<el-carousel-item v-for="item in 3" :key="item">
					<div class="carouseCard">{{ item }}</div>
				</el-carousel-item>
			</el-carousel>
			<div class="loginContent">
				<div class="inputItem">
					<input class="input" id="userName" type="text" /><label
						class="placeholder"
						for="userName"
						>111111111</label
					>
					<div class="cut"></div>
				</div>
			</div>
		</div>
		<div class="cardContainer">
			<div class="container">
				<div class="cardContent">
					<div class="cardItem" v-for="item in cardItem" :key="item.id">
						<img src="" alt="" />
						<div class="cardDesc">
							<p class="title">{{ item.title }}</p>
							<p class="desc">{{ item.desc }}</p>
						</div>
					</div>
				</div>
				<div class="amount">
					<div class="amountItem">累计交易{{ amount }}万元</div>
					<div class="amountItem">累计交易{{ amount }}万元</div>
				</div>
			</div>
		</div>
		<div class="productC">
			<div class="productContent">
				<div class="container">
					<div class="productTitle">信托产品</div>
					<div class="products">
						<div class="productItem">
							<div class="productTitle">名称</div>
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

		<div class="aboutUs">
			<div class="container">
				<div class="menuCard">
					<div class="menuCardItem"></div>
				</div>
				<div class="company">
					<h4>合作伙伴</h4>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="container">
				<div class="footerLeft">
					<img src="" alt="" class="logo" />
					<div class="linkInfo">
						<p class="linkTitle">联系方式</p>
						<ul>
							<li>客户电话：</li>
							<li>客服邮箱</li>
							<li>无无时间</li>
							<li>地址</li>
						</ul>
					</div>
				</div>
				<div class="footerRight">
					<div class="imgCon">
						<img src="" alt="" />
						<p>微信公众号</p>
					</div>
					<div class="imgCon">
						<img src="" alt="" />
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
			cardItem: [{ title: "111", desc: "222", id: 0, img: "/img/icon1.png" }],
			amount: 111,
		};
	},
	computed: {
		...mapGetters(["userInfo"]),
	},
	created() {},
	methods: {},
};
</script>

<style lang="scss">
.logoContent {
	.container {
		display: flex;
		justify-content: space-between;
		.phone {
			display: flex;
			.phoneInfo {
				p {
					margin: 0;
					padding: 0;
				}
			}
		}
	}
}

.bannerContent .el-carousel__indicators--vertical {
	top: 50%;
	right: calc(50% - 600px);
	transform: translate(50%, -50%);
}
.bannerContent {
	.carouseCard {
		width: 100%;
		height: 100%;
		background: red;
	}
	.el-carousel__indicator--vertical .el-carousel__button {
		width: 4px;
		height: 4px;
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
		width: 20px;
		height: 20px;
		position: relative;
		border-radius: 50%;
		background: transparent;
		box-sizing: border-box;
	}
	.el-carousel__indicator.is-active {
		border: 1px solid #fff;
	}
	.loginContent {
		.cut {
			background-color: #15172b;
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
		}
		.input {
			background-color: #303245;
			border-radius: 12px;
			border: 0;
			box-sizing: border-box;
			color: #eee;
			font-size: 18px;
			width: 100%;
			height: 100%;
			outline: 0;
			padding: 4px 20px 0;
		}
		.placeholder {
			color: #65657b;
			font-family: sans-serif;
			left: 20px;
			line-height: 14px;
			pointer-events: none;
			position: absolute;
			transform-origin: 0 50%;
			transition: transform 200ms, color 200ms;
			top: 20px;
		}
		.input:focus ~ .cut {
			transform: translateY(8px);
		}
		.input:focus ~ .placeholder {
			transform: translateY(-30px) translateX(10px) scale(0.75);
			color: #dc2f55;
		}
	}
}

.productContent {
	.productTitle {
		&:after {
			content: "";
			display: block;
			width: 100px;
			height: 2px;
			background: linear-gradient(90deg, #69adff, #f68036);
			opacity: 0.5;
		}
	}
}
</style>
