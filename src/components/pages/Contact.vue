<template>
  <!-- <img src="https://goo.gl/maps/kPp8SfnqkgdSfZ5d8" alt="">> -->
  <div>
    <div class="contact-hero">
      <div class="text-container">
        <div class="hero-text">
          <h2 class="nurture-font-family">Join Us and Nurture Yourself Today!</h2>
          <p>
            We look forwarding to hearing from you! Please give us a call, send us an email or use the form at
            the bottom of the page to send us a message.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="info-div">
        <img src="https://img.icons8.com/ios-filled/50/000000/lotus.png" />
        <address>
          <span>50 Academy Street</span>
          <br />
          <span>Bryson City, NC</span>
          <br />
          <span>
            Phone:
            <a href="tel:1-828-400-9616">828-400-9616</a>
          </span>
          <br />
          <span>
            Email:
            <a href="mailto:jackiebeecher50@gmail.com">jackiebeecher50@gmail.com</a>
          </span>
          <br />
        </address>
      </div>
      <div class="map">
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
    </div>
    <div class="third-container">
      <div class="find-us">
        <div id="fb-root">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/NurtureWellnessStudio"
            data-tabs="timeline,events"
            data-width="500"
            data-height="450"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/NurtureWellnessStudio"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/NurtureWellnessStudio">NurtureWellnessStudio</a>
            </blockquote>
          </div>
        </div>
        <div class="text">
          <h3 class="nurture-font-family">Directions</h3>
          <p>Directions From Hwy 74W, take exit 67 into Bryson City. Before you come to the first stop light you will be taking a right on Academy St., which is the street right after Bojangles (sometimes there is no street sign, but there IS a pointer sign to the public library). Soon after your right turn on Academy St, you'll see our Nurture Wellness sign and a stone house on your right. Park behind the building and please use the front door :)</p>
        </div>
      </div>
    </div>
    <div class="contact-container">
      <div class="wrapper">
      <form action class="form-area">
        <div class="msg-area">
          <label for="msg">Message</label>
          <textarea id="msg" cols="30" rows="10"></textarea>
        </div>
        <div class="details-area">
          <label for="name">Name</label>
          <input type="text" name id="name" />

          <label for="email">Email</label>
          <input type="email" id="email" />

          <label for="phone">Phone Number</label>
          <input type="number" id="phone" />

          <button type="submit" class="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
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
  background-color: rgba(248, 248, 255, 0.3);
  padding: 0 1.5rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.info-div {
  width: 450px;
  height: 450px;
  background-color: #eee;
  text-align: center;
  padding: 5px;
}

address {
  margin-top: 3rem;
}

address span {
  display: flex;
  text-align: left;
  margin-bottom: -0.5rem;
  margin-left: 1rem;
}

.find-us {
 display: flex;
 justify-content: center;
 margin: 2rem;
}

.text, .fb-root {
  margin: 0 1.1rem;
  padding: 0 1.1rem;
}

.text {
  width: 500px;
}

.text h3 {
  font-size: 1.4rem;
  padding-bottom: 2rem;
}

.text p {
  font-size: 1.1rem;
  letter-spacing: 2px;
}

.contact-container {
  background: url('../../assets/morning-fog.jpg') center top no-repeat;
  background-size: cover;
}

.wrapper {
  width: 800px;
  margin:  auto;
  padding: 4rem 0;
}

.form-area {
  display: flex;
  background: rgba(238, 238, 238, 0.8);
  border-radius: 25px;
  padding: 1rem;
}

.msg-area {
  display: flex;
  flex-direction: column;
  order: 2;
}

.msg-area > textarea {
  flex: 1;
  min-width: 20rem;
  background: transparent;
  /* color: #fff; */
  padding: 15px;
}

.details-area {
  flex: 1;
  order: 1;
  margin-right: 2rem;
}

.details-area input {
  width: 100%;
  background: transparent;
  /* color: #fff; */
  border-radius: 40px;
}

.details-area input, .details-area button {
  padding: 1rem;
  margin-bottom: 1rem;
}

button.submit {
  background: #9BC444;
  color: #fff;
  border: 0;
  padding: .75rem 2.5rem;
  border-radius: 2rem;
  font-size: .8rem;
  text-transform: uppercase;
}

label {
  /* color: #fff; */
  text-transform: capitalize;
  line-height: 2rem;
}
</style>