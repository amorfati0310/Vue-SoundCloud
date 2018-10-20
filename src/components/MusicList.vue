<template>
 <ul>
  <li class="soundList__item" v-for="music in musicList" :key=music.id>
    <div class="soundContext">
      <div class="genre-avatar textHide">Genre avatar</div>
            <div class="soundContext__box">
              <span class="genre-text">
                <a href="">EDMLead Selection</a>
              </span>
              <span class="timeline">reposted a trrack </span>
              <span class="lasttime">5</span>
              <span class="lasttime-prefix">hours a go</span>
            </div>
          </div>
          <div class="music__item">
            <div class="album__thumnail">
              <a href="">
                <img :src="music.cover" :alt="music.title">
              </a>
            </div>
            <div class="music__content">
              <div class="music__content-header">
                <button class="playButton">
                  <img src="../assets/icons/sc_play_button.svg" alt="play 재생 표시 버튼" />
                </button>
                <div class="music__content-titleBox">
                  <span>R-wan</span>
                  <h2>{{ music.title }}</h2>
                </div>
                </div>
                  <div class="wave__progress">
                    <div class="timer">
                      <span class="start"></span>
                      <span class="runningTime">{{loadRunningTime(music.runningTime)}}</span>
                    </div>
                </div>
                <div class="music__toolbar">
                  <div class="special__section">
                    <ul class="special__buttonlist">
                      <li>
                        <button>Love</button>
                      </li>
                      <li>
                        <button>Repost</button>
                      </li>
                      <li>
                        <button>Share</button>
                      </li>
                      <li>
                        <button>More</button>
                      </li>
                    </ul>
                    <div class="downLoadLink">
                      <a href="">Free DownLoad</a>
                    </div>
                    <div class="likeAndComment">
                      <a href="">Like</a>
                      <a href="">Comment</a>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
        </li>
  </ul>
</template>

<script>

export default {
 props: ['musicList']
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  background: #333;
  height: 50px;
  display: flex;
  align-items: center;
}
.header__inner {
  flex: 1;
  align-items: center;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
}
.logo__link {
  display: inline-flex;
  width: 70px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #f50 linear-gradient(#f70, #f30);
}
.logo__heading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.main__nav {
  ul {
    display: flex;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    width: 104px;
    height: 46px;
    border-right: 1px solid #111;
    text-align: center;
    color: #999;
    &:hover {
      color: #fff;
    }
  }
  .active {
    background: #111;
    color: #fff;
  }
}
.headerSearch {
  flex: 1;
  padding: 9px 10px 8px;
  position: relative;
  color: #999;
  input {
    height: 30px;
    width: 100%;
    font-family: "Interstate", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma,
      sans-serif;
    font-weight: 100;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px;
    color: #666;
    outline: 0;
    border: 0;
    padding: 5px 7px;
    background: #e5e5e5;
  }
  input:focus {
    background: #fff;
  }
}

.headerSearch__submit {
  border: 0;
  padding: 0;
  background: url(../assets/icons/search.svg) center center no-repeat;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
// upload
.uploadBox {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 46px;
  text-align: center;
  color: #999;
  &:hover {
    color: #fff;
  }
}
// userNav
.user__nav {
  ul {
    display: flex;
    a {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
