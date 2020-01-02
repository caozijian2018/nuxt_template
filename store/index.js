export const state = () => ({
    counter: 1234,
    locale: "en",
    banner_height: 0,
    big_banner_height: 0,
    is_pc: false,
    show_hover: false,
    row_game_div_height: 0,
    head_div_height: 0

});
export const getters = {
    getHeadDivHeight(){
        return state.head_div_height;
    },
    getBannerHeight(state) {
        return state.banner_height;
    },
    getRowGameDivHeight(state) {
        return state.row_game_div_height;
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
    changeHeadDivHeight(state, head_div_height) {
        state.head_div_height = head_div_height;
    },
    changeRowGameDivHeight(state, row_game_div_height) {
        state.row_game_div_height = row_game_div_height;
    },
    
    changeShowHover(state, v) {
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
