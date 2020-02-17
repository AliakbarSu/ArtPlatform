<template>
  <div class="o-hero">
    <img class="c-hero__image" src="~@/assets/hero-image-01.png" />
    <div class="c-hero__content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: ["src"]
};
</script>
<style lang="scss" scoped>
.o-hero {
  position: relative;
  height: calc(100vh - #{$navbarHeight});
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-hero__image {
  position: absolute;
  z-index: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.c-hero__content {
  position: relative;
  z-index: 1;
}
</style>
