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
