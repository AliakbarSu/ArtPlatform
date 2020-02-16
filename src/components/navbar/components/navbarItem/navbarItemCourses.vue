<template>
  <div
    class="o-courses"
    v-click-outside="closeDropdown"
    @mouseleave="closeDropdown"
  >
    <h2 class="o-courses__item" @click="toggleItem" @mouseover="openDropdown">Courses</h2>
    <AppTransitionExpand>
      <Dropdown
        :courses="courses"
        class="c-courses__dropdown"
        v-if="isItemOpen"
      />
    </AppTransitionExpand>
  </div>
</template>
<script>
import Dropdown from "./components/navbarItemDropdown/TheNavbarItemDropdown";
import AppTransitionExpand from "../../../AppTransitionExpand/AppTransitionExpand";
import ClickOutside from "../../../../directives/clickoutside";
import DropdownMixin from "./services/dropdownMixin";
import { courses } from "../../services/dummyData";
export default {
  data() {
    return {
      isItemOpen: false,
      courses
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
