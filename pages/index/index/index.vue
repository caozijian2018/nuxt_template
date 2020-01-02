<template>
    <div class="cate_box" style="padding-bottom: 30px">
        <banner class="margin_top_20"></banner>
        <!-- <div class="width_97 margin_top_4 margin_auto display_flex flex_jusify_space">
            <game-div class="width_24" v-for="i in 4" :key="i"></game-div>
        </div> -->
        <nuxt-child></nuxt-child>
        <div class="padding_bottom_30">
           <app-footer></app-footer> 
        </div>
    </div>
</template>

<script>
import banner from "../../../components/banner";
import gameDiv from "../../../components/game_div";
import star from "../../../components/star";
import redLine from "../../../components/red_line";
import headDiv from "../../../components/head_div";
import gameDivTextBottom from "../../../components/game_div_text_bottom";
import gameTextBottomRow from "../../../components/game_text_bottom_row";
import bannerBig from "../../../components/banner_big";
import appFooter from "../../../components/footer";

export default {
    layout: "nnmm",
    components: {
        banner,
        gameDiv,
        star,
        redLine,
        headDiv,
        gameDivTextBottom,
        gameTextBottomRow,
        bannerBig,
        appFooter
    }
};
</script>
<style lang='less'>
</style>