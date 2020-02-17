<template>
  <div class="o-courses">
    <router-link to="/login" class="o-courses__item" tag="h2">
      Sign In
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isItemOpen: false
    };
  },
  components: {},
  methods: {
    toggleItem() {
      this.isItemOpen = !this.isItemOpen;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../services/styles.scss";
.o-courses__item {
  padding: 15px 5px;
  text-align: left;
  margin: 0;
  @include navItemTheme;
  background-color: #71ec8c;
  color: #ffffff;
  @include for-desktop-up {
    background-color: #71ec8c;
    color: #ffffff;
    padding: 10px 15px;
    border-radius: 3px;
  }
  &:hover {
    transition: 0.3s;
    background: rgb(92, 241, 124);
  }
}
</style>
