import Vue from 'vue';
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
let a = require('~/assets/lang/cn/index.js');
console.log(a)
export default ({ app, store }) => {
    // Set i18n instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.i18n = new VueI18n({
        locale: 'en_us',
        fallbackLocale: 'zh_cn',
        messages: {
            'zh_cn': require('~/assets/lang/cn/index.js'),
            'en_us': require('~/assets/lang/en/index.js')
        }
    });
    // app.i18n.path = (link) => {
    //     if (app.i18n.locale === app.i18n.fallbackLocale) {
    //         return `/${link}`;
    //     }
    //     return `/${app.i18n.locale}/${link}`;
    // }
}