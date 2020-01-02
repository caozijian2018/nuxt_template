<template>
<div class="out_box">
    <div class="dark display_flex flex_column height_100 width_80 margin_auto">
        <app-head></app-head>
        <div
            class="flex_1 child_box overflow_scroll scroll_box"
        >
            <nuxt-child></nuxt-child>
        </div>
    </div>
</div>

</template>

<script>
import glo_axios from "../../util/glo_request";
import isPc from "../../util/is_pc";

import appHead from "../../components/app_header";
import i18n from "../../plugins/i18n";
export default {
    components: {
        appHead
    },
    transition: "fade",
    // loading: true,
    middleware: "auth",
    async asyncData({ store, query }) {
        // var lang = query.lang || query.country || store.state.locale || "en";
        var lang = "en";
        // store.state.locale = lang;
        var page = 1;
        // return Promise.all([
        //     glo_axios("album", "get", {
        //         capacity: 16,
        //         ordering: "-create_time",
        //         page,
        //         lang
        //     })
        //     // glo_axios("site", "get", {})
        // ]).then(res => {
        //     return {
        //         list: res[0].results,
        //         total: res[0].count,
        //         // banner: res[1],
        //         page_: page
        //     };
        // });
    },
    data() {
        return {
            fullscreenLoading: true
        };
    },
    methods: {
        watchOnresize() {
            window.onresize = this.setHeightAndPhoneOrPc;
        },
        setHeightAndPhoneOrPc() {
            this.$store.commit("ChangeisPc", isPc())
            // history.go(0)
        },
        jdt() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start();
                setTimeout(() => this.$nuxt.$loading.finish(), 1500);
            });
        }
    },
    mounted() {
        this.watchOnresize();
        this.setHeightAndPhoneOrPc();
        // this.jdt();
        this._i18n.locale = "es";
        this.$store.commit("changeLang", "es");
        console.log(this.$store.state.locale);
        // this.$http("album", "get", {
        //     capacity: 16,
        //     ordering: "-create_time",
        //     category: "HH5",
        //     page: 1,
        //     lang: "en"
        // }).then(res => {
        //         console.log(res);
        //     }).catch(res => {
        //         console.log(res);
        //     });
    }
};
</script>
<style lang="less">
@import "../../assets/css/them.less";
.out_box{
    background: url("../../static/img/back1.jpg");
    background-size: 150%;
    .child_box{
        .app_back_yellow;
    }
}

</style>
