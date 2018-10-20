import mockMusicLibrary from "./assets/mockMusicLibrary";
const MusicLibrary = class {
  constructor(audioSelector) {
    this.idx = 0;
    this.showList = null;
    this.searched = null;
    this.library = mockMusicLibrary;
    this.playingOne = mockMusicLibrary[0] || null;
    this.mockPlayEl = document.querySelector(audioSelector);
    this.init();
  }
  init() {
    this.showList = this.library;
    this.searched = this.showList;
    this.setPlayingIdx();
  }

  findShowList(id) {
    return this.showList.find(({ id }) => id === id);
  }
  mockGetRunningTime() {
    return Math.floor(this.playingOne.runningTime / 1000);
  }
  getPlayingOne() {
    return this.playingOne;
  }
  getRunningTime() {
    //  mock 자동 넘어가는 부분 구현을 위한 mock 처리
    return this.playingOne.runningTime;
  }
  setPlayingOne(playingOne) {
    this.playingOne = playingOne;
    this.mockPlayEl.setAttribute("src", this.playingOne.src);
  }
  setPlayingIdx(activeIdx = 0) {
    this.playingOne = this.library[activeIdx];
    this.mockPlayEl.setAttribute("src", this.playingOne.src);
  }
  play() {
    if (this.playingOne === null) return;
    this.mockPlayEl.play();
  }
  pause() {
    this.mockPlayEl.pause();
  }
  setNextIdx() {
    let {
      idx,
      library: { length }
    } = this;
    return (this.idx = (idx + 1) % length);
  }
  setPrevIdx() {
    let {
      idx,
      library: { length }
    } = this;
    idx -= 1;
    if (idx < 0) idx = length - 1;
    return (this.idx = idx);
  }
  next() {
    const nextIdx = this.setNextIdx();
    this.setPlayingIdx(nextIdx);
    this.play();
  }
  prev() {
    const prevIdx = this.setPrevIdx();
    this.setPlayingIdx(prevIdx);
    this.play();
  }
  getCurrentTime() {
    return this.mockPlayEl.currentTime;
  }
};

export default MusicLibrary;
