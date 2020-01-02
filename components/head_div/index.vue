<template>
    <div class="headDiv position_relative head_game_div overflow_hidden border_radius_20px"  @click="playGame">
        <div class="position_relative overflow_hidden">
            <!-- <div class="hoverdiv headdivback" style="top: 60%">

            </div> -->
            <img :src="'http://assets.mygameparty.com/' + game.cover" class=" width_100" alt="">
        </div>
        <div class="position_absolute padding_left_1  position z_index12 back_linear" style="left:0; bottom:0; right:0;">
            <span class="white font_size_10">{{game.title}}</span>
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
    .back_linear{
        background: rgba(0,0,0,0.8);
    }
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
