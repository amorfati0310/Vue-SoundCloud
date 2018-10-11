<template>
 <div class="progress__box">
    <div class="timer">{{loadCurrentTime}}</div>
    <div class="progressWrapper" role="progressbar">
    <div class="progressBackground"></div>
    <div class="progressPassedBackground"  :style="loadProgress"></div>
    <div class="progressHandler" :style="loadProgressHandler"></div>
    </div>
    <div class="runningTime">
      {{loadRunningTime}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['loadProgressHandler','loadProgress','loadCurrentTime', 'loadRunningTime']
}
</script>
<style lang="scss" scoped>
.progress__box {
  min-width: 40%;
  display: flex;
  &:hover {
    .progressHandler {
      opacity: 1;
    }
  }
  align-items: center;
  .progressWrapper {
    position: relative;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding: 10px 0;
    margin: 13px 10px 0 10p;
  }
  .timer,
  .runningTime {
    text-align: right;
    font-size: 11px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .timer {
    color: #f50;
  }
  .progressBackground,
  .progressPassedBackground {
    height: 1px;
  }
  .progressBackground {
    background-color: #ccc;
  }
  .progressPassedBackground {
    width: 0%;
    background-color: #f50;
    z-index: 1000;
  }
  .progressHandler {
    position: absolute;
    border: 1px solid #f50;
    border-radius: 100%;
    height: 8px;
    width: 8px;
    background-color: #f50;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: -4px;
    margin-left: -4px;
    opacity: 0;
    -webkit-transition: opacity 150ms;
    transition: opacity 150ms;
  }
}
</style>
