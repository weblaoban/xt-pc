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
            <li>服务时间：9:00-17:00</li>
            <li>公司地址：浙江省杭州市上城区太平门直街213号</li>
          </ul>
        </div>
      </div>
      <div class="footerRight">
        <!-- <div class="imgCon" style="opacity: 0">
          <div class="imgBg">
            <img src="/img/code.png" alt="" />
          </div>
          <p>微信公众号</p>
        </div> -->
        <div class="footerIntro">
          <img src="/img/foottitle.png" alt="" />
          <p>
						本文由瑔石家办风控委员会委员、风控部负责团队成员撰写。 风控团队十余人，深耕金融市场多年，瑔石家办始终致力于为投资者提供卓越的境内外资产配置服务。境内以城投资产为主；境外则立足于香港市场，以海外保险和境外城投债为主要业务，全方位为客户服务。
					</p>
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
				Copyright ©杭州瑔石信息咨询有限公司
				All rights reserved|投资有风险，理财需谨慎。|
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
          >浙ICP备2023043214</a
        >号
      </p>
      <p>
        以上项目皆真实，信息来自信托、基金、保险等金融机构，其对提供信息的真实可靠性和完整准确性负责投资者应仔细阅读产品的法律文件，了解产品风险和收益特征(包括系统性风险和特定产品所特有的投资风险等)。
      </p>
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
      height: 360px;
    }
    .footerLeft {
      width: 490px;
      float: left;
      img {
        height: 73px;
        margin-bottom: 42px;
        margin-top: 40px;
      }
      .linkTitle {
        font-size: 20px;
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
          font-size: 14px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 24px;
          margin-bottom: 13px;
        }
      }
    }

    .footerRight {
      padding-top: 50px;
      box-sizing: border-box;
      float: left;
      display: flex;
      .footerIntro {
        width: 397px;
        height: 214px;
        padding: 30px 28px;
        box-sizing: border-box;
        background-image: url(/img/foottitlebg.png);
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
        box-sizing: border-box;
        margin-top: 71px;
        img {
          height: 38px;
        }
        p {
          font-size: 12px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #eecf98;
          line-height: 24px;
          text-shadow: 0px 2px 3px #202123;
          margin: 0;
          line-height: 2;
          margin-top: 20px;
        }
      }
      .imgCon {
        width: 307px;
        height: 315px;
        background-image: url(/img/footbg1.png);
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
        box-sizing: border-box;
        position: relative;
        z-index: 2;
        margin-left: -20px;
        padding-top: 86px;
        &:first-child {
          margin-right: 93px;
        }
        .imgBg {
          //   padding: 22px;
          margin: 0 auto;
          width: 140px;
          img {
            width: 140px;
            height: 140px;
          }
        }
        p {
          text-align: center;
          font-size: 14px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 24px;
          margin: 0;
          margin-top: 10px;
        }
      }
    }

    .copy {
      background: #292c31;
      padding: 20px 0;
      z-index: 3;
      position: relative;
      p {
        // width:810px;
        text-align: center;
        margin: 0 auto;
        font-size: 12px;
        font-family: Heiti SC;
        font-weight: 500;
        color: #85878b;
        line-height: 24px;
        a {
          font-size: 12px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #85878b;
          line-height: 24px;
        }
      }
    }
  }
</style>
