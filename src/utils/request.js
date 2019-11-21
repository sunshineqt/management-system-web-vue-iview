import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { setAutoRouter, cleanAutoRouter } from '@/utils/autoRouter';
import { Toast } from 'mint-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'
import { Indicator } from 'mint-ui';

// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    // 请求之前统一处理header
    // if (localStorage.getItem('openid')) {
    //     config.headers['openid'] = localStorage.getItem('openid');
    // }
    // Indicator.open({ spinnerType: 'fading-circle' });
    return config
}, error => {
    console.log(error) // for debug
    Indicator.close();
    return Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        Indicator.close();
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
            // console.log(response);
        const res = response.data;
        // 根据后台返回信息进行统一处理  通过response自定义code来标示请求状态，当code可以用于处理权限问题，
        // 比如后台项目，每一个请求都是要带 token 来验证权限的，这样封装以下的话我们就不用每个请求都手动来塞 token，或者来做一些统一的异常处理，一劳永逸。
        // if (res.errCode == '000006' || res.err_code == '000006') {
        //     var merchantId = localStorage.getItem('merchantId');
        //     const currentPath = router.history.current.path;
        //     if (router.history.current.query) {
        //         const query = router.history.current.query;
        //         const currentPathData = [
        //             {
        //                 path: currentPath,
        //                 query: query
        //             }
        //         ];
        //         setAutoRouter(currentPathData, '拦截器拦截当前未登入路由');
        //     } else {
        //         const currentPathData = [
        //             {
        //                 path: currentPath
        //             }
            //     ];
            //     setAutoRouter(currentPathData, '拦截器拦截当前未登入路由');
            // }
            // router.push(`/login/${merchantId || store.getters.merchantId}`);
            // Message({
            //   message: res.message,
            //   type: 'error',
            //   duration: 5 * 1000
            // })

            // // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            //     confirmButtonText: '重新登录',
            //     cancelButtonText: '取消',
            //     type: 'warning'
            //   }).then(() => {
            //     store.dispatch('FedLogOut').then(() => {
            //       location.reload()// 为了重新实例化vue-router对象 避免bug
            //     })
            //   })
            // }
        //     return Promise.reject('error')
        // } else {
        //     return response.data
        // }
        return response.data
    },
    error => {
        Indicator.close();
        console.log('err' + error) // for debug
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service
