<template>
  <div>
    <div class="contact">
      <div class="holder">
        <a href="https://www.facebook.com/NurtureWellnessStudio/" target="_blank">
          <div class="fb-icon">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
              <path class="fill"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
              />
            </svg>
          </div>
        </a>
        <div class="address-container">
          <address class="address">
            <ul>
              <li>Phone: 828-400-9616</li>
              <li><a href="mailto:jackiebeecher50@gmail.com">jackiebeecher50@gmail.com</a></li>
              <li>50 Academy Steet</li>
              <li>Bryson City, NC</li>
            </ul>
          </address>
        </div>
      </div>

      <div>
        <ul>
          <li class="item">
            <router-link class="vue-anchor" to="/massage">Massage</router-link>
          </li>
          <li class="item">
            <router-link class="vue-anchor" to="/yoga">Yoga</router-link>
          </li>
          <li class="item">
            <router-link class="vue-anchor" to="/acupuncture">Acupuncture</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-bottom">
      <h4>&copy; 2020 Nurture Wellness Studio | Bryson City, NC</h4>
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #323232;
  /* position: relative; */
}

.fb-icon,
.address-container {
  display: inline-block;
  color: #fff;
}

.fb-icon {
  float: left;
  color: #fff;
  padding: 1.5rem 1rem 0 0;
}

.fill {
  fill: #fff;
}

ul .item {
  display: inline-flex;
  padding-right: 1rem;
}

a.vue-anchor, a {
  text-decoration: none;
  color: #9BC444;
}

div.header-bottom h4 {
  text-align: center;
  background-color: #141414;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 300;
  padding: 0.4rem 0;
}
</style>