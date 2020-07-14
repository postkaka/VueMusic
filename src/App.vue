<template>
  <div id="app">
   <home-page></home-page>
    <information-bar></information-bar>
      <router-view></router-view>
   <player></player>
  </div>
</template>

<script>

import HomePage from "./components/common/homePage/HomePage";
import Player from "./components/content/player/Player";
import InformationBar from "./components/common/informationBar/InformationBar";
export default {
  name: 'App',
  components:{
    HomePage,
    Player,
    InformationBar
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
