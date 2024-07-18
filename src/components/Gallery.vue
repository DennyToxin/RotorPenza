<template>
  <div id="gallery" class="container gallery">
    <div class="tablet tabletFlex">
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
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
          <swiper-slide
            ><img class="swiperImage" src="../assets/images/about.jpg"
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "../assets/styles/navigation.css";
//import "../assets/styles/pagination.css";

// Import Swiper styles
export default {
  components: {
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
};
</script>
