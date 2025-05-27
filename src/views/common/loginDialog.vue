<template>
	<div class="loginMask">
		<div class="loginContent">
			<div class="close" @click="closeDialog">
				<img src="/img/close.png" alt="" />
			</div>
			<h4 class="loginTitle"><span>登录</span></h4>
			<div class="inputItem">
				<input
					v-model="userName"
					class="input"
					id="userName"
					type="text"
				/><label class="placeholder" for="userName" v-show="!userName"
					>您的手机号</label
				>
				<div class="cut" v-show="!userName"></div>
			</div>
			<div class="inputItem">
				<input
					v-model="passWord"
					class="input"
					id="passWord"
					type="password"
				/><label class="placeholder" for="passWord" v-if="!passWord"
					>登录密码</label
				>
				<div class="cut" v-if="!passWord"></div>
			</div>
			<p class="errInfo" style="margin-left: 20px">{{ errInfo }}</p>
			<div class="button" @click="onLogin">立即登录</div>
			<div class="other">
				<p @click="goRegister">还没有账号？ <span>立即注册</span></p>
				<p @click="onForgetPassword">忘记密码</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			passWord: "",
			userName: "",
			errInfo: "",
		};
	},
	methods: {
		onLogin() {
			const { userName, passWord } = this;
			if (!userName) {
				document.getElementById("userName").focus();
				return;
			}
			if (!passWord) {
				document.getElementById("passWord").focus();
				return;
			}
			this.$store
				.dispatch("LoginByUsername", { username: userName, password: passWord })
				.then(({ data }) => {
					if (data.success) {
						this.$store.dispatch("GetUserInfo").then(res=>{
							this.$emit("callback");
							this.closeDialog();
						});
					} else {
						console.log(data);
						this.errInfo = data.msg;
					}
				});
		},
		closeDialog() {
			this.$store.dispatch("setLoginDialog", false);
		},
		goRegister() {
			this.$router.push("/register");
			this.closeDialog();
		},
		onForgetPassword() {
			this.$router.push("/forgetPassword");
			this.closeDialog();
		},
	},
};
</script>

<style lang="scss" scoped>
.loginMask {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 4;

	.loginContent {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		width: 320px;
		height: 380px;
		background: #ffffff;
		box-shadow: 0px 0px 10px 10px rgba(234, 186, 99, 0.1);
		border-radius: 12px;
		.close {
			width: 18px;
			height: 18px;
			position: absolute;
			right: -36px;
			top: -36px;
			cursor: pointer;
			img {
				width: 18px;
				height: 18px;
			}
		}
		&.haslogin {
			text-align: center;
			.welcom {
				display: block;
				margin: 0 auto;
				width: 128px;
				height: 36px;
				margin-top: 41px;
			}
			.username {
				margin: 40px auto 21px;
				font-size: 24px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #30333b;
			}
			.phoneinfo {
				font-size: 16px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #30333b;
			}
			.gray {
				margin-top: 0;
			}
		}
		&.register {
			.inputItem {
				margin-bottom: 10px;
				.phoneInfo {
					text-align: center;
					font-size: 16px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #30333b;
					margin: 40px auto;
					line-height: 18px;
					span {
						font-size: 18px;
						font-family: Heiti SC;
						font-weight: 500;
						color: #eaba63;
						margin-right: 4px;
					}
				}
				img {
					width: 18px;
					height: 18px;
					position: absolute;
					right: 10px;
					top: 10px;
				}
			}
			.loginTitle {
				margin-bottom: 30px;
			}
			.cut {
				opacity: 0;
			}
			.genderCon {
				display: flex;
				width: 280px;
				margin: 0 auto;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10px;
				.inputItem,
				.input {
					width: 150px;
					margin: 0;
				}
				.radio {
					position: relative;
					font-size: 14px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #30333b;
					margin-right: 6px;
				}
				input[type="checkbox"],
				input[type="radio"] {
					opacity: 0;
				}
				.radio-inner {
					width: 18px;
					height: 18px;
					box-sizing: border-box;
					padding: 0 8px;
					border-radius: 50%;
					position: absolute;
					border: 1px solid #d9d9da;
					top: 0;
					bottom: 0;
					left: -5px;
					margin: auto;
					&.active {
						&::after {
							content: "";
							display: block;
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							right: 0;
							margin: auto;
							width: 6px;
							height: 6px;
							border-radius: 6px;
							background: #30333b;
						}
					}
				}
			}
			.smscodeCon {
				display: flex;
				width: 280px;
				margin: 0 auto;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10px;
				.inputItem,
				.input {
					width: 190px;
					margin: 0;
				}
				.send {
					width: 70px;
					height: 39px;
					background: linear-gradient(5deg, #eaba63, #fac76c);
					border-radius: 8px;
					cursor: pointer;

					font-size: 14px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #ffffff;
					line-height: 39px;
					text-align: center;
				}
				.hasSend {
					width: 70px;
					height: 39px;
					background: #f8f8f8;
					border-radius: 8px;
					line-height: 39px;
					font-size: 14px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #30333b;
					text-align: center;
				}
			}
			.button {
				margin-top: 20px;
				margin-bottom: 0;
			}
		}
		.other {
			display: flex;
			justify-content: space-between;
			width: 280px;
			margin: 0 auto;
			p {
				font-size: 14px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #9a9a9c;
				cursor: pointer;
				span {
					font-size: 14px;
					font-family: Heiti SC;
					font-weight: 500;
					color: #eaba63;
					margin-left: 10px;
				}
			}
		}
		.button {
			margin-top: 40px;
			margin-bottom: 20px;
		}
		.loginTitle {
			font-size: 20px;
			font-weight: 500;
			color: #30333b;
			position: relative;
			text-align: center;
			margin-bottom: 40px;
			line-height: 1;
			&::after {
				position: absolute;
				content: "";
				display: block;
				width: 50px;
				height: 4px;
				background: #eaba63;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
			}
			span {
				position: relative;
				z-index: 1;
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
			margin: 0 auto 22px;
		}
		.input {
			width: 280px;
			height: 40px;
			background: #ffffff;
			border: 1px solid #f3f2f8;
			border-radius: 8px;
			padding-left: 20px;
			box-sizing: border-box;
		}
		.placeholder {
			font-size: 14px;
			font-family: Heiti SC;
			font-weight: 500;
			color: #9a9a9c;

			left: 20px;
			line-height: 14px;
			pointer-events: none;
			position: absolute;
			transform-origin: 0 50%;
			transition: transform 200ms, color 200ms;
			top: 13px;
		}
		.input:focus ~ .cut {
			transform: translateY(8px);
		}
		.input:focus ~ .placeholder {
			transform: translateY(-24px) translateX(10px) scale(0.75);
			color: #dc2f55;
			z-index: 1;
		}
	}

	.button {
		width: 280px;
		height: 44px;
		background: linear-gradient(163deg, #e1ad4f, #eaba63, #e0af56);
		box-shadow: 0px 3px 0px 0px #dea949;
		border-radius: 8px;

		margin: 0 auto;
		font-size: 18px;
		font-family: Heiti SC;
		font-weight: 500;
		color: #ffffff;
		text-align: center;
		line-height: 44px;
		cursor: pointer;
	}
}
</style>
>
