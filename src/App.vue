<template>
  <div id="app">
    <app-header v-if="!mobileView"></app-header>
    <app-mobile-header v-if="mobileView"></app-mobile-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MobileHeader from "./components/MobileHeader.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data: function(){
    return {
      mobileView: false
    };
  },
  methods: {
    handleView: function(){
      this.mobileView = window.innerWidth <= 800;
    }
  },
  components: {
    appHeader: Header,
    appMobileHeader: MobileHeader,
    appFooter: Footer    
  },
  created: function(){
    this.handleView();
    window.addEventListener("resize", this.handleView);
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

li {
  list-style: none;
}

.nurture-font-family {
  /* font-family: "Alice", sans-serif; */
  font-family: "Indie Flower", cursive;
  /* font-family: "Kalam", cursive; */
  /* font-family: "Pangolin", cursive; */
  /* font-family: "Patrick Hand SC", cursive; */
  /* font-family: "Permanent Marker", cursive; */
  /* font-family: "Aladin", cursive; */
  /* font-family: "Waiting for the Sunrise", cursive; */
}
</style>
