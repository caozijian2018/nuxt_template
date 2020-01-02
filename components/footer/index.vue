<template>
    <div>
        <div id="footer_box">
            <div class="width_97 phone_block display_flex margin_auto">
                <div class="flex_1">
                    <div class="width_40 phone_width_100 text_center" style="margin: auto">
                        <img src="../../static/img/logo.png" class="width_40" alt="">
                        <div class="white font_size_13">
                            My Game Party is a premium HTML 5 game portal specially designed for mobile phone users with
                            the spirit of of trying and challenging. The game portal is developed by Zhongyun HK Limited
                            and will be updated with 3-5 games regularly each month.
                        </div>
                    </div>
                </div>
                <!--<div class="flex_1 phone_none">-->
                <!--<red-line class="margin_bottom_3" :is-white="true"></red-line>-->
                <!--<game-div-text-right :is-white="true" class="margin_top_10 margin_bottom_10"></game-div-text-right>-->
                <!--<game-div-text-right :is-white="true"></game-div-text-right>-->
                <!--</div>-->
                <!--<div class="flex_1 margin_left_8 phone_margin_left_0 phone_none">-->
                <!--<red-line class="margin_bottom_3" :is-white="true"></red-line>-->
                <!--<game-div></game-div>-->
                <!--</div>-->
            </div>
        </div>
        <div id="terms_box" class="font_size_13 margin_top_10 text_center white phone_text_center width_97 margin_auto">
            <span>Terms</span>
            <span>|</span>
            <span>Terms</span>
            <span>|</span>
            <span>Terms</span>
        </div>
    </div>

</template>

<script>
    import redLine from "../red_line";
    import gameDivTextRight from "../game_div";
    import gameDiv from "../head_div";


    export default {
        components: {
            redLine,
            gameDiv,
            gameDivTextRight
        }
    }

</script>
<style lang='less'>
    @import "../../assets/css/them";

    #footer_box {
        .app_back_black;
        padding: 40px 0;
    }
</style>
