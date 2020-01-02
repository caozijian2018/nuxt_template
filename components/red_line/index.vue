<template>
    <div>
        <div class="display_flex">
            <!-- 红色的线条 -->
            <div class="red_line margin_right_7px"></div>
            <span class="font_size_15 white">{{lineText}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isWhite: {
            type: Boolean,
            default: false
        },
        lineText:{
            type: String
        }
    },
    watch: {
        lineText(v) {
            console.log(v)
        }
    }
};
</script>
<style lang='less'>
@import "../../assets/css/them";
    .red_line {
        width: 4px;
        .app_back_red;
    }
</style>
