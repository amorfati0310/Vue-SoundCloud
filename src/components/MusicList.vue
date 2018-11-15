<template>
 <ul>
   <MusicItem 
    v-for="music in musicList" 
     v-bind="music"
     ref="musicItem"
    :key=music.id 
    :isPlaying="checkPlaying(music.id)"
    @saveActiveIdx="saveActiveIdx"
  />
  </ul>
</template>

<script>
import MusicPlayerProgress from './MusicPlayerProgress.vue';
import MusicItem from './MusicItem.vue';
import {musicTimeFormat} from '../helper.js'

export default {
  components: {
    MusicItem,
  },
 props: ['musicList'],
  data() {
    return {
      playingId: 1,
    }
  },
  methods: {
    checkPlaying(id){
      return this.playingId===id
    },
    saveActiveIdx({id}){
      this.playingId = id;
    }
  }
}
</script>
<style >
</style>
