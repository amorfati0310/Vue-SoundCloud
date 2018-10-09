<template>
  <div id="musicplayer">
    <ul class="player__controlbtn-list">
      <li>
        <button>prev</button>
      </li>
      <li>
        <button @click="handlePlayPause">{{setPlayPauseButtonText}}</button>
      </li>
      <li>
        <button>next</button>
      </li>
       <li v-if="hasStop">
        <button>stop</button>
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
    handlePlayPause(){
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
  }
}
</script>

<style lang="scss">
.player__controlbtn-list {
  display: flex;
  align-items: center;
}
</style>
