<template>
  <div class="popup">
    <div class="popupInner">
      <img @click="onClick" class="popupClose" src="../assets/icons/close.svg">
      <img class="popupImage" :src="popupImage" />
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
