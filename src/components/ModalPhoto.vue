<template>
  <div class="modal-photo">
    <div class="modal-photo__inner">
      <button @click="onClick" class="modal-photo__button-close">Закрыть</button>
      <img class="modal-photo__image" :src="popupImage" />
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
      this.$emit("onClose");
    },
  },
};
</script>