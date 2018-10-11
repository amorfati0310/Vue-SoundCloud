<template>
  <section id="musicplayer">
    <ul class="player__controlbtn-list">
      <li>
        <button  @click="handlePrevButtonClick">prev</button>
      </li>
      <li>
        <button @click="handlePlayPauseButtonClick">{{setPlayPauseButtonText}}</button>
      </li>
      <li>
        <button  @click="handleNextButtonClick">next</button>
      </li>
       <li v-if="hasStop">
        <button  @click="handleStop">stop</button>
      </li>
      <li>
        <button @click="shuffleList">shuffle</button>
      </li>
      <li>
        <button>continuous</button>
      </li>
    </ul>
     <MusicPlayerProgress 
      :loadCurrentTime="loadCurrentTime"
      :loadProgress="loadProgress"
      :loadProgressHandler="loadProgressHandler"
      :loadRunningTime="loadRunningTime"
    />
    <div class="playingOne__box">
      <img class="cover__thumbnail" :src="musicLibrary.playingOne.cover" alt="">
      <span v-if="hasSoundBadGe">badge</span>
      <span >{{musicLibrary.playingOne.title}}</span>
    </div>
   
  </section>
</template>

<script>
import {musicTimeFormat, shuffle} from '../helper.js';
import MusicPlayerProgress from './MusicPlayerProgress.vue';
export default {
 components: {
  MusicPlayerProgress,
 },
 data(){
    return {
      isPlayButton: true,
      hasStop: false,
      hasSoundBadGe: false,
      musicLibrary: window.musicLibrary,
      currentTime: 0,
      timerId: null,
    }
  },
  computed: {
    setPlayPauseButtonText(){
      return this.isPlayButton ? 'play' : 'pause'
    },
    loadRunningTime(){
      return musicTimeFormat(this.musicLibrary.playingOne.runningTime)
    },
    loadCurrentTime(){
      return musicTimeFormat(this.currentTime)
    },
     loadProgress () {
        const percent = (this.currentTime/this.musicLibrary.playingOne.runningTime).toFixed(4)*100
            const style = {}
            style.width = percent+'%';
            return style
    },
    loadProgressHandler(){
            const percent = (this.currentTime/this.musicLibrary.playingOne.runningTime).toFixed(4)*100
            const style = {}
            style.left = percent+'%';
            return style
    }
  },
  methods : {
    shuffleList(){
      debugger;
        shuffle(window.musicLibrary.library)
    },
    handlePlayPauseButtonClick(){
      if(this.isPlayButton) return this.handlePlayBtnClick()
      else return this.handlePauseBtnClick()
    },
    handlePlayBtnClick(){
     window.musicLibrary.play()
     this.startTimer();
     this.togglePlayPauseState()
    },
    startTimer(){
      if(this.currentTime>=window.musicLibrary.getRunningTime()){
        return this.handleNextButtonClick()
      }
      this.currentTime = Math.floor(window.musicLibrary.getCurrentTime()*1000)
      this.timerId = setTimeout(()=>this.startTimer(),200)
    },
    stopTimer(){
      clearTimeout(this.timerId)
    },
    handlePauseBtnClick(){
      window.musicLibrary.pause()
      this.stopTimer();
      this.togglePlayPauseState()
    },
    togglePlayPauseState(){
      this.isPlayButton = !this.isPlayButton;
    },
    setPlayState(){
      this.isPlayButton = false;
    },
    handleNextButtonClick(){
      this.setPlayState()
      window.musicLibrary.next()
      this.startTimer();
    },
    handlePrevButtonClick(){
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
