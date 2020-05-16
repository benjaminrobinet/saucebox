import Vue from 'vue'
import App from './App.vue'
import linkResolver from './prismic/link-resolver';
import PrismicVue from 'prismic-vue';
import store from './store'
import VueMeta from 'vue-meta';
import './registerServiceWorker'


Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
});

Vue.use(VueMeta)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

