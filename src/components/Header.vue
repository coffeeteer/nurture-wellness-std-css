<template>
  <div>
    <!-- <h1>Hello  <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png"/></h1> -->
    <div class="nav-banner">
      <div>
        <h1 class="nurture-title title nurture-font-family">Nurture Wellness Studio</h1>
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
            <a href="mailto:jackiebeecher@gmail.com" target="_blank"><i class="fas fa-paper-plane fa-3x"></i></a>
          </h1>
          <!-- <a href="https://icons8.com/icon/2837/sent">Sent icon by Icons8</a>-->
        </div>
      </div>
    </div>
    <nav>
      <ul class="menu">
        <li class="logo title">
          <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
          <span>Nurture Wellness Studio</span>
        </li>
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
        <li class="toggle">
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="for-toggle">
            <span class="bars"></span>
          </label>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped>
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

.business-info a {
  font-size: 1rem;
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
  margin-left: 1rem;
}

.router-link-active {
  background-color: #404040;
  color: #f5f5f5;
}

a {
  color: #000;
}

/* header */

.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}

nav {
  background-color: #eee;
  padding: 0.25rem 1rem;
  margin-left: -1rem;
  z-index: 10;
}

.menu {
  color: #222;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

/* li {
  list-style: none;
} */
.menu li {
  justify-self: space-between;
}

li .vue-anchor {
  text-decoration: none;
  padding: 0.3rem;
}

li .vue-anchor:hover {
  background-color: black;
  color: white;
  text-shadow: 1px 1px 2px white;
  border: solid 1px transparent;
  border-radius: 25px;
}

li .vue-anchor:active {
  background-color: #292222;
  color: #ccc;
  text-shadow: 1px 1px 3px #eee;
}

.toggle,
input#menu-toggle {
  display: none;
}

@media screen and (max-width: 1000px) {
  .nurture-title {
    font-size: 2rem;
  }

  .business-info ul li {
    font-size: 0.6rem;
  }

  li .vue-anchor {
    font-size: 0.7rem;
  }
}
</style>