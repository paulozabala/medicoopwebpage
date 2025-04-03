<template fluid>
  <div id="MainPage">
    <component :is="header" />
    <component :is="carousel" />
    <component :is="diferentials" />
    <component :is="serviceCards" />
    <component :is="footer" />
  </div>
</template>

<script setup lang="ts">
import header from '~/components/index/header.vue';
import footer from '~/components/index/footer.vue';
import carousel from '~/components/index/carousel.vue';
import diferentials from '~/components/index/diferentials.vue';
import serviceCards from '~/components/index/serviceCards.vue';
</script>

<style>
#MainPage {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2px;
  width: 100%;
  height: 100vh;
  background-color: white;

}
</style>