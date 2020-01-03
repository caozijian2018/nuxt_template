<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        }
    }
};
</script>

<style scoped>
.loading-page {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    color:  #fff;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 13;
}
</style>