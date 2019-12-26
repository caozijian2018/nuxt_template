<template>
    <div id="banner_big_box">
        <div class="display_flex width_97 phone_block margin_auto ">
            <el-carousel class="flex_1 banner_box" arrow="always" :interval="900000" :height="getBannerHeight+'px'" indicator-position="inside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div>
                        <img src="../../static/img/python.png" class="width_100" alt="">
                        <div class="position_absolute desc_banner_box">
                            <div class="action_div text_center app_back_red white">ACTION</div> 
                            <div class="font_size_15  font_weight_600">
                                FRUIT
                            </div>
                            <star></star>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="flex_1 display_flex phone_margin_top_20px wrop align_content_strech flex_jusify_space margin_left_14 phone_margin_left_0">
               <head-div class="width_49 margin_bottom_10" v-for="i in 4" :key="i"></head-div>
            </div>
        </div>
    </div>
</template>
<script>
import headDiv from "../../components/head_div"
import star from "../../components/star"

import { mapGetters } from "vuex";
export default {
    components: {
        headDiv,
        star
    },
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(['getBannerHeight'])
    },
    mounted(){
        this.setHeight()
    },
    methods:{
        setHeight() {
            if(this.$store.getters.getBannerHeight){
                // console.log(this.$store.getters.getBannerHeight);
            }else{
                this.$nextTick(() => {
                    this.$store.commit("changeBannerHeight", parseInt(this.$jquery(this.$jquery('.banner_box')[0]).css("width")) / 1.5 || innerWidth / 1.5 + "px");
                })
            }
            
        },
    }
};
</script>
<style lang='less'>
@import "../../assets/css/them";
#banner_big_box{
    .desc_banner_box{
        position: absolute;
        bottom: 30px;

        left: 30px;
    }
    .el-carousel__arrow{
        position: absolute;
        /* right:100px; */
        top:40px;
        border-radius: 0;
    }
    .el-carousel__arrow--left{
        left: auto;
        right:80px;
    }
    .el-carousel__arrow--right{
        right: 40px;
    }
}
 
</style>