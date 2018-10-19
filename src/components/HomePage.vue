<template>
  <div id="home">
    <section class="wrapper__main">
     
      <p class="list__description">Hear the latest posts from the people you’re following:</p>
      <ul>
        <li class="soundList__item" v-for="music in getMusicList" :key=music.id>
          <div class="soundContext">
            <div class="genre-avatar textHide">Genre avatar</div>
            <div class="soundContext__box">
              <span class="genre-text">
                <a href="">EDMLead Selection</a>
              </span>
              <span class="timeline">reposted a trrack </span>
              <span class="lasttime">5</span>
              <span class="lasttime-prefix">hours a go</span>
            </div>
          </div>
          <div class="music__item">
            <div class="album__thumnail">
              <a href="">
                <img :src="music.cover" :alt="music.title">
              </a>
            </div>
            <div class="music__content">
              <div class="music__content-header">
                <button class="playButton">
                  <img src="../assets/icons/sc_play_button.svg" alt="play 재생 표시 버튼" />
                </button>
                <div class="music__content-titleBox">
                   <span>R-wan</span>
                   <h2>{{ music.title }}</h2>
                </div>
                </div>
                  <div class="wave__progress">
                    <div class="timer">
                      <span class="start"></span>
                      <span class="runningTime">{{loadRunningTime(music.runningTime)}}</span>
                    </div>
                </div>
                <div class="music__toolbar">
                  <div class="special__section">
                    <ul class="special__buttonlist">
                      <li>
                        <button>Love</button>
                      </li>
                      <li>
                        <button>Repost</button>
                      </li>
                      <li>
                        <button>Share</button>
                      </li>
                      <li>
                        <button>More</button>
                      </li>
                    </ul>
                    <div class="downLoadLink">
                      <a href="">Free DownLoad</a>
                    </div>
                    <div class="likeAndComment">
                      <a href="">Like</a>
                      <a href="">Comment</a>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

import Header from './Header.vue'
import MusicPlayer from './MusicPlayer.vue'
import MusicPlayerProgress from './MusicPlayerProgress.vue'
import {musicTimeFormat} from '../helper.js'
// static Asset
import  soundLogo  from "../assets/icons/soundLogo.png";


export default {
  name: 'app',
  data(){
    return {
      logo: soundLogo,
    }
  },
  methods: {
    loadRunningTime(time){
      return musicTimeFormat(time)
    }
  },
  computed: {
    getMusicList(){
      return this.$store.state.musicLibrary.searched
    },
  },
  components: {
    Header,
    MusicPlayer,
    MusicPlayerProgress,
  }
}
</script>

<style lang="scss">
@import "../style/reset.scss";
button {
  background: transparent;
  border: 0;
  padding: 0;
}

.textHide {
  text-indent: -3000px;
}

.album__thumnail {
  margin-right: 15px;
  padding-bottom: 20px;
  & img {
    width: 160px;
    height: 160px;
  }
}

.music__item {
  display: flex;
  flex: 1;
}
.music__content {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.special__section {
  display: flex;
}
.special__buttonlist {
  display: flex;
  li {
    button {
      margin-right: 10px;
    }
  }
}

.soundContext {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.soundContext__box {
  span {
    margin-right: 5px;
    font-size: 12px;
    line-height: 1.4;
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif;
    color: #333;
  }
}

.genre-avatar {
  width: 30px;
  height: 30px;
  background: url("../assets/images/edmExampleBadge.jpg");
  text-align: center;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin-right: 8px;
  border-radius: 50%;
}
.music__content-header {
  padding-top: 6px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.playButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f50 linear-gradient(#f70, #f30);
  border-radius: 50%;
  margin-right: 8px;
  img: {
    width: 18px;
    height: 24px;
  }
}

.wave__progress {
  .timer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.list__description {
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 100;
  color: #999;
}

.wrapper__main {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
