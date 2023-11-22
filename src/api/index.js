import request from "@/axios";
import { baseUrl } from "@/config/env";

// 首页轮播图列表
export const bannerList = () =>
	request({
		url: baseUrl + "/indexImgs",
		method: "get",
	});

// 商品列表  通过分类拿 有分页
export const prodList = (params) =>
	request({
		url: baseUrl + "/prod/pageProd",
		methods: "get",
		params: { ...params },
	});

// 商品详情
export const prodDetail = (params) =>
	request({
		url: baseUrl + "/prod/prodInfo",
		methods: "get",
		params: { ...params },
	});
