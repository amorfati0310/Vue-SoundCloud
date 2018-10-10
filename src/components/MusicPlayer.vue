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
        <button>반복재생</button>
      </li>
    </ul>
    <div class="playingOne__box">
      <img class="cover__thumbnail" :src="setCoverPlayingOne" alt="">
      <span v-if="hasSoundBadGe">badge</span>
       <span >{{playingOne.artist}}</span>
       <span >{{playingOne.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return {
      isPlayButton: true,
      hasStop: false,
      hasSoundBadGe: false,
      playingOne: null,
    }
  },
  mounted(){
    this.playingOne =  window.musicLibrary.getPlayingOne()
  },
  computed: {
    setPlayPauseButtonText(){
      return this.isPlayButton ? 'play' : 'pause'
    },
    setCoverPlayingOne(){
      return this.playingOne ? this.playingOne.cover : '#'
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
