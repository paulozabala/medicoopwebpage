<template>
    <div class="modalmenu flex flex-col mb-4 relative ">
        <div class="gradient"></div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="text-blue-100 font-bold shadow-2xl text-center sm:text-start fill-old-neutral-600 text-2xl">
                Certificados de Discapacidad</div>
            <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                <div
                    class=" border-blue-100 border-8 sm:border-10 rounded-tr-2xl rounded-bl-2xl bg-[url('../juntadecalificacion.jpg')] bg-cover min-w-60 h-50 shadow-2xl">
                </div>
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <p class="text-justify">
                        Este procedimiento evalua la existencia de una discapacidad, identificando deficiencias en 
                        funciones y estructuras corporales, limitaciones en la actividad y restricciones en la 
                        participación de una persona. Esta evaluación la realizan equipos de profesionales de 
                        diferentes disciplinas en IPS autorizadas como la nuestra por el ministerio de salud.
                        Esta información se registra en el aplicativo SISPRO - RLCPD (Registro de Localización 
                        y Caracterización de Personas con Discapacidad).
                    </p>
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