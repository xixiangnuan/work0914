<template>
  <div id="app">
    <router-view class="test"></router-view>
  </div>
</template>

<script>
import "./css/reset.css"
export default {
  name: 'app'
}
</script>

<style lang="scss">

body,html,.test{
  height: 100%;
  width: 100%; 
}
body{
  background-size: cover;
  font-size: 14px;
  background: url("./imgs/bg.jpg") repeat;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.left-hand{
  width: 8%;
  height: 35px;
  background: url("./imgs/home-left-hand.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 60%;
  left: 0;
}
.right-hand{
  width: 8%;
  height: 40px;
  background: url("./imgs/home-right-hand.png") no-repeat;
  background-size: contain;
  position: absolute;
  top: 48%;
  right: 0;
}
.person{
  width: 84%;
  height: 70%;
  margin: 0 auto;
  background: url("./imgs/home-pepole.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.f-like{
  width: 30%;
  height: 30%;
  position: absolute;
  left: 10%;
  top: 58%;
  background: url("./imgs/f-like.png") no-repeat;
  background-size: contain;
}
.f-wenke{
  width: 26%;
  height: 27%;
  position: absolute;
  right: 10%;
  top: 57%;
  background: url("./imgs/f-wenke.png") no-repeat;
  background-size: contain;
}
.angser{
  height: 30px;
  width: 50%;
  background: url("./imgs/f-select.png") no-repeat;
  background-size: contain;
  position: absolute;
  top: 164px;
  left: 25%;
}
.gaokao{
  height: 70px;
  width: 75%;
  background: url("./imgs/home-title.png") no-repeat;
  background-size: contain;
  position: absolute;
  top: 37px;
  left: 26%;
}
.yes{
  height: 40px;
  width: 25%;
  background: url("./imgs/home-icon-1.png") no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 37px;
  left: 15%;
}
.no{
  height: 30px;
  width: 25%;
  background: url("./imgs/home-icon-2.png") no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 37px;
  right: 15%;
}
</style>
