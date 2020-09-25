import Vue from 'vue';
import VueCoreVideoPlayer from 'vue-core-video-player';
import App from './App.vue';
import router from './router';

Vue.use(VueCoreVideoPlayer);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
