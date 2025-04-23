<template>
    <div class="flex flex-col mb-4 relative">
        <div class="gradient"></div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-start shadow-2xl fill-old-neutral-600 text-2xl">
                        Fonoaudiología</div>
                    <p class="text-justify">
                        La fonoaudiología se enfoca en la prevención, diagnóstico y tratamiento de trastornos
                        relacionados con el habla, lenguaje, voz, deglución y motricidad orofacial. Al integrar
                        conocimientos de salud, psicología y lingüística, los fonoaudiólogos mejoran la calidad
                        de vida y el bienestar comunicativo de los pacientes, facilitando su integración social
                        y laboral
                    </p>
                </div>
                <div
                    class=" border-blue-100 border-8 sm:border-10 rounded-tr-3xl rounded-bl-3xl bg-[url('../personal/fonoaudiologia.jpeg')] bg-cover min-w-60 h-60 shadow-2xl">
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col-reverse sm:flex-row gap-4 justify-around w-full items-center">
                <div
                    class=" border-blue-200 border-8 sm:border-10 rounded-tr-2xl rounded-bl-2xl bg-[url('../personal/terapialenguaje.jpg')] bg-cover min-w-60 h-60 shadow-2xl">
                </div>
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-start shadow-2xl fill-old-neutral-600 text-2xl">
                        Terapia de Lenguaje</div>
                    <p class="text-justify">
                        En Medicoop la terapia de lenguaje es una subespecialidad de la fonoaudiología que
                        se enfoca en tratar trastornos del lenguaje en niños y adultos, mejorando la comprensión
                        y expresión lingüística.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                <div class="flex flex-col justify-center items-start text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-start shadow-2xl fill-old-neutral-600 text-2xl">
                        Terapia Ocupacional</div>
                    <p class="text-justify">
                        La terapia ocupacional busca ayudar a las personas a las que se les dificultan las 
                        actividades diarias debido a que sus habilidades motoras son limitadas. Para los niños, 
                        eso incluye actividades que son parte del aprendizaje y del buen funcionamiento en la escuela.
                    </p>
                </div>
                <div
                    class=" border-green-100 border-8 sm:border-10 rounded-tr-3xl rounded-bl-3xl bg-[url('../personal/NeylaLizarazoshorter.jpeg')] bg-cover min-w-60 h-60 shadow-2xl">
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