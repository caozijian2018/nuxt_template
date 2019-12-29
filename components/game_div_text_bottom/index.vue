<template>
    <div class="rowgame overflow_hidden" @click="playGame">
        <div class="">
            <img class="width_100" :src="'http://assets.mygameparty.com/' + game.cover" alt="">
        </div>
        <div class="margin_top_10">
            <span>{{game.title}}</span>
            <star :text-is-red="true"></star>
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
.rowgame{
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
