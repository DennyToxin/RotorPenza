<template>
  <div id="gallery" class="container gallery">
    <div class="tablet tabletFlex">
      <GalleryPopup
        v-if="isGalleryVisible"
        @click.stop
        @onCloseGallery="closePopupGallery"
      ></GalleryPopup>
      <Popup
        v-if="isPopupVisible"
        @click.stop
        @onClose="closePopup"
        :popupImage="popupImage"
      ></Popup>
      <div class="buttonWraper">
        <button @click="showGallery" class="galleryButton">Все фото</button>
      </div>
      <div class="galleryWraper">
        <swiper
          class="border"
          :modules="modules"
          :slides-per-view="3"
          :space-between="32"
          :loop="true"
          navigation
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="{
            1400: { slidesPerView: 3 },
            1000: { slidesPerView: 2 },
            400: { slidesPerView: 1 },
          }"
        >
          <swiper-slide
            v-for="item in galleryImages"
            :key="item.id"
            @click="showPopup(item)"
            ><img class="swiperImage" :src="item.url"
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
//Import Popup
import Popup from "./Popup.vue";
import GalleryPopup from "./GalleryPopup.vue";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "../assets/styles/navigation.css";

// Import Swiper styles
export default {
  components: {
    GalleryPopup,
    Popup,
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
      galleryImages: [
        { id: 1, url: "src/assets/images/about.jpg" },
        { id: 2, url: "src/assets/images/first.png" },
        { id: 3, url: "src/assets/images/second.jpg" },
        { id: 4, url: "src/assets/images/third.jpg" },
        { id: 5, url: "src/assets/images/about.jpg" },
        { id: 6, url: "src/assets/images/first.png" },
        { id: 7, url: "src/assets/images/second.jpg" },
        { id: 8, url: "src/assets/images/third.jpg" },
      ],
      popupImage: "",
      isPopupVisible: false,
      isGalleryVisible: false,
    };
  },
  methods: {
    showPopup(item) {
      this.popupImage = item.url;
      this.isPopupVisible = !this.isPopupVisible;
      document.body.style.overflow = "hidden"
    },
    showGallery() {
      this.isGalleryVisible = !this.isGalleryVisible;
      document.body.style.overflow = "hidden"
    },
    closePopup() {
      this.isPopupVisible = !this.isPopupVisible;
      document.body.style.overflow = ""
    },
    closePopupGallery() {
      this.isGalleryVisible = !this.isGalleryVisible;
      document.body.style.overflow = ""
    }
  },
};
</script>
