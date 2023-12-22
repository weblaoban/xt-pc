<template>
	<div class="footer">
		<div class="container">
			<div class="footerLeft">
				<img src="/img/logo.png" alt="" class="logo" />
				<div class="linkInfo">
					<p class="linkTitle">联系方式</p>
					<ul>
						<li>客服电话：0571-86012055</li>
						<li>客服邮箱：hlxintuo@163.com</li>
						<li>服务时间：9:00-12:00</li>
						<li>公司地址：浙江省杭州市上城区太平门直街213号</li>
					</ul>
				</div>
			</div>
			<div class="footerRight">
				<div class="imgCon" style="opacity: 0">
					<div class="imgBg">
						<img src="/img/code.png" alt="" />
					</div>
					<p>微信公众号</p>
				</div>
				<div class="imgCon">
					<div class="imgBg">
						<img src="/img/code1.png" alt="" />
					</div>
					<p>微信公众号</p>
				</div>
			</div>
		</div>
        <div class="copy">
            <p>
                Copyright ©杭州泓林信息咨询有限公司All rights reserved|投资有风险，理财需谨慎。| <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备2023043214</a>号
</p>
<p>以上项目皆真实，信息来自信托、基金、保险等金融机构，其对提供信息的真实可靠</p>
<p>性和完整准确性负责。</p>
<p>
投资者应仔细阅读产品的法律文件，了解产品风险和收益特征</p>
<p>(包括系统性风险和特定产品所特有的投资风险等)。</p>
        </div>
	</div>
</template>

<style lang="scss">
.footer {
	background: #13161c;

	background-image: url(/img/bgbottom.png);
	// background-size: 1920px 400px;
	background-position: center center;
	background-repeat: no-repeat;
	.container {
		height: 400px;
	}
	.footerLeft {
		width: 680px;
		float: left;
		img {
			height: 74px;
			margin-bottom: 42px;
			margin-top: 40px;
		}
		.linkTitle {
			font-size: 24px;
			font-family: Heiti SC;
			font-weight: 500;
			color: #eaba63;
			line-height: 24px;
			position: relative;
			padding-left: 20px;
			margin-top: 0;
			&::after {
				content: "";
				display: block;
				width: 5px;
				height: 20px;

				background: #eaba63;
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			li {
				list-style: none;
				margin: 0;
				padding: 0;
				font-size: 18px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #ffffff;
				line-height: 24px;
				margin-bottom: 13px;
			}
		}
	}

	.footerRight {
		padding-top: 97px;
		box-sizing: border-box;
		float: left;
		display: flex;
		.imgCon {
			&:first-child {
				margin-right: 93px;
			}
			.imgBg {
				padding: 22px;
				background: rgba(26, 37, 65, 0.3);
				box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.35);
				img {
					width: 140px;
					height: 140px;
				}
			}
			p {
				text-align: center;
				font-size: 20px;
				font-family: Heiti SC;
				font-weight: 500;
				color: #ffffff;
				line-height: 24px;
				margin: 0;
				margin-top: 18px;
			}
		}
	}

    .copy{
background: #292C31;
padding:20px 0;
p{
    width:810px;
    text-align: center;
    margin:0 auto;font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #85878B;
line-height: 24px;
a{
    font-size: 16px;
font-family: Heiti SC;
font-weight: 500;
color: #85878B;
line-height: 24px;
}
}

    }
}
</style>
