<template>
    <div>
        <button class="whatsapp-button" @click="redirectToLogin">
           <img src="https://i.postimg.cc/zGXGs8PV/whatsapp.png" alt="WhatsApp" />
        </button>
    </div>
</template>

<script setup lang="ts">

function redirectToLogin() {
  window.location.href = 'https://wa.me/573107688777/?text=Hola%20Quiero%20más%20información%20sobre%20el%20servicio%20de%20...';
}
</script>

<style scoped>
.whatsapp-button {
    position: fixed;
    top: 200px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #fdfffe00;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
}

.whatsapp-button img {
    width: 35px;
    height: 35px;
}

.whatsapp-button:hover {
    background-color: #128C7E;
}
</style>