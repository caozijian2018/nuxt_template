<template>
    <div class="width_100 bottom_rowgame overflow_hidden">
        <div class="">
            <img class="width_100" src="../../static/img/python.png" alt="">
        </div>
        <div class="margin_top_10 display_flex flex_jusify_space">
            <span>XXXXXXXXXXXXXXX</span>
            <star :text-is-red="true"></star>
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