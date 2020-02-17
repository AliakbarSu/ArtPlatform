<template>
  <div class="o-dropdown">
    <ul class="c-dropdown">
      <router-link
        tag="li"
        v-for="course in courses"
        :key="course.id"
        class="c-dropdown__item"
        :to="{
          path: '/course/' + course.id,
          params: {
            courseId: course.id
          }
        }"
      >
        <div class="c-item">
          <div class="o-item__thumbnail">
            <img class="c-item__thumbnail" :src="course.thumbnail" />
          </div>
          <div class="c-item__details">
            <h2 class="c-item__title">{{ course.title }}</h2>
            <p class="c-item__description">{{ course.description }}</p>
          </div>
        </div>
      </router-link>
      <DropdownFooter to="/library">
        Browse the full library of courses
      </DropdownFooter>
    </ul>
  </div>
</template>
<script>
import DropdownFooter from "./components/dropdownFooter/dropdownFooter";
export default {
  props: ["courses"],
  components: {
    DropdownFooter
  }
};
</script>
<style lang="scss" scoped>
.o-dropdown {
  width: 100%;
}

.c-dropdown {
  position: relative;
  background: white;
  list-style: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @include for-desktop-up {
    position: absolute;
    z-index: 1;
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-left: -168px;
    &::before {
      content: " ";
      width: 38px;
      height: 33px;
      background: white;
      position: absolute;
      right: 44%;
      top: -5px;
      transform: rotate(45deg);
      z-index: 0;
    }
  }
}

.c-dropdown__item {
  position: relative;
  z-index: 1;
  padding: 10px 5px;
  &:hover {
    transition: 0.3s;
    background: #e9ecf6;
    cursor: pointer;
    &:first-child {
      border-radius: 5px 5px 0 0;
    }
  }
}

.c-item {
  display: flex;
  margin-top: 10px;
}

.o-item__thumbnail {
  width: 43%;
  display: flex;
  align-items: center;
}

.c-item__thumbnail {
  width: 100%;
}

.c-item__details {
  padding-left: 10px;
}

.c-item__description,
.c-item__title {
  margin: 0;
  padding: 5px;
  text-align: left;
}

.c-item__description {
  font-size: 0.8em;
}
</style>
