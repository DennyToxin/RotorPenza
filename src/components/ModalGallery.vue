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
        <div
          class="modal-gallery__image-placer"
          v-for="image in imageList"
          :key="image.id"
        >
          <img class="modal-gallery__image" :src="image.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imageLinks } from "@/variables";

export default {
  data() {
    return {
      imageList: imageLinks,
    };
  },
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
