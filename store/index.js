export const state = () => ({
    counter: 1234,
    locale: "en",
    banner_height: 0,
    big_banner_height: 0,

});
export const getters = {
    getBannerHeight(state) {
        return state.banner_height;
    },
    getBigBannerHeight(state) {
        return state.big_banner_height;
    }
}
export const mutations = {
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
    }
};
