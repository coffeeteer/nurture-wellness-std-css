<template>
  <div>
    <!-- Acupuncture Bryson Hero  -->
    <div class="acupuncture-bryson">
      <div class="acu-image">
        <div class="container">
          <div class="acu-text-div">
            <h2 class="acupuncture-text">Acupuncture in Bryson City</h2>
            <h3 class="acupuncture-text">Nurture Wellness</h3>
            <p class="acupuncture-text">
              Acupuncture is an ancient art that benefits include ruduced pain and tension, improved immunity,
              and digestion.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Acupuncture Bryson Hero end  -->
    <!-- Acupuncture Card -->
    <div class="wide-card">
      <div class="chris-div">
        <img class="chris-img" src="../../assets/chris-basset-full.jpg" alt />
      </div>
      <div class="text">
        <h3>Chris Bassett, L.Ac.</h3>
        <p class="para-text">Chris Bassett, L.Ac., brings his expertise in acupuncture, and chinese herbs to the Nurture Wellness Studio.</p>
        <p class="para-text">For more information or to schedule an appointment:</p>
        <p class="para-text">Call Chris at <a href="tel:1-828-735-0653">828-735-0653</a> to make an appointment.</p>
        <p class="para-text">email <a href="mailto:cbassettLac@gmail.com" target="_blank"></a> CBassettLac@gmail.com</p>
      </div>
      
    </div>
    <!-- Acupuncture Card end -->
  </div>
</template>

<style scoped>
.acu-image {
  height: 500px;
  width: 100%;
  background: linear-gradient(
      rgba(204, 204, 204, 0.7),
      rgba(238, 238, 238, 0.8)
    ),
    url("../../assets/acupuncture-img.jpg") left top no-repeat,
    url("../../assets/tea-jars-shelves-cupboard.jpg") center top no-repeat,
    url("../../assets/acupuncture-img2.jpg") right top no-repeat;
  background-size: 33%, 26%, contain;
}

.container {
  display: flex;
  height: 100%;
}

.acu-text-div {
  width: 500px;
  margin: auto;
  border: 2px solid black;
  padding: 2rem 3rem;
}

.acu-text-div > h2, h3 {
  text-align: center;
  font-family: 'Alice', sans-serif;
  font-size: 1.3rem;
}

.acu-text-div > h3 {
  padding-bottom: 1rem;
}

.wide-card {
  display: flex;
  width: 900px;
  height: 400px;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 2rem;
  border: 2px solid black;
}
h3  {
  padding-bottom: 1rem;
}
.chris-img {
  height: 250px;
  padding: 15px;
}

p.para-text {
  padding-bottom: 1rem;
}
</style>