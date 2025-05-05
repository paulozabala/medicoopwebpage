<template>
    <div class="bdy">
       <component :is="header" class="w-full"/>
       <component :is="body" class="w-full"/>
       <component :is="footer" class="w-full"/>
   </div>
</template>

<script setup>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import body from '../components/teleconsulta/body.vue'
</script>

<style  scoped>
.bdy {
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   background-color: white;
   height: 100vh;
   width: 100%;
}
</style>