<template>
    <div class="modalmenu flex flex-col mb-4 relative ">
        <div class="gradient"></div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="text-blue-100 font-bold shadow-2xl text-center sm:text-start fill-old-neutral-600 text-2xl">
                Exámen de Aptitud
                Ocupacional</div>
            <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                <div
                    class=" border-blue-100 border-10 rounded-tr-2xl rounded-bl-2xl bg-[url('https://i.ibb.co/FkmDq2Kb/Otero-Yeny.jpg')] bg-cover min-w-50 h-50 shadow-2xl">
                </div>
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <p class="text-justify">
                        Exámenes orientados a evaluar la aptitud física y psicológica de
                        una persona para desempeñar una labor, prevenir riesgos en el
                        desempeño de su actividad y dar cumplimiento a la normatividad
                        vigente en Seguridad y Salud en el Trabajo.
                    </p>
                    <ul class="list-disc px-4">
                        <li>Ingreso</li>
                        <li>Egreso</li>
                        <li>Periódicos</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center px-8 pt-3  gap-4">
            <div class="text-blue-100 font-bold shadow-2xl text-center sm:text-end  fill-old-neutral-600 text-2xl">
                Actividades en
                Seguridad y Salud en el Trabajo</div>
            <div class="flex flex-col sm:flex-row justify-around w-full items-center">
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <ul class="list-disc px-4">
                        <li>Pruebas de Trabajo</li>
                        <li>Análisis de Exigencias de Trabajo</li>
                        <li>Junta de Rehabilitación Integral</li>
                        <li>Análisis de Puesto de Trabajo</li>
                        <li>Valoración Ocupacional Integral</li>
                        <li>Carta de Recomendaciones</li>
                        <li>Cierre de Casos</li>
                    </ul>
                </div>
                <div
                    class=" border-green-100 border-10 rounded-tr-2xl rounded-bl-2xl bg-[url('https://i.ibb.co/WNqvr8CY/actividadessst.jpg')] bg-cover min-w-60 h-50 shadow-2xl">

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