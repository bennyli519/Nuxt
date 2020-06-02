/*
 * @Description:判断当前端口跳转到对应的pc or moblie
 * @Author: Benny
 * @Date: 2020-06-02 10:57:04
 * @LastEditTime: 2020-06-02 11:24:43
 */
export default function ({ isServer, req, redirect, route }) {
    let pcOrigin = 'http://localhost:3000'
    let mobileOrigin = 'https://m.likeshuo.com/'
    let isMobile = (ua) => {
        return !!ua.match(/AppleWebKit.*Mobile.*/)
    }
    let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
    console.log(route)
    if (isMobile(userAgent)) {
        redirect(mobileOrigin)
    } else {
        redirect(301, route.fullPath)
    }
    // 使用redirect 重定向到外链需要加上前缀:http / https
}
