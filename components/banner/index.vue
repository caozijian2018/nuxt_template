<template>
    <div id="banner_big_box">
        <div class="display_flex width_97 phone_block margin_auto ">
            <el-carousel class="flex_1 banner_box" arrow="always" :interval="9000" :height="getBannerHeight+'px'"
                         indicator-position="inside">
                <el-carousel-item v-for="item in bannerList" :key="item.jump_url">
                    <div @click="playGame(item)">
                        <img :src="item.img_url" class="width_100 border_radius_20px" alt="">
                        <div class="position_absolute desc_banner_box">
                            <div class="action_div text_center app_back_red white">PLAY</div>
                            <div class="font_size_15  font_weight_600">
                                FRUIT
                            </div>
                            <star></star>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div
                class="flex_1 display_flex phone_margin_top_20px wrop align_content_strech flex_jusify_space margin_left_14 phone_margin_left_0">
                <head-div :game="i" class="width_49 margin_bottom_10" v-for="i in list" :key="i.id"></head-div>
            </div>
        </div>
    </div>
</template>
<script>
    import headDiv from "../../components/head_div"
    import star from "../../components/star"

    import {mapGetters} from "vuex";

    export default {
        components: {
            headDiv,
            star
        },
        data() {
            return {
                list: [
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
                bannerList: [
                    {
                        title: "banner1",
                        img_url: "http://assets.mygameparty.com/DCB/HH5/loading/loading_index.gif",
                        jump_url: "2248",
                        is_floating: false,
                        country: "GLOBAL"
                    }
                ]
            }
        },
        computed: {
            ...mapGetters(['getBannerHeight'])
        },
        mounted() {
            this.setHeight();
            this.getGame();
        },
        methods: {
            playGame(data) {
                this.$router.push({
                    path: '/play/' + data.jump_url,
                })
            },
            setHeight() {
                if (this.$store.getters.getBannerHeight) {
                    // console.log(this.$store.getters.getBannerHeight);
                } else {
                    this.$nextTick(() => {
                        this.$store.commit("changeBannerHeight", parseInt(this.$jquery(this.$jquery('.banner_box')[0]).css("width")) / 1.2 || innerWidth / 1.2 + "px");
                    })
                }

            },
            getGame() {
                this.$http("dcb/site/16/", "get", {
                    capacity: 999,
                    page: 1,
                    lang: "en"
                }).then(res => {
                    this.bannerList = res.banner.slice(0, 3);
                    console.log(this.bannerList)
                }).catch(res => {
                    console.log(res);
                });
                this.$http("dcb/album/", "get", {
                    capacity: 999,
                    ordering: "-show_cnt",
                    category: "HH5",
                    page: 1,
                    lang: "en"
                }).then(res => {
                    this.list = res.results.slice(0, 4);
                }).catch(res => {});
            }
        }
    };
</script>
<style lang='less'>
    @import "../../assets/css/them";

    #banner_big_box {
        .desc_banner_box {
            position: absolute;
            bottom: 30px;

            left: 30px;
        }
        .el-carousel__arrow {
            position: absolute;
            /* right:100px; */
            top: 40px;
            border-radius: 0;
        }
        .el-carousel__arrow--left {
            left: auto;
            right: 80px;
        }
        .el-carousel__arrow--right {
            right: 40px;
        }
    }

</style>
