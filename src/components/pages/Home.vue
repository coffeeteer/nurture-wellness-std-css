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
          <i class="fas fa-users fa-2x"></i>
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
        <h2 class="nurture-font-family">Welcome to Nurture Wellness Studio</h2>
        <p>Located in Bryson City, NC and dedicated to serving the people and visitors to our community and surrounding area; this beautiful space offers private and group yoga classes, many styles of massage, acupuncture, and specialty workshops.</p>
      </div>
    </div>
    <!-- Info Panel End -->

    <h2 class="h1-title green nurture-font-family">Wellness Services</h2>
    <!-- cards -->
    <div class="cards-container">
      <!-- massage card -->
      <div class="card massage">
        <div class="massage-img"></div>
        <h4>Massage</h4>
        <p>
          Massage Therapist,
          <span class="bold">Jackie Beecher</span> offers a variety of bodywork styles to nurture the body.
        </p>
        <router-link class="card-link" to="/massage">LEARN MORE</router-link>
      </div>
      <!-- massage card end -->
      <!-- yoga card -->
      <div class="card yoga">
        <div class="yoga-img"></div>
        <h4>Yoga</h4>
        <p>
          <span class="bold">Jackie Beecher & Fred Crawford</span> lead group and private Hatha Yoga for all abilities.
        </p>
        <router-link class="card-link" to="/yoga">LEARN MORE</router-link>
      </div>
      <!-- yoga card end -->
      <!-- Acupuncture  -->
      <div class="card acupuncture">
        <div class="acu-img"></div>
        <h4>Acupuncture</h4>
        <p>
          <span class="bold">Chris Bassett</span>, L.Ac., brings his expertise in acupuncture, and Chinese herbs to the Nurture Wellness Studio.
        </p>
        <router-link class="card-link" to="/acupuncture">LEARN MORE</router-link>
      </div>
      <!-- Acupuncture end -->
    </div>
    <!-- cards end -->
    <!-- background panel -->
    <div class="background-show">
      <div class="nurture-experience-blurb">
        <h3 class="nurture-font-family">NURTURE WELLNESS TODAY</h3>
        <p>Experience what Nurture Wellness Studio has to Offer</p>
        <p>Yoga, Massage Therapy, and Acupuncture</p>
      </div>
    </div>
    <!-- background panel end -->

    <!-- Meet our practioners -->
    <h3 class="healing-prac-h3 green nurture-font-family">Meet Our Healing Practioners</h3>
    <div class="healing-practioners">
      <div class="practioner-card">
        <!-- Jackie Beecher -->
        <div class="jackie-beecher-img"></div>

        <h4>Jackie Beecher</h4>
        <p>
          Massage Therapist,
          <span class="bold">Jackie Beecher</span> has extensive experience as a bodywork therapist, yoga practitioner and teacher.
        </p>
        <a
          class="card-link"
          href="http://jackiebeechermassage.blogspot.com/p/jackie-beecher-massage.html"
          target="_blank"
        >LEARN MORE</a>
      </div>

      <div class="practioner-card">
        <!-- Chris Bassett -->
        <div class="chris-bassett-img"></div>
        <h4>Chris Bassett, L.Ac.</h4>
        <p>
          <span class="bold">Chris</span> brings his expertise in acupuncture, and Chinese herbs to the Nurture Wellness Studio.
        </p>
        <router-link class="card-link" to="/yoga">LEARN MORE</router-link>
      </div>
    </div>

    <!-- Meet our practioners end -->
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
  flex-wrap: wrap;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #9bc444;
  padding: 20px 30px;
  border: black solid 0.5px;
  border-radius: 4px;
  height: 110px;
}

.fa-users {
  padding-right: 5px;
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
}

.panel-div p {
  font-size: 1.2rem;
}

.h1-title {
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-size: 3rem;
}

.cards-container {
  display: flex;
  justify-content: space-evenly;
  width: 85%;
  margin: auto;
  flex-wrap: wrap;
}

.card {
  width: 200px;
  height: 500px;
  width: 340px;
  overflow: unset;
}

.card >>> {
  text-align: center;
  padding: 2px;
}

.card p,
.card h4 {
  letter-spacing: 0.2rem;
  padding: 0.3rem;
}

.card p {
  font-size: 0.8rem;
  text-align: left;
  padding: 0 5px 0 50px;
}

.massage-img {
  background-image: url("../../assets/deepmassage-crop.jpg");
}

.yoga-img {
  background-image: url("../../assets/yoga-group.jpg");
}

.acu-img {
  background-image: url("../../assets/chris-basset-crop.jpg");
}

.massage-img,
.yoga-img,
.acu-img {
  background-repeat: no-repeat;
  background-position: 0 50%;
  height: 250px;
  width: 250px;
  background-size: cover;
  margin: auto;
  margin-top: 1.5rem;
}

.bold {
  font-weight: bold;
}

.background-show {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  background: linear-gradient(
      rgba(204, 204, 204, 0.6),
      rgba(238, 238, 238, 0.4)
    ),
    url("../../assets/random-yoga-meditation.jpg") left top no-repeat,
    url("../../assets/random-acupuncture.jpg") right top no-repeat,
    url("../../assets/random-massage.jpg") left top repeat;
  background-size: 33%, 33%, 33%;
}

.nurture-experience-blurb {
  height: 310px;
  width: 750px;
  border: white solid 3px;
  vertical-align: middle;
  background-color: transparent;
}

.nurture-experience-blurb:hover {
  background-color: rgba(75, 69, 69, 0.2);
  border: #ccc 3px solid;
}

.nurture-experience-blurb:active {
  background-color: rgba(75, 75, 75, 0.5);
  border: #eee 3px solid;
}

.nurture-experience-blurb h3,
.nurture-experience-blurb p {
  padding-top: 1.4rem;
  margin: 1rem;
}

.nurture-experience-blurb h3 {
  font-size: 1.5rem;
}

.nurture-experience-blurb p {
  font-size: 1.1rem;
  font-weight: bold;
}

.healing-prac-h3 {
  text-align: center;
  font-size: 2rem;
  margin: 1rem;
}

.healing-practioners {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 20px;
  flex-wrap: wrap;
}

.practioner-card {
  width: 200px;
  border: 1px solid black;
  height: 500px;
  width: 340px;
  overflow: unset;
  background-color: #eee;
}

.practioner-card >>> {
  letter-spacing: 0.2rem;
  padding: 0.3rem;
}

.practioner-card p {
  padding-left: 50px;
  text-align: left;
}

.jackie-beecher-img {
  background: url("../../assets/Jackie1.jpg") no-repeat;
}

.chris-bassett-img {
  background-image: url("../../assets/chris-basset-crop.jpg");
}

div.jackie-beecher-img,
div.chris-bassett-img {
  margin: auto;
  height: 250px;
  width: 225px;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 1000px) {
  .nurture-blurbs {
    margin: 0;
    background-color: #eee;
  }

  .panel-div {
    width: 80%;
  }

  .background-show {
    background: linear-gradient(
        rgba(204, 204, 204, 0.6),
        rgba(238, 238, 238, 0.4)
      ),
      url("../../assets/random-yoga-meditation.jpg") left top no-repeat;
    background-size: cover;
  }
}

@media screen and (max-width: 625px) {
   .home-banner {
    height: 270px;
  }
  
  div.panel-div h2 img {
    padding-top: 40px;
  }
}

@media screen and (max-width: 580px) {
  .home-banner {
    height: 200px;
  }

  .nurture-info-panel {
    width: 100%;
    padding: 10px;
  }

  .nurture-info-panel h3,  .nurture-info-button h3{
    font-size: .8rem;
  }

  .nurture-experience-blurb h3,
  .nurture-experience-blurb p {
    padding-top: 1rem;
    margin: 0;
    font-size: 1rem;
  }

  .nurture-blurbs {
    margin-bottom: 70px;
  }

  .panel-div p {
    font-size: 1rem;
  }
}

@media screen and (max-width: 350px) {
  .home-banner {
    height: 155px;
    background-size: contain;
  }

  .nurture-blurbs {
    padding-bottom: 70px;
  }

  .panel-div p {
    font-size: 0.8rem;
  }
}
</style>
 
<script>
</script>