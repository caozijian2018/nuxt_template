<template>
    <div>
        <div class="width_97 margin_top_4 margin_auto display_flex wrop flex_jusify_space">
            <game-div class="width_24 phone_width_49" v-for="i in 4" :key="i"></game-div>
        </div>
        <div class="width_97 margin_auto margin_top_3 phone_block margin_bottom_3 display_flex">
            <div class="flex_2">
                <red-line class="margin_bottom_3"></red-line>
                <div class="display_flex margin_bottom_3 phone_block">
                    <div class="flex_1">
                        <img src="../../../../static/img/python.png" class="width_100 margin_bottom_2" alt />
                        <div class="font_size_2 margin_bottom_2 margin_top_20">GAME REVIEW</div>
                        <div>
                            <star :textIsRed="true"></star>
                        </div>
                        <div class="margin_top_20">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam necessitatibus similique dicta pariatur voluptate? Nihil,
                            voluptate molestias distinctio quos nesciunt 
                            laboriosam vero alias deserunt?
                        </div>
                    </div>
                    <div class="flex_1 margin_left_15 wrop phone_margin_top_20px phone_margin_left_0">
                        <div v-for="i in 4" :key="i">
                            <game-div></game-div>
                            <div class="border_bottom margin_top_20 margin_bottom_2" v-if="i < 4"></div>
                        </div>
                    </div>
                </div>
                <red-line class="margin_bottom_3"></red-line>
                <div>
                    <head-div></head-div>
                </div>

                <div class="display_flex flex_jusify_space margin_top_20">
                    <game-div-text-bottom class="width_32" v-for="i in 3" :key="i"></game-div-text-bottom>
                </div>
            </div>
            <div class="flex_1 margin_left_38 phone_margin_left_0">
                <red-line class="margin_bottom_3"></red-line>
                <game-text-bottom-row class="margin_bottom_15"></game-text-bottom-row>
                <game-div v-for="i in 4" class="margin_bottom_2" :key="i"></game-div>
                <red-line class="margin_bottom_3"></red-line>
                <game-div v-for="i in 4" class="margin_bottom_2" :key="i"></game-div>
            </div>
        </div>
        <div class="width_97 margin_auto margin_bottom_4">
            <banner-big></banner-big>
        </div>
    </div>
</template>

<script>
import banner from "../../../../components/banner";
import gameDiv from "../../../../components/game_div";
import star from "../../../../components/star";
import redLine from "../../../../components/red_line";
import headDiv from "../../../../components/head_div";
import gameDivTextBottom from "../../../../components/game_div_text_bottom";
import gameTextBottomRow from "../../../../components/game_text_bottom_row";
import bannerBig from "../../../../components/banner_big";
import appFooter from "../../../../components/footer";
export default {
    layout: "us",
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