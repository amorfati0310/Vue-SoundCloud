 import mockMusicLibrary from './assets/mockMusicLibrary';
 const MusicLibrary = class {
   constructor(audioSelector){
     this.idx = 0;
     this.library = mockMusicLibrary;
     this.playingOne = mockMusicLibrary[0] || null
     this.mockPlayEl = document.querySelector(audioSelector);
     this.setPlayingOne()
   }
   getPlayingOne(){
     return this.playingOne;
   }
   setPlayingOne(activeIdx = 0){
    this.playingOne = this.library[activeIdx];
    this.mockPlayEl.setAttribute('src',this.playingOne.src)
   }
   play(){
    if(this.playingOne===null) return ;
    this.mockPlayEl.play()
   }
   pause(){
    this.mockPlayEl.pause()
   }
   setNextIdx(){
     let {idx, library: {length}} =  this
     return this.idx = (idx+1)%length;
   }
   setPrevIdx(){
    let {idx, library: {length}} =  this
    idx-=1;
    if(idx<0) idx = length-1
    return this.idx = idx;
  }
   next(){
    const nextIdx = this.setNextIdx()
    this.setPlayingOne(nextIdx)
    this.play();
   }
   prev(){
    const prevIdx = this.setPrevIdx()
    this.setPlayingOne(prevIdx)
    this.play();
   }
 }











 export default MusicLibrary