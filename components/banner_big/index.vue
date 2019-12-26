<template>
    <div class="big_box">
        <el-carousel
            class="flex_1 banner_big_box"
            arrow="always"
            :interval="900000"
            :height="getBigBannerHeight+'px'"
            indicator-position="inside"
        >
            <el-carousel-item v-for="item in 4" :key="item">
                <div>
                    <img src="../../static/img/python.png" class="width_100" alt />
                    <div class="position_absolute desc_banner_box">
                        <div class="action_div text_center app_back_red white">ACTION</div>
                        <div class="font_size_20 margin_top_10 margin_bottom_10 font_weight_600">FRUIT</div>
                        <star :text-is-red="true"></star>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
// import getInnerWidth from "../../util/get_width"
import star from "../../components/star"

import { mapGetters } from "vuex";
export default {
    components: {
        star
    },
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(['getBigBannerHeight'])
    },
    mounted(){
        this.setHeight()
    },
    methods:{
        setHeight() {
            if(this.$store.getters.getBigBannerHeight){
                // console.log(this.$store.getters.getBannerHeight);
            }else{
                this.$nextTick(() => {
                    this.$store.commit("changeBigBannerHeight", parseInt(this.$jquery(this.$jquery('.banner_big_box')[0]).css("width")) / 1.5 || innerWidth / 1.5 + "px");
                })
            }
            
        },
    }
};
</script>
<style lang='less'>
@import "../../assets/css/them";
.big_box{
    .el-carousel__arrow{
        border-radius: 0px;
    }
    .desc_banner_box{
        position: absolute;
        bottom: 30px;
        left: 30px;
    }
}
</style>