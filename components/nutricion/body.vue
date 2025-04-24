<template>
    <div class="modalmenu flex flex-col mb-4 relative ">
        <div class="gradient"></div>
        <div class="flex flex-col justify-center items-center px-0 z-2 gap-4">
            <div class="flex flex-row justify-center bg-blue-100 shadow-2xl w-full px-2 ">
                <img class="rounded-b-3xl w-full lg:w-180 mb-2 lg:h-96" src="../../assets/nutricion.jpg" alt="">
            </div>
            <div class="px-4">

                <div class="text-blue-100 font-bold shadow-2xl text-center sm:text-start fill-old-neutral-600 text-2xl">
                    Nutrición y Dietética</div>
                <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                    <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                        <p class="text-justify">
                            La nutrición y dietética son pilares fundamentales para una vida saludable.
                            En Medicoop IPS, ofrecemos asesoramiento personalizado para ayudarte a
                            alcanzar tus objetivos de bienestar, combinando ciencia y experiencia para diseñar
                            planes alimenticios equilibrados que potencien tu energía, fortalezcan tu sistema
                            inmunológico y mejoren tu calidad de vida. ¡Descubre el poder de una vida saludable
                            con nosotros!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.gradient {
    position: absolute;
    top: 1px;
    left: 0px;
    background: linear-gradient(to bottom, #47D38F 17%, #FFFFFF 100%);
    height: 50%;
    width: 100%;
    z-index: 1;
}
</style>