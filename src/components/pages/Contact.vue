<template>
  <!-- <img src="https://goo.gl/maps/kPp8SfnqkgdSfZ5d8" alt="">> -->
  <div>
    <div class="contact-hero">
      <div class="text-container">
        <div class="hero-text">
          <h2>Join Us and Nurture Yourself Today!</h2>
          <p>
            We look forwarding to hearing from you! Please give us a call, send us an email or use the form at
            the bottom of the page to send us a message.
          </p>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.177801845845!2d-83.44843168479115!3d35.42562528025471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859485c305f9ca7%3A0x711cc259c05b3bf1!2s50%20Academy%20St%2C%20Bryson%20City%2C%20NC%2028713!5e0!3m2!1sen!2sus!4v1588385622513!5m2!1sen!2sus"
      width="600"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>
</template>

<style scoped>
.contact-hero {
  background: url("../../assets/peaceful_tree.jpg") center, center;
  height: 400px;
  background-size: cover;
}

.text-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.hero-text {
    width: 450px;
    height: 300px;
    border: black 2px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(248,248,255, 0.3);
    padding: 0 1.5rem;
}
</style>