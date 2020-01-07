<template>
    <div class="width_100 height_100">
        <iframe id="game" autoplay class="height_100 width_100" controls="controls" preload  :src="getGame()">
        </iframe>
    </div>
</template>

<script>
    export default {
        components: {},
        props: [],
        data() {
            return {
                game_id: null,
                game_src: ""
            }
        },
        methods: {
            getGame(){
                if(this.game_src.indexOf("http") > -1){
                    return this.game_src
                }else{
                    return 'http://assets.mygameparty.com/'+game_src;
                }
            },
            getGameId() {
                this.game_id = this.$route.params.play;
                this.getGame()
            },
            getGame() {
                this.$http("dcb/album/" + this.game_id + "/")
                    .then(res => {
                        this.$nuxt.$loading.finish();
                        // this.game_src = res.resources[0]
                        //选择index.htm
                        var arr = res.resources;
                        if (arr.length) {
                            if(arr.length == 1){
                                this.game_src = arr[0];
                                return
                            }
                                for (var k of arr) {
                                    var is_this_url = k.indexOf("index.htm") > -1;
                                    if (is_this_url) {
                                        this.game_src = k;
                                        return;
                                    }
                                }
                                this.$msg("url's error!", "error");
                        } else {
                            this.$msg(this.$t("words.vip_be_overdue"), "warning");
                            this.$router.go(-1);
                        }
                        //
                    })
            }
        },
        mounted() {
            this.$nextTick(()=>{
                this.$nuxt.$loading.start();
                this.getGameId()
            });
        },
        created() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #game {
        /* position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99; */
    }
</style>
