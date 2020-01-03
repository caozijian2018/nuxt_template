<template>
    <div class="app_of_button">{{text}}</div>
</template>

<script>
export default {
    props: {
        text:{
            type: String,
            default: "Submit"
        }
    }
}

</script>
<style lang='less'>
@import "../../assets/css/them";
.app_of_button{
    background: orange;
    height: 50px;
    line-height: 50px;
    color: white;
    font-size: 17px;
    border-radius: 25px;
    text-align: center;
}
</style>