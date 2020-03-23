<template>
    <div class="rowgame overflow_hidden" @click="playGame">
        <div class="border_radius_20px">
            <img class="width_100 xxx" :src="'http://assets.mygameparty.com/' + game.cover+'?AuthInfo='+$store.state.file_token" alt />
        </div>
        <div class="margin_top_10 white">
            <span class="font_size_10">{{game.title}}</span>
            <star :text-is-red="true" :stars="game.score"></star>
        </div>
    </div>
</template>

<script>
import star from "../../components/star";
export default {
    components: {
        star
    },
    props: ["game"],
    data(){
        return {

        }
    },
    mounted(){
        // this.setWidthandHeight();
    },
    methods: {
        playGame() {
            this.$router.push({
                path: "/play/" + this.game.id
            });
        },
        setWidthandHeight() {
            if(!this.$store.getters.getRowGameDivHeight){
                var boxwidth = this.$jquery(".rowgame")[1].offsetWidth;
                var boxheight = boxwidth / 1.2;
                this.$store.commit("changeRowGameDivHeight", boxheight);
            }
        }
    }
};
</script>
<style lang='less'>
.rowgame {
    img {
        transition-duration: 0.5s;
    }
    &:hover {
        img {
            transform: scale(1.5);
        }
    }
}
</style>
