<template>
  <nav class="navibar">
    <div class="navibar__brand">
      <img class="navibar__logo" src="../assets/icons/logo.svg" />
      <a class="navibar__company-name" href="#">RotorPenza</a>
    </div>
    <button class="navibar__drop-button">Меню</button>
    <div id="collapse" class="navibar__list">
      <a class="navibar__link" href="#services">Услуги</a>
      <a class="navibar__link" href="#gallery">Галлерея</a>
      <a class="navibar__link" href="#">Контакты</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
