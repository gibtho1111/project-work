new Vue({
  el: "#checked",
  data(){
    return {
        checkedNames: [],
    }
  }

});

new Vue({
  el: "#inputs",
  data() {
      return {
          message: '',          
      }
  },
});

new Vue({
  el: "#inputs2",
  data() {
      return {
          message: '',    

      }
  },
});

const Child = {
  template: '#childarea'
};

new Vue({
  el: '#app',
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    appChild: Child
  }
});

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})
new Vue({
  el: '#todo-list',
  data: {
    newTodoText: '',
    todos: [

    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
