<template>
  <div class="home-container">
    <div class="home-banner">
      <!-- :style="{ 'backgroundImage': 'url(' + require('../../assets/fontana-yoga.jpg') + ')' }" -->
      <h1>Home 2</h1>
      <!-- <img src="../../assets/fontana-yoga.jpg" alt=""> -->
    </div>
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
    border: black solid .5px;
    border-radius: 4px;
}
</style>
 
<script>
</script>