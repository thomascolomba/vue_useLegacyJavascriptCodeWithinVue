import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

function myMethod(){
	return "1234";
}

window.f1 = myMethod;

// import './externaljs/myCode'

Vue.prototype.myMethod = window.f1;


new Vue({
  router,
  render: h => h(App),
  mounted() {
    console.log(window.f1)
	console.log(this.myMethod)
  }
}).$mount('#app')
