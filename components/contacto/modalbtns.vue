<template>
    <div class="flex flex-row justify-center min-h-35 gap-4 p-4">
        <UModal>
            <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white text-white text-lg sm:max-h-15 md:text-md">
                Horarios de Atención
            </UButton>
            <template #content>
                <div class="bg-white max-w-lg rounded-xl overflow-scroll">
                    <div class="text-blue-100 text-lg font-bold p-5 pb-0">
                        Horarios de Atención:
                    </div>
                    <div class="p-7 text-blue-100 ">
                        <div class="font-bold pt-1">
                            Presencial:
                        </div>
                        <div>
                            <p class="pt-2 pl-2 text-justify">
                                Lunes a Viernes: 7 am - 12 pm y 2 - 5pm.
                            </p>
                            <p>
                                Sábados: 8 - 11:30 am
                            </p>
                        </div>
                    </div>
                    <div class="text-blue-100 text-lg font-bold p-5 pb-0">
                        Medios Electrónicos o WhatsApp::
                    </div>
                    <div class="p-7 text-blue-100 ">
                        <div class="font-bold pt-1">
                            Presencial:
                        </div>
                        <div>
                            <p class="pt-2 pl-2 text-justify">
                                Lunes a Viernes: 7 am - 11:30 am y de 2 - 5pm.
                            </p>
                            <p>
                                Sábados: 8 - 11:30 am
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </UModal>
        <UModal>
            <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white text-white text-lg sm:max-h-15 md:text-md">
                Tiempos de Respuesta
            </UButton>
            <template #content>
                <div class="bg-white max-w-xl rounded-xl overflow-scroll">
                    <div class="text-blue-100 text-lg font-bold p-5 pb-0">
                        Nuestros tiempos de respuesta:
                    </div>
                    <div class="p-7 text-blue-100 ">
                        <div class="font-bold">
                            PQRO’S por medios electrónicos (Página Web o WhatsApp):
                        </div>
                        <div class="pt-1">
                            <p class="pl-2">
                                15 días hábiles.
                            </p>
                        </div>
                        <div class="font-bold pt-1">
                            Solicitud de Historias clínicas (Cualquier Medio):
                        </div>
                        <div>
                            <p class="pl-2">
                                3 días Hábiles.
                            </p>
                        </div>
                        <div class="font-bold pt-1">
                            Solicitud de Citas: 24h.
                        </div>
                    </div>
                </div>
            </template>
        </UModal>
        <UModal>
            <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white text-white text-lg sm:max-h-15 md:text-md">
                Solicitud Historia Clínica
            </UButton>
            <template #content>
                <div class="bg-white max-w-xl rounded-xl overflow-scroll">
                    <div class="text-blue-100 text-lg font-bold p-5 pb-0">
                        Solicitud de Historias clínicas (Medios):
                    </div>
                    <div class="p-7 text-blue-100 ">
                        <div class="font-bold pt-1">
                            Página Web o WhatsApp
                        </div>
                        <div>
                            <p class="pl-2">
                                en la pestaña "Acceso Usuarios" en la barra superior puede descargar
                                su historia clínica.
                            </p>
                        </div>
                        <div class="font-bold pt-1">
                            Presencial
                        </div>
                        <div>
                            <p class="pl-2">
                                solicita tu historia clinica diligenciando el formato de manera presencial.
                            </p>
                        </div>
                        <div class="pt-1 pl-2 text-sm font-bold">
                            Nota:
                        </div>
                        <div>
                            <p class="pl-2">
                                Si asiste de manera presencial debe asistir el usuario con su documento de
                                identidad
                                en caso de delegar terceros debe traer poder autenticado por notaria.
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </UModal>


        <UModal title="PQROS">
            <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white text-white text-lg sm:max-h-15 md:text-md">
                PQROS
            </UButton>
            <template #content>
                <div class="bg-white max-w-xl rounded-xl overflow-scroll">
                    <div class="text-blue-100 text-lg font-bold p-5 pb-0">
                        PQROS:
                    </div>
                    <div class="p-7 text-blue-100 ">
                        <div class="font-bold pt-1">
                            Página Web o WhatsApp
                        </div>
                        <div>
                            <p class="pt-2 pl-2 text-justify">
                                Siempre respondemos a tus solicitudes. Utiliza nuestros medios electrónicos
                                y
                                presenciales para
                                dejar tus
                                peticiones, Quejas, Reclamos o Sugerencias.

                                ¡por que tu opinión es importante para nosotros!
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </UModal>
    </div>
</template>

<style>
.UButton:hover {
    background-color: #1A4A60 !important;
}
</style>