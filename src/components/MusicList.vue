<template>
 <ul>
   <MusicItem 
    :music= music v-for="music in musicList" 
    :key=music.id 
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

}
</script>
<style >
</style>
