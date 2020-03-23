<template>
    <div class="container">
        <nuxt />
    </div>
</template>

<script>
import Vue from "vue";
import allRequest from "../util/glo_request";
Vue.prototype.$http = allRequest;
import "../util/filter";
import "../util/msg";
import "../util/es62es5";
import jquery from "jquery";
Vue.prototype.$jquery = jquery;
import init_token from "../util/init_token";
init_token();
export default {
    // layout: "us",
    mounted() {
        this.SetToken();
    },
    methods: {
        SetToken(){
            this.$http('get_file_pass_token/').then(res=>{
            this.$store.commit('changetoken', res.file_token);
            })
        },
    }
};
</script>

<style lang="less">
// @import "http://static.game-park.net/global_css.css";
@import "http://at.alicdn.com/t/font_1577414_40qjo3s2wj7.css";

.container {
    height: 100vh;
    width: 100vw;
}
</style>
