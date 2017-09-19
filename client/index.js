// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

if(module.hot) {

    var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

    hotClient.subscribe(function (event) {
        if (event.action === 'reload') {
            window.location.reload()
        }
    })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
