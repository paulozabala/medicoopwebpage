<template>
    <div id="footerbox">
        <div id="greenElipse"></div>
        <div id="mainFooter">
            <div id="footer">
                <div id="LinkBox">
                    <div id="Links">
                        <div id="linksColumn">
                            <a class="font-bold text-blue-100">CÓNOCENOS</a>
                            <a href="">Misión</a>
                            <a href="">Visión</a>
                            <a href="">Política de Calidad</a>
                            <a href="">Política de HSEQ</a>
                        </div>
                        <div id="linksColumn">
                            <a class="font-bold text-blue-100">SERVICIOS</a>
                            <a href="">Fisioterapia</a>
                            <a href="">Terapia Ocupacional</a>
                            <a href="">Consulta Especializada</a>
                            <a href="">Certificados de Discapacidad</a>
                            <a href="">Exámenes Ocupacionales</a>
                            <a href="">Teleconsulta</a>
                        </div>
                        <div id="linksColumn">
                            <a class="font-bold text-blue-100">USUARIOS</a>
                            <a href="">Derechos y Deberes</a>
                            <a href="">Consulta de H.C.</a>
                            <a href="">Agendamiento de Citas</a>
                            <a href="">Peticiones, Quejas, Reclamos y Solicitudes</a>
                        </div>
                        <div id="subirColumn">
                            <div class="font-bold text-blue-100">SUBIR</div>
                        </div>
                    </div>
                </div>
                <div id="copyRights">
                    <span>MEDICOOP IPS</span>
                    <hr style="line-height: 20px; width:100%; color: #1A4A60;" />
                    <div id="rightsSocialsBox" class="flex justify-between align-middle">
                        <h6 style="height: 80px; max-width: 600px;">© 2025 - Todos los derechos reservados. Más
                            información: Desarrollo web, balticst3ch@gmail.com
                        </h6>
                        <div id="frame">
                            <img src="../assets/FB.png" alt="fblogo">
                            <img src="../assets/IG.png" alt="iglogo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#footerbox {
    position:relative;
    margin-top: 500px;/*added z*/
    top: 0px;
    left: 0px;
    width: 100%;
    height: 553px;
    /* Establishes a positioning context for absolute children */
}

#greenElipse {
    position: absolute;
    /* Ensure it stays in the background */
    top: 0;
    left: 0;
    background-color: #2DCD7F;
    border-radius: 0px 800px 0px 0px;
    height: 553px;
    width: 100%;
    z-index: 1;
    /* Lower stacking order */
}

#mainFooter {
    position: absolute;
    /* Overlaps #greenElipse */
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 10px;
    height: 553px;
    width: 100%;
    background: transparent;
    /* Ensure no background obscures #greenElipse */
    z-index: 2;
    /* Higher stacking order than #greenElipse */

}

#footer {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: space-around;
}

#LinkBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 362px;
    padding: 20px;

}

#linksColumn {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: auto;
    height: 288px;
    width: 260px;
    padding: 16px 0px;
}


#Links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: auto;
    height: 506px;
    width: 100%;
}


#subirColumn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    height: 288px;
    width: 260px;
    padding: 16px 0px;
}


#copyRights {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
    padding: 0px 20px;
    height: 180px;
}

h6{
    color: black;
    font-weight: 500;
}

#copyRights span {
    font-size: 40px;
    font-weight: 600;
}

#frame {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 178;
    height: 51;
    gap: 23px;
}

#frame img {
    width: 44px;
    height: 39px;
}

#rightsSocialsBox {
    height: 80px;
    width: 100%;
    gap: 10px;
}

@media (max-width: 800px) {
    #greenElipse {
    border-radius: 0px 400px 0px 0px;
}
}
@media (max-width: 600px) {
    #greenElipse {
    border-radius: 0px 350px 0px 0px;
}
@media (max-width: 460px) {
    #greenElipse {
    border-radius: 0px 280px 0px 0px;
}

@media (max-width: 360px) {
    #greenElipse {
    border-radius: 0px 240px 0px 0px;
}

}

}


}
</style>