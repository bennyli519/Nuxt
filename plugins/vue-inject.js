/*
 * @Description:
 * @Author: Benny
 * @Date: 2020-05-29 10:40:21
 * @LastEditTime: 2020-05-29 14:32:37
 */
import Vue from 'vue';
import { apiSite, siteUrl } from '@/api/url';

Vue.prototype.$api = apiSite;
Vue.prototype.$siteUrl = siteUrl;
Vue.prototype.$test = '123';

// 这里是 为了在 asyncData 方法中使用
export default ({ app }, inject) => {
    // Set the function directly on the context.app object
    app.$api = apiSite // 名称

}
