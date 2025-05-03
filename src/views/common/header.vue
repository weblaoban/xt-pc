<template>
  <div class="index-container">
    <div class="header">
      <div class="container"><span>Hi </span>欢迎您的访问</div>
    </div>
    <div class="logoContent">
      <div class="container">
        <div class="logo" @click="goIndex">
          <img src="/img/logo.png" alt="" />
        </div>
        <div class="phone">
          <img src="/img/kefu.png" alt="" />
          <div class="phoneInfo">
            <p class="phonenumber">0571-86012055</p>
            <p class="time">工作时间：9:00-17:00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="menuContent">
      <div class="container">
        <div class="menuList">
          <div
            @click="onMenuClick(item)"
            :class="{ active: index == active }"
            v-for="(item, index) in menuList"
            :key="item"
            class="menuItem"
          >
            <img v-if="item.icon" :src="item.icon" alt="" />{{ item.name }}
            <div class="tag" v-if="item.notOpen">暂未开放</div>
            <div class="menuItemChildren" v-if="item.children">
              <div
                :class="{
                  childrenItem: true,
                  childrenItemActive:
                    subActive === childIndex && index == active,
                }"
                v-for="(child, childIndex) in item.children"
                :key="child.name"
                @click="onMenuClick(child)"
              >
                <div class="childContainer">
                  <div class="childrenCon">{{ child.name }}</div>
                </div>
                <div class="subChildrenCon">
                  <div class="subChildren" v-if="child.children">
                    <div
                      :class="{
                        subChildItem: true,
                        childrenItem: true,
                        subChildrenItemActive:
                          subActive === childIndex &&
                          index === active &&
                          subIndex === subChildActive,
                      }"
                      v-for="(subChild, subIndex) in child.children"
                      :key="subChild.name"
                      @click="onMenuClick(subChild)"
                    >
                      <div class="childContainer">
                        <div class="childrenCon">{{ subChild.name }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { encrypt } from "utils/util";
  import { register, modifyPassword } from "@/api/user.js";
  export default {
    name: "header",
    props: ["active", "subActive", "subChildActive"],
    data() {
      return {
        showContact: false,
        cardItem: [
          {
            title: "财富增值",
            desc: "稳健安全的资产配置",
            id: 0,
            img: "/img/icon1.png",
          },
          {
            title: "产品安全",
            desc: "专业风控团队优中优选",
            id: 0,
            img: "/img/icon2.png",
          },
          {
            title: "全面覆盖",
            desc: "信托资管私募全面覆盖",
            id: 0,
            img: "/img/icon3.png",
          },
          {
            title: "专业服务",
            desc: "专业服务经理1对1服务",
            id: 0,
            img: "/img/icon4.png",
          },
        ],
        amount: 111,
        menuList: [
          {
            name: "首页",
            icon: "/img/home.png",
            link: "/",
          },
          {
            name: "境内资产",
            children: [
              {
                name: "集合信托",
                link: "/xtcombine",
              },
              {
                name: "直融资产",
                link: "/ziguan",
              },
              {
                name: "私募基金",
                link: "/privateFund",
              },
            ],
          },
          {
            name: "境外资产",
            children: [
              {
                name: "保 险",
                children: [
                  {
                    name: "储蓄产品",
                    link: "/out",
                    query: {
                      type: 1,
                      category: 100,
                    },
                  },
                  {
                    name: "重疾产品",
                    link: "/out",
                    query: {
                      type: 1,
                      category: 100,
                    },
                  },
                ],
              },
              {
                name: "境外债",
                link: "",
              },
            ],
          },
          //   {
          //     name: "集合保险",
          //     notOpen: true,
          //   },

          {
            name: "财经资讯",
            link: "/information",
          },
          {
            name: "资讯问答",
            link: "/trustQa",
          },
          {
            name: "关于我们",
            link: "/aboutUs",
          },
        ],
        userName: "",
        passWord: "",
        phone: "",
        gender: 0,
        smsCode: "",
        originTime: 30,
        timeDown: 30,
        timer: null,
        products: [
          {
            name: "名称",
          },
          {
            name: "名称",
          },
          {
            name: "名称",
          },
          {
            name: "名称",
          },
        ],
        contact: {
          name: "",
          phone: "",
          message: "",
        },
        showPassword: false,
        showModifyPass: false,
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
    },
    created() {},
    methods: {
      goIndex() {
        this.$router.push("/");
      },
      onModify() {
        const { userName, passWord, gender, smsCode, phone } = this;
        modifyPassword({ smsCode, passWord: encrypt(passWord), phone }).then(
          (res) => {
            console.log(res);
          }
        );
      },
      sendSms() {
        this.timer = setTimeout(() => {
          this.timeDown = this.timeDown - 1;
          if (this.timeDown <= 1) {
            this.timeDown = this.originTime;
            if (this.timer) {
              clearTimeout(this.timer);
            }
          } else {
            if (this.timer) {
              clearTimeout(this.timer);
            }
            this.sendSms();
          }
        }, 1000);
      },
      onMenuClick(menu) {
        if (menu.link) {
          let query = {};
          if (menu.query) {
            query = menu.query;
          }
          this.$router.push({
            path: menu.link,
            query,
          });
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    height: 40px;
    background: #f7f7f7;
    line-height: 40px;
    color: #836c4c;
    font-size: 14px;
    font-weight: 500;
    span {
      font-size: 16px;
      color: #eaba63;
      font-weight: 400;
    }
  }
  .logoContent {
    height: 120px;
    background: #ffffff;
    .container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        img {
          // width:274px;
          height: 80px;
        }
      }
      .phone {
        display: flex;
        img {
          width: 42px;
          height: 42px;
          margin-right: 10px;
        }
        .phoneInfo {
          p {
            margin: 0;
            padding: 0;
            color: #eaba63;
            &.phonenumber {
              font-size: 30px;
              font-family: Arial;
              font-weight: 400;
            }
            &.time {
              font-size: 14px;
              font-family: Heiti SC;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
  .menuContent {
    height: 52px;
    background: #30333b;
    .menuList {
      display: flex;
      justify-content: space-between;

      .menuItem {
        width: 12.5%;
        line-height: 52px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
        .tag {
          width: 57px;

          text-align: center;
          position: absolute;
          font-size: 12px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #ffffff;
          background-image: url(/img/notopen.png);
          background-size: 57px 19px;
          background-position: center center;
          background-repeat: no-repeat;
          top: 0;
          left: 110px;
          height: 20px;
          line-height: 20px;
        }
        img {
          width: 20px;
          height: 20px;
        }
        &.active {
          color: #eaba63;
          &:after {
            content: "";
            display: block;
            width: 100%;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: #eaba63;
          }
        }
        &:hover {
          .menuItemChildren {
            display: block;
          }
        }
        .menuItemChildren {
          display: none;
          position: absolute;
          top: 52px;
          width: 100%;
          z-index: 2;
          text-align: center;
          background: #fff;
          box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
          color: #666;
          font-size: 16px;
          padding: 0 10px;
          box-sizing: border-box;
          line-height: 30px;
          .childContainer {
            height: 52px;
            border-bottom: 1px solid #efefef;
            padding: 0 10px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            .childrenCon {
              padding: 0 10px;
              width: 80%;
              text-align: center;
              &:hover {
                background: #f6f6f6;
                border-radius: 15px;
              }
            }
          }
          .childrenItem {
            position: relative;
            &:hover {
              .subChildrenCon {
                display: block;
              }
            }
          }
          .subChildItem {
            height: 48px;
            font-size: 14px;

            & > .childContainer {
              .childrenCon {
                width: auto;
              }
            }
          }
          .childrenItemActive {
            & > .childContainer {
              .childrenCon {
                padding: 0 10px;

                background: #f6f6f6;
                border-radius: 6px;
                font-weight: 600;
              }
            }
          }
          .subChildrenItemActive {
            & > .childContainer {
              .childrenCon {
                padding: 0 10px;
                background: #eaba63;
                border-radius: 15px;
                color: #fff;
              }
            }
          }
          .subChildrenCon {
            padding: 0 10px;
            display: none;
            position: absolute;
            left: 100%;
            width: 110%;
            top: 0;
          }
          .subChildren {
            background: #fff;
            box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
            color: #666;
            font-size: 16px;
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
    position: relative;
    height: auto;
    .carouseCard {
      width: 100%;
      height: 100%;
      background-image: url(/img/banner.png);
      background-size: 100% 100%;
      background-position: center center;
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
      padding: 0;
      width: 38px;
      height: 38px;
      position: relative;
      border-radius: 50%;
      background: transparent;
      box-sizing: border-box;
      margin-bottom: 10px;
    }
    .el-carousel__indicator.is-active {
      border: 1px solid #fff;
    }
    .loginContent {
      position: absolute;
      top: 56px;
      right: calc(50% - 490px);
      width: 320px;
      height: 380px;
      background: #ffffff;
      box-shadow: 0px 0px 10px 10px rgba(234, 186, 99, 0.1);
      border-radius: 12px;
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
        top: 16px;
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
    &.gray {
      background: linear-gradient(163deg, #d5d5d5, #efefef);
      box-shadow: 0px 3px 0px 0px #cbcbcb;
      color: #9a9a9c;
      margin-top: 0;
    }
  }
</style>
