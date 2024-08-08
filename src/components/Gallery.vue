<template>
  <div id="gallery" class="container">
    <div class="gallery">
      <ModalGallery
        v-if="isGalleryVisible"
        @click.stop
        @onCloseGallery="closePopupGallery"
        :galleryImages="galleryImages"
      ></ModalGallery>
      <ModalPhoto
        v-if="isPopupVisible"
        @click.stop
        @onClose="closePopup"
        :popupImage="popupImage"
      ></ModalPhoto>
      <button @click="showGallery" class="gallery__button">Все фото</button>
      <div class="gallery__inner">
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="32"
          :loop="true"
          navigation
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="{
            1400: { slidesPerView: 3 },
            1000: { slidesPerView: 2 },
            300: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }"
        >
          <swiper-slide
            v-for="item in galleryImages"
            :key="item.id"
            @click="showPopup(item)"
            ><img class="gallery__image" :src="item.url"
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { imageLinks } from "@/variables";

// Import modals
import ModalGallery from "./ModalGallery.vue";
import ModalPhoto from "./ModalPhoto.vue";

// Import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "../assets/styles/swiper/swiper.css";
import "../assets/styles/swiper/navigation.css";

export default {
  components: {
    ModalGallery,
    ModalPhoto,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination, A11y],
    };
  },
  data() {
    return {
      galleryImages: imageLinks,
      isPopupVisible: false,
      isGalleryVisible: false,
    };
  },
  methods: {
    showPopup(item) {
      this.popupImage = item.url;
      this.isPopupVisible = !this.isPopupVisible;
      document.body.style.overflow = "hidden";
    },
    showGallery() {
      this.isGalleryVisible = !this.isGalleryVisible;
      document.body.style.overflow = "hidden";
    },
    closePopup() {
      this.isPopupVisible = !this.isPopupVisible;
      document.body.style.overflow = "";
    },
    closePopupGallery() {
      this.isGalleryVisible = !this.isGalleryVisible;
      document.body.style.overflow = "";
    },
  },
};
</script>
