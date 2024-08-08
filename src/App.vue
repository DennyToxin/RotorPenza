<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Home from "./components/Home.vue";
import Services from "./components/Services.vue";
import Gallery from "./components/Gallery.vue";
</script>

<template>
  <NavigationBar></NavigationBar>
  <Home></Home>
  <Services></Services>
  <Gallery></Gallery>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  },
};
</script>
