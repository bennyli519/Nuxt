/*
 * @Description:
 * @Author: Benny
 * @Date: 2020-05-29 13:57:26
 * @LastEditTime: 2020-06-09 20:25:37
 */
// import config from 'serverConfig'
// var config = require('serverConfig')
// console.log(config)
// console.log(process.env.environment)

const siteUrl = {
    LKS_MARKET_SITE: "http://v4.market.lks.com",
    LKS_PASSPORT_SITE: "https://v4.passport.lks.com",
    LKS_ATTACH_SITE: "https://v4.passport.lks.com",
}

const apiSite = {
    market: "https://apimarket.likeshuo.com",
    passport: "https://apiglobal.likeshuo.com",
    attach: "https://apiattach.likeshuo.com"
}

//官网相关api
const marketApi = {
    GetCarouselList: '/api/Shared/GetCarouselList',
}

//attach相关api
const attachApi = {
    ShareTranslate: '/api/shared/transleate',
}



/**
 * @param {string} prefix api站点前缀
 * @param {object} obj 需要格式化对象
 */
function formatApi(prefix, obj) {
    for (let key in obj) {
        obj[key] = prefix + obj[key]
        // console.log(obj[key])
    }
    return obj
}

export default {
    siteUrl,
    apiSite: {
        marketApi: formatApi(apiSite.market, marketApi),
        attachApi: formatApi(apiSite.attach, attachApi)
    }
}