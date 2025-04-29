<template fluid>
  <div id="topMenu">
    <div class="boxoutofwhitebox">
      <div id="logobox">
        <img src="../public/logonly.png" alt="logo" class="logo" />
      </div>
    </div>
    <div id="btns" @click="router.push('/')">Inicio</div>
    <div id="btns" @click="router.push('/about')">Conócenos</div>
    <div id="btns">Blog</div>
    <div >
      <UDropdownMenu  :items="items" class="flex justify-center">
        <UButton label="Servicios" id="btns" class="bg-transparent ">
        </UButton>
      </UDropdownMenu>
    </div>
    <!-- <div id="btns">Servicios</div> -->
    <div id="btns" @click="router.push('/contacto')">Contácto</div>
    <div id="btns" class="text-center" @click="redirectToLogin">Acceso Usuarios</div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
import type { DropdownMenuItem } from '@nuxt/ui'

function redirectToLogin() {
  window.location.href = 'https://titansoluciones.cloud/financiero/#/loginresmed_8793';
}

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Actividades en Seguridad y Salud en el Trabajo',
    icon: 'healthicons:factory-worker-outline',
    to: '/sst'
  },
  {
    label: 'Certificados de Discapacidad',
    icon: 'healthicons:wheelchair',
    to: '/discapacidadcertificados'
  },
  {
    label: 'Consulta Especializada',
    icon: 'healthicons:doctor-male',
    to: '/consultaespecializada'
  },
  {
    label: 'Consulta Med. Alternativa y Procedimientos',
    icon: 'healthicons:interoperability',
    to: '/medicinaalternativa'
  },
  {
    label: 'Fonoaudiología y Terapia de Lenguaje',
    icon: 'healthicons:hearing-aid',
    to: '/terapiasdelenguajeyocupacional'
  },
  {
    label: 'Nutrición y Dietética',
    icon: 'healthicons:fruits',
    to: '/nutricionydietetica'
  },
  {
    label: 'Optometría',
    icon: 'healthicons:eyeglasses',
    to: '/optometria'
  },
  {
    label: 'Procedimientos de Electrodiagnóstico',
    icon: 'healthicons:ventilator-alt-outline',
    to: '/procedimientoselectrodiagnostico'
  },
  {
    label: 'Psicología',
    icon: 'healthicons:psychology',
    to: '/psicologia'
  },
  {
    label: 'Terapia Física',
    icon: 'healthicons:physical-therapy',
    to: '/terapiafisica'
  },
  {
    label: 'Terapia Ocupacional',
    icon: 'i-lucide-cog',
    to: '/terapiasdelenguajeyocupacional'
  },
])
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
  margin: 4px;

}

#btns {
  color: white;
  font-weight: 800;
  font-size: 22px;
}

#btns:hover {
  background-color: black !important;
  cursor: pointer !important;
  border-radius: 7px;
  height: 42px;
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
  .logo {
    width: 50px !important;
    height: 50px !important;
  }

  #btns {
    color: white;
    font-weight: 800;
    font-size: 18px;
    width: 100%;
  }
}

/* Tabletas*/

@media (max-width: 768px) {
  .logo {
    width: 40px !important;
    height: 40px !important;
  }

  #LinkBox {
    height: 288px !important;
  }

}

@media (max-width: 650px) {
  #topMenu {
    height: 45px !important;
  }

  .logo {
    width: 25px !important;
    height: 25px !important;
  }

  #logobox {
    min-width: 90% !important;
    max-width: 100% !important;
  }

  #btns {
    font-size: 15px;
  }
}

/*/ Celulares */

@media (max-width: 450px) {
  #topMenu {
    height: 35px !important;
  }

  .logo {
    width: 20px !important;
    height: 20px !important;
  }

  #btns {
    font-size: 11px;
  }

  #btns:hover {
    height: 35px;
  }
}

@media (max-width: 350px) {
  #topMenu {
    height: 35px !important;
  }

  .logo {
    width: 20px !important;
    height: 20px !important;
  }

  #logobox {
    width: 100% !important;
    border-radius: 20px 0px 20px 0px !important;
  }
  
  #btns {
    font-size: 10px;
  }
}
</style>
