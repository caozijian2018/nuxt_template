<template>
    <div class="display_flex width_100">
        <div class="flex_1">
            <img class="width_100" src="../../static/img/python.png" alt="">
        </div>
        <div class="flex_1 margin_left_8">
            <span>XXXXXXXXXXXXXXX</span>
            <star :text-is-red="true"></star>
        </div>
    </div>
</template>

<script>
import star from "../../components/star"
export default {
    components: {
       star 
    }
}

</script>
<style lang='less'>
</style>