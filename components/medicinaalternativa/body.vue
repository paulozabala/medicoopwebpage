<template>
    <div class="flex flex-col mb-4 relative">
        <div class="gradient"></div>
        <div class="flex flex-col justify-center px-8 pt-8 z-2 gap-4">
            <div class="flex flex-col sm:flex-row gap-4 justify-around w-full items-center">
                <div
                    class=" border-blue-200 border-8 sm:border-10 rounded-tr-3xl rounded-bl-3xl bg-[url('https://i.ibb.co/pYd8W5h/alternativa.jpg')] bg-cover min-w-60 h-60 shadow-2xl">
                </div>
                <div class="flex flex-col justify-center  text-xl text-blue-100 px-4 gap-2">
                    <div class="text-blue-100 font-bold text-center shadow-2xl fill-old-neutral-600 text-2xl">
                        Consulta Medicina Alternativa</div>
                    <p class="text-justify">
                        <span class="pl-8">En Medicoop Ips</span>  la medicina alternativa, incluye una variedad de métodos que incluyen:
                    </p>
                    <ul class="list-disc text-start pl-10 pb-3">
                        <li>Acupuntura</li>
                        <li>Apiterapia</li>
                        <li>Homeopatía</li>
                        <li>Medicina herbaria y/o Magistral</li>
                        <li>Neuralterapia</li>
                        <li>Infiltraciones para Manejo del Dolor</li>
                        <li>Quiropráctica, entre otros.</li>
                    </ul>
                    <p class="text-justify ">
                        <span class="pl-8">Estas prácticas se</span> basan en la creencia de que el cuerpo tiene la capacidad 
                        de curarse a sí mismo y, a menudo,se centran en tratar al individuo de manera 
                        integral, teniendo en cuenta los aspectos físicos, emocionales y espirituales. 
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