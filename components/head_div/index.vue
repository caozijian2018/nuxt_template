<template>
    <div class="position_relative head_game_div">
        <img src="../../static/img/python.png" class="width_100" alt="">
        <div class="position_absolute position">
            <span class="font_size_15">XXXXX</span>
            <star></star>
        </div>
    </div>
</template>

<script>
import star from "../../components/star"
export default {
    components: {
        star
    }
}

</script>
<style lang='less'>
.head_game_div{
    .position{
        left: 20px;
        bottom: 10px;
    }
}
</style>