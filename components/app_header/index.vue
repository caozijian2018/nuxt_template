<template>
    <div>
        <div class="app_heahder">
            <div class="width_90 display_flex flex_jusify_space margin_auto height_100">
                <img src="../../static/img/logo.png" class="width_15" alt="">
                <img src="../../static/img/head_logo_right.png" class="width_80" alt="">
            </div>
        </div>
        <div class="div_nav">
            <div class="margin_auto head_div display_flex width_97 height_100">
                <div  class="height_100 margin_right_3 position_relative white"  style="background: red; width:130px;">
                    <span class="pcs">HOME</span>
                </div>
                <div v-for="item in head_title_arr" class="single_cate margin_right_3 position_relative white" :key="item.id">
                    <!-- {{item.name}} -->
                    <div class="canvas_div width_100" :style="{background: item.color}"></div>
                    <span class="pcs">{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            head_title_arr: [
                {id:1,name:"HOME", color: "red"},
                {id:2,name:"SPORT", color: "blue"},
                {id:3,name:"ARCADE", color: "yellow"},
                {id:4,name:"OTHERS", color: "blue"},
                {id:5,name:"CONTACT", color: "gray"},
                {id:6,name:"ACTION", color: "orange"},
                {id:7,name:"TANK", color: "blue"},
            ]
        }
    },
    mounted(){
        // var canvas = document.querySelector(".canvas_div");
        // var context = canvas.getContext("2d");
        // canvas.width = 140;
        // canvas.height = 50;
        // context.fillStyle = "transparent";
        // context.fillRect(0,0,140,50);
        // this.drawCloud(context);
    },
    methods: {
        drawCloud(cxt){
            cxt.save();
            cxt.beginPath();
            cxt.moveTo(0, 0);

            // cxt.bezierCurveTo(0, 20, 140, 20, 140, 0);
            // // cxt.lineTo(140,50);
            // cxt.lineTo(0,0);
            // 画长方形
            cxt.lineTo(140,0);
            cxt.lineTo(140,10);
            cxt.lineTo(0,10);
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
.app_heahder{
    height: 50px;
    background: @yellow;
    padding: 20px 0;
    box-sizing: content-box;
    .logo{
        width: 200px;
    }
    .logo2{
        width: 300px;
    }
}
.div_nav{
    height: 60px;
    background: @black;
    .head_div{
        height: 100%;
        .single_cate{
            height: 100%;
            .canvas_div{
                width: 140px;
                height: 3px;
                transition-property: height;
                transition-duration: .4s;
            }
            &:hover{
                .canvas_div{
                    height: 100%;
                }
            }
        }
    }
}
</style>