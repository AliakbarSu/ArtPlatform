<template>
  <div class="o-trendings">
    <div
      v-for="(item, index) in trendings"
      :key="item.id"
      class="c-trendings__items"
    >
      <div class="c-trendings__content">
        <h2 class="c-trendings__title">{{item.title}}</h2>
        <p class="c-trendings__description">{{item.description}}</p>
        <div class="c-trendings__features">
          <p
            v-for="feature in item.features"
            :key="feature"
            class="c-trendings__feature"
          ><CheckIcon class="c-trendings__icon"/>{{feature}}</p>
        </div>
        <router-link
          tag="button"
          :to="'/library/' + item.id"
          class="c-trendings__button"
        >
          Start to Learn Today
        </router-link>
      </div>
      <div
        class="o-trendings__thumbnail"
        :class="{
          'odd-cell': index % 2 === 1,
          'even-cell': index % 2 === 0
        }"
      >
        <img class="c-trendings__thumbnail" :src="item.thumbnail" />
      </div>
    </div>
  </div>
</template>
<script>
import CheckIcon from "../../../../components/icons/check";
export default {
  props: ["trendings"],
  data() {
    return {
      backgroundEffects: []
    };
  },
  components: {
    CheckIcon
  }
};
</script>
<style lang="scss" scoped>
.o-trendings {
  padding-top: 10%;
}

.c-trendings__content {
  @include for-desktop-up {
    text-align: left;
    padding-top: 3%;
  }
  @include for-big-desktop-up {
    padding-right: 10%;
  }
}

.c-trendings__items {
  margin-top: 10%;
  @include for-desktop-up {
    display: flex;
    flex-flow: row-reverse;
    &:nth-child(even) {
      flex-flow: row;
    }
  }
  @include for-big-desktop-up {
    width: 80%;
    margin: 10% auto;
  }
}

.c-trendings__title {
  font-size: 1.9em;
  color: $purple-heading;
  width: 90%;
  margin: 15px auto;
  font-family: "Libre Franklin", sans-serif;
  @include for-tablet-portrait-up {
    font-size: 2.2em;
  }
  @include for-desktop-up {
    text-align: left;
  }
}

.c-trendings__description {
  font-size: 1.2em;
  color: $body-base-color;
  width: 90%;
  margin: 15px auto;
  margin-top: 25px;
  font-family: "Cambay", sans-serif;
  @include for-tablet-portrait-up {
    font-size: 1.5em;
    margin: 30px auto;
  }
  @include for-desktop-up {
    text-align: left;
  }
}

.c-trendings__features {
  width: 80%;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  color: $body-base-color;
  font-family: "Cambay", sans-serif;
  @include for-tablet-portrait-up {
    width: 50%;
  }
  @include for-desktop-up {
    width: 100%;
    padding-left: 50px;
  }
}

.c-trendings__feature {
  font-size: 1em;
  text-align: left;
  display: flex;
  align-items: center;
}

.c-trendings__icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.c-trendings__button {
  @include basic-btn;
  background: #71EC8C;
  color: white;
  padding: 15px;
  width: 80%;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background: rgb(63, 252, 104);
  }
  @include for-tablet-portrait-up {
    width: 60%;
  }
  @include for-desktop-up {
    margin-left: 35px;
  }
}

.o-trendings__thumbnail {
  padding: 10px;
  margin-top: 15px;
  @include for-desktop-up {
    width: 80%;
    background-size: cover;
    padding-top: 3%;
    padding-left: 2%;
  }
  @include for-big-desktop-up {
    width: 60%;
  }
}

.even-cell {
  @include for-desktop-up {
    background-image: url("~@/assets/bubble-background-01.png");
  }
}
.odd-cell {
  @include for-desktop-up {
    background-image: url("~@/assets/bubble-background-1-01.png");
  }
}

.c-trendings__thumbnail {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
