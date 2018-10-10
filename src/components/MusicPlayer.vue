<template>
  <div id="musicplayer">
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
        <button>shuffle</button>
      </li>
      <li>
        <button>continuous</button>
      </li>
    </ul>
    <div class="playingOne__box">
      <img class="cover__thumbnail" :src="musicLibrary.playingOne.cover" alt="">
      <span v-if="hasSoundBadGe">badge</span>
       <span >{{musicLibrary.playingOne.artist}}</span>
       <span >{{musicLibrary.playingOne.title}}</span>
    </div>
     <div class="progress__box">
       <div class="timer"></div>
       <div 
        class="progressWrapper"
        role="progressbar"
        aria-valuenow=""
        aria-valuemax=""
        ></div>
        <div class="progressBackground"></div>
        <div class="progressHandler"></div>
        <div class="runningTime">
          {{loadRunningTime}}
        </div>
    </div>
  </div>
</template>

<script>
import {musicTimeFormat} from '../helper.js';
export default {
 data(){
    return {
      isPlayButton: true,
      hasStop: false,
      hasSoundBadGe: false,
      musicLibrary: window.musicLibrary,
    }
  },
  computed: {
    setPlayPauseButtonText(){
      return this.isPlayButton ? 'play' : 'pause'
    },
    loadRunningTime(){
      return musicTimeFormat(this.musicLibrary.playingOne.runningTime)
    }
  },
  methods : {
    handlePlayPauseButtonClick(){
      if(this.isPlayButton) return this.handlePlayBtnClick()
      else return this.handlePauseBtnClick()
    },
    handlePlayBtnClick(){
     window.musicLibrary.play()
     this.togglePlayPauseState()
    },
    handlePauseBtnClick(){
      window.musicLibrary.pause()
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
    },
    handlePrevButtonClick(){
      this.setPlayState()
      window.musicLibrary.prev()
    },
  }
}
</script>

<style lang="scss">
.player__controlbtn-list,
.playingOne__box {
  display: flex;
  align-items: center;
}

.cover__thumbnail {
  max-width: 100%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
