<template>
 <div 
  class="progressWrapper"
  role="progressbar"
  aria-valuenow=""
  aria-valuemax=""
  >
   <div class="progressBackground">

   </div>
    <div class="progressHandler">
     
   </div>
 </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.progressBackground {
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

.progressWrapper {
  position: relative;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 10px 0;
  margin: 13px 10px 0 10px;
}

.progressHandler {
  border: 1px solid #f50;
  border-radius: 100%;
  height: 8px;
  width: 8px;
  background-color: #f50;
  box-sizing: border-box;
  margin-top: -4px;
  margin-left: -4px;
  /* opacity: 0; */
  transition: opacity 150ms;
}
</style>
