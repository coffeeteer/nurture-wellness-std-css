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
          <!-- <a href="https://icons8.com/icon/2837/sent">Sent icon by Icons8</a>-->
        </div>
      </div>
    </div>
    <nav >
      <ul class="menu">
        <li class="logo title">
          <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
          <span>Nurture Wellness Studio</span>
        </li>
        <li class="item">
          <router-link class="vue-anchor" to="/">Home</router-link>
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
          <input type="checkbox" id="menu-toggle">
          <label for="menu-toggle" class="for-toggle"><span class="bars"></span></label>
          
          
        </li>
      </ul>
    </nav>

    <!-- <header>
      <a href="" class="logo">
          <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
          <span>Nurture Wellness Studio</span>
      </a>
      <input type="checkbox" class="menu-btn" id="menu-btn">
      <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
      <ul class="menu">
        <li class="item">
          <router-link class="vue-anchor" to="/">Home</router-link>
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
    </header> -->
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

/* header */

.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
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

.toggle, input#menu-toggle {
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

@media screen and (max-width: 750px) {
  nav {
    position: relative;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40px;
  }

  .menu .logo {
    position: absolute;
    left: 1.2rem;
    top: 0.1rem;
  }

  .menu li:nth-child(2) {
    margin-top: 1.4rem;
  }

  .item {
    display: none;
  }

  /* .item:checked + .menu {
    display: flex;
    flex-direction: column;
  } */

  .menu .toggle {
    display: inline;
    position: absolute;
    right: 1rem;
    top: 0.4rem;
  }

   label.for-toggle {
    cursor: pointer;
  }

  label.for-toggle:target ~ .menu{
    max-height: 250px;
  }

  .bars {
    background-color: #999;
    display: inline-block;
    height: 0.2rem;
    position: relative;
    width: 1rem;
  }

  .bars::before,
  .bars::after {
    background-color: #999;
    content: "";
    display: inline-block;
    height: 0.2rem;
    width: 0.9rem;
    position: absolute;
  }

  .bars::before {
    top: 0.4rem;
  }

  .bars::after {
    bottom: 0.4rem;
  }
}
</style>