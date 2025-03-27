<template>
    <div>
        <component :is="header" />
    </div>
</template>

<script setup lang="ts">
import header from '~/components/header.vue';
</script>

<style>
.boxoutofwhitebox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border-bottom: 20px grey !important;
}

.logo {
  width: 60px;
  height: 60px;
}

#logobox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 500px 0px 500px 0px;
  height: 80%;
  min-width: 80%;
  max-width: 90%;
}
</style>