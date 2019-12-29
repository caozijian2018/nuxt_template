<template>
<div>
    <div class="categary_out_box width_97 margin_auto margin_top_20">
        <div class="display_flex phone_block">
            <div class="flex_2">
                <red-line :lineText="lineText" class="margin_bottom_3"></red-line>
                <div class="display_flex wrop flex_jusify_space">
                    <square-game v-for="i in 1" class="margin_bottom_10" :key="i"></square-game>
                </div>
                <!--<red-line class="margin_bottom_3"></red-line>-->
                <!--<div class="display_flex flex_jusify_space wrop">-->
                    <!--<game-div-text-bottom class="width_32 margin_bottom_10" v-for="i in 9" :key="i"></game-div-text-bottom>-->
                <!--</div>-->
            </div>
            <div class="flex_1 margin_left_38 phone_margin_left_0" style="margin-bottom: 20px">
                <red-line class="margin_bottom_3" :lineText="top"></red-line>
                <!--<game-text-bottom-row></game-text-bottom-row>-->
                <!--<head-div v-for="i in 4" class="margin_top_20" :key="i"></head-div>-->

                <!--<red-line class="margin_bottom_3 margin_top_20"></red-line>-->
                <!--<head-div v-for="i in 6" class="margin_bottom_15" :key="i"></head-div>-->
            </div>
        </div>
    </div>
    <div class="padding_bottom_30">
        <app-footer></app-footer>
    </div>
</div>

</template>

<script>
import redLine from "../../../../components/red_line";
import squareGame from "../../../../components/square_game";
import gameDivTextBottom from "../../../../components/game_div_text_bottom";
import gameTextBottomRow from "../../../../components/game_text_bottom_row";
import headDiv from "../../../../components/game_div";
import appFooter from "../../../../components/footer";

export default {
    layout: "banner",
    components: {
        redLine,
        squareGame,
        gameDivTextBottom,
        gameTextBottomRow,
        headDiv,
        appFooter
    },
    data() {
        return {
            lineText: "",
            top: "TOP",
            tag_id: null
        }
    },
    mounted() {
        this.getTag()
    },
    methods: {
        getTag() {
            this.tag_id = this.$route.params.categary;
            console.log(this.$route.params.categary);
            if (this.tag_id === "73") {
                this.lineText = "ADVENTURE"
            } else if (this.tag_id === "74") {
                this.lineText = "STRATEGY"
            } else if (this.tag_id === "75") {
                this.lineText = "PUZZLE"
            } else {
                this.lineText = "OTHERS"
            }
        }
    }
}

</script>
<style lang='less'>
</style>
