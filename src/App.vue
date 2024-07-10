<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Panorama from "./components/Panorama.vue";
import AboutUs from "./components/AboutUs.vue";
import Services from "./components/Services.vue";
import Gallery from "./components/Gallery.vue";
import Contacts from "./components/Contacts.vue";
</script>

<template>
  <div class="fareground">
    <NavigationBar></NavigationBar>
    <Panorama></Panorama>
    <AboutUs></AboutUs>
    <Services></Services>
    <Gallery></Gallery>
    <Contacts></Contacts>
  </div>
  <div class="back_content">
    <img
      class="background"
      ref="parallaxBgr"
      src="./assets/images/BackgroundV1S.png"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevScrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onscroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  },
  methods: {
    onscroll(event) {
      let parallaxMod = window.scrollY * 0.5;
      this.$refs.parallaxBgr.style.transform =
        "translateY(" + parallaxMod + "px)";
      this.prevScrollY = window.scrollY;
    },
  },
};
</script>
