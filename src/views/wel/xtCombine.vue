<!-- 集合信托 -->
<template>
  <div class="index-container">
    <main-header :active="1" :subActive="0"></main-header>
    <div class="combineCon">
      <div class="combineBanner">
        <div class="input">
          <input
            v-model="key"
            @blur="fetchListBykey"
            type="text"
            placeholder="状态｜期限｜门槛｜付息方式｜领域"
          />
          <img src="/img/search.png" alt="" class="search" />
        </div>
      </div>
      <div class="combineContent">
        <div class="container">
          <div class="searchCard">
            <div class="searchList">
              <div class="searchItem" v-for="item in searchs" :key="item.prop">
                <div class="label">{{ item.label }}</div>
                <ul>
                  <li
                    :class="{
                      active: selected[item.prop].value === option.value,
                    }"
                    v-for="option in item.options"
                    @click="onSelectSearch(option, item.prop)"
                    :key="option.value"
                  >
                    {{ option.label }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="border"></div>

            <div class="searchList selected">
              <div class="searchItem">
                <div class="label">已选条件：</div>
                <ul>
                  <li
                    v-show="option.value !== '-1'"
                    class="active"
                    v-for="(option, index) in selected"
                    @click="onSelectSearch(option, item.prop)"
                    :key="option.value"
                  >
                    {{ option.label }}
                    <el-icon
                      @click="removeSelected(index)"
                      :size="20"
                      style="vertical-align: middle"
                      ><Close
                    /></el-icon>
                  </li>
                </ul>
                <div class="resetCon">
                  <span class="reset" @click="resetSearch">还原默认</span>
                  <span class="total">共{{ page.total }}款产品符合条件</span>
                </div>
              </div>
            </div>
          </div>

          <div class="prodList">
            <div class="prodItem head">
              <div class="ths" v-for="item in propColumn" :key="item.value">
                {{ item.label }}
              </div>
              <div class="ths">操作</div>
            </div>
            <div
              @click="goDetail(item)"
              :class="{
                prodItem: true,
                valid: item.status !== 3,
                notValid: item.status == 3,
              }"
              v-for="(item, index) in prodList"
              :key="index"
            >
              <div class="ths" v-for="prop in propColumn" :key="prop.value">
                {{
                  prop.dicData
                    ? prop.dicData[item[prop.value]]
                    : item[prop.value]
                }}
              </div>
              <div
                v-if="!item.imgs || !userInfo.id"
                @click.stop="onYuyue(item)"
                class="ths can yuyue"
              >
                我要预约
              </div>
              <div v-if="item.imgs && userInfo.id" class="ths can yuyue">
                已预约
              </div>
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

    <!-- 确认预约产品弹窗 -->
    <div class="model" v-if="showYuyue">
      <div class="modelContent">
        <el-icon @click="showYuyue = false"><Close /></el-icon>
        <div class="yuyue">
          <h3>产品预约</h3>
          <p class="desc">您要预约的产品为</p>
          <p class="title">{{ cur.name }}</p>
          <div class="button" @click="onDoYuyue">确定</div>
        </div>
      </div>
    </div>
    <login-mask v-if="showLogin" @callback="fetchList"></login-mask>
  </div>
</template>

<script>
  import loginMask from "../common/loginDialog.vue";
  import { mapGetters } from "vuex";
  import mainFooter from "../common/footer.vue";
  import mainHeader from "../common/header.vue";
  import { list, yuyue, keylist, getprodinfo, yuyuelist } from "@/api/prod.js";
  export default {
    name: "jeZi",
    components: {
      mainFooter,
      mainHeader,
      loginMask,
    },
    data() {
      return {
        searchs: [
          {
            label: "产品状态：",
            prop: "status",
            options: [
              {
                label: "不限",
                value: "-1",
              },
              {
                label: "预售",
                value: "1",
              },
              {
                label: "在售",
                value: "2",
              },
              {
                label: "售罄",
                value: "3",
              },
            ],
          },
          {
            label: "产品期限：",
            prop: "investLimitId",
            options: [
              {
                label: "不限",
                value: "-1",
              },
            ],
          },
          {
            label: "投资门槛：",
            prop: "pmStand",
            options: [
              {
                label: "不限",
                value: "-1",
              },
            ],
          },
          {
            label: "付息方式：",
            prop: "inrestMethodId",
            options: [
              {
                label: "不限",
                value: "-1",
              },
            ],
          },
          {
            label: "投资领域：",
            prop: "prodEffid",
            options: [
              {
                label: "不限",
                value: "-1",
              },
            ],
          },
        ],
        selected: {
          status: {
            label: "不限",
            value: "-1",
          },
          investLimitId: {
            label: "不限",
            value: "-1",
          },
          pmStand: {
            label: "不限",
            value: "-1",
          },
          inrestMethodId: {
            label: "不限",
            value: "-1",
          },
          prodEffid: {
            label: "不限",
            value: "-1",
          },
        },
        prodList: [{}, {}],
        propColumn: [
          {
            label: "产品名称",
            value: "name",
            align: "left",
          },
          {
            label: "状态",
            value: "status",
            dicData: {
              1: "预售",
              2: "在售",
              3: "售罄",
            },
          },
          {
            label: "类型",
            value: "categoryCnt",
          },
          {
            label: "期限",
            value: "investLimitCnt",
          },
          {
            label: "业绩比较基准",
            value: "brief",
          },
          {
            label: "投资门槛",
            value: "pmStandCnt",
          },
          {
            label: "付息方式",
            value: "inrestMethodCnt",
          },
          {
            label: "投资领域",
            value: "prodEffCnt",
          },
          {
            label: "防控评级",
            value: "lev",
          },
        ],

        page: {
          pageSize: 10,
          total: 0,
          current: 1,
        },
        checked: false,
        showAgreement: false,
        showYuyue: false,
        cur: {},
        key: "",
      };
    },
    computed: {
      ...mapGetters(["userInfo", "showLogin"]),
    },
    created() {
      this.fetchList();
      this.getSearchCardInfo();
    },
    methods: {
      getSearchCardInfo() {
        // // 期限
        // this.searchs.investLimitId = this.getDataByParent(12, data);
        // // 付息方式
        // this.searchs.inrestMethodId = this.getDataByParent(13, data);
        // // 投资门槛
        // this.searchs.pmStand = this.getDataByParent(14, data);
        // // 投资领域
        // this.searchs.prodEffid = this.getDataByParent(15, data);
        getprodinfo({ parentId: 12 }).then((res) => {
          console.log(res);
          this.setcardInfo("investLimitId", res.data.data);
        });
        getprodinfo({ parentId: 13 }).then((res) => {
          console.log(res);
          this.setcardInfo("inrestMethodId", res.data.data);
        });
        getprodinfo({ parentId: 14 }).then((res) => {
          console.log(res);
          this.setcardInfo("pmStand", res.data.data);
        });
        getprodinfo({ parentId: 15 }).then((res) => {
          console.log(res);
          this.setcardInfo("prodEffid", res.data.data);
        });
      },
      setcardInfo(key, data = []) {
        const searchs = this.searchs;
        const targt = searchs.find((item) => item.prop == key);
        if (!targt) {
          return;
        }
        let list = [...data];
        list = list.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        });
        targt.options = targt.options.concat(list);
      },
      fetchList() {
        const { selected, page, userInfo } = this;
        const selectObj = {};
        for (let i in selected) {
          if (selected[i].value != -1) {
            selectObj[i] = selected[i].value;
          }
        }
        if (userInfo.id) {
          yuyuelist({ ...page, categoryId: 97, ...selectObj }).then((res) => {
            this.prodList = res.data.data.records;
            this.page.total = res.data.data.total;
          });
        } else {
          list({ ...page, categoryId: 97, ...selectObj }).then((res) => {
            this.prodList = res.data.data.records;
            this.page.total = res.data.data.total;
          });
        }
      },
      fetchListBykey() {
        if (!this.key) {
          this.fetchList();
          return;
        }
        keylist({ keystr: this.key, catstr: 97 }).then((res) => {
          this.prodList = res.data.data.records;
          this.page.total = res.data.data.total;
        });
      },
      onSelectSearch(value, prop) {
        console.log(value, prop);
        this.selected[prop] = value;
        this.fetchList();
      },
      removeSelected(key) {
        this.selected[key] = {
          label: "不限",
          value: "-1",
        };
        this.fetchList();
      },
      resetSearch() {
        this.selected = {
          status: {
            label: "不限",
            value: "-1",
          },
          investLimitId: {
            label: "不限",
            value: "-1",
          },
          pmStand: {
            label: "不限",
            value: "-1",
          },
          inrestMethodId: {
            label: "不限",
            value: "-1",
          },
          prodEffid: {
            label: "不限",
            value: "-1",
          },
        };
      },
      currentChange(current) {
        this.page.current = current;
        if (!this.key) {
          this.fetchList();
        } else {
          this.fetchListBykey();
        }
      },
      toggleCheck() {
        this.checked = !this.checked;
      },
      goDetail(row) {
        if (!this.userInfo.id) {
          this.$store.dispatch("setLoginDialog", true);
          return;
        }
        this.$router.push({
          path: "/prodDetail/" + row.id,
          query: {
            type: 1,
          },
        });
      },
      onYuyue(cur) {
        if (!this.userInfo.id) {
          this.$store.dispatch("setLoginDialog", true);
          return;
        }
        this.cur = cur;
        this.showYuyue = true;
      },
      onAgree() {
        if (!this.checked) {
          this.$message.error("请先同意协议");
          return;
        }
        this.showYuyue = true;
        this.showAgreement = false;
      },
      onDoYuyue() {
        const cur = this.cur;
        const userInfo = this.userInfo;
        if (cur.id) {
          yuyue({ prodId: cur.id }).then((res) => {
            if (res && res.data && res.data.success) {
              this.$message.success("预约成功");
              this.showYuyue = false;
              this.cur = {};
              this.fetchList();
            }
          });
        }
      },
    },
  };
</script>

<style lang="scss">
  .combineBanner {
    width: 100%;
    height: 274px;
    background: linear-gradient(
      90deg,
      #f2c775,
      #ef836d,
      #ffe8e0,
      #fdd3ab,
      #ffddc1
    );

    background-image: url(/img/listbg.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1920px 275px;
    position: relative;
    .input {
      width: 550px;
      height: 48px;
      background: rgba(234, 186, 99, 0.5);
      border: 1px solid #836c4c;
      opacity: 0.3;
      border-radius: 6px;
      position: absolute;
      top: 93px;
      left: 50%;
      input {
        width: 550px;
        height: 48px;
        box-sizing: border-box;
        padding-left: 23px;
        padding-right: 55px;
        border: 1px solid rgba(131, 108, 76, 0.3);
        // opacity: 0.3;
        border-radius: 6px;

        &::placeholder {
          font-size: 16px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #836c4c;
          opacity: 0.8;
        }
      }
      .search {
        position: absolute;
        width: 22px;
        height: 22px;
        top: 0;
        bottom: 0;
        right: 31px;
        margin: auto;
      }
    }
  }
  .combineCon {
    background: #fff;
  }
  .combineContent {
    transform: translateY(-50px);
    .searchCard {
      width: 100%;
      min-height: 358px;
      background: #ffffff;
      box-shadow: 0px 0px 16px 4px rgba(154, 154, 156, 0.15);
      border-radius: 6px;
      box-sizing: border-box;
      padding: 30px 50px;
      margin-bottom: 30px;
      ul,
      li {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .searchItem {
        padding-left: 90px;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 16px;
        .label {
          position: absolute;
          left: 0;
          top: 0;
          line-height: 26px;
          font-size: 14px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #9a9a9c;
        }
        ul {
          width: 100%;
          height: 26px;
          li {
            float: left;
            line-height: 26px;
            padding: 0 15px;
            font-size: 14px;
            font-family: Heiti SC;
            font-weight: 500;
            color: #9a9a9c;
            cursor: pointer;
            &.active {
              color: #fff;
              background: #eaba63;
              border-radius: 3px;
            }
          }
        }
      }

      .selected {
        ul {
          width: auto;
          max-width: 800px;
          li {
            margin-left: 16px;
            i {
              line-height: 26px;
            }
          }
        }
        .resetCon {
          position: absolute;
          right: 0px;
          top: 0;
          span {
            line-height: 26px;
            font-size: 14px;
            font-family: Heiti SC;
            font-weight: 500;
          }
          .reset {
            color: #ec5e2a;
            margin-right: 50px;
            cursor: pointer;
          }
          .total {
            color: #9a9a9c;
          }
        }
      }

      .border {
        height: 1px;
        background: #9a9a9c;
        opacity: 0.2;
        margin-top: 30px;
        margin-bottom: 36px;
      }
    }
  }

  .prodList {
    .prodItem {
      height: 76px;
      font-size: 14px;
      font-family: Heiti SC;
      font-weight: 500;
      color: 30333B;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 50px;
      border-bottom: 1px solid rgba(154, 154, 156, 0.2);
      cursor: pointer;

      &.head {
        height: 60px;
        background: rgba(173, 181, 193, 0.05);
        border: 1px solid #e9e9e9;
        border-radius: 6px 6px 0px 0px;
        color: #9a9a9c;
      }
      &:last-child {
        border: none;
      }

      .ths {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:nth-child(1) {
          width: 220px;
          flex-shrink: 0;
          text-align: left;
        }
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(9) {
          width: 76px;
          flex-shrink: 0;
        }
        &:nth-child(5) {
          width: 160px;
          flex-shrink: 0;
        }
        &:nth-child(8) {
          width: 160px;
          flex-shrink: 0;
        }
        &:nth-child(10) {
          width: 100px;
          flex-shrink: 0;
          &.can {
            color: #eaba63;
            display: none;
          }
        }
      }
      &.valid {
        &:hover {
          color: #eaba63;
          background: rgba(234, 186, 99, 0.1);
          .can {
            width: 83px;
            height: 36px;
            background: #eaba63;
            border-radius: 6px;

            color: #fff;
            line-height: 36px;
            margin-left: 20px;
          }
        }
        .can {
          display: block !important;
          width: 83px;
          height: 36px;
          border-radius: 6px;
          line-height: 36px;
          margin-left: 20px;
        }
        .ths {
          &:nth-child(5) {
            color: #eaba63 !important;
          }
        }
      }
      &.notValid {
        pointer-events: none;
        color: #9a9a9c;
        .ths {
          &:nth-child(5) {
            color: #eaba63 !important;
          }
        }
      }
    }
  }

  .paginationCon {
    margin-top: 30px;
    .el-pagination {
      justify-content: center;
      font-size: 14px;
      .btn-prev,
      .btn-next {
        width: 42px;
        height: 36px;
        background: linear-gradient(0deg, #ffffff, #f0f0f0);
        border: 1px solid #ebebeb;
      }
      .el-pager li.number {
        background: linear-gradient(0deg, #ffffff, #f0f0f0);
        border: 1px solid #ebebeb;
      }
      .el-pager li:not(.is-disabled).is-active {
        background: #eaba63;
        &:hover {
          color: #fff !important;
        }
      }
      .el-pager li:hover {
        color: #eaba63 !important;
      }
    }
    .el-pagination.is-background .btn-next:hover:not([disabled]),
    .el-pagination.is-background .btn-prev:hover:not([disabled]) {
      color: #eaba63 !important;
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
        font-size: 16px;
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
          font-size: 22px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #eaba63;
          margin-bottom: 27px;
          margin-top: 0;
        }
        p.desc {
          font-size: 16px;
          font-family: Heiti SC;
          font-weight: 500;
          color: #30333b;
          margin: 0;
          margin-bottom: 10px;
        }
        p.title {
          font-size: 16px;
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
        font-size: 16px;
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
            font-size: 18px;
            font-family: Heiti SC;
            font-weight: 500;
            color: #30333b;
          }
          p {
            margin: 0 auto 6px;
            text-indent: 32px;
            font-size: 12px;
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
            font-size: 12px;
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
