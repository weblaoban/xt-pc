export default [
    {
        path: "/",
        component: () => import("@/page/index/index.vue"),
        redirect: "/index",
        children: [
            {
                path: "index",
                name: "首页",
                meta: {
                    title: "首页",
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/index.vue"),
            },
            {
                path: "xtcombine",
                name: "集合信托",
                meta: {
                    title: "集合信托",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/xtCombine.vue"),
            },
            {
                path: "ziguan",
                name: "直融资产",
                meta: {
                    title: "直融资产",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/jeZi.vue"),
            },
            {
                path: "privateFund",
                name: "私募基金",
                meta: {
                    title: "私募基金",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/jijin.vue"),
            },
            {
                path: "out",
                name: "保险产品",
                meta: {
                    title: "保险产品",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/out.vue"),
            },
            {
                path: "oProdList",
                name: "境外资产",
                meta: {
                    title: "境外资产",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/oProdList.vue"),
            },
            {
                path: "prodDetail/:id",
                name: "产品详情",
                meta: {
                    title: "产品详情",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/prodDetail.vue"),
            },
            {
                path: "oProdDetail/:id",
                name: "产品详情（境外债）",
                meta: {
                    title: "产品详情（境外债）",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/oProdDetail.vue"),
            },
            {
                path: "bProdDetail/:id",
                name: "产品详情（保险）",
                meta: {
                    title: "产品详情（保险）",
                    isAuth:true
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/bProdDetail.vue"),
            },
            {
                path: "trustQa",
                name: "信托问答",
                meta: {
                    title: "信托问答",
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/qa.vue"),
            },
            {
                path: "trustQaDetail/:id",
                name: "信托问答详情",
                meta: {
                    title: "信托问答详情",
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/qaDetail.vue"),
            },
            {
                path: "information",
                name: "信托资讯",
                meta: {
                    title: "信托资讯",
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/zixun.vue"),
            },
            {
                path: "informationDetail/:id",
                name: "信托资讯详情",
                meta: {
                    title: "信托资讯详情",
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/zixunDetail.vue"),
            },
            {
                path: "aboutUs",
                name: "关于我们",
                meta: {
                    title: "关于我们",
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/aboutUs.vue"),
            },
            {
                path: "register",
                name: "注册",
                meta: {
                    title: "注册",
                },
                component: () =>
                    import(/* webpackChunkName: "views" */ "@/views/wel/register.vue"),
            },
            {
                path: "updatePassword",
                name: "修改密码",
                meta: {
                    title: "修改密码",
                    isAuth:true
                },
                component: () =>
                    import(
						/* webpackChunkName: "views" */ "@/views/wel/updatePassword.vue"
                    ),
            },
            {
                path: "forgetPassword",
                name: "忘记密码",
                meta: {
                    title: "忘记密码",
                },
                component: () =>
                    import(
						/* webpackChunkName: "views" */ "@/views/wel/forgetPassword.vue"
                    ),
            },
        ],
    },
];
