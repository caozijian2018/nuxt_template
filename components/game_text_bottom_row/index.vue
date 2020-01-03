<template>
    <div class="width_100 bottom_rowgame overflow_hidden" @click="playGame">
        <div class="border_radius_20px">
            <img class="width_100" :src="'http://assets.mygameparty.com/' + game.cover" alt="">
        </div>
        <div class="margin_top_10 white display_flex flex_jusify_space">
            <span class="font_size_10">{{game.title}}</span>
            <star :text-is-red="true" :stars="game.score"></star>
        </div>
    </div>
</template>

<script>
import star from "../../components/star"
export default {
    components: {
       star
    },
    props: ["game"],
    methods: {
        playGame() {
            this.$router.push({
                path: '/play/' + this.game.id,
            })
        }
    }
}

</script>
<style lang='less'>
.bottom_rowgame{
    img{
        transition-duration: .5s;
    }
    &:hover{
        img{
            transform: scale(1.5)
        }
    }
}
</style>
