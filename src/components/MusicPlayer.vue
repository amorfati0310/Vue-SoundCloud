<template>
  <section id="musicplayer">
    <ul class="player__controlbtn-list">
      <li>
        <button  @click="handlePrevButtonClick">
          <img src="../assets/icons/sc_prev.svg" alt="">
        </button>
      </li>
      <li>
        <button @click="handlePlayPauseButtonClick">
          <img v-if="isPlayButton" src="../assets/icons/sc_play.svg" alt="">
          <img v-else src="../assets/icons/sc_pause.svg" alt="">
        </button>
      </li>
      <li>
        <button  @click="handleNextButtonClick">
          <img src="../assets/icons/sc_next.svg" alt="">
        </button>
      </li>
       <li v-if="hasStop">
        <button  @click="handleStop">
          <img src="../assets/icons/sc_next.svg" alt="">
        </button>
      </li>
      <li>
        <button @click="shuffleList">
          <img src="../assets/icons/sc_shuffle.svg" alt="">
        </button>
      </li>
      <li>
        <button>
          <img src="../assets/icons/sc_continue.svg" alt="">
        </button>
      </li>
    </ul>
     <MusicPlayerProgress 
      :loadCurrentTime="loadCurrentTime"
      :loadProgress="loadProgress"
      :loadProgressHandler="loadProgressHandler"
      :loadRunningTime="loadRunningTime"
    />
    <div class="playingOne__box">
      <img class="cover__thumbnail" :src="playingOne.cover" alt="">
      <span v-if="hasSoundBadGe">badge</span>
      <span >{{playingOne.title}}</span>
    </div>
   
  </section>
</template>

<script>
import animation from '../animation.js';
import {musicTimeFormat, shuffle} from '../helper.js';
import MusicPlayerProgress from './MusicPlayerProgress.vue';

//assets


export default {
 props: ['playingOne'],
 components: {
  MusicPlayerProgress,
 },
 data(){
    return {
      isPlayButton: true,
      hasStop: false,
      hasSoundBadGe: false,
      currentTime: 0,
      timerId: null,
    }
  },
  computed: {
    loadRunningTime(){
      return musicTimeFormat( this.$store.state.musicLibrary.playingOne.runningTime)
    },
    loadCurrentTime(){
      return musicTimeFormat(this.currentTime)
    },
     loadProgress () {
        const percent = (this.currentTime/this.$store.state.musicLibrary.playingOne.runningTime).toFixed(4)*100
            const style = {}
            style.width = percent+'%';
            return style
    },
    loadProgressHandler(){
            const percent = (this.currentTime/this.$store.state.musicLibrary.playingOne.runningTime).toFixed(4)*100
            const style = {}
            style.left = percent+'%';
            return style
    }
  },
  created() { 
     this.$EventBus.$on('startTimer', () => { 
        this.setPlayingView()
      }); 
    this.$EventBus.$on('pauseTimer', () => { 
        this.setPauseView()
    }); 
  },
  methods : {
    shuffleList(){
        shuffle(window.musicLibrary.library)
    },
    handlePlayPauseButtonClick(){
      if(this.isPlayButton) return this.handlePlayBtnClick()
      else return this.handlePauseBtnClick()
    },
    setPlayingView(){
     this.startTimer();
     this.setPlayState()
    },
    setPauseView(){
     this.stopTimer();
     this.setPauseState()
    },
    handlePlayBtnClick(){
     this.$store.commit('Play')
     this.setPlayingView();
    },
    handlePauseBtnClick(){
     this.$store.commit('PauseMusic')
     this.stopTimer();
     this.setPauseState()
    },
    startTimer(){
      this.currentTime = Math.floor(this.$store.state.musicLibrary.getCurrentTime()*1000)
      console.log(this.$store.state.musicLibrary.getCurrentTime(),
      this.$store.state.musicLibrary.mockGetRunningTime())

      if(this.$store.state.musicLibrary.getCurrentTime()>=this.$store.state.musicLibrary.mockGetRunningTime()){
        return this.handleNextButtonClick()
      }
      this.timerId = setTimeout(()=>this.startTimer(),16)
    },
    stopTimer(){
      clearTimeout(this.timerId)
    },
    togglePlayPauseState(){
      this.isPlayButton = !this.isPlayButton;
    },
    setPlayState(){
      this.isPlayButton = false;
    },
    setPauseState(){
      this.isPlayButton = true;
    },
    handleNextButtonClick(){
      this.stopTimer();
      this.setPlayState()
      window.musicLibrary.next()
      this.startTimer();
    },
    handlePrevButtonClick(){
      this.stopTimer();
      this.setPlayState()
      window.musicLibrary.prev()
      this.startTimer();
    },
  }
}
</script>

<style lang="scss">
#musicplayer {
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0;
  height: 50px;
  background: #f2f2f2;
  border-top: 1px solid #cecece;
  padding-left: 20px;
  padding-right: 20px;
}

.player__controlbtn-list,
.playingOne__box {
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-left: 12px;
}

.cover__thumbnail {
  max-width: 100%;
  width: 40px;
  height: 40px;
  margin-right: 18px;
  margin-left: 10px;
}
</style>
