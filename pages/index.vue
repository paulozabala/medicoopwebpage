<template fluid>
  <div id="MainPage">
    <component :is="header" />
    <div>
      <component :is="carousel" />
    </div>
    <component :is="footer" />
  </div>
</template>

<script setup lang="ts">
import header from '~/components/header.vue';
import footer from '~/components/footer.vue';
import carousel from '~/components/carousel.vue';
</script>

<style>
#MainPage {
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100vh;
  background-color: white;

}
</style>