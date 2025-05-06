<template>
    <div class="flex flex-col mb-4 relative">
        <div class="gradient"></div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-end shadow-2xl fill-old-neutral-600 text-2xl">
                        Ortopedia</div>
                    <p class="text-justify">
                        en Medicoop IPS nos enfocamos en el diagnóstico y tratamiento de lesiones y
                        patologías del sistema musculoesquelético, haciendo referencia a
                        aquellas que se consideran de tipo congénito. Los conocimientos de
                        esta especialidad también están dirigidos a la rehabilitación y prevención
                        de enfermedades que impidan la correcta movilidad de la persona.
                    </p>
                    <span class="font-bold">Subespecialidades:</span> hombro, codo, cadera y rodilla.
                </div>
                <div
                    class=" border-blue-100 border-8 sm:border-10 rounded-tr-3xl rounded-bl-3xl bg-[url('https://i.ibb.co/RTXvZGRj/ortopedia.jpg')] bg-cover min-w-60 h-60 shadow-2xl">
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col-reverse sm:flex-row gap-4 justify-around w-full items-center">
                <div
                    class=" border-blue-200 border-8 sm:border-10 rounded-tr-2xl rounded-bl-2xl bg-[url('https://i.ibb.co/N6YGxXHt/fisiatria.jpg')] bg-cover min-w-60 h-60 shadow-2xl">
                </div>
                <div class="flex flex-col justify-center  text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-end shadow-2xl fill-old-neutral-600 text-2xl">
                        Fisiatría</div>
                    <p class="text-justify">
                        La Fisiatría mejora la funcionalidad y calidad de vida de personas con discapacidades 
                        físicas, lesiones musculoesqueléticas y trastornos neurológicos. Con un enfoque 
                        personalizado y multidisciplinario. Nuestros especialistas en esta área ayudan a los 
                        pacientes a alcanzar sus objetivos de recuperación y mejorar su bienestar general.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-start shadow-2xl fill-old-neutral-600 text-2xl">
                        Psiquiatría</div>
                    <p class="text-justify">
                        La asistencia psiquiátrica se solicita por episodios abruptos como pánico, 
                        alucinaciones, ideaciones suicidas o "voces", y por problemas crónicos como 
                        tristeza, desesperanza, ansiedad persistente o dificultades en el funcionamiento 
                        diario, como el sueño, que alteran la vida cotidiana. En Medicoop IPS, podemos
                        brindarte apoyo personalizado en esta área.
                    </p>
                </div>
                <div
                    class=" border-green-100 border-8 sm:border-10 rounded-tr-3xl rounded-bl-3xl bg-[url('https://i.ibb.co/Mq2wMsQ/Neyla-Lizarazoshorter.jpg')] bg-cover min-w-60 h-60 shadow-2xl">
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col-reverse sm:flex-row gap-4 justify-around w-full items-center">
                <div
                    class=" border-blue-200 border-8 sm:border-10 rounded-tr-2xl rounded-bl-2xl bg-[url('https://i.ibb.co/rRcDrRWz/otrasespecialidades.jpg')] bg-cover min-w-60 h-60 shadow-2xl">
                </div>
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-start shadow-2xl fill-old-neutral-600 text-2xl">
                        Otras Consultas Especializadas</div>
                   <ul class="list-disc text-start">
                    <li>Neurocirugía</li>
                    <li>Medicina Laboral</li>
                    <li>Cardiología</li>
                    <li>Otorrinolaringología</li>
                    <li>Neurología</li>
                    <li>Oftalmología</li>
                   </ul>
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