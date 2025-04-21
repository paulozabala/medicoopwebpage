<template fluid>
    <div class="flex flex-row justify-center align-middle font-bold text-blue-100 w-full ">
        <div class="flex flex-col justify-start items-center w-full  pl-3 md:max-w-8/15 ">
            <div class="text-blue-100 font-bold text-start">CONTÁCTANOS</div>
            <p class="font-medium text-sm">Si tienes preguntas acerca de nuestros servicios, necesitas apoyo o quieres dar
                retroalimentación, nuestros colaboradores están listos para ayudarte.
            </p>
            <div class="flex flex-col justify-start align-start w-full ">
                <div class="flex flex-row justify-start ">
                    <img src="../../assets/tipos&logos/whatsapp.png" class="max-w-9" alt="whatsappicon">
                    <div>Whatsapp: 3107688777</div>
                </div>
                <div class="flex flex-row justify-start">
                    <img src="../../assets/tipos&logos/letter envelope 1.png" class="max-w-9" alt="lettericon">
                    <div>Email: medicoopipsltda2@gmail.com</div>
                </div>
            </div>
        </div>
        <img src="../../assets/celpagweb (compressed) 1.png" class="max-w-5/15 md:max-w-8/15" alt="celular"></img>
    </div>
    <div class="flex max-md:flex-col md:max-2xl:flex-row justify-evenly items-center p-4 w-full">
        <div class="border-1 border-green-300 rounded-xl sm:w-9/12 p-2 md:max-lg:max-w-8/15  lg:max-2xl:max-w-8/15 max-w-8/12">
            <div id="formulario" class="flex flex-row justify-around align-middle w-full ">
                <div class="flex flex-col justify-center items-center p-2 gap-3 w-xs overflow-hidden">
                    <img src="../../assets/tipos&logos/nuevologomedicoop.png" class="max-w-29" alt="medicooplogo">
                    <p class="text-center text-xs text-blue-100 w-full text-overflow-hidden">Escribenos tus peticiones, quejas, reclamos y sugerencias:
                    </p>
                </div>
                <div class="flex flex-col justify-center items-start w-full h-40">
                    <input type="text" placeholder="Nombre"
                        class="text-sm text-blue-100 font-normal border-1 border-blue-100 rounded-md w-3/3 h-10 px-2 mb-2 mt-2">
                    <input type="text" placeholder="Telefono"
                        class="text-sm text-blue-100 font-normal border-1 border-blue-100 rounded-md w-3/3 h-10 px-2 mb-2 mt-2">
                    <input type="text" placeholder="Correo"
                        class="text-sm text-blue-100 font-normal border-1 border-blue-100 rounded-md w-3/3 h-10 px-2 mb-2 mt-2">
                </div>
            </div>
            <div>
                <textarea placeholder="Escribe aquí tu mensaje"
                    class="text-sm text-blue-100 font-semibold border-1 border-blue-100 rounded-md w-full h-20 px-2 mb-2 mt-2"></textarea>
                <div class="flex flex-row justify-end">
                    <button class="bg-blue-100 text-white w-4/12 h-10 sm:w-3/12">Enviar</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center sm:w-40 sm:h-40 sm:max-2xl:w-65 sm:max-2xl:h-65 md:max-w-7/15 lg:max-w-8/15 ">
            
            <div class="text-blue-100 font-bold text-center">¡Tu opinion es importante para nosotros!</div>

            <div class="flex flex-col justify-center items-center w-45 h-45 sm:w-55 sm:h-55 rounded-full  bg-gray-100 p-2 gap-1">
                <img src="../../assets/tipos&logos/logomedicoopbicolor.png" class="max-w-12 " alt="medicooplogo">
                <span class="text-center text-xs text-blue-100 p-2 sm:text-sm">puedes dejarnos tus felicitaciones y escribirnos sobre tu
                    experiencia al usar nuestros servicios!
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

@media (max-width: 650px) {
    #formulario{
        display: flex;
        flex-direction: column !important ;
        justify-content: start;
        align-items: center;
    }

}
</style>