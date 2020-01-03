<template>
    <div class="recta_div position_relative xximg overflow_hidden border_radius_20px"  @click="playGame">
        <div class="position_relative overflow_hidden recta_box" :style="{'height': recta_box_height+'px'}">
            <img :src="'http://assets.mygameparty.com/' + game.cover" class="width_100 pcs" alt="">
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
        },
    },
    mounted(){
        this.setHeight();
    },
    components: {
        star
    },
    data(){
        return {
            recta_box_height: 0
        }
    },
    methods: {
        setHeight(){
            console.log(333)
            var width = this.$jquery(".recta_box")[0].offsetWidth;
            this.recta_box_height = width / 1.3
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
    .recta_div {
        overflow: hidden;
    }
.xximg{
    .back_linear{
        background: rgba(0,0,0,0.8);
    }
    img{
        transition-duration: .5s;
        width: 100%;
        &.rectangle{
            height: 50%;
        }
    }
    &:hover{
        img{
            // transform-origin: 50% 50%;
           transform-origin: 50% 50%;
                    transform: translate(-50%, -50%) scale(1.4, 1.4);
                    transition: .3s;
        }
    }
    .position{
        left: 20px;
        bottom: 10px;
    }
}
</style>
