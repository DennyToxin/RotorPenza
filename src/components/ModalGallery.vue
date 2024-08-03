<template>
  <div class="modal-gallery">
    <button
      @click="onClick"
      class="modal-gallery__button-close"
      src="../assets/icons/close.svg"
    >
      Закрыть
    </button>
    <div class="modal-gallery__wrapper">
      <div class="modal-gallery__inner">
        <!-- <img
          v-for="item in galleryImages"
          :key="item.id"
          class="modal-gallery__image"
          :src="item.url"
        /> -->
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
        <div class="modal-gallery__image"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    galleryImages: String,
  },
  methods: {
    onClick() {
      this.$emit("onCloseGallery");
    },
  },
};
</script>
