import Vue from 'vue'
import App from './App.vue'
import MusicLibrary from './MusicLibrary'

const musicLibrary = new MusicLibrary('#mockAudio');
window.musicLibrary = musicLibrary;
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
