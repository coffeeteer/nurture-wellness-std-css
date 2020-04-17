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
    <nav>
      <ul class="menu">
        <li class="logo title">
            <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
            <span >Nurture Wellness Studio</span> 
        </li>
        <li class="item"><router-link to="/">Home</router-link></li>
        <li class="item"><router-link to="/massage">Massage</router-link></li>
        <li class="item"><router-link to="/yoga">Yoga</router-link></li>
        <li class="item"><router-link to="/acupuncture">Acupuncture</router-link></li>
        <li class="item"><router-link to="/contact">Contact</router-link></li>
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
    font-size: 4em;
}

.business-div {
  display: flex;
}

.title {
    font-family: 'Alice', serif; 
}

nav {
  background-color: #eee;
  padding: 5px 20px;
  margin-left: -20px;
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

li {
  list-style: none;
}
.menu li {
  justify-self: space-between;
}
</style>