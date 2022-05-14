import Vue from 'vue'
import App from './App.vue'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//js
import "../src/assets/js/common"

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
