<template>
  <div class="container">
    <div class="home-page">
      <p class="home-page__text">
        <span class="home-page__text--bold">RotorPenza</span> - это
        производство, ремонт, и реставрация формующих роторов и изготовление
        комплектующих к ним. Разработка и изготовление матриц для сахарного
        печенья и заливки мармелада. Создание струнных резок и фильер для
        пряничного производства.
      </p>
      <img class="home-page__image" src="../assets/images/photo1.png" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("mousedown", (event) => event.preventDefault());
  }
};
</script>