<template fluid>
  <div id="topMenu">
    <div class="boxoutofwhitebox">
      <div id="logobox">
        <img src="../../public/logonly.png" alt="logo" class="logo" />
      </div>
    </div>
    <div id="btns" @click="router.push('/about')">Inicio</div>
    <div id="btns">Conócenos</div>
    <div id="btns">Blog</div>
    <div id="btns">Servicios</div>
    <div id="btns">Contácto</div>
    <div id="btns" class="text-center">Acceso Usuarios</div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style>
#topMenu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #2DCD7F;
  width: 100% !important;
}

#topMenu div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.28% !important;
  margin:4px;
  font-weight: bolder;
}

#btns:hover{
  background-color: black !important;
  cursor:pointer !important;
  border-radius: 7px;
  height: 40px;
  overflow:none;
}

.boxoutofwhitebox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.logo {
  width: 50px;
  height: 50px;
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




@media (max-width: 1400px) {
  .logo{
    width: 50px !important;
    height: 50px !important;
  }

 
}

/* Tabletas*/ 

@media (max-width: 768px) {
  .logo{
    width: 40px !important;
    height: 40px !important;
  }

 #LinkBox{
  height: 288px !important;
 }

}

@media (max-width: 650px) {
  #topMenu{
    height: 45px !important;
  }

  .logo{
    width: 25px !important;
    height: 25px !important;
  }

  #logobox{
    min-width: 90% !important;
    max-width: 100% !important;
  }
}

/*/ Celulares */

@media (max-width: 450px) {
  #topMenu{
    height: 35px !important;
  }

  .logo{
    width: 20px !important;
    height: 20px !important;
  }
}

@media (max-width: 350px) {
  #topMenu{
    height: 35px !important;
  }

  .logo{
    width: 20px !important;
    height: 20px !important;
  }

  #logobox{
   width: 100% !important;
   border-radius: 20px 0px 20px 0px !important;
  }
}
</style>
