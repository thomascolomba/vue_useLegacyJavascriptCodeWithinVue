import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.myOldFashionedMethod = window.myOldFashionedMethod;

new Vue({
  router,
  render: h => h(App),
  mounted() {
    console.log(this.myOldFashionedMethod)
    console.log(this.myOldFashionedMethod())
  }
}).$mount('#app')
