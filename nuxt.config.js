var path = require('path');
module.exports = {
  mode: 'universal',
  env: {
    environment: process.env.environment
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: '/serverConfig.js' }
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/vue-inject',
    '@/plugins/lang'
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

  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
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
        config.externals = {
          serverConfig: ['serverConfig']
        }
      }
      config.resolve.alias['components'] = path.resolve(__dirname, 'components')
      console.log(config)
    }
  }
}
