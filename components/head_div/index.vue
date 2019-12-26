<template>
    <div class="position_relative head_game_div overflow_hidden">
        <img src="../../static/img/python.png" class="width_100" alt="">
        <div class="position_absolute position">
            <span :class="isWhite ? 'white' : ''" class="font_size_10">XXXXX1</span>
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
        }
    },
    components: {
        star
    }
}

</script>
<style lang='less'>
.head_game_div{
    img{
        transition-duration: .5s;
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