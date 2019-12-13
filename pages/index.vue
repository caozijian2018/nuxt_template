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
// import "../util/msg";
import "../util/es62es5";
// import jquery from "jquery";
// Vue.prototype.$jquery = jquery;
import init_token from "../util/init_token";
init_token();
export default {
    mounted() {}
};
</script>

<style lang="less">
@red: red;
.container {
    // background: @red;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
