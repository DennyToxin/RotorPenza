<template>
  <nav class="navibar">
    <div class="navibar__brand">
      <img src="../assets/icons/logo.svg" class="navibar__brand--logo">
      <a href="#Home" class="navibar__brand--name">RotorPenza</a>
    </div>
    <input type="checkbox" id="navibar__collapse"></input>
    <label for="navibar__collapse" class="navibar__button"><img src="../assets/icons/menu.svg"></label>
    <label for="navibar__collapse" class="navibar__overlay"></label>
    <div class="navibar__inner">
      <label for="navibar__collapse" class="navibar__inner--button"><img src="../assets/icons/close.svg"></label>
      <a href="#Home" class="navibar__inner--item navibar__inner--item-hidden">Главная</a>
      <a href="#Services" class="navibar__inner--item">Услуги</a>
      <a href="#Gallery" class="navibar__inner--item">Галерея</a>
      <a href="#" class="navibar__inner--item">Контакты</a>
    </div>
  </nav>
</template>
