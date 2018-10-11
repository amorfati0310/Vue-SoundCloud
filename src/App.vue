<template>
  <div id="app">
    <Header :logo="logo"></Header>
    <section class="wrapper__main">
      <ul class="mainmenu__tab">
        <li><a href="">Stream</a></li>
        <li><a href="">Carts</a></li>
        <li><a href="">Discover</a></li>
      </ul>
      <p class="list__description">Hear the latest posts from the people you’re following:</p>
      <ul>
        <li v-for="music in playList.library" :key=music.id>
          <div class="music__item">
            <div class="album__thumnail">
            <img :src="music.cover" alt="">
          </div>
            <button >Play</button>
            <div>
              <h2>{{ music.title }}</h2>
              <div>Progress</div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import MusicPlayerProgress from './components/MusicPlayerProgress.vue'

// static Asset
import  soundLogo  from "./assets/icons/soundLogo.png";

export default {
  name: 'app',
  data(){
    return {
      logo: soundLogo,
      playList: window.musicLibrary
    }
  },
  components: {
    Header,
    MusicPlayer,
    MusicPlayerProgress,
  }
}
</script>

<style lang="scss">
.album__thumnail {
  margin-right: 15px;
  & img {
    width: 160px;
    height: 160px;
  }
}

.music__item {
  display: flex;
}

.mainmenu__tab {
  padding-top: 30px;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  li {
    margin: 0 12px;
    font-size: 24px;
    line-height: 1.6;
    &:hover {
      a {
        color: #f30;
        border-bottom: 1px solid #f30;
      }
    }
  }
  a {
    cursor: pointer;
    color: #333;
    border-bottom: 1px solid transparent;
    display: block;
  }
}

.list__description {
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 100;
  color: #999;
}

.wrapper__main {
  padding-left: 20px;
  padding-right: 20px;
}

/* * http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
