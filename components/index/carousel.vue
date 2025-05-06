<template fluid>
    <div class="carouselbox">
        <UCarousel class="UCarousel" v-slot="{ item }" loop auto-scroll :items="items" :ui="{ item: 'basis-1/4' }">
            <img :src="item" width="734" height="634" class="rounded-lg">
        </UCarousel>
    </div>
</template>

<script setup lang="ts">

const items = [
    'https://i.ibb.co/mVCxhCwZ/fachada.jpg',
    'https://i.ibb.co/7L84k5Q/recepcion.jpg',
    'https://i.ibb.co/6RDDT3T8/recepcionmile.jpg',
    'https://i.ibb.co/xkK7wnq/sala1.jpg',
    'https://i.ibb.co/1GL4y8rD/sala2.jpg',
    'https://i.ibb.co/zT3r13gY/sala2b.jpg',
    'https://i.ibb.co/Gvn82VnP/gym.jpg',
    'https://i.ibb.co/jktqvCYD/fisioterapia.jpg',
]
</script>

<style scoped>

.UCarousel{
    background-color: #6efab7fb !important;
    padding: 10px;
}

</style>