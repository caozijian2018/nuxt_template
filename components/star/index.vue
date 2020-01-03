<template>
    <div class="flex_align_center">
        <span class="font_size_10" :class="textIsRed ? 'app_color_red': 'app_color_red'">{{stars}}</span>
        <i class="iconfont icon-hongxing  app_color_red" style="font-size: 13px"  v-for="i in getStars" :key="i"></i>
    </div>
</template>

<script>
export default {
    props: {
        stars: {    
            type: Number,
            default: 5
        },
        textIsRed: {
            type: Boolean,
            default: false
        }
    },
    computed:{
        getStars(){
            return parseInt(this.stars)
        }
    }
};
</script>
<style lang='less'>
@import "../../assets/css/them";
</style>