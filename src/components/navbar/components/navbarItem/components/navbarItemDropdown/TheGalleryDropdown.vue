<template>
  <div class="o-dropdown">
    <ul class="c-dropdown">
      <router-link
        tag="li"
        v-for="item in gallery"
        :key="item.id"
        class="c-dropdown__item"
        :to="{
          path: '/gallery/' + item.id,
          params: {
            itemId: item.id
          }
        }"
      >
        <div class="o-item__thumbnail">
          <img class="c-item__thumbnail" :src="item.thumbnail" />
        </div>
      </router-link>
      <DropdownFooter to="/gallery">
        Browse the full gallery of my artworks
      </DropdownFooter>
    </ul>
  </div>
</template>
<script>
import DropdownFooter from "./components/dropdownFooter/dropdownFooter";
export default {
  props: ["gallery"],
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
  background: white;
  list-style: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-around;
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
  width: 45%;
  box-sizing: border-box;
  margin-top: 5px;
  z-index: 1;
  padding: 5px;
  cursor: pointer;
  @include for-tablet-portrait-up {
    width: 20%;
  }
  @include for-desktop-up {
    width: 33%;
  }
}

.o-item__thumbnail {
  display: flex;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
