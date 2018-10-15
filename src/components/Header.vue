<template>
  <header class="header">
      <div class="header__inner">
        <a href="" class="logo__link">
        <h1 class="logo__heading">
          <img :src="logo" alt="">
        </h1>
      </a>
      <nav class="main__nav">
        <ul>
          <li><a href="" class="active">Home</a></li>
          <li><a href="">Collection</a></li>
        </ul> 
      </nav>
      <form class="headerSearch">
        <input type="text" placeholder="Search">
        <button class="headerSearch__submit textHide" type="submit">Search</button>
      </form>
      <div class="uploadBox">
        <a href="">Upload</a>
      </div>
      <nav class="user__nav">
       <ul>
        <li><a href="" class="active">U</a></li>
        <li><a href="">N</a></li>
        <li><a href="">M</a></li>
        </ul> 
      </nav>
      </div>
  </header>
</template>

<script>

export default {
  props: ['logo'],
  
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
