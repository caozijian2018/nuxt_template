<template>
    <div class="headDiv position_relative head_game_div overflow_hidden"  @click="playGame">
        <div class="">
            <img :src="'http://assets.mygameparty.com/' + game.cover" class="border_radius_20px width_100" alt="">
        </div>
        <div class="position_absolute position">
            <span class="white font_size_15">{{game.title}}</span>
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
        setWidthandHeight() {
            if(!this.$store.getters.getHeadDivHeight){
                var boxwidth = this.$jquery(".headDiv")[1].offsetWidth;
                var boxheight = boxwidth / 1.2;
                this.$store.commit("changeHeadDivHeight", boxheight);
            }
        },
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
        // width: 300px;
        // height: 200px;
        overflow: hidden;
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
