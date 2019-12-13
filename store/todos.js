export const state = () => ({
    list: [{text: '呵呵哒', done: true}],
    xxx:"分久必合"
});

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        });
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1);
    },
    toggle(state, todo) {
        todo.done = !todo.done;
    }
};

export const getters = {
    getPage(state) {
        return state.list[0].text;
    }
}