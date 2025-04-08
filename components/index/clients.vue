<template>
    <div class="flex flex-col justify-center min-w-4/5">
        <div class="flex justify-center min-w-5/5 pt-10 px-30">
            <span class="text-4xl text-blue-100 font-semibold text-center">
                Algunos de nuestros convenios:
            </span>
        </div>
        <div class="flex justify-center min-w-5/5 px-30 py-5">
            <p class="text-2xl text-black font-light text-justify">
                Contamos con convenios que nos permiten acompañar a usuarios de nuestros aliados en el proceso de
                atención,
                diagnóstico, tratamiento y acompañamiento en la recuperación de su salud.
            </p>
        </div>
        <div class="clients">
            <img src="../../assets/clientes/fomag.jpg" alt="">
            <img src="../../assets/clientes/positiva.jpg" alt="">
            <img src="../../assets/clientes/axalogo.jpg" alt="">

            <img src="../../assets/clientes/suralogo.png" alt="">
            <img src="../../assets/clientes/cajacopi.jpg" alt="">
            <img src="../../assets/clientes/colmena-seg.jpg" alt="">

            <img src="../../assets/clientes/Bolivar.jpg" alt="">
            <img src="../../assets/clientes/logotempoaseo.png" alt="">
            <img src="../../assets/clientes/logo_colsanitas.jpg" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.clients {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    margin-top: 10px;
    padding: 30px 10px !important;
}


img {
    width: 100%;
    max-width: 180px;
    height: 140px;
    border-radius: 15px;
    opacity: 70%;
}


@media (max-width: 2500px) {
    .clients {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>