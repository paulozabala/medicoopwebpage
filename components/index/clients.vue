
<template>
    <div class="flex justify-center min-w-5/5 pt-10 px-30">
        <span class="text-3xl text-blue-100 font-semibold text-center">
            Algunos de nuestros convenios:
        </span>
    </div>
    <div class="carousel-container">
        <div class="carousel-track">
            <div class="carousel-slide" v-for="(img, index) in images" :key="index">
                <img :src="img" alt="" />
            </div>
            <!-- Repetimos las imágenes para efecto de scroll infinito -->
            <div class="carousel-slide" v-for="(img, index) in images" :key="'dup-' + index">
                <img :src="img" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
const images = [
    "https://i.ibb.co/YTpYN807/fomag.jpg",
    "https://i.ibb.co/twnWdSpT/positiva.jpg",
    "https://i.ibb.co/jPFQ08fm/axalogo.jpg",
    "https://i.ibb.co/1VrgZz2/suralogo.png",
    "https://i.ibb.co/0VXcSrGc/cajacopi.jpg",
    "https://i.ibb.co/tPqPLbCs/colmena-seg.jpg",
    "https://i.ibb.co/VpxRjHLg/Bolivar.jpg",
    "https://i.ibb.co/Swd0cp4g/logotempoaseo.png",
    "https://i.ibb.co/nqC8Hb88/logo-colsanitas.jpg"
];
</script>

<style scoped>
.carousel-container {
    overflow: hidden;
    width: 100%;
    padding: 40px 0;
    margin-top: 20px;
}

.carousel-track {
    display: flex;
    width: fit-content;
    animation: scroll-left 40s linear infinite;
}

.carousel-slide {
    flex: 0 0 auto;
    padding: 0 20px;
}

.carousel-slide img {
    width: 180px;
    height: 140px;
    object-fit: contain;
    border-radius: 15px;
    opacity: 0.7;
    mix-blend-mode: color-burn;
}

@keyframes scroll-left {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@media (max-width: 768px) {
    .carousel-slide img {
        width: 120px;
        height: 100px;
    }
}

/* .clients {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    margin-top: 10px;
    padding: 30px 10px !important;
}


img {
    width: 100%;
    max-width: 180px;
    height: 140px;
    object-fit: contain;
    border-radius: 15px;
    opacity: 70%;
    mix-blend-mode: color-burn !important;
}


@media (max-width: 2500px) {
    .clients {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
} */
</style>