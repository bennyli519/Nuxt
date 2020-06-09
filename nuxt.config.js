var path = require('path');
module.exports = {
  mode: 'universal',
  env: {
    environment: process.env.environment
  },
  // router: {
  //   middleware: 'device'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'likeshuo - 立刻说',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '立刻说，在线英语培训，英语培训机构，网上学英语，网上学英语口语，成人英语口语，外教一对一，在线学英语，在线英语口语，在线英语学习，外教英语，立刻说英语，成人英语培训，英语口语培训，少儿英语培训' },
      { hid: 'description', name: 'description', content: "立刻说(美联英语),在线英语培训机构,提供外教一对一免费英语口语学习公开课、青少英语、职场英语、雅思托福等出国英语培训,随时随地想学就学,免费试听热线:400-777-8828" }
    ],
    script: [
      { src: '/serverConfig.js' }
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://at.alicdn.com/t/font_422351_qwc0qy59ko.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#009887', height: '5px', duration: 1000 },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/common.scss',
    '@/assets/css/reset.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/vue-inject',
    '@/plugins/lang',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 'axios',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: '@/assets/css/variables.scss',
    //  less: './assets/**/*.less'
    // sass: ...
  },
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },

  proxy: {
    '/api': {
      changeOrigin: true,
      target: 'https://apimarket.likeshuo.com', pathRewrite: { '^/api': '' }
    }
  },

  server: {
    port: 8000, // default: 3000
    host: 'localhost' // default: localhost
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push()

      }
      config.resolve.alias['components'] = path.resolve(__dirname, 'components')
      // config.externals = {
      //   serverConfig: 'serverConfig'
      // }
      // Object.assign(config, {
      //   externals: {
      //     serveConfig: "serveConfig"
      //   }
      // });
    }
  }
}
