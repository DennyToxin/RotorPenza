<template>
  <div class="popup">
    <img @click="onClick" class="popupClose" src="../assets/icons/close.svg" />
    <div class="popupGalleryWraper">
      <div class="popupGallery">
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
        <img src="../assets/images/about.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popupImage: String,
  },
  methods: {
    onClick() {
      this.$emit("onCloseGallery");
    },
  },
};
</script>
