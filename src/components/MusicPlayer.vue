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
  </div>
</template>

<script>
export default {
 data(){
    return {
      isPlayButton: true,
      hasStop: false,
    }
  },
  computed: {
    setPlayPauseButtonText(){
      return this.isPlayButton ? 'play' : 'pause'
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
    handleNextButtonClick(){
      window.musicLibrary.next()
    },
    handlePrevButtonClick(){
      window.musicLibrary.prev()
    },
  }
}
</script>

<style lang="scss">
.player__controlbtn-list {
  display: flex;
  align-items: center;
}
</style>
