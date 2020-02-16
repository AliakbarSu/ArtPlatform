<template>
  <div class="o-dropdown">
    <ul class="c-dropdown">
      <li class="c-dropdown__item">
        <div class="o-item">
          <router-link to="/about/story" tag="p" class="c-item__text">
            My Story
          </router-link>
        </div>
      </li>
      <li class="c-dropdown__item">
        <div class="o-item">
          <router-link to="/contact" tag="p" class="c-item__text">
            Contacts
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
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
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-left: -60px;
    padding: 40px 0;
    &::before {
      content: " ";
      width: 38px;
      height: 33px;
      background: white;
      position: absolute;
      right: 40%;
      top: -5px;
      transform: rotate(45deg);
      z-index: 0;
    }
  }
}

.c-dropdown__item {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.c-item__text {
  text-align: left;
  text-indent: 20px;
  @include for-desktop-up {
    text-align: center;
    text-indent: 0;
    width: 70px;
    padding: 14px 20px;
    margin: 2px auto;
    border-radius: 5px;
    &:hover {
      background: #e9ecf6;
      transition: 0.3s;
      cursor: pointer;
    }
  }
}
</style>
