const { BASE_URL, API_URL } = require("./config/index");
export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            {
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    // loading: {
    //     color: 'red',
    //     height: '5px'
    // },
    loading: '~/components/loading.vue',
    /*
     ** Global CSS
     */
    css: ["ant-design-vue/dist/antd.css", "./assets/css/glo.css"],
    env: {
        baseUrl: BASE_URL,
        API_URL: API_URL,
        WTAT_THIS_APP: "mygameparty"
    },
    /*
     ** Plugins to load before mounting the App
     "@/plugins/antd-ui",
     */
    plugins: ["@/plugins/i18n.js", {src:  '@/plugins/element_ui.js',ssr:true}],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        '@nuxtjs/component-cache',
        // 配置选项
        ['@nuxtjs/component-cache', {
        max: 10000,
        maxAge: 1000 * 60 * 60
        }]
    ],
    proxy: {
        "/backend": {
            target: "http://mygameparty.com",
            pathRewrite: {
                "^/backend": "/backend"
            }
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        proxy: true,
        retry: { retries: 2 },
        debug: false
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        publicPath: 'https://cdn.nuxtjs.org'
    }
};
// const { BASE_URL, API_URL } = require('./config/index')
//
// module.exports = {
//     analyze: true,
//     /*
//     ** Headers of the page
//     */
//     generate:{
//         routes: [
//             '/',
//             '/home/videos/',
//
//         ]
//     },
//     cache: {
//         max: 1000,
//         maxAge: 900000
//     },
//
//     dev: (process.env.NODE_ENV !== 'production'),
//     env: {
//         baseUrl: process.env.BASE_URL || 'http://localhost:3032',
//         API_URL: API_URL,
//         WTAT_THIS_APP:"mygameparty"
//     },
//     head: {
//         title: 'mygameparty',
//         meta: [
//             { charset: 'utf-8' },
//             { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//             // { hid: 'description', name: 'description', content: 'video' }
//         ],
//         link: [
//             { rel: 'icon', type: 'image/x-icon', href: '/fico.png' }
//         ]
//     },
//     /*
//     ** Customize the progress bar color
//     */
//     loading: { color: '#3B8070' },
//     /*
//     ** Build configuration
//     */
//     css:[
//         "./assets/css/global_css.css"
//     ],
//     proxy: {
//         '/backend': {
//             target:'http://mygameparty.com',
//             pathRewrite: {
//                 '^/backend': '/backend'
//             }
//         }
//     },
//     axios: {
//         proxy: true,
//         retry: { retries: 2 },
//         debug: false
//     },
//     vendor: [
//         'axios',
//         "element-ui"
//     ],
//     modules: [
//         '@nuxtjs/axios'
//     ],
//     plugins:[
//         {src:  '~/plugins/element_ui.js',ssr:true},
//         { src: '~plugins/axios.js', ssr: true },
//         { src: '~plugins/i18n.js' },
//         { src: '~plugins/vue-video-player.js',ssr:false},
//         // { src: '~plugins/iscroll.js', ssr: true },
//     ],
//     build: {
//         vendor: ['axios'],
//         postcss: [
//             require('postcss-nested')(),
//             require('postcss-responsive-type')(),
//             require('postcss-hexrgba')(),
//             require('autoprefixer')()
//         ],
//         /*
//         ** Run ESLint on save
//         */
//         extend (config, { isDev, isClient }) {
//             if (isDev && isClient) {
//                 config.module.rules.push({
//                     enforce: 'pre',
//                     test: /\.(js|vue)$/,
//                     loader: 'eslint-loader',
//                     exclude: /(node_modules)/
//                 })
//             }
//         }
//     }
// }

