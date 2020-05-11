<template>
  <div>
    <div class="nav-banner">
      <div>
        <h1 class="nurture-title title nurture-font-family">Nurture<br>Wellness<br>Studio</h1>
      </div>
      <div class="business-div">
        <div class="business-info">
          <ul>
            <li><a href="tel:1-828-400-9616" class="phone" target="_blank">Phone: 828-400-9616</a></li>
            <li><a href="mailto:jackiebeecher@gmail.com" target="_blank">jackiebeecher@gmail.com</a></li>
            <li>Bryson City, NC</li>
          </ul>
        </div>
        <div class="paper-plane">
          <h1>
            <!-- <img src="https://img.icons8.com/ios/50/000000/sent.png" /> -->
            <a href="mailto:jackiebeecher@gmail.com" target="_blank"><i class="fas fa-paper-plane fa-2x"></i></a>
          </h1>
        </div>
      </div>
    </div>
    <nav>
      <div class="nav-top">
        <div class="logo title nurture-font-family">
          <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
          <span>Nurture Wellness Studio</span>
        </div>
        <div class="toggle" @click="showNav = !showNav"> 
          <a role="button"><span class="bars"></span></a>
        </div>
      </div>
      <div class="nav-menu" v-show="showNav"> <!-- :class="{'open' : showNav}" -->
        <ul class="menu">
          <li class="item">
            <router-link class="vue-anchor" to="/" exact>Home</router-link>
          </li>
          <li class="item">
            <router-link class="vue-anchor" to="/massage">Massage</router-link>
          </li>
          <li class="item">
            <router-link class="vue-anchor" to="/yoga">Yoga</router-link>
          </li>
          <li class="item">
            <router-link class="vue-anchor" to="/acupuncture">Acupuncture</router-link>
          </li>
          <li class="item">
            <router-link class="vue-anchor" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data: function(){
      return {
        showNav: false
      };
    }
  }
</script>

<style scoped>
/* banner */
.nav-banner {
  display: flex;
  background-color: #fff;
  height: 200px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 10;
}

.nurture-title {
  font-size: 1.5rem;
}

.toggle {
  cursor: pointer;
}

h1.nurture-title.title {
  font-size: 2.2rem;
  
}

.business-div {
  display: flex;
}

.business-info ul {
  text-align: right;
  font-size: 0.9rem;
}

.business-info li {
  font-size: .7rem;
}

.business-info a {
  font-size: .7rem;
  text-decoration: none;
  color: #9BC444;
}

a.phone {
  color: #4477c4;
}

.business-info a:hover, .fa-paper-plane:hover {
  cursor: pointer;
  color: #aad848;
  text-decoration: underline;
}

a.phone:hover {
  color: #4e86da;
}

.fa-paper-plane {
  margin-left: 7px;
}

a {
  color: #000;
}
/* banner end */
.nav-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #eee;
  position: relative;
  z-index: 10;
}

div.logo.title {
    display: flex;
    align-items: center;
}

.title span {
    font-size: 1.8rem;
    padding-left: .5rem;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    position: relative;
    z-index: 1;
    margin: auto;
}

li.item {
  padding-bottom: .5rem;
  
}

a.vue-anchor {
    padding: .3rem;
    margin-bottom: .3rem;
    font-size: 1.4rem;
    text-decoration: none;
}

li .vue-anchor {
  display: inline;
  text-decoration: none;
  padding: 0.5rem;
}

li .vue-anchor:hover {
  background-color: black;
  color: white;
  text-shadow: 1px 1px 2px white;
}

li .vue-anchor:active {
  background-color: #292222;
  color: #ccc;
  text-shadow: 1px 1px 3px #eee;
}

.logo span {
    margin-bottom: 2px;
}

/* menu icon*/
.bars {
  background-color: #999;
  display: inline-block;
  height: 0.3rem;
  position: relative;
  width: 1.3rem;
}

.bars::before,
.bars::after {
  background-color: #999;
  content: "";
  display: inline-block;
  height: 0.3rem;
  width: 1.8rem;
  position: absolute;
}

.bars::before {
  top: 0.55rem;
}

.bars::after {
  bottom: 0.55rem;
}
/* menu icon end */

/* open nav drawer */
.open {
  transform: translate(300px);
}
/* open nav drawer end */
</style>