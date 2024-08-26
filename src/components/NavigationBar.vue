<template>
  <nav class="navibar">
    <div class="navibar__brand">
      <img class="navibar__logo" src="../assets/icons/logo.svg" />
      <a @click="closeMenu" class="navibar__company-name" href="#"
        >RotorPenza</a
      >
    </div>
    <button @click="changeMenuVisibility()" class="navibar__drop-button">
      Меню
    </button>
    <div id="collapse" class="navibar__list">
      <a @click="closeMenu" class="navibar__link" href="#services">Услуги</a>
      <a @click="closeMenu" class="navibar__link" href="#gallery">Галлерея</a>
      <a @click="closeMenu" class="navibar__link" href="#">Контакты</a>
    </div>
  </nav>
</template>

<script>
import { mobileBreakpoint } from '@/variables';

export default {
  data() {
    return {
      isMenuVisible: false,
    };
  },
  methods: {
    changeMenuVisibility() {
      const element = document.getElementById("collapse");
      if (this.isMenuVisible) {
        element.classList.replace("navibar__list--active", "navibar__list");
        this.isMenuVisible = false;
      } else {
        element.classList.replace("navibar__list", "navibar__list--active");
        this.isMenuVisible = true;
      }
    },
    closeMenu() {
      const element = document.getElementById("collapse");
      element.classList.replace("navibar__list--active", "navibar__list");
      this.isMenuVisible = false;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      const element = document.getElementById("collapse");
      if (window.innerWidth > mobileBreakpoint) {
        element.classList.replace("navibar__list--active", "navibar__list");
        this.isMenuVisible = false;
      }
    });
  },
};
</script>
