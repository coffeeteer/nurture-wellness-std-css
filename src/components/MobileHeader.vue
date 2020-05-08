<template>
  <div>
    <!-- <h1>Hello  <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png"/></h1> -->
    <div class="nav-banner">
      <div>
        <h1 class="nurture-title title">Nurture Wellness Studio</h1>
      </div>
      <div class="business-div">
        <div class="business-info">
          <ul>
            <li>Phone: 828-400-9616</li>
            <li>jackiebeecher@gmail.com</li>
            <li>Bryson City, NC</li>
          </ul>
        </div>
        <div class="paper-plane">
          <h1>
            <img src="https://img.icons8.com/ios/50/000000/sent.png" />
          </h1>
        </div>
      </div>
    </div>
    <nav>
      <div class="nav-top">
        <div class="logo title">
          <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
          <span>Nurture Wellness Studio</span>
        </div>
        <div class="toggle">
          <span class="bars"></span>
        </div>
      </div>
      <div class="nav-menu">
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
}

.nurture-title {
  font-size: 3rem;
}

.business-div {
  display: flex;
}

.business-info ul {
  text-align: right;
  font-size: 0.9rem;
}

.title {
  font-family: "Alice", serif;
}

body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
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
}

div.logo.title {
    display: flex;
    align-items: center;
}

.title span {
    font-size: 1.8rem;
    padding-left: .5rem;
    font-family: 'Alice', sans-serif;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
}

a.vue-anchor {
    padding: .3rem;
    font-size: 1.4rem;
    text-decoration: none;
}

.logo span {
    margin-bottom: 2px;
}



/* menu */
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
/* menu end */

</style>