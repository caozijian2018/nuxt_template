<template>
    <div class="display_flex width_100 phone_block gamedi " @click="playGame">
        <div class="flex_1 overflow_hidden">
            <img class="width_100" :src="'http://assets.mygameparty.com/' + game.cover" alt="">
        </div>
        <div class="flex_1 margin_left_8">
            <span :class="isWhite ? 'white' : ''">
                {{game.title}}
            </span>
            <star :text-is-red="true"></star>
        </div>
    </div>
</template>

<script>
import star from "../../components/star"
export default {
    // props: {
    //     isWhite: {
    //         type: Boolean,
    //         default: false
    //     },
    //     game: {
    //         type: Object
    //     }
    // },
    props: ["isWhite", "game"],
    components: {
       star
    },
    data() {
        return {
            gameData: {}
        }
    },
    mounted() {
        this.gameData = this.game;
    },
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
.gamedi{

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
