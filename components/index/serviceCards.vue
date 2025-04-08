<template>
    <div class="serviceCards">
        <div class="boxinside">
            <div class="head">
                <img src="../../assets/tfisica.png" alt="">
            </div>
            <div class="card"><span id="title">Rehabilitación física Integral y Ocupacional</span>
            <p class="mt-4">¡Recuperación integral, bienestar asegurado!</p></div>
        </div>
        <div class="boxinside">
            <div class="head">
                <img src="../../assets/personal/consulta-especializada.jpg" alt="">
            </div>
            <div class="card"><span id="title">Consulta Médica Especializada</span>
                <ul class="">
                    <li>Ortopedia</li>
                    <li>Fisiatría</li>
                    <li>Psiquiatría</li>
                    <li>Neurocirugía</li>
                    <li>Med. Laboral</li>
                </ul>
            </div>
        </div>
        <div class="boxinside">
            <div class="head">
                <img src="../../assets/personal/otero_yeny.jpeg" alt="">
            </div>
            <div class="card"><span id="title">Exámen Médico Ocupacional</span>
                <ul>
                    <li>Ingreso</li>
                    <li>Egreso</li>
                    <li>Periódicos</li>
                </ul>
            </div>
        </div>
        <div class="boxinside">
            <div class="head">
                <img src="../../assets/trabajador(compressed).jpg" alt="">
            </div>
            <div class="card"><span id="title">Exámen Médico Ocupacional</span>
                <ul>
                    <li>Ingreso</li>
                    <li>Egreso</li>
                    <li>Periódicos</li>
                </ul>
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
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
    padding: 0px 10px !important;
}

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
    padding-left: 40px;
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
        font-size: 18px;
    }
}
</style>