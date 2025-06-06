/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios'
import store from '@/store/';
import { serialize } from 'utils/util'
import { getToken } from 'utils/auth'
import { ElMessage } from 'element-plus'
import website from '@/config/website';
axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use(config => {
    const meta = (config.meta || {});
    const isToken = meta.isToken === false;
    if (getToken() && !isToken) {
        config.headers[website.Authorization] = getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
    }
    //headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
        config.data = serialize(config.data);
    }
    config.cancelToken = new axios.CancelToken((cancel) => {
        store.dispatch('pushCancel', { cancelToken: cancel })
    });
    return config
}, error => {
    return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {
    const status = Number(res.status) || 200;
    const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.message || '未知错误';
    //如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    //如果是401则跳转到登录页面
    if (res.data.code === 'A00004') {
        store.dispatch('clearCancel');
        ElMessage({
            message: '登录信息已过期，请重新登录！',
            type: 'error'
        });
        store.dispatch('FedLogOut')
        store.dispatch('setLoginDialog', true)
        return res
    } if (res.data.code === 'A00005') {
        ElMessage({
            message: res.data.msg,
            type: 'error'
        })
        return Promise.reject(new Error(message))
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
        if (!res.data.success) {
            ElMessage({
                message: res.data.msg,
                type: 'error'
            })
            return Promise.reject(new Error(message))
        }
    }
    return res;
}, error => {
    return Promise.reject(new Error(error));
})

export default axios;
