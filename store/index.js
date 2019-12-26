export const state = () => ({
    counter: 1234,
    locale: "en",
    banner_height: 0,
    big_banner_height: 0,
    is_pc: false,
    show_hover: false

});
export const getters = {
    getBannerHeight(state) {
        return state.banner_height;
    },
    getBigBannerHeight(state) {
        return state.big_banner_height;
    },
    getIsPc(state) {
        return state.is_pc;
    },
    getShowHover(state) {
        return state.show_hover;
    },
}
export const mutations = {
    changeShowHover(state) {
        state.show_hover = !state.show_hover;
    },
    increment(state) {
        state.counter++;
    },
    changeLang(state, lang) {
        state.locale = lang;
    },
    changeBannerHeight(state, banner_height) {
        state.banner_height = banner_height;
    },
    changeBigBannerHeight(state, banner_height) {
        state.big_banner_height = banner_height;
    },
    ChangeisPc(state, val){
        state.is_pc = val;
    }
};
