<template>
    <div id="about" class="margin_top_4 white">
        <div class="width_60 margin_auto phone_width_80">
            <div class="font_size_20 font_weight_600 text_center margin_left_20 margin_bottom_15">Contact Us</div>
            <div class="text_center width_80 margin_auto font_size_1 margin_bottom_3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae aut, libero laudantium sint laborum delectus minus ut,
                neque necessitatibus. Saepe excepturi maxime dolorum alias?
            </div>
            <div class="display_flex flex_jusify_space phone_block">
                <div class="width_49 phone_width_100">
                    <div class="font_size_15 padding_left_1">
                        your name
                    </div>
                    <!-- <el-input v-model="name" ></el-input> -->
                    <input type="text" v-model="name" class="input_app">
                </div>
                <div class="width_49 phone_width_100">
                    <div class="font_size_15 padding_left_1">
                        your job
                    </div>
                    <input type="text" v-model="job" class="input_app" >
                </div>
            </div>
            <div class="display_flex phone_block flex_jusify_space margin_top_20 phone_margin_top_0">
                <div class="width_49 phone_width_100">
                    <div class="font_size_15 padding_left_1" >
                        Service
                    </div>
                    <input type="text" v-model="service" class="input_app">
                </div>
                <div class="width_49 phone_width_100">
                    <div class="font_size_15 padding_left_1">
                        your Phone
                    </div>
                    <input type="text" v-model="phone" class="input_app">
                </div>
            </div>
            <!--  -->
            <div class="margin_top_20">
                <div class="font_size_15 padding_left_1">
                    Your Message
                </div>
                <textarea class="textareat" v-model="text"></textarea>
            </div>
            <div class="margin_top_20">
                <div class="text_center">
                    <input type="checkbox" class="checkbox_div"  name="" id=""> Notice About App Launch
                </div>
                <div class="margin_top_20 margin_auto width_200px">
                    <app-button @click.native="SubmitClick()"></app-button>
                </div>
            </div>
        </div>
        <div>
        </div>
        <div class="padding_bottom_30 margin_top_20">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import appButton from "../../../components/button"
import appFooter from "../../../components/footer"

export default {
    data(){
        return {
            name: "",
            job: "",
            text: "",
            phone: "",
            service: ""
        }
    },
    components: {
        appButton,
        appFooter
    },
    methods: {
        
        SubmitClick(){
            if(!(this.name&&this.job&&this.text&&this.phon&&this.service)){
                this.$msg("Please enter the correct value");
                return 
            }
            setTimeout(()=>{
                this.$msg("success");
                this.name = ""
                this.job = ""
                this.text = ""
                this.phone = ""
                this.service = ""
            },2000)
        },
    }
}

</script>
<style lang='less'>
#about{
    // .input_app{
    //     width: 100px;
    // }
    .checkbox_div{
        border-radius: 50%;
    }
    .textareat{
        width: 100%;
        height: 100px;
        font-size: 18px;
        line-height: 50px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding-left: 10px;
        outline: none;
        border: none;
    }
}
</style>