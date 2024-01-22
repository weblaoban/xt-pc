<template>
  <div class="index-container">
    <main-header :active="0"></main-header>
    <div class="bannerContent">
      <el-carousel
        ref="car"
        :initial-index="0"
        v-show="bannerList.length"
        height="500px"
        direction="vertical"
        :autoplay="true"
      >
        <el-carousel-item v-for="item in bannerList" :key="item">
          <a target="_blank" v-if="item.link" :href="item.link">
            <div
              class="carouseCard"
              :style="'background-image:url(' + item.imgUrl + ')'"
            ></div
          ></a>
          <div
            v-if="!item.link"
            class="carouseCard"
            :style="'background-image:url(' + item.imgUrl + ')'"
          ></div>
        </el-carousel-item>
      </el-carousel>
      <!-- 已经登陆啦 -->
      <div class="loginContent haslogin">
        <img src="/img/welcome.png" alt="" class="welcom" />
        <div class="username">欢迎，{{ userInfo.nickName }}</div>
        <div class="phoneinfo">{{ userInfo.userMobile }}</div>
        <div class="button" @click="onModifyPassword">修改密码</div>
        <div class="button gray" @click="onLogout">退出登录</div>
      </div>
      <!-- 未登录 -->
      <div
        class="loginContent"
        v-if="!showRegister && !showModifyPass && !userInfo.id"
      >
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
        <p class="errInfo">{{ errInfo }}</p>
        <div class="button" @click="onLogin">立即登录</div>
        <div class="other">
          <p @click="goRegister">还没有账号？ <span>立即注册</span></p>
          <p @click="onForgetPassword">忘记密码</p>
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
          <div class="amountItem">
            累计交易<span>{{ amount }}</span
            >万元
          </div>
          <div class="amountItem">
            累计服务客户<span>{{ pmount }}</span
            >人
          </div>
          <div class="customer" @click="showContact = true">
            <img src="/img/message.png" alt="" />在线客服
          </div>
        </div>
      </div>
    </div>
    <div class="productC">
      <div class="productContent product1">
        <div class="container">
          <div class="productTitle"><span>信托产品</span></div>
          <div class="products">
            <div class="productItem" v-for="item in product1" :key="item.id">
              <div class="title">{{ item.name }}</div>
              <div class="desc">产品收益</div>
              <p class="count">{{ item.brief || 0 }} <span></span></p>
              <div class="line"></div>
              <div class="duration">产品期限：{{ item.investLimitCnt }}</div>
              <div class="button" @click="goDetail(item, 1)">立即查看</div>
            </div>
          </div>
        </div>
      </div>
      <div class="productContent product2">
        <div class="container">
          <div class="productTitle"><span>集合资管</span></div>
          <div class="products">
            <div class="productItem" v-for="item in product2" :key="item">
              <div class="title">{{ item.name }}</div>
              <div class="desc">产品收益</div>
              <p class="count">{{ item.brief || "--" }} <span></span></p>
              <div class="line"></div>
              <div class="duration">产品期限：{{ item.investLimitCnt }}</div>
              <div class="button" @click="goDetail(item, 2)">立即查看</div>
            </div>
          </div>
        </div>
      </div>
      <div class="productContent product3">
        <div class="container">
          <div class="productTitle"><span>私募基金</span></div>
          <div class="products">
            <div class="productItem" v-for="item in product3" :key="item">
              <div class="title">{{ item.name }}</div>
              <div class="desc">产品收益</div>
              <p class="count">{{ item.brief || "--" }}<span></span></p>
              <div class="line"></div>
              <div class="duration">产品期限：{{ item.investLimitCnt }}</div>
              <div class="button" @click="goDetail(item, 3)">立即查看</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 客户咨询 -->
    <div class="contact" v-if="showContact">
      <div class="contactTitle">客户咨询</div>
      <img
        class="close el-icon-close"
        @click="showContact = false"
        src="/img/close.png"
        alt=""
      />

      <div class="contactCon">
        <div class="contactTips">
          您好，请务必留下您的联系方式，客服会 根据您的问题及时回电
        </div>
        <div class="contactItem">
          <p class="label">姓名</p>
          <input v-model="contact.name" type="text" />
        </div>
        <div class="contactItem">
          <p class="label">手机号</p>
          <input v-model="contact.tel" type="text" />
        </div>
        <div class="contactItem">
          <p class="label">咨询内容</p>
          <textarea
            resize="none"
            v-model="contact.content"
            name=""
            class="textarea"
            id=""
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div class="button" @click="sendComm">提交</div>
      </div>
    </div>
    <div class="aboutUs">
      <div class="container">
        <div class="zixun">
          <div class="menuLeft">
            <div class="zixunTitle">
              <h4>信托资讯 <span>NEWS INFORMATION</span></h4>
              <p class="more" @click="goZixun">更多+</p>
            </div>
            <div class="zixunList">
              <div class="listL" v-if="list.length">
                <a :href="`/#/informationDetail/${list[0].id}`">
                  <img src="/img/zixunnew.png" alt="" />
                  <p>{{ list[0].title }}</p>
                  <span>{{
                    list[0].uploadTime ? list[0].uploadTime.split(" ")[0] : ""
                  }}</span></a
                >
              </div>
              <div class="listR">
                <div class="zixunItem" v-for="item in list" :key="item.id">
                  <a :href="`/#/informationDetail/${item.id}`">
                    <p>{{ item.title }}</p>
                    <span>{{
                      item.uploadTime ? item.uploadTime.split(" ")[0] : ""
                    }}</span></a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="menuCard menuRight">
            <div class="menuCardItem" @click="goQa">
              <p>信托问答</p>
              <p class="sub">PROBLEM SOLVING</p>
              <span>了解更多 <img src="/img/arrow.png" alt="" /></span>
            </div>
            <div class="menuCardItem" @click="goAboutUs">
              <p>关于我们</p>
              <p class="sub">ABOUT US</p>
              <span>了解更多 <img src="/img/arrow.png" alt="" /></span>
            </div>
          </div>
        </div>
        <div class="company">
          <h4>合作伙伴</h4>
          <img src="/img/companyBg.png" alt="" class="companyBg" />
          <div class="partner">
            <div v-for="(item, index) in 10" :key="item" class="partnerItem">
              <img :src="'/img/company' + index + '.png'" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
    <login-mask v-if="showLogin"></login-mask>
  </div>
</template>

<script>
  import loginMask from "../common/loginDialog.vue";
  import { mapGetters } from "vuex";
  import mainFooter from "../common/footer.vue";
  import mainHeader from "../common/header.vue";
  import { addComment, getAmount } from "@/api/index.js";
  import { zxlist, list } from "@/api/prod.js";
  export default {
    name: "wel",
    components: {
      mainFooter,
      mainHeader,
      loginMask,
    },
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
        amount: 0,
        pmount: 0,
        menuList: [
          {
            name: "首页",
            icon: "/img/home.png",
          },
          {
            name: "信托集合",
          },
          {
            name: "集合资管",
          },
          {
            name: "私募基金",
          },
          {
            name: "集合保险",
            notOpen: true,
          },
          {
            name: "信托问答",
          },
          {
            name: "信托资讯",
          },
          {
            name: "关于我们",
          },
        ],
        contact: {
          name: "",
          tel: "",
          content: "",
        },
        userName: "",
        passWord: "",
        bannerList: [],
        product1: [],
        product2: [],
        product3: [],
        loading: false,
        errInfo: "",
        page: {
          pageSize: 10,
          total: 0,
          current: 1,
        },
        list: [],
      };
    },
    computed: {
      ...mapGetters(["userInfo", "showLogin"]),
    },
    created() {
      this.getBannerList();
      this.getProdList();
      this.getAmount();
      this.fetchList();
    },
    methods: {
      fetchList() {
        const { page } = this;
        zxlist({ ...page, status: 0, categoryId: 8 }).then((res) => {
          this.list = res?.data?.data?.records.slice(0, 7);
          this.page.total = res.data.data.total;
        });
      },
      goQa() {
        this.$router.push("/trustQa");
      },
      goZixun() {
        this.$router.push("/information");
      },
      goAboutUs() {
        this.$router.push("/aboutUs");
      },
      getAmount() {
        getAmount().then((res) => {
          if (res && res.status === 200) {
            this.amount = res.data.data.pcount || 0;
            this.pmount = res.data.data.mcount || 0;
          }
        });
      },
      getBannerList() {
        zxlist({ categoryId: 10 }).then((res) => {
          if (res && res.status === 200) {
            this.bannerList = res.data.data.records
              .filter((item) => item.imgUrl)
              .sort((a, b) => {
                return a.seq - b.seq;
              });
            this.$refs.car.setActiveItem(0);
          }
        });
      },
      getProdList() {
        list({ categoryId: 97, soldNum: 1 }).then((res) => {
          if (res && res.status === 200) {
            console.log();
            let list = res.data.data.records || [];
            list = list.sort((a, b) => {
              return a.soldNum - b.soldNum;
            });
            this.product1 = res.data.data.records;
          }
        });
        list({ categoryId: 98, soldNum: 1 }).then((res) => {
          if (res && res.status === 200) {
            let list = res.data.data.records || [];
            list = list.sort((a, b) => {
              return a.soldNum - b.soldNum;
            });
            this.product2 = res.data.data.records;
          }
        });
        list({ categoryId: 99, soldNum: 1 }).then((res) => {
          if (res && res.status === 200) {
            let list = res.data.data.records || [];
            list = list.sort((a, b) => {
              return a.soldNum - b.soldNum;
            });
            this.product3 = res.data.data.records;
          }
        });
      },
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
              this.$store.dispatch("GetUserInfo");
            } else {
              this.errInfo = data.msg;
            }
          });
      },
      goRegister() {
        this.$router.push("/register");
      },
      onLogout() {
        this.$store.dispatch("LogOut");
      },
      onModifyPassword() {
        this.$router.push("/updatePassword");
      },
      onForgetPassword() {
        this.$router.push("/forgetPassword");
      },
      sendComm() {
        if (this.loading) {
          return;
        }
        const { name, tel, content } = this.contact;
        if (!name || !tel || !content) {
          return;
        }
        this.loading = true;
        addComment({ ...this.contact })
          .then((res) => {
            const data = res.data;
            if (data && data.success) {
              this.$message.success("提交成功");
              this.contact = {
                name: "",
                tel: "",
                content: "",
              };
              this.showContact = false;
              this.loading = false;
            }
          })
          .catch(() => {
            this.loading = false;
          });
      },

      goDetail(row, type) {
        if (!this.userInfo.id) {
          this.$store.dispatch("setLoginDialog", true);
          return;
        }
        this.$router.push({
          path: "/prodDetail/" + row.id,
          query: {
            type,
          },
        });
      },
    },
  };
</script>

<style lang="scss">
  .cardContainer {
    background: #fff;
    .cardContent {
      height: 144px;
      .cardItem {
        width: 25%;
        height: 100%;
        padding: 40px 0;
        box-sizing: border-box;
        float: left;
        display: flex;
        align-items: center;
        img {
          width: 64px;
          height: 64px;
          margin-right: 13px;
        }
        .cardDesc {
          p {
            margin: 0;
          }
          .title {
            font-size: 22px;
            font-family: Heiti SC;
            font-weight: 500;
            color: #eaba63;
            margin: 10px 0;
          }
          .desc {
            font-size: 14px;
            font-family: Heiti SC;
            font-weight: 500;
            color: #9a9a9c;
          }
        }
      }
    }
    .cardline {
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #fff, #e9b963, #ffffff);
      opacity: 0.2;
    }
    .amount {
      height: 105px;
      position: relative;
      .customer {
        width: 169px;
        height: 60px;
        background: #ec5e2a;
        box-shadow: 0px 3px 5px 0px rgba(115, 89, 41, 0.5);
        border-radius: 12px;

        font-size: 16px;
        font-family: Heiti SC;
        font-weight: 500;
        color: #ffffff;
        position: fixed;
        right: 0;
        bottom: 200px;
        padding-left: 30px;
        display: flex;
        align-items: center;
        line-height: 1;
        box-sizing: border-box;
        z-index: 20;
        cursor: pointer;
        img {
          width: 36px;
          height: 33px;
          margin-right: 14px;
        }
      }
      .amountItem {
        width: 50%;
        text-align: center;
        float: left;

        font-size: 18px;
        font-family: Heiti SC;
        font-weight: 500;
        padding: 30px 0 50px;
        box-sizing: border-box;
        color: #9a9a9c;
        span {
          font-size: 33px;
          font-family: Arial;
          font-weight: 400;
          color: #eaba63;
        }
      }
    }
  }
  .productContent {
    padding: 80px 0;
    background: #f8f8f8;
    &.product1 {
      background: url(/img/prodbg1.png);
      background-size: 1920px 661px;
      background-repeat: no-repeat;
    }
    &.product3 {
      background: url(/img/prodbg2.png);
      background-size: 1920px 661px;
      background-repeat: no-repeat;
    }
    &:nth-child(2n) {
      background: #ffffff;
    }
    .productTitle {
      font-size: 36px;
      font-family: Heiti SC;
      font-weight: 500;
      color: #30333b;
      text-align: center;
      margin-bottom: 89px;
      line-height: 1;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 150px;
        height: 10px;
        background: linear-gradient(90deg, #69adff, #f68036);
        opacity: 0.5;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        // transform: translateY(-10px);
        // z-index: -1;
      }
      span {
        position: relative;
        z-index: 1;
      }
    }
    .products {
      display: flex;
      // justify-content: space-between;
      .productItem {
        width: 280px;
        height: 377px;
        background: #ffffff;
        box-shadow: 0px 0px 21px 9px rgba(66, 142, 230, 0.1);
        border-radius: 12px;
        text-align: center;
        margin-right: 27px;
        cursor: pointer;
        &:hover {
          box-shadow: 0px 0px 21px 9px rgba(66, 142, 230, 0.3);
        }
        .title {
          height: 94px;
          background: linear-gradient(0deg, #89f7fe, #66a6ff);
          border-radius: 12px 12px 0px 0px;
          text-align: center;
          line-height: 94px;
          font-size: 20px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #ffffff;
          text-align: center;
          margin-bottom: 20px;
        }
        &:nth-child(2n) {
          box-shadow: 0px 0px 21px 9px rgba(252, 106, 74, 0.1);
          &:hover {
            box-shadow: 0px 0px 21px 9px rgba(252, 106, 74, 0.3);
          }
          .title {
            background: linear-gradient(0deg, #f28e26, #fd644f);
          }
        }
        .desc {
          font-size: 16px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #9a9a9c;
        }
        .count {
          font-size: 40px;
          font-family: Arial;
          font-weight: 400;
          color: #eaba63;
          margin: 9px 0 30px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          span {
            font-size: 24px;
            font-weight: 400;
          }
        }
        .line {
          width: 238px;
          border-bottom: 1px dashed #9a9a9c;

          margin: 31px auto 20px;
        }
        .duration {
          font-size: 16px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #30333b;
          margin-bottom: 30px;
        }
        .button {
          width: 240px;
          height: 54px;
          line-height: 54px;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }

  .product2 {
    .productTitle {
      &:after {
        background: linear-gradient(90deg, #f1954c, #938be4);
      }
    }
    .products {
      .productItem {
        box-shadow: 0px 0px 21px 9px rgba(234, 186, 99, 0.1);
        &:hover {
          box-shadow: 0px 0px 21px 9px rgba(234, 186, 99, 0.3);
        }
        .title {
          background: linear-gradient(0deg, #fad126, #f39800);
        }
        &:nth-child(2n) {
          box-shadow: 0px 0px 21px 9px rgba(130, 135, 222, 0.1);
          &:hover {
            box-shadow: 0px 0px 21px 9px rgba(130, 135, 222, 0.3);
          }
          .title {
            background: linear-gradient(0deg, #7683d9, #d8a0fe);
          }
        }
      }
    }
  }
  .product3 {
    .productTitle {
      &:after {
        background: linear-gradient(90deg, #fe924e, #3ae9bb);
      }
    }
    .products {
      .productItem {
        box-shadow: 0px 0px 21px 9px rgba(252, 107, 109, 0.1);
        &:hover {
          box-shadow: 0px 0px 21px 9px rgba(252, 107, 109, 0.3);
        }
        .title {
          background: linear-gradient(90deg, #ff934c, #fc686f);
        }
        &:nth-child(2n) {
          box-shadow: 0px 0px 21px 9px rgba(60, 231, 188, 0.1);
          &:hover {
            box-shadow: 0px 0px 21px 9px rgba(60, 231, 188, 0.3);
          }
          .title {
            background: linear-gradient(90deg, #38ebba, #6fb1d2);
          }
        }
      }
    }
  }

  .aboutUs {
    background: #ffffff;
    padding: 80px 0;
    .zixun {
      display: flex;
      justify-content: space-between;
      .menuLeft {
        margin-right: 53px;
        flex: 1;
        .zixunTitle {
          border-bottom: 1px dashed #eaba63;
          position: relative;
          margin-bottom: 30px;
          h4 {
            margin: 0;
            line-height: 60px;
            font-size: 30px;
            font-family: Heiti SC;
            font-weight: 500;
            color: #30333b;
            span {
              font-size: 18px;
              font-family: Arial;
              font-weight: 400;
              color: rgba(48, 51, 59, 0.2);
            }
          }
          .more {
            font-size: 16px;
            font-family: Heiti SC;
            font-weight: 300;
            color: #9a9a9c;
            position: absolute;
            right: 0;
            top: 0;
            line-height: 60px;
            cursor: pointer;
            &:hover {
              color: #eaba63;
            }
          }
        }
        .zixunList {
          display: flex;
          .listL {
            width: 280px;
            flex-shrink: 0;
            &:hover {
              p {
                color: #eaba63 !important;
              }
            }

            p {
              font-size: 16px;
              font-family: Heiti SC;
              font-weight: 500;
              color: #30333b;
              margin: 6px 0 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            img {
              width: 280px;
              height: 165px;
            }
            span {
              background: #eaba63;
              padding: 6px 9px;
              font-size: 14px;
              font-family: Heiti SC;
              font-weight: 500;
              color: #ffffff;
            }
          }
          .listR {
            flex: 1;
            margin-left: 27px;
            .zixunItem {
              padding-left: 28px;
              position: relative;
              margin-bottom: 14px;
              cursor: pointer;
              &::before {
                content: "";
                display: block;
                width: 18px;
                height: 10px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                background: url(/img/zixun.png);
                background-size: 18px 10px;
                background-repeat: no-repeat;
                background-position: left center;
              }
              &:nth-child(1) {
                &::before {
                  background: url(/img/zixunactive.png);
                  background-size: 18px 10px;
                  background-repeat: no-repeat;
                  background-position: left center;
                }
              }
              &:nth-child(2) {
                &::before {
                  background: url(/img/zixunactive.png);
                  background-size: 18px 10px;
                  background-repeat: no-repeat;
                  background-position: left center;
                  opacity: 0.5;
                }
              }
              &:nth-child(3) {
                &::before {
                  background: url(/img/zixunactive.png);
                  background-size: 18px 10px;
                  background-repeat: no-repeat;
                  background-position: left center;
                  opacity: 0.3;
                }
              }
              &:last-child {
                margin: 0;
              }
              p {
                margin: 0;
                font-size: 14px;
                font-family: Heiti SC;
                font-weight: 500;
                color: #30333b;
                line-height: 18px;
                &:hover {
                  color: #eaba63 !important;
                }
                a {
                  font-size: 14px;
                  font-family: Heiti SC;
                  font-weight: 500;
                  color: #30333b;
                  line-height: 18px;
                  &:hover {
                    color: #eaba63 !important;
                  }
                }
              }
              span {
                font-size: 14px;
                font-family: Heiti SC;
                font-weight: 500;
                color: #9a9a9c;
                position: absolute;
                top: 0;
                right: 0;
                line-height: 18px;
              }
            }
          }
        }
      }
    }
    .menuCard {
      .menuCardItem {
        width: 410px;
        height: 146px;
        background: #000000;
        // opacity: 0.6;
        border-radius: 12px;
        position: relative;
        padding: 44px 32px;
        box-sizing: border-box;
        cursor: pointer;
        &:nth-child(1) {
          background-image: url(/img/help1.png);
          background-size: 100% 100%;
          background-position: center center;
          background-repeat: no-repeat;
          margin-bottom: 20px;
        }
        &:nth-child(2) {
          background-image: url(/img/help2.png);
          background-size: 100% 100%;
          background-position: center center;
          background-repeat: no-repeat;
        }
        &:nth-child(3) {
          background-image: url(/img/help3.png);
          background-size: 100% 100%;
          background-position: center center;
          background-repeat: no-repeat;
        }
        p {
          font-size: 30px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 1;
          margin: 0;
          &.sub {
            font-size: 18px;
            font-weight: 400;
            line-height: 1.5;
          }
        }
        span {
          font-size: 18px;
          font-family: Heiti SC;
          font-weight: 400;
          color: #ffffff;
          position: absolute;
          bottom: 0;
          top: 0;
          margin: auto;
          height: 38px;
          right: 39px;
          padding: 0px 20px;
          border: 1px solid #ffffff;
          line-height: 36px;
          cursor: pointer;
          img {
            width: 8px;
            height: 10px;
            vertical-align: middle;
          }
        }
      }
    }

    .company {
      position: relative;
      margin-top: 80px;
      h4 {
        margin: 0;
        text-align: center;
        font-size: 36px;
        font-family: Heiti SC;
        font-weight: 500;
        color: #30333b;
        margin-bottom: 80px;
      }
      .companyBg {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        margin: auto;
        width: 532px;
      }
      .partner {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .partnerItem {
          // margin-right: 54px;
          &:nth-child(4n) {
            margin: 0;
          }
          img {
            height: 95px;
          }
        }
      }
    }
  }

  .contact {
    width: 380px;
    height: 554px;
    background: #ffffff;
    box-shadow: 0px 3px 5px 0px rgba(105, 105, 105, 0.5);
    border-radius: 6px;
    position: relative;
    box-sizing: border-box;
    position: fixed;
    top: 200px;
    z-index: 400;

    right: calc(50% - 600px);
    .contactCon {
      padding: 20px 30px;
      box-sizing: border-box;
    }
    .contactTitle {
      height: 43px;
      background: #dea949;
      border-radius: 6px 6px 0px 0px;
      font-size: 18px;
      font-family: Heiti SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 43px;
      text-align: center;
    }
    .close {
      position: absolute;
      z-index: 2;
      top: 17px;
      right: 18px;
      color: #fff;
      font-size: 17px;
      z-index: 2;
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    .contactTips {
      background: #fdf8ef;
      font-size: 16px;
      font-family: Heiti SC;
      font-weight: 500;
      color: #9a9a9c;
      line-height: 18px;
      padding: 15px;
      margin-bottom: 10px;
    }
    .contactItem {
      .label {
        font-size: 16px;
        font-family: Heiti SC;
        font-weight: 500;
        color: #9a9a9a;
        line-height: 18px;
        line-height: 26px;
        margin: 0 0 10px 0;
      }
      input {
        width: 100%;
        height: 40px;
        background: #f8f8f8;
        border-radius: 6px;
        border: none;
        outline: none;
        padding: 0 20px;
        box-sizing: border-box;
        &.textarea {
          height: 120px;
        }
      }
      textarea {
        width: 100%;
        background: #f8f8f8;
        border-radius: 6px;
        border: none;
        outline: none;
        resize: none;
        padding: 10px 20px;
        box-sizing: border-box;
      }
    }
    .button {
      width: 320px;
      margin-top: 20px;
    }
  }

  .button {
    width: 280px;
    height: 44px;

    background: linear-gradient(
      163deg,
      #e1ad4f,
      rgba(234, 186, 99, 0.7),
      #e0af56
    );
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
      box-shadow: 0rem 3px 0rem 0rem #cbcbcb;
      color: #9a9a9c;
    }
  }

  .bannerContent .el-carousel__indicators--vertical {
    top: 50%;
    right: calc(50% - 520px);
    transform: translate(50%, -50%);
  }
  .bannerContent {
    position: relative;
    height: 500px;
    .carouseCard {
      width: 100%;
      height: 100%;
      background-image: url(/img/banner.png);
      background-size: 1920px 500px;
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
          font-size: 20px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #30333b;
          &::after {
            content: "";
            width: 50px;
            height: 3px;
            display: inline-block;
            background: url(/img/right.png);
            background-size: 100% 100%;
            margin-left: 20px;
          }
          &::before {
            content: "";
            width: 50px;
            height: 3px;
            display: inline-block;
            background: url(/img/left.png);
            background-size: 100% 100%;
            margin-right: 20px;
          }
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
  }

  .errInfo {
    margin: 0;
    font-size: 12px;
    color: red;
    margin-left: 50px;
    margin-top: -18px;
    height: 16px;
  }
</style>
