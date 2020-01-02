<template>
    <div>
        <div class="app_heahder phone_none">
            <div class="width_97 display_flex flex_jusify_space margin_auto  height_100">
                <img src="../../static/img/logo.png" class="width_15 phone_width_30p" alt="">
                <div class="width_80 height_100 display_flex flex_align_center">
                    <img src="../../static/img/head_logo_right.jpg" class="width_100" style="height: 50px" alt="">
                </div>
            </div>
        </div>
        <div class="div_nav phone_none">
            <div class="margin_auto head_div display_flex width_97 height_100">
                <!--<div  class="height_100 margin_right_3 position_relative white"  style="background: red; width:130px;">-->
                <!--<span class="pcs">HOME</span>-->
                <!--</div>-->
                <div v-for="item in head_title_arr"
                    :class="{'selected': selected_name == item.name}"
                     class="single_cate overflow_hidden margin_right_3 position_relative white"
                     @click="goTag(item.tag_id, item.name)" :key="item.id">
                    <!-- {{item.name}} -->
                    <div class="back_box width_100" :style="{background: item.color}"></div>
                    <span class="pcs white">{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="hoverdiv" v-if="$store.getters.getShowHover" style="top:50px"></div>
        <div class="phone_block phone_show phone_head_box position_relative z_index12">
            <div class="width_90 margin_auto height_100 flex_align_center display_flex flex_jusify_space white">
                <i class="iconfont icon-xuanxiang option_icon" @click="clickOption()"
                   :class="{'rotate90deg': this.show_select}" style="font-size: 30px"></i>
                <img src="../../static/img/logo.png" class="width_33" alt="">
                <i class="iconfont icon-xuanxiang" style="font-size: 30px;color:transparent"></i>
            </div>
        </div>
        <div :class="{'show_select': show_select}"
             class="cate_list_box width_100 cate_div_select z_index11 font_size_15 position_absolute phone_show">
            <div v-for="item in head_title_arr"  @click="goTag(item.tag_id, item.name)" :key="item.id" class="cate_little_div">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    import bus from "../../util/bus"

    export default {
        data() {
            return {
                show_select: false,
                selected_name: "",
                head_title_arr: [
                    {id: 1, name: "HOME", color: "#DA411F", tag_id: undefined},
                    {id: 2, name: "ADVENTURE", color: "#50C1E9", tag_id: 73},
                    {id: 3, name: "STRATEGY", color: "#D65F00", tag_id: 74},
                    {id: 4, name: "PUZZLE", color: "#1F6ED4", tag_id: 75},
                    {id: 5, name: "OTHERS", color: "#79bd9a", tag_id: 76}
                ]
            }
        },
        mounted() {},
        methods: {
            goTag(tag, name) {
                // console.log(tag)
                this.selected_name = name
                this.show_select = false;
                this.$store.commit("changeShowHover", false);
                if (tag) {
                    bus.$emit("changeTag", {tag: tag,name: name});
                    this.$router.push({
                        path: '/categary/' + tag,
                        query: {
                            name: name
                        }
                    })
                } else {
                    this.$router.push({
                        path: '/'
                    })
                }
            },
            clickOption() {
                this.show_select = !this.show_select;
                this.$store.commit("changeShowHover", this.show_select);
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
    }

</script>
<style lang='less'>
    @import "../../assets/css/them";
    // 手机
    .cate_div_select {
        background: @black;
        padding: 20px 10px;
        left: 0;
        top: -1000px;
        transition-duration: .5s;
        color: white;
        & > div {
            margin: 10px 0;
        }
        &.show_select {
            top: 50px;
        }
    }

    .cate_little_div {
        height: 50px;
        line-height: 50px;
        border-radius: 25px;
        color: #fff;
        font-size: 18px;
        margin-bottom: 10px;
        background: darken(@black, 10%);
        text-align: center;
    }

    .phone_head_box {
        background: @black;
        height: 50px;
        .option_icon {
            transition-duration: .4s;
            &.rotate90deg {
                transform: rotate(90deg)
            }
        }

    }

    @width: 140px;
    .app_heahder {
        height: 74px;
        background: @yellow;
        padding: 20px 0;
        box-sizing: content-box;
        .logo {
            width: 200px;
        }
        .logo2 {
            width: 300px;
        }
    }

    .div_nav {
        height: 60px;
        background: @black;
        .head_div {
            height: 100%;
            .single_cate {
                height: 100%;
                cursor: pointer;
                .back_box {
                    width: @width;
                    height: 3px;
                    // transition-property: height;
                    transition-duration: .4s;
                }
                &:hover, &.selected {
                    .back_box {
                        height: 100%;
                        border-bottom-right-radius: @width/2;
                        border-bottom-left-radius: @width/2;

                    }
                }
            }
        }
    }
</style>
