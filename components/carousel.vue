<template fluid>
    <div class="carouselbox">
        <UCarousel class="UCarousel" v-slot="{ item }" loop auto-scroll :items="items" :ui="{ item: 'basis-1/3' }">
            <img :src="item" width="334" height="334" class="rounded-lg">
        </UCarousel>
    </div>
</template>

<script setup lang="ts">

const items = [
    './assets/fachada.jpg',
    './assets/recepcion.jpg',
    './assets/recepcionmile.jpg',
    './assets/sala1.jpg',
    './assets/sala2.jpg',
    './assets/sala2b.jpg',
    './assets/gym.jpg',
    './assets/fisioterapia.jpg',
]
</script>

<style scoped>

.UCarousel{
    background-color: #6efab7fb !important;

    padding: 10px;
}
/* .carouselbox {
    margin: 10px;
    position: relative;
    top: 10px;
    left: 0;
    width: 100%;
    background-color: #2dcd8088 !important;
    opacity: 95%;
} */
</style>