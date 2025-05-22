<template>
    <div class="serviceCards ">
        <div class="card">
            <img class="img" src="https://i.ibb.co/g19qY0s/tfisica.png" />
            <div class="textBox">
                <p class="text head text-center">Rehabilitación Física Integral y Ocupacional</p>
                <span class="text-center text-xs">¡Recuperación integral, bienestar asegurado!</span>
                <p class="text ending">Contáctanos!</p>
            </div>
        </div>
        <div class="card">
            <img class="img" src="https://i.ibb.co/DgR206km/consulta-especializada.jpg" />
            <div class="textBox">
                <p class="text head text-center">Consulta Médica Especializada</p>
                <ul class="px-10 pt-4 text-start md:text-sm md:px-2 md:pt-2">
                    <li>Ortopedia</li>
                    <li>Fisiatría</li>
                    <li>Psiquiatría</li>
                    <li>Neurocirugía</li>
                    <li>Med. Laboral</li>
                </ul>
                <p class="text ending">Contáctanos!</p>
            </div>
        </div>
        <div class="card">
            <img class="img" src="https://i.ibb.co/FkmDq2Kb/Otero-Yeny.jpg" />
            <div class="textBox">
                <p class="text head text-center">Exámen Médico Ocupacional</p>
                <ul class="px-10 pt-4 text-start md:text-sm md:px-2 md:pt-2">
                    <li>Ingreso</li>
                    <li>Egreso</li>
                    <li>Periódicos</li>
                </ul>
                <p class="text ending">Contáctanos!</p>
            </div>
        </div>
        <div class="card">
            <img class="img" src="https://i.ibb.co/rGwpk895/trabajador-compressed.jpg" />
            <div class="textBox">
                <p class="text head text-center">Otros Servicios Ocupacionales:</p>
                <ul class="px-10 pt-4 text-center md:text-sm md:px-2 md:pt-2 decoration-cicle">
                    <li>Análisis puesto de trabajo</li>
                    <li>Eval. Ergonómica</li>
                    <li>Juntas de Rehabilitación, otros...</li>
                </ul>
                <p class="text ending">Contáctanos!</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.serviceCards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin-top: 10px;
    padding: 0px 10px !important;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5px;
    border-radius: 20px;
    width: 195px;
    height: 300px;
    background: linear-gradient(to bottom, #2DCD7F 2%, #1A4A60 68%) !important;
    /* background: #313131; #3699C6*/
    transition: 0.2s ease-in-out;

}

.img {
    position: absolute;
    border-radius: 7px;
    object-fit: cover;
    width: 180px;
    height: 30%;
    transition: 0.2s ease-in-out;
    z-index: 1;
}

.textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: 0.2s ease-in-out;
    z-index: 2;
}

.textBox>.text {
    font-weight: bold;
}

.textBox>.head {
    font-size: 17px;
}

.textBox>.ending {
    font-size: 17px !important;
}

.textBox>ul {
    font-size: 16px;
}

.card:hover>.textBox {
    opacity: 1;
}

.card:hover>.img {
    height: 65%;
    filter: blur(170px);
    animation: anim 3s infinite;
}

@keyframes anim {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
}

.card:hover {
    transform: scale(1.04) rotate(-1deg);
    background-color: black;
    color: white;
}


/*
.boxinside {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 8px;
    border-radius: 15px;
    background: linear-gradient(to bottom, #3699C6 2%, #1A4A60 68%) !important;
    padding: 10px 10px;
    height: 500px;
}

.head {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 240px;
}

img {
    width: 230px;
    height: 240px;
    object-fit: cover;
    border-radius: 15px 15px 115px 15px;
}

.card {
    width: 230px;
    height: 180px;
    text-align: center;
    color: white;
}

#title {
    font-weight: 800;
}

ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left:30px;
}

li {
    list-style-type: circle;
}


@media (max-width: 2500px) {
    .serviceCards {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
}


@media (max-width: 1400px) {
    .boxinside {
        height: 470px !important;
    }
}

@media (max-width: 768px) {
    .boxinside {
        height: 460px !important;
    }

    .card {
        font-size: 16px;
    }
} */
</style>