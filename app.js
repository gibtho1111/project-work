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

Vue.component('itin-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})
new Vue({
  el: '#itin-list',
  data: {
    newTodoText: '',
    itins: [

    ],
    nextItinId: 4
  },
  methods: {
    addNewItin: function () {
      this.itins.push({
        id: this.nextItinId++,
        title: this.newItinText
      })
      this.newItinText = ''
    }
  }
})
