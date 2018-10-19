import Vue from "vue";
import App from "./App.vue";
import MusicLibrary from "./MusicLibrary";
import router from "./router";
//미들웨어

const musicLibrary = new MusicLibrary("#mockAudio");
window.musicLibrary = musicLibrary;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
