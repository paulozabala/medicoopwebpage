<template>
    <NuxtLayout name="header" />
</template>

<script setup lang="ts">

import { useRoute } from "vue-router";

const loginw = ref<boolean>(false)
const successLogin = ref<boolean>(false)
const inValidLogin = ref<boolean>(false)

//routing
const router = useRouter()
const route = useRoute()


onMounted(() => {
    loginw.value = true;
})

interface logformStructure {
    nombre: string,
    password: string,
    perfil: string
}

const logform = reactive<logformStructure>({
    nombre: "",
    password: "",
    perfil: "",
})


function usernotfoundmsg() {
    alert("mensjae: no encontrado")
    //if (loginErrMsgRef.value) loginErrMsgRef.value.focus();
}
</script>

<style>

div>input {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: medium;
    border-radius: 3px;
    margin: 0px 15px;
    padding: 5px;
}

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    font-weight: bold;
    color: white;
    border-width: 1px;
    margin: 0px 45px;
}
</style>