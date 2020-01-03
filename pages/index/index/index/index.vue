<template>
    <div>
        <div class="width_97 margin_top_3 margin_auto display_flex wrop flex_jusify_space">
            <game-div :game="i" class="width_24 phone_width_49" v-for="i in list.small" :key="i.id"></game-div>
        </div>
        <div class="width_97 margin_auto margin_top_3 phone_block margin_bottom_3 display_flex">
            <div class="flex_2">
                <red-line :lineText="adventure_game.big[0].title" class="margin_bottom_3"></red-line>
                <div class="display_flex margin_bottom_3 phone_block">
                    <div class="flex_1" @click="playGame">
                        <img :src="'http://assets.mygameparty.com/' +  adventure_game.big[0].cover" v-if="adventure_game.big[0]" class="width_100 margin_bottom_2" alt/>
                        <div class="font_size_2 margin_bottom_2 margin_top_20 white">GAME REVIEW</div>
                        <div>
                            <star :textIsRed="true"></star>
                        </div>
                        <div class="margin_top_20 font_size_16 white">
                            Adventure is the most liked game genre in My Game Party as it has one of longest traditions
                            in digital games. Adventure games encourage insight thinking, which means the type of
                            thinking that leads to new knowledge. Come and enjoy our adventure games NOW！
                        </div>
                    </div>
                    <div class="flex_1 margin_left_15 wrop phone_margin_top_20px phone_margin_left_0">
                        <div v-for="item in adventure_game.other" :key="item.id">
                            <game-div :game="item"></game-div>
                            <div class="border_bottom margin_top_20 margin_bottom_2"></div>
                        </div>
                    </div>
                </div>
                <red-line :lineText="strategy_game.big[0].title" class="margin_bottom_3"></red-line>
                <div>
                    <!-- <head-div :rectangle="true" :game="strategy_game.big[0]"></head-div> -->
                    <rectangle :rectangle="true" :game="strategy_game.big[0]"></rectangle>
                </div>
                <div class="display_flex flex_jusify_space margin_top_20">
                    <game-div-text-bottom :game="i" class="width_32" v-for="i in strategy_game.other" :key="i.id"></game-div-text-bottom>
                </div>
            </div>
            <div class="flex_1 margin_left_38 phone_margin_left_0">
                <red-line :lineText="puzzle_game.big[0].title" class="margin_bottom_3"></red-line>
                <game-text-bottom-row :game="puzzle_game.big[0]" class="margin_bottom_15"></game-text-bottom-row>
                <game-div :game="k" v-for="k in puzzle_game.other" class="margin_bottom_2" :key="k.id"></game-div>
                <red-line :lineText="lineText[3]" class="margin_bottom_3"></red-line>
                <game-div :game="j" v-for="j in others_game.other" class="margin_bottom_2" :key="j.id"></game-div>
            </div>
        </div>
        <div class="width_97 margin_auto margin_bottom_4">
            <banner-big :banner_img="siteList"></banner-big>
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
    import rectangle from "../../../../components/head_div_rectangle";


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
            appFooter,
            rectangle
        },
        data() {
            return {
                lineText: [
                    "ADVENTURE",
                    "STRATEGY",
                    "PUZZLE",
                    "OTHERS",
                ],
                list: {
                    big: [
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
                        },
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
                        },
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
                        }
                    ],
                    small: [
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
                        }
                    ]
                },
                siteList: [],
                tagList: [],
                adventure_game: {
                    big: [
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
                    other: [
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
                        },
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
                        }
                    ]
                },
                strategy_game: {
                    big: [
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
                    other: [
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
                        },
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
                        }
                    ]
                },
                puzzle_game: {
                    big: [
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
                    other: [
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
                        },
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
                        }
                    ]
                },
                others_game: {
                    big: [
                        // {
                        //     id: 1,
                        //     title: "Honey They Froze Our Kids",
                        //     desc: "",
                        //     cover: "DCB/HH5/loading/loading_index.gif",
                        //     video_start: 0,
                        //     video_end: 0,
                        //     video_duration: "0",
                        //     show_cnt: 578,
                        //     created: "2019-12-28T17:35:32.973070",
                        //     updated: "2019-12-28T17:36:03.922258",
                        //     category: 18
                        // }
                    ],
                    other: [
                        // {
                        //     id: 2,
                        //     title: "Honey They Froze Our Kids",
                        //     desc: "",
                        //     cover: "DCB/HH5/loading/loading_index.gif",
                        //     video_start: 0,
                        //     video_end: 0,
                        //     video_duration: "0",
                        //     show_cnt: 578,
                        //     created: "2019-12-28T17:35:32.973070",
                        //     updated: "2019-12-28T17:36:03.922258",
                        //     category: 18
                        // },
                        // {
                        //     id: 3,
                        //     title: "Honey They Froze Our Kids",
                        //     desc: "",
                        //     cover: "DCB/HH5/loading/loading_index.gif",
                        //     video_start: 0,
                        //     video_end: 0,
                        //     video_duration: "0",
                        //     show_cnt: 578,
                        //     created: "2019-12-28T17:35:32.973070",
                        //     updated: "2019-12-28T17:36:03.922258",
                        //     category: 18
                        // },
                        // {
                        //     id: 4,
                        //     title: "Honey They Froze Our Kids",
                        //     desc: "",
                        //     cover: "DCB/HH5/loading/loading_index.gif",
                        //     video_start: 0,
                        //     video_end: 0,
                        //     video_duration: "0",
                        //     show_cnt: 578,
                        //     created: "2019-12-28T17:35:32.973070",
                        //     updated: "2019-12-28T17:36:03.922258",
                        //     category: 18
                        // },
                        // {
                        //     id: 5,
                        //     title: "Honey They Froze Our Kids",
                        //     desc: "",
                        //     cover: "DCB/HH5/loading/loading_index.gif",
                        //     video_start: 0,
                        //     video_end: 0,
                        //     video_duration: "0",
                        //     show_cnt: 578,
                        //     created: "2019-12-28T17:35:32.973070",
                        //     updated: "2019-12-28T17:36:03.922258",
                        //     category: 18
                        // }
                    ]
                }
            };
        },
        mounted() {
            this.getAdventure();
            this.getAdventure(73);
            this.getAdventure(74);
            this.getAdventure(75);
            this.getAdventure(76);
            this.getSite();
        },
        methods: {
            getSite() {
                this.$http("dcb/site/16/", "get", {
                    capacity: 999,
                    page: 1,
                    lang: "en"
                }).then(res => {
                    this.siteList = res.banner.slice(3);
                    this.tagList = res.tags
                }).catch(res => {
                    console.log(res);
                });
            },
            getList(tag, callback) {
                this.$http("dcb/album/", "get", {
                    capacity: 999,
                    ordering: "-show_cnt",
                    category: "HH5",
                    page: 1,
                    tags: tag,
                    lang: "en"
                }).then(res => {
                    callback(res.results)
                }).catch(res => {});
            },
            getAdventure(tag) {
                let res_data;
                this.getList(tag, (res) => {
                    res_data = res;
                    if (res_data.length > 0) {
                        if (tag === 73) {
                            this.adventure_game.big = res_data.slice(0, 1);
                            this.adventure_game.other = res_data.slice(1, 4);
                            console.log(this.adventure_game);
                        } else if (tag === 74) {
                            this.strategy_game.big = res_data.slice(0, 1);
                            this.strategy_game.other = res_data.slice(1, 4);
                        } else if (tag === 75) {
                            this.puzzle_game.big = res_data.slice(0, 1);
                            this.puzzle_game.other = res_data.slice(1, 3);
                        } else if (tag === 76) {
                            this.others_game.big = res_data.slice(0, 1);
                            this.others_game.other = res_data.slice(0, 4);
                        } else {
                            this.list.big = res_data.slice(0, 4);
                            this.list.small = res_data.slice(4, 8);
                        }
                    }
                });
            },
            playGame() {
                this.$router.push({
                    path: '/play/' + this.adventure_game.big[0].id,
                })
            },
            clickOption() {
                this.show_select = !this.show_select;
                this.$store.commit("changeShowHover");
            },
            drawCloud(cxt) {
                cxt.save();
                cxt.beginPath();
                cxt.moveTo(0, 0);

                // cxt.bezierCurveTo(0, 20, 140, 20, 140, 0);
                // // cxt.lineTo(140,50);
                // cxt.lineTo(0,0);
                // 画长方形
                cxt.lineTo(140, 0);
                cxt.lineTo(140, 10);
                cxt.lineTo(0, 10);
                // cxt.moveTo(0, 0);
                // cxt.bezierCurveTo(250, 300, 350, 550, 800, 390);
                // cxt.lineTo(800,0);
                // cxt.lineTo(0,0);
                cxt.closePath();
                var lineStyle = cxt.createLinearGradient(0, 50, 140, 0);
                lineStyle.addColorStop(0, "#00AA58");
                lineStyle.addColorStop(0.3, "#63AA7B");
                lineStyle.addColorStop(1, "#04AA00");
                cxt.fillStyle = lineStyle;
                cxt.fill();
                cxt.restore();
            }
        }
    };
</script>
<style lang='less'>
</style>
