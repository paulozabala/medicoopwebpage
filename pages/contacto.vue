<template fluid>
    <div class="bdy">
        <component :is="header" class="w-full"/>
        <component :is="modalbtns" class="w-full" id="modalbtns"/>
        <component :is="body" />
        <component :is="footer" class="w-full"/>
    </div>
</template>

<script setup lang="ts">
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import modalbtns from '~/components/contacto/modalbtns.vue'
import body from '~/components/contacto/body.vue'
</script>

<style scoped>
.bdy {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: white;
    height: 100vh;
    width: 100%;
    overflow: scroll;
}

#modalbtns {
    position: relative;
    top: 1px;
    left: 0px;
    background: linear-gradient(to bottom, #47D38F 17%, #FFFFFF 100%);
    min-width: 100%;
}

</style>