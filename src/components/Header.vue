<template>
 
  <header class="header">
    <input type="text">
    <slot></slot>
  </header>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100%;
  height: 50px;
  background: #333;
  align-items: center;
}
</style>
