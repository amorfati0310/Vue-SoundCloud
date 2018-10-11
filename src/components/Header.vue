<template>
  <header class="header">
      <a href="" class="logo__link">
        <h1 class="logo__heading">
          <img :src="logo" alt="">
        </h1>
      </a>
      <nav class="main__nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Collection</a></li>
        </ul> 
      </nav>
      <form >
        <input type="text" placeholder="Search">
        <button>검색</button>
      </form>
      <div>
        <button>Upload</button>
      </div>
      <nav class="user__nav"></nav>
  </header>
</template>

<script>
export default {
  props: ['logo']
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
}
</style>
