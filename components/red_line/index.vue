<template>
    <div>
        <div class="display_flex">
            <!-- 红色的线条 -->
            <div class="red_line margin_right_20"></div>
            <span class="font_size_15">{{lineText}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        lineText:{
            type: String,
            default: "HELLO"
        }
    }
};
</script>
<style lang='less'>
</style>