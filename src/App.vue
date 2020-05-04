<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer    
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
}

.green {
  color: #9BC444;
}

.bold {
  font-weight: bold;
}
</style>
