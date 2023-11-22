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
				},
				component: () =>
					import(/* webpackChunkName: "views" */ "@/views/wel/xtCombine.vue"),
			},
			{
				path: "ziguan",
				name: "集合资管",
				meta: {
					title: "集合资管",
				},
				component: () =>
					import(/* webpackChunkName: "views" */ "@/views/wel/jeZi.vue"),
			},
			{
				path: "privateFund",
				name: "私募基金",
				meta: {
					title: "私募基金",
				},
				component: () =>
					import(/* webpackChunkName: "views" */ "@/views/wel/jijin.vue"),
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
