<template>
<div>
    <div class="categary_out_box width_97 margin_auto margin_top_20">
        <div class="display_flex phone_block">
            <div class="flex_2">
                <red-line :lineText="lineText" class="margin_bottom_3"></red-line>
                <!--<div class="display_flex wrop flex_jusify_space">-->
                    <!--<square-game v-for="i in 1" class="margin_bottom_10" :key="i"></square-game>-->
                <!--</div>-->
                <!--<red-line class="margin_bottom_3"></red-line>-->
                <div class="display_flex  wrop">
                    <game-div-text-bottom :game="i" class="phone_margin_left_3px margin_left_10px width_32 margin_bottom_10" v-for="i in list.other" :key="i.id"></game-div-text-bottom>
                </div>
            </div>
            <div class="flex_1 margin_left_38 phone_margin_left_0" style="margin-bottom: 20px">
                <red-line class="margin_bottom_3" :lineText="top"></red-line>
                <game-text-bottom-row :game="list.top"></game-text-bottom-row>
                <head-div :game="i" v-for="i in list.two" class="margin_top_20" :key="i.id"></head-div>

                <!--<red-line class="margin_bottom_3 margin_top_20"></red-line>-->
                <!--<head-div :game="i" v-for="i in list.three" class="margin_bottom_15" :key="i.id"></head-div>-->
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
import bus from "../../../../util/bus"

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
            top: "TOP",
            tag_id: null,
            list: {
                top: [
                    {
                        id: 1,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    }
                ],
                two: [
                    {
                        id: 2,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    },
                    {
                        id: 3,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    }
                ],
                other: [
                    {
                        id: 4,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    },
                    {
                        id: 5,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    },
                    {
                        id: 6,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    },
                    {
                        id: 7,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    },
                    {
                        id: 8,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    },
                    {
                        id: 9,
                        title: "Honey They Froze Our Kids",
                        desc: "",
                        cover: "DCB/HH5/loading/loading_index.gif",
                        video_start: 0,
                        video_end: 0,
                        video_duration: "0",
                        show_cnt: 578,
                        created: "2019-12-28T17:35:32.973070",
                        updated: "2019-12-28T17:36:03.922258",
                        category: 18
                    },
                ]
            },
            title: "other"
        }
    },
    computed: {
        lineText() {
            return this.$route.query.name
        }
    },
    watch: {
        '$route': function () {

        }
    },
    methods: {
        getTag() {
            this.tag_id = this.$route.params.categary;
            this.title = this.$route.query.name;
            this.getTagGame(this.tag_id)
        },
        watchTags() {
            bus.$on("changeTag", v => {
                this.tag_id = v.tag;
                console.log(this.tag_id,'this');
                this.getTagGame(this.tag_id)
            });
        },
        getTagGame(tag) {
            this.$http("dcb/album/", "get", {
                capacity: 999,
                ordering: "-show_cnt",
                category: "HH5",
                page: 1,
                tags: tag,
                lang: "en"
            }).then(res => {
                let data = res.results;
                this.list.top = data[0];
                this.list.two = data.slice(1, 4);
                this.list.other = data.slice(4);
            }).catch(res => {});
        }
    },
    mounted() {
        this.getTag();
        this.watchTags();
        console.log(this.title, "mounted")
    },
    beforeUpdate() {

    },
    updated() {

    }
}

</script>
<style lang='less'>
    @import "../../../../assets/css/them";
    .red_line {
        width: 4px;
        .app_back_red;
    }
    .margin_left_10px{
        margin-left: 7px;
    }
    @media screen and(max-width: 800px){
        .phone_margin_left_3px{
            margin-left: 3px;
        }
    }
</style>
