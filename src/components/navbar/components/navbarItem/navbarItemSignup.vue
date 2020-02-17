<template>
  <div class="o-courses">
    <router-link to="/sign-up" class="o-courses__item" tag="h2">
      Create Account
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
}
</style>
