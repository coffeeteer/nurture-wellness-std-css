<template>
  <div class="home-container">
    <!-- Image -->
    <div class="home-banner"></div>
    <!-- Image end -->

    <!-- Panel & large button -->
    <div class="nurture-blurbs">
      <div class="nurture-info-panel">
        <h3>A Collaborative Effort by Talented Local Healing Practitioners to Create A Nurturing Space</h3>
      </div>
      <div class="nurture-info-button">
        <h3>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/group.png" />
        </h3>
        <h3>Meet Our Healing Practioners</h3>
      </div>
    </div>
    <!-- Panel & large button end -->
    
    <!-- Info Panel -->
    <div class="nurture-wellness-home-panel">
      <div class="panel-div">
        <h2>
          <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
        </h2>
        <h2>Welcome to Nurture Wellness Studio</h2>
        <p>Located in Bryson City, NC and dedicated to serving the people and visitors to our community and surrounding area; this beautiful space offers private and group yoga classes, many styles of massage, acupuncture, and specialty workshops.</p>
      </div>
    </div>
    <!-- Info Panel End -->

    <h2>Wellness Services</h2>
    <!-- cards -->
    <div class="cards-container">
      
      <!-- massage card -->
      <div class="card massage">
        <div class="massage-img"></div>
        <h4>Massage</h4>
        <p>Massage Therapist, <span class="bold">Jackie Beecher</span> offers a variety of bodywork styles to nurture the body.</p>
        <router-link class="card-link" to="/massage">LEARN MORE</router-link>
      </div>
      <!-- massage card end -->
      <!-- yoga card -->
      <div class="card yoga">
        <div class="yoga-img"></div>
        <h4>Yoga</h4>
        <p><span class="bold">Jackie Beecher & Fred Crawford</span> lead group and private Hatha Yoga for all abilities.</p>
        <router-link class="card-link" to="/yoga">LEARN MORE</router-link>
      </div>
      <!-- yoga card end -->
      <!-- Acupuncture  -->
      <div class="card acupuncture">
        <div class="acu-img"></div>
          <h4>Acupuncture</h4>
          <p><span class="bold">Chris Bassett</span>, L.Ac., brings his expertise in acupuncture, and Chinese herbs to the Nurture Wellness Studio.</p>
          <router-link class="card-link" to="/acupuncture">LEARN MORE</router-link>
        
      </div>
      <!-- Acupuncture end -->
    </div>
    <!-- cards end -->
  </div>
</template>

<style scoped>
.home-banner {
  background-image: url("../../assets/fontana-yoga.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 50%;
  height: 350px;
}

.nurture-blurbs {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: -40px;
}

.nurture-info-panel {
  width: 600px;
  /* height: 50px; */
  background-color: white;
  border: black solid 0.5px;
  border-radius: 4px;
  padding: 10px 20px;
}

.nurture-info-panel h3 {
  font-weight: 300;
  font-size: 1.2rem;
  text-align: left;
}

.nurture-info-button {
  background-color: #9bc444;
  padding: 20px 30px;
  border: black solid 0.5px;
  border-radius: 4px;
}

.nurture-wellness-home-panel {
  height: 500px;
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -70px auto 0;
}

.panel-div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.panel-div h2 {
  font-size: 1.7rem;
  padding-bottom: 0.5rem;
  font-family: "Alice", sans-serif;
}

.panel-div p {
  font-size: 1.2rem;
}
.cards-container {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: auto;
}

.card {
  width: 200px;
}

.card >>> {
  text-align: center;
  padding: 2px;
}

.massage-img {
  background-image: url("../../assets/deepmassage-crop.jpg");
}

.yoga-img {
  background-image: url("../../assets/yoga-group.jpg")
}

.acu-img {
  background-image: url("../../assets/chris-basset-crop.jpg")
}

.massage-img, .yoga-img, .acu-img {
  background-repeat: no-repeat;
  background-position: 0 50%;
  height: 100%;
  background-size: contain;
  margin: auto;
}

.bold {
  font-weight: bold;
}
</style>
 
<script>
</script>