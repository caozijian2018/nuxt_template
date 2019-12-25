<template>
    <div class="dark display_flex flex_column height_100" style="background: #ddd">
        <app-head></app-head>
        <div
            class="flex_1 child_box overflow_scroll scroll_box"
            style
        >
            <nuxt-child></nuxt-child>
        </div>
        <!-- <h1> 
        </h1>
        <div class="x">
            1
            <div class="o">2</div>
            <h1 class="backred">
                {{$t('words.most_recent')}}
                dd
            </h1>
            <h1>
                {{$store.state.locale}}
            </h1>
        </div>
        <div @click="$store.commit('changeLang', 'es')">
            Change Lang
        </div>-->
    </div>
</template>

<script>
import glo_axios from "../../util/glo_request";
import appHead from "../../components/app_header";
import i18n from "../../plugins/i18n";
export default {
    components: {
        appHead
    },
    transition: "fade",
    // loading: true,
    middleware: "auth",
    layout: "default",
    async asyncData({ store, query }) {
        // var lang = query.lang || query.country || store.state.locale || "en";
        var lang = "en";
        // store.state.locale = lang;
        var page = 1;
        return Promise.all([
            glo_axios("album", "get", {
                capacity: 16,
                ordering: "-create_time",
                page,
                lang
            })
            // glo_axios("site", "get", {})
        ]).then(res => {
            return {
                list: res[0].results,
                total: res[0].count,
                // banner: res[1],
                page_: page
            };
        });
    },
    data() {
        return {
            fullscreenLoading: true
        };
    },
    methods: {
        jdt() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
                setTimeout(() => this.$nuxt.$loading.finish(), 1500);
            });
        }
    },
    mounted() {
        // this.jdt();
        console.log(888);
        this._i18n.locale = "es";
        console.log(this._i18n.locale);

        this.$store.commit("changeLang", "es");
        console.log(this.$store.state.locale);
        this.$http("album", "get", {
            capacity: 16,
            ordering: "-create_time",
            page: 1,
            lang: "en"
        })
            .then(res => {
                console.log(res);
            })
            .catch(res => {
                console.log(res);
            });
        // this.$store.commit('changeLang', 'es')
        console.log(this.list);
        console.log(this.total);
    }
};
</script>
<style lang="less">
// @import "../../assets/css/them.less";
// .child_box{
//     background: @red;
// }
</style>
