<template>
  <div>
    <div class="massage-bryson">
      <div class="massage-image">
        <div class="mass-text-div">
          <h2 class="mass-text">Massage Therapy in Bryson City</h2>
          <h3 class="mass-text">Nurture Wellness</h3>
          <p
            class="mass-text"
          >Massage is an excellent way to take better care of your body, mind, and soul. Give the gift of a massage to a friend or loved one, or take this important time for yourself.</p>
        </div>
      </div>
    </div>
    <div class="wide-card">
      <div class="jackie-div">
        <img class="jackie-img" src="../../assets/Jackie1.jpg" alt />
      </div>
      <div class="text">
        <h3>Jackie Beecher</h3>
        <p class="para-text">Jackie has extensive experience as a bodywork therapist, yoga practitioner and teacher. With the perfect synthesis of the art and science of massage therapy, Jackie uses an interesting blend of bodywork styles. Her work is skillful, compassionate and intuitive and truly embodies the body, mind, spirit approach to wellness.</p>
        <ul>
          <li>NC Licensed  Massage and Bodywork Therapist  #1306 </li>
          <li>Board Certified in Therapeutic Massage and Bodywork #157107 </li>
          <li>(Also known as Pound d'Flesh:  Jackie is the official Massage Therapist of   <a href="http://www.smokymountainrollergirls.com/" target="_blank">The Smoky Mountain Roller Girls.</a>)</li>
      </ul>
        <p>Call Jackie @ <a href="tel:1-828-400-9616">828-400-9616</a> to make an appointment.</p>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.massage-bryson {
  height:500px;
  /* background-image: url("../../assets/white-waves.png"); */
  /* Background pattern from Toptal Subtle Patterns */
  /* border-bottom: 1px solid black; */
  background: linear-gradient(
      rgba(204, 204, 204, 0.8),
      rgba(204, 204, 204, 0.9)
    ),
    url("../../assets/massage-landscape.png") center center no-repeat;
    background-size: cover;
}

.massage-image {
  /* background-color: rgba(0,0,0, 0.4); */
  /* background: rgba(0,0,0, 0.4), url("../../assets/massage-landscape.png"); */
  /* background: linear-gradient(
      rgba(204, 204, 204, 0.4),
      rgba(204, 204, 204, 0.8)
    ),
    url("../../assets/massage-landscape.png") left center no-repeat; */
  /* background-image: url("../../assets/massage-landscape.png"); */

  background-size: contain;
  background-repeat: no-repeat;
  width: 1000px;
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
}

.mass-text-div {
  text-align: center;
  width: 700px;
  /* background-image: url("../../assets/white-waves.png");  */
  padding: 1rem 1.5rem;
  /* Background pattern from Toptal Subtle Patterns */
  background-color: rgba(248,248,255, 0.3);
  border: transparent;
  border-radius: 5px;
}

.mass-text-div > h2,
h3 {
  font-family: "Alice", sans-serif;
  font-size: 1.5rem;
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

.jackie-img {
  height: 250px;
  padding: 15px;
}
.text p, .text li {
  padding: 3px;
}

.text li {
  list-style: none;
  font-style: italic;
  font-size: 0.9rem;
}

.para-text::first-letter {
  /* font-size: 1.1rem; */
  font-weight: bold;
  padding: 3px;
}
</style>