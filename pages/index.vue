<template fluid>
  <div id="MainPage">
    <component :is="header" />
    <component :is="carousel" />
    <component :is="waspbtn" />
    <component :is="diferentials" />
    <component :is="serviceCards" />
    <component :is="clients" />
    <component :is="footer" />
  </div>
</template>

<script setup lang="ts">
import header from '~/components/header.vue';
import footer from '~/components/footer.vue';
import carousel from '~/components/index/carousel.vue';
import diferentials from '~/components/index/diferentials.vue';
import serviceCards from '~/components/index/serviceCards.vue';
import clients from '~/components/index/clients.vue'
import waspbtn from '~/components/waspbtn.vue';
</script>

<style>
#MainPage {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2px;
  width: 100%;
}
</style>