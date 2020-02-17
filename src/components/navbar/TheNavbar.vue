<template>
  <div class="o-navbar">
    <div class="c-navbar">
      <div class="o-logo">
        <img
          class="c-logo"
          src="../../assets/logo-01.svg"
          @click="navigate('/')"
        />
      </div>
      <div class="o-menu-handle">
        <div class="c-menu-handle" @click="toggleNav">
          <img
            class="c-menu-hundle__img"
            src="../../assets/hamburger-menu-01.svg"
          />
        </div>
      </div>
      <AppTransitionExpand>
        <ul class="c-navbar__items" v-if="isNavOpen">
          <li class="c-navbar__item">
            <Courses />
          </li>
          <li class="c-navbar__item">
            <Gallery />
          </li>
          <li class="c-navbar__item">
            <Pricing />
          </li>
          <li class="c-navbar__item">
            <AboutUs />
          </li>
          <li class="c-navbar__item--spacer"></li>
          <li class="c-navbar__item">
            <SignIn />
          </li>
          <li class="c-navbar__item">
            <SignUp />
          </li>
          <li class="c-navbar__item--spacer-last"></li>
        </ul>
      </AppTransitionExpand>
    </div>
  </div>
</template>
<script>
import Courses from "./components/navbarItem/navbarItemCourses.vue";
import Gallery from "./components/navbarItem/navbarItemGallery";
import Pricing from "./components/navbarItem/navbarItemPricing";
import AboutUs from "./components/navbarItem/navbarItemAboutUs";
import SignIn from "./components/navbarItem/navbarItemSignin";
import SignUp from "./components/navbarItem/navbarItemSignup";
import AppTransitionExpand from "../AppTransitionExpand/AppTransitionExpand";
export default {
  data() {
    return {
      isNavOpen: false
    };
  },
  mounted() {
    if (window.innerWidth > 576) {
      this.isNavOpen = true;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 576) {
        this.isNavOpen = true;
      }
    });
  },
  components: {
    Courses,
    Gallery,
    Pricing,
    AboutUs,
    SignIn,
    SignUp,
    AppTransitionExpand
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    navigate(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
$navHeight: 70px;
.o-navbar {
  width: 100%;
  background: white;
  @include for-desktop-up {
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    background: transparent;
  }
}

.o-menu-handle {
  height: $navHeight;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  box-sizing: border-box;
  align-items: center;
  @include for-tablet-portrait-up {
    width: 45%;
  }

  @include for-desktop-up {
    display: none;
  }
}

.o-logo {
  height: $navHeight;
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @include for-tablet-portrait-up {
    width: 55%;
  }
  @include for-desktop-up {
    width: 15%;
    justify-content: center;
  }
}

.c-logo {
  width: 70px;
  height: 70px;
  &:hover {
    cursor: pointer;
  }
}

.c-navbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.c-navbar__items {
  width: 100%;
  list-style: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @include for-desktop-up {
    width: 75%;
    display: flex;
    justify-content: space-between;
  }
}

.c-navbar__item {
  border-bottom: 1px solid #ececec;
  &:last-child {
    border-bottom: none;
  }
  @include for-desktop-up {
    border-bottom: none;
    display: flex;
    align-items: center;
  }
}

.c-navbar__item--spacer {
  display: none;
  @include for-desktop-up {
    display: block;
    margin: 0 5%;
  }
}

.c-navbar__item--spacer-last {
  display: none;
  @include for-desktop-up {
    display: block;
  }
}

.c-menu-hundle__img {
  width: 45px;
  height: 45px;
}
</style>
