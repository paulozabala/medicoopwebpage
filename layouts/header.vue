<template fluid>
  <div id="MainPage" class="flex flex-row justify-center">
    <div id="topMenu" >
      <div class="boxoutofwhitebox">
        <div id="logobox" >
          <img src="../public/logonly.png" alt="logo" class="logo" />
        </div>
      </div>
      <div>Inicio</div>
      <div>Conócenos</div>
      <div>Blog</div>
      <div>Servicios</div>
      <div>Contácto</div>
      <div>Acceso Usuarios</div>
    </div>
  </div>
</template>
<style>
#MainPage {
  background-color: white;
  width: 100%;
  height: 100vh;
}

#topMenu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 8px;
  height: 60px;
  background-color: #2DCD7F;
  min-width:100%;
}

#topMenu div{
  display: flex;
  justify-content: center ;
  align-items: center;
  width: 14.28% !important;
  /*font-size: 26px;*/
  font-weight:bolder;
}

.boxoutofwhitebox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.logo {
  width: 60px;
  height: 60px;
}

#logobox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius:500px 0px 500px 0px;
  height: 80%;
  min-width: 80%;
  max-width: 90%;
}

</style>
