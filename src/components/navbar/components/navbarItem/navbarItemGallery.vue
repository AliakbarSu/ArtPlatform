<template>
  <div
    class="o-gallery"
    v-click-outside="closeDropdown"
    @mouseleave="closeDropdown"
  >
    <h2 class="o-gallery__item" @click="toggleItem" @mouseover="openDropdown">
      Art Gallery
    </h2>
    <AppTransitionExpand>
      <Dropdown
        :gallery="gallery"
        class="c-gallery__dropdown"
        v-if="isItemOpen"
      />
    </AppTransitionExpand>
  </div>
</template>
<script>
import Dropdown from "./components/navbarItemDropdown/TheGalleryDropdown";
import AppTransitionExpand from "../../../AppTransitionExpand/AppTransitionExpand";
import ClickOutside from "../../../../directives/clickoutside";
import DropdownMixin from "./services/dropdownMixin";
import { gallery } from "../../services/dummyData";
export default {
  data() {
    return {
      isItemOpen: false,
      gallery
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
.o-gallery__item {
  padding: 15px 5px;
  text-align: left;
  margin: 0;
  @include navItemTheme;
  box-sizing: border-box;
}
</style>
