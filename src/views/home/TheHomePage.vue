<template>
  <div class="c-home">
    <Hero src="hero-image-01.png">
      <div class="c-hero__content">
        <h1 class="c-hero__title">The best place to learn how to draw</h1>
        <p class="c-hero__tagline">
          Learn to draw with fun courses taught by the experts.
        </p>
        <router-link
          class="c-hero__button"
          tag="button"
          to="/subscription/freeTrial"
        >
          Start a 7 Day Free Trial
        </router-link>
      </div>
    </Hero>
    <Trendings :trendings="trendings" />
  </div>
</template>
<script>
import Hero from "./components/hero/hero.vue";
import Trendings from "./components/trendings/trendings";
export default {
  components: {
    Hero,
    Trendings
  },
  computed: {
    trendings() {
      return this.$store.state.trendings;
    }
  }
};
</script>
<style lang="scss" scoped>
.c-home {
  height: 400px;
}

.c-hero__content {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  @include for-desktop-up {
    width: 60%;
    justify-content: flex-start;
    padding-left: 100px;
    padding-bottom: 100px;
    text-align: left;
  }
  @include for-big-desktop-up {
    width: 40%;
  }
}

.c-hero__title {
  font-size: 3em;
  font-family: "Libre Franklin", sans-serif;
  font-weight: bold;
  @include for-desktop-up {
    font-size: 3.5em;
  }
}

.c-hero__tagline {
  font-size: 1.5em;
  font-family: "Cambay", sans-serif;
  padding-bottom: 10px;
  @include for-desktop-up {
    font-size: 1.6em;
  }
}

.c-hero__button {
  @include basic-btn;
  color: white;
  background: #71EC8C;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  width: 90%;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background: rgb(72, 245, 110);
  }
  @include for-tablet-portrait-up {
    width: 60%;
  }
  @include for-desktop-up {
    font-size: 1.3em;
    width: 50%;
    margin-top: 80px;
  }
  @include for-big-desktop-up {
    width: 40%;
  }
}
</style>
