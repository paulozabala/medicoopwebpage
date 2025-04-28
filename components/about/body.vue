<template>
    <div class="modalmenu flex flex-col">
        <div class="gradient"></div>
        <div class="flex flex-col z-2 gap-3 md:h-90 ">
            <div class="flex flex-row justify-center mt-10">
                <UModal title="Misión"
                    description="Somos una entidad especializada en prestar servicios de salud, con un trato humano, con atención oportuna, con personal altamente calificado equipos especializados, de acuerdo a la normatividad vigente y a las necesidades de la población llanera.">
                    <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white text-white text-lg">
                        Misión
                    </UButton>
                </UModal>
                <UModal title="Visión"
                    description="Nos proyectamos para el 2025 ser reconocidos como una empresa líder en el sector salud, haciendo uso de herramientas tecnológicas, equipos especializados y personal altamente calificado en la prestación de servicios de salud de calidad y humanizados.">
                    <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white  text-white text-lg">
                        Visión
                    </UButton>
                </UModal>
                <UModal title="Política de Calidad">
                    <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white text-white text-lg">
                        Política
                        de
                        Calidad</UButton>
                </UModal>
                <UModal title="Política HSEQ"
                    description="Expresamos nuestro compromiso hacia el cumplimiento y fortalecimiento del Sistema de Gestión de Seguridad, Salud en el Trabajo y Protección Ambiental con el firme propósito de evitar, mitigar y controlar riesgos que puedan producir daños al ser humano, la propiedad y el medio ambiente; promoviendo actividades encaminadas a proteger la salud y seguridad de colaboradores que se encuentren dentro de las instalaciones de la entidad.">
                    <UButton class="bg-transparent font-bold hover:bg-[#1A4A60]  hover:text-white text-white text-lg">
                        Política
                        HSEQ
                    </UButton>
                </UModal>
            </div>
            <div class="flex flex-col md:flex-row justify-around items-center px-10 font-bold text-blue-100 h-70 ">
                <div class="text-blue-100 min-w-xs text-center md:text-start">Ofrecemos acceso oportuno, confortable y seguro, pensado
                    en la
                    satisfacción de nuestros usuarios.
                </div>
                <video class="max-w-xs max-h-2xl rounded-3xl border-blue-200 border-2 bg-blue-200 p-2" controls>
                    <source src="C:\Users\nmwh3\OneDrive\Escritorio\FOTOS\web comprimidas\centrodefisioterapia.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div id="imgbox" class="flex flex-row justify-around items-center text-blue-100 font-bold md:h-60 z-3 pl-10" >
            <img src="../../assets/personal/Equipo.png" alt="team.jpg">
            <p class="px-5 text-center">
                Nuestros colaboradores del área administrativa y de salud están altamente
                capacitados y siempre dispuestos a brindar la mejor atención a nuestros usuarios
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.modalmenu {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
   /*  height: 100vh !important; */
}

.gradient {
    position: absolute;
    top: 1px;
    left: 0px;
    background: linear-gradient(to bottom, #47D38F 17%, #FFFFFF 100%);
    height: 50%;
    width: 100%;
    z-index: 1;
}

.UButton:hover {
    background-color: #1A4A60 !important;
}


/* #imgbox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    padding: 0px 20px 10px 0px;
    z-index: 3 !important;

} */

img {
    width: 50%;
    height: 300px;
    object-fit: contain;
}

@media (max-width: 768px) {
}

@media (max-width: 433px) {
    #imgbox {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 0px 20px 10px 0px;
    }

    img {
        width: 100%;
        height: auto;
    }
}
</style>