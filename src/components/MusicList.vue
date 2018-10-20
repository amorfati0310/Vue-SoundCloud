<template>
 <ul>
  <li class="soundList__item" v-for="music in musicList" :key=music.id>
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
                <button class="playPauseButton"      @click="handlePlayPauseButtonClicked"
                :id="music.id"
                >
                  <img src="../assets/icons/sc_pasue._button.svg" alt="play 재생 표시 버튼" />
                </button>
                <div class="music__content-titleBox">
                  <span>R-wan</span>
                  <h2 class="musicTitle">{{ music.title }}</h2>
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
</template>

<script>
import MusicPlayerProgress from './MusicPlayerProgress.vue';
import {musicTimeFormat} from '../helper.js'

export default {
 props: ['musicList'],
 data() {
   return {
     isPlayButton: true,
   }
 },
 computed: {
   
 },
 methods: {
    loadRunningTime(time){
      return musicTimeFormat(time)
    },
    handlePlayPauseButtonClicked(e){
      if(this.isPlayButton) return this.handlePlayBtnClick(e)
      else return this.handlePauseBtnClick()
    },
    handlePlayBtnClick({target}){
      const playPauseButton = target.closest('button');
      const musicId = Number(playPauseButton.id);
      const willChangeOne = window.musicLibrary.  findShowList(musicId)
     
      // window.musicLibrary.pause();
      // window.musicLibrary.setPlayingOne(willChangeOne);
      // window.musicLibrary.play()
    }
  }
}
</script>
<style lang="scss" scoped>
.playPauseButton {
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

.musicTitle {
  max-width: 200px;
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
