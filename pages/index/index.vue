<template>
    <div>
        <div class="a" style="background:red"></div>
        <div class="a" style="background:blue"></div>
        <div class="a" style="background:yellow"></div>
        <h1>
        </h1>
        <div class="x">
            1
            <div class="o">2</div>
        </div>
    </div>
</template>

<script>
import glo_axios from "../../util/glo_request";
export default {
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
            }),
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
    mounted(){
        this.$http("album", "get", {
                capacity: 16,
                ordering: "-create_time",
                page: 1,
                lang: 'en'
            }).then(res=>{
                console.log(res)
            }).catch(res=>{
                console.log(res)
            })
        console.log(this.list);
        console.log(this.total);
        // console.log(this.banner);

    },
};
</script>
<style lang="less">
.a {
    height: 100vh;
    width: 100vw;
}
.x {
    width: 350px;
    font-size: 20px;
    background: orange;
    .o {
        font-size: 20vw;
        width: 50vw;
        background: skyblue;
        height: 200px;
    }
}
</style>
