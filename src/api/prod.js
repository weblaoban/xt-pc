import request from "@/axios";
import { baseUrl } from "@/config/env";
// 产品列表 根据分类id来
export const list = (data) => {
	return request({
		url: baseUrl + "/prod/pageProd",
		method: "get",
		meta: {
			isSerialize: true,
		},
		params: data,
	});
};

// 资讯用来查banner 问答和资讯根据分类id来
export const zxlist = (params) => {
	return request({
		url: baseUrl + "/content/page",
		method: "get",
		meta: {
			isSerialize: true,
		},
		params: { status: 0, ...params },
	});
};
