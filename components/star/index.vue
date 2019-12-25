<template>
    <div class="flex_align_center">
        <span class="font_size_20" :class="textIsRed ? 'app_color_red': ''">10.0</span>
        <i class="iconfont icon-hongxing app_color_red" v-for="i in 4" :key="i"></i>
    </div>
</template>

<script>
export default {
    props: {
        textIsRed: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style lang='less'>
@import "../../assets/css/them";
</style>