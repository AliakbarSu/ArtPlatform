<template>
  <div
    class="o-courses"
    v-click-outside="closeDropdown"
    @mouseleave="closeDropdown"
  >
    <h2 class="o-courses__item" @click="toggleItem" @mouseover="openDropdown">About Us</h2>
    <AppTransitionExpand>
      <Dropdown class="c-courses__dropdown" v-if="isItemOpen" />
    </AppTransitionExpand>
  </div>
</template>
<script>
import Dropdown from "./components/navbarItemDropdown/TheAboutusDropdown";
import AppTransitionExpand from "../../../AppTransitionExpand/AppTransitionExpand";
import ClickOutside from "../../../../directives/clickoutside";
import DropdownMixin from "./services/dropdownMixin";
export default {
  data() {
    return {
      isItemOpen: false
    };
  },
  components: {
    Dropdown,
    AppTransitionExpand
  },
  methods: {},
  directives: {
    "click-outside": ClickOutside
  },
  mixins: [DropdownMixin]
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
.c-courses__dropdown {
}
</style>
