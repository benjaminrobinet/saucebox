import Vue from 'vue'
import App from './App.vue'
import linkResolver from './prismic/link-resolver';
import PrismicVue from 'prismic-vue';
import store from './store'


Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

