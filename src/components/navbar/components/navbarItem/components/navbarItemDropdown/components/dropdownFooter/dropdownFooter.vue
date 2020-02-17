<template>
  <li class="c-dropdown__footer">
    <router-link :to="to" tag="button" class="c-footer__button">
      <slot />
    </router-link>
  </li>
</template>
<script>
export default {
  props: ["to"]
};
</script>
<style lang="scss" scoped>
.c-dropdown__footer {
  position: relative;
  padding: 20px 0;
  background: #dadada;
  width: 100%;
  margin-top: 20px;
}
.c-footer__button {
  @include basic-btn;
  width: 84%;
  background: #4a5cfc;
  padding: 12px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 90%;
  &:hover {
    transition: 0.3s;
    background: rgb(61, 80, 252);
    cursor: pointer;
  }
}
</style>
