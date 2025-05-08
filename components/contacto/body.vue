<template fluid>
    <div class="flex flex-col sm:flex-row justify-center items-center align-middle font-bold text-blue-100 w-full gap-3">
        <component :is="waspbtn" />
        <div class="flex flex-col justify-start items-center w-full  pl-3 lg:max-w-8/15 gap-4">
            <div class="text-blue-100 font-bold text-start">CONTÁCTANOS</div>
            <p class="font-medium text-sm text-center sm:text-left">Si tienes preguntas acerca de nuestros servicios, necesitas apoyo o quieres dar
                retroalimentación, nuestros colaboradores están listos para ayudarte.
            </p>
            <div class="flex flex-col justify-start align-start w-full ">
                <div class="flex flex-row justify-start ">
                    <img src="https://i.ibb.co/5g6HbXR8/whatsapp.png" class="max-w-9" alt="whatsappicon">
                    <div>Whatsapp: 3107688777</div>
                </div>
                <div class="flex flex-row justify-start">
                    <img src="https://i.ibb.co/bMWWyXXs/letter-envelope-1.png" class="max-w-9" alt="lettericon">
                    <div>Email: medicoopipsltda2@gmail.com</div>
                </div>
            </div>
            <div class="flex justify-center w-full h-full pr-3">
                <iframe class="xl:w-650 xl:h-45" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.367095072147!2d-73.64120752426929!3d4.14800739582581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2de459653605%3A0x2ec31ee3dd6bd560!2sMedicoop%20IPS!5e0!3m2!1ses-419!2sco!4v1746563231857!5m2!1ses-419!2sco" width="450"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
        <img src="https://i.ibb.co/n8Z2X7J3/celpagweb-compressed-1.png" class="max-w-5/15 lg:max-w-8/15" alt="celular"></img>
    </div>
    <div class="flex max-md:flex-col md:max-2xl:flex-row justify-evenly items-center p-4 w-full">
        <form class="border-1 border-green-300 rounded-xl sm:w-9/12 p-2 md:max-lg:max-w-8/15  lg:max-2xl:max-w-8/15 max-w-8/12" action="/api/send" method="POST">
            <div id="formulario" class="flex flex-row justify-around align-middle w-full ">
                <div class="flex flex-col justify-center items-center p-2 gap-3 w-xs overflow-hidden">
                    <img src="https://i.ibb.co/bgngFqGD/nuevologomedicoop.png" class="max-w-29" alt="medicooplogo">
                    <p class="text-center text-xs text-blue-100 w-full text-overflow-hidden">Escribenos tus peticiones, quejas, reclamos y sugerencias:
                    </p>
                </div>
                <div class="flex flex-col justify-center items-start w-full h-40" >
                    <input type="text" name="name" placeholder="Nombre"
                        class="text-sm text-blue-100 font-normal border-1 border-blue-100 rounded-md w-3/3 h-10 px-2 mb-2 mt-2">
                    <input type="phone" name="phone" placeholder="Telefono"
                        class="text-sm text-blue-100 font-normal border-1 border-blue-100 rounded-md w-3/3 h-10 px-2 mb-2 mt-2">
                    <input type="mail" name="mail" placeholder="Correo"
                        class="text-sm text-blue-100 font-normal border-1 border-blue-100 rounded-md w-3/3 h-10 px-2 mb-2 mt-2">
                </div>
            </div>
            <div>
                <textarea name="message" placeholder="Escribe aquí tu mensaje"
                    class="text-sm text-blue-100 font-semibold border-1 border-blue-100 rounded-md w-full h-20 px-2 mb-2 mt-2"></textarea>
                <div class="flex flex-row justify-end">
                    <button type="submit" class="bg-blue-100 text-white w-4/12 h-10 sm:w-3/12">Enviar</button>
                </div>
            </div>
        </form>
        <div class="flex flex-col justify-center items-center sm:w-40 sm:h-40 sm:max-2xl:w-65 sm:max-2xl:h-65 md:max-w-7/15 lg:max-w-8/15 ">
            
            <div class="text-blue-100 font-bold text-center">¡Tu opinion es importante para nosotros!</div>

            <div class="flex flex-col justify-center items-center w-45 h-45 sm:w-55 sm:h-55 rounded-full  bg-gray-100 p-2 gap-1">
                <img src="https://i.ibb.co/jv9K07cx/logomedicoopbicolor.png" class="max-w-12 " alt="medicooplogo">
                <span class="text-center text-xs text-blue-100 p-2 sm:text-sm">puedes dejarnos tus felicitaciones y escribirnos sobre tu
                    experiencia al usar nuestros servicios!
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import waspbtn from '~/components/waspbtn.vue';
const apiUrl = process.env.VUE_APP_API_URL+'api/send' || 'http://localhost:3000/api/send'
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