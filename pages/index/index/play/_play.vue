<template>
    <div class="width_100">
        <iframe id="game" autoplay class="height_100 width_100" controls="controls" preload  :src="'http://assets.likelikeyour.com/'+game_src">

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
            getGameId() {
                this.game_id = this.$route.params.play;
                this.getGame()
            },
            getGame() {
                this.$http("dcb/album/" + this.game_id + "/")
                    .then(res => {
                        this.game_src = res.resources[0]
                    })
            }
        },
        mounted() {
            this.getGameId()
        },
        created() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #game {
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
