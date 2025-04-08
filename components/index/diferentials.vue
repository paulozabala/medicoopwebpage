<template>
    <div class="trespilares">
        <div class="boxinside">
            <div class="head">
                <img src="../../assets/tipos&logos/Triangle.png" alt="">
            </div>
            <div class="card">Estamos certificados y habilitados para la emisión de certificados de discapacidad por el
                ministerio de salud.</div>
        </div>
        <div class="boxinside">
            <div class="head">
                <img src="../../assets/tipos&logos/share.png" alt="">
            </div>
            <div class="card">Contamos con los mejores equipos interdisciplinarios para la recuperación física y
                funcional de nuestros usuarios</div>
        </div>
        <div class="boxinside">
            <div class="head">
                <img src="../../assets/tipos&logos/flash-circle.png" alt="">
            </div>
            <div class="card">Brindamos resultados rápidos y efectivos en nuestros procesos de recuperacion y
                certificación</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.trespilares {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 10px;
}

.boxinside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2px;
    padding: 0px 10px;
    min-height: 390px;
}

.head {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 155px;
    width: 350px;
}

img {
    width: 70px;
}

.card {
    width: 350px;
    height: 260px;
    text-align: center;
    font-size:26px;
    color: black;
}

@media (max-width: 2500px) {
    .trespilares {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }

}


@media (max-width: 645px) {
    .boxinside {
        min-height: 180px !important;
    }

    .head {

        height: 70px;
    }

    img {
        width: 70px;
    }

    .card {
        font-size:22px;
        height: 200px;
    }

}


@media (max-width: 360px) {
    .boxinside {
        min-height: 180px !important;

    }

    .head {
        width: 220px !important;
        height: 70px;
    }

    img {
        width: 70px;
    }

    .card {
        width: 220px !important;
        font-size:20px;
        height: 200px;
    }

}
</style>