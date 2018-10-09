 import mockMusicLibrary from './assets/mockMusicLibrary';
 const MusicLibrary = class {
   constructor(audioSelector){
     this.library = mockMusicLibrary;
     this.playingOne = mockMusicLibrary[0] || null
     this.mockPlayEl = document.querySelector(audioSelector);
     this.setPlayingOne()
   }
   setPlayingOne(){
    this.mockPlayEl.setAttribute('src',this.playingOne.src)
   }
   play(){
    if(this.playingOne===null) return ;
    this.mockPlayEl.play()
   }
   pause(){
    this.mockPlayEl.pause()
   }
 }











 export default MusicLibrary