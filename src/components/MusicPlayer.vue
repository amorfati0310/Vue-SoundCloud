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
       <div class="timer">{{loadCurrentTime}}</div>
       <div class="progressWrapper" role="progressbar">
        <div class="progressBackground"></div>
        <div class="progressPassedBackground"  :style="loadProgress"></div>
        <div class="progressHandler":style="loadProgressHandler"></div>
       </div>
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

.progress__box {
  display: flex;
  align-items: center;
  .progressWrapper {
    position: relative;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding: 10px 0;
    margin: 13px 10px 0 10p;
  }
  .timer,
  .runningTime {
    text-align: right;
    font-size: 11px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .timer {
    color: #f50;
  }
  .progressBackground,
  .progressPassedBackground {
    height: 1px;
  }
  .progressBackground {
    background-color: #ccc;
  }
  .progressPassedBackground {
    width: 0%;
    background-color: #f50;
    z-index: 1000;
  }
  .progressHandler {
    position: absolute;
    border: 1px solid #f50;
    border-radius: 100%;
    height: 8px;
    width: 8px;
    background-color: #f50;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: -4px;
    margin-left: -4px;
    opacity: 0;
    -webkit-transition: opacity 150ms;
    transition: opacity 150ms;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
