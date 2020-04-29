<template>
  <div>
    <div class="yoga-bryson">
      <div class="yoga-vista-image">
        <div class="yoga-text-div">
          <h2 class="yoga-text">Massage Therapy in Bryson City</h2>
          <h3 class="yoga-text">Nurture Wellness</h3>
          <p class="yoga-text">
            Yoga is an art, exercise, and way of life that increases flexibility, strength, and protects against
            injury. It promotes longevity as the exercises can balance ones metabolism, and improves the cardiovacular
            system. Yoga improves general vitality as it increases your energy, yet relaxes you and settles your mind.
            All levels welcome. Join us today!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yoga-vista-image {
  height: 500px;
  /* background-image: url("../../assets/white-waves.png"); */
  /* Background pattern from Toptal Subtle Patterns */
  /* border-bottom: 1px solid black; */
  background: linear-gradient(
      rgba(204, 204, 204, 0.7),
      rgba(204, 204, 204, 0.8)
    ),
    url("../../assets/yoga-amazing-vista.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 1.5rem;
  margin: auto;
}

.yoga-text-div {
  text-align: center;
  width: 700px;
  /* background-image: url("../../assets/white-waves.png");  */
  padding: 1rem 1.5rem;
  /* Background pattern from Toptal Subtle Patterns */
  background-color: rgba(248, 248, 255, 0.3);
  border: transparent;
  border-radius: 5px;
}

.yoga-text-div > h2,
h3 {
  font-family: "Alice", sans-serif;
  font-size: 1.5rem;
}
</style>