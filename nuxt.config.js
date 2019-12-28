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
        extend(config, ctx) {},
        publicPath: 'https://cdn.nuxtjs.org'
    }
};
