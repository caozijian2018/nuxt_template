<template>
    <ul>
        <li v-for="todo in todos_" :key="todo.text">
            <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li>
            <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
        </li>
            {{$t('words.most_recent')}}
        <div>
            {{xxx}}
            <div>
                {{xxx1}}
            </div>
            <div>
                {{$store.getters['todos/getPage']}} fff
            </div>
        </div>
    </ul>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
    computed: {
        todos_() {
            return this.$store.state.todos.list;
        },
        ...mapState('todos',{xxx: "xxx"}),
        ...mapGetters('todos',{xxx1: 'getPage'}),
    },
    mounted(){
        var a =  this.$store;
    },
    
    methods: {
        addTodo(e) {
            this.$store.commit("todos/add", e.target.value);
            e.target.value = "";
        },
        ...mapMutations('todos', {
            toggle: "toggle"
        }),
        
    }
};
</script>

<style>
.done {
    text-decoration: line-through;
}
</style>