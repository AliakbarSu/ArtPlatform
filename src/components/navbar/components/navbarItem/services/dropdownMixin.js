export default {
  methods: {
    toggleItem() {
      this.isItemOpen = !this.isItemOpen;
    },
    openDropdown() {
      if (window.innerWidth > 992) {
        this.isItemOpen = true;
      }
    },
    closeDropdown() {
      this.isItemOpen = false;
    }
  }
};
