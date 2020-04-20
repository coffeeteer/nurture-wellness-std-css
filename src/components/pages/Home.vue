<template>
  <div class="home-container">
    <img class="yoga-img" src="../../assets/fontana-yoga.jpg" alt />
    <div class="home-panel-container">
      <div class="nurturing-panel">
        <h3>A Collaborative Effort by Talented Local Healing Practitioners to Create A Nurturing Space</h3>
      </div>
      <div class="nurturing-btn">
        <!-- <a href="https://icons8.com/icon/102261/user-group">User Group icon by Icons8</a> -->
        <h3>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/group.png" />
        </h3>
        <router-link class="vue-anchor" to="/contact"><h3>Meet Our Healing Practitioners</h3></router-link>
      </div>
    </div>
    <div class="home-info-container">
      <div class="home-info-panel">
        <span>
          <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
        </span>
        <h1 class="title">Welcome to Nurture Wellness Studio</h1>
        <p
          class="home-paragraph"
        >Located in Bryson City, NC and dedicated to serving the people and visitors to our community and surrounding area; this beautiful space offers private and group yoga classes, many styles of massage, acupuncture, and specialty workshops.</p>
      </div>
    </div>
    <!-- Services Container -->
    <div class="services-container">
      <div class="wellness-services">
        <div class="wellness-title">
          <h1 class="title service-h1">Wellness Services</h1>
        </div>
        <div class="wellness-cards">
          <div class="service-card">
            <img class="img-1" src="../../assets/deepmassage-crop.jpg" alt />
            <p
              class="card-paragraph"
            >Massage Therapist, Jackie Beecher offers a variety of bodywork styles to nurture the body.</p>
            <a href="#">LEARN MORE</a>
          </div>
          <div class="service-card">
            <img class="img-2" src="../../assets/yoga-group.jpg" alt />
            <p
              class="card-paragraph"
            >Jackie Beecher & Fred Crawford lead group and private Hatha Yoga for all abilities.</p>
            <a href="#">LEARN MORE</a>
          </div>
          <div class="service-card">
            <img class="img-3" src="../../assets/acupuncture-crop.jpg" alt />
            <p class="card-paragraph">Chris Bassett, L.Ac., brings his expertise in acupuncture, and Chinese herbs to the Nurture Wellness Studio.</p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
    <!-- end of Services Container -->
  </div>
</template>

<style scoped>
.home-container {
  /* display: flex; */
  position: relative;
  z-index: -1;
}

.yoga-img {
  position: absolute;
  top: -147px;
  z-index: -1;
  width: 100%;
  display: block;
}

.home-panel-container {
  display: flex;
  /* align-content: flex-end; */
  justify-content: space-evenly;
  /* text-align: center;    */
  position: relative;
  top: 465px;
}

.nurturing-panel,
.nurturing-btn {
  vertical-align: middle;
  padding: 5px;
  margin: 10px;
  text-align: center;
  align-self: center;
  border: black 1px solid;
  border-radius: 10px;
  /* position: absolute;
        top: 450px; */
}

.vue-anchor {
    text-decoration: none;
}

.nurturing-panel {
  width: 600px;
  height: 100px;
  background-color: White;
  padding-top: 1.5%;
  overflow: hidden;

  /* right:40px; */
}

.nurturing-btn {
  width: 400px;
  height: 100px;
  background-color: #9bc444;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  padding: 1.6% 2% 0 1%;
  cursor: pointer;
}

.nurturing-btn:hover {
    background-color: #beeb5e;
}

.nurturing-btn:active {
    background-color: #729b19;
}

.home-info-container {
  position: relative;
  top: 412px;
  z-index: -1;
  background-color: #ccc;
}

.home-info-panel {
  background-color: #ccc;
  display: flex;
  height: 400px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  margin: auto;
}

.title {
  font-family: "Alice", serif;
  font-size: 1.6rem;
  padding-bottom: 1rem;
}

p {
  font-size: 1.25rem;
}

.services-container {
  position: relative;
  top: 412px;
}

.wellness-services {
  position: absolute;
  width: 100%;
}

.wellness-title {
    text-align: center;
}

.wellness-cards {
    display: flex;
    justify-content: space-around;
}

.service-card {
    width: 350px;
    flex-wrap: wrap;
    background-color: #ccc;
    padding: 10px;
}

.service-card img {
    margin: 8%;
   
}

.img-1, .img-2, .img-3 { 
    object-fit: cover;
    height: 182px;
    width: 247px;
    position: relative;
    left: 4%;
}
</style>