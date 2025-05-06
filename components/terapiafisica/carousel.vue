<template fluid>
    <div class="carouselbox">
        <UCarousel class="UCarousel bg-blue-100" v-slot="{ item }" loop auto-scroll :items="items" :ui="{ item: 'basis-4/12' }">
            <img :src="item" width="734" height="634" class="rounded-lg max-w-10/12 max-h-3/12" alt="carousel image" />
        </UCarousel>
    </div>
</template>

<script setup lang="ts">

const items = [
    'https://i.ibb.co/Gvn82VnP/gym.jpg',
    'https://i.ibb.co/jktqvCYD/fisioterapia.jpg',
    'https://i.ibb.co/B2Yc4T03/fisica2.jpg',
    'https://i.ibb.co/8LrgPw7k/fisica3.jpg',
]
</script>

<style scoped>

.UCarousel{
    padding: 10px;
}

</style>