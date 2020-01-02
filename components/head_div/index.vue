<template>
    <div class="headDiv position_relative head_game_div overflow_hidden" @click="playGame">
        <div class="">
            <img :src="'http://assets.mygameparty.com/' + game.cover" class="width_100" alt="">
        </div>
        <div class="position_absolute position">
            <span :class="isWhite ? 'white' : ''" class="font_size_10">{{game.title}}</span>
            <star></star>
        </div>
    </div>
</template>

<script>
import star from "../../components/star"
export default {
    props: {
        isWhite: {
            type: Boolean,
            default: false
        },
        game: {
            type: Object
        }
    },
    components: {
        star
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
    .headDiv {
        width: 300px;
        height: 200px;
        border-radius: 20px;
        overflow: hidden;
        background-color: white;
    }
.head_game_div{
    img{
        transition-duration: .5s;
        width: 100%;
    }
    &:hover{
        img{
            transform: scale(1.5)
        }
    }
    .position{
        left: 20px;
        bottom: 10px;
    }
}
</style>
