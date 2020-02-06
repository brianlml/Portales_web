<template>
<div class="titulo2">
  <!--/Header-->    
    <b-container class="py-5" fluid>
        <b-row>
          <b-col class="pt-4" cols="12"><b-img :src="require('../assets/logotipo4.png')" class="w-40" fluid></b-img></b-col>
        </b-row>
    </b-container>
  <!--/Header-->
    <div class="">
        <b-container>
            <b-row class="">
                  <b-col>
                      <b-img :src="require('../assets/mandar_2.jpg')" class="pt-3 djs2 w-100 mt-2" fluid></b-img>
                  </b-col>
                  <b-col class="ml-auto mt-4" cols="12" lg="4">
                                <div>
                                      <!-- Page Content -->
                                       <h2>Mandarina LOUNGE</h2>
                                       <hr>
                                       <p>MANDARINA LOUNGE desde su inicio el 13 de diciembre de 2003 ha revolucionado el concepto de club en nuestro medio, logrando una excelente combinación en diseño, arquitectura, servicio sofisticado, iluminación y sonido. 
                                        Durante estos más de 15 años MANDARINA se ha consolidado como una tradición en las noches cochabambinas.</p>
                                </div>
                  </b-col>              
                  <b-col class="mt-4 ml-auto">
                                                          <div>
                                                                <h2>Contacto</h2>
                                                                <hr>
                                                                <address>
                                                                          <strong>Mandarina Lounge</strong>
                                                                              <ul class="social-footer2">
                                                                                <li class>
                                                                                  <a href="https://www.facebook.com/MandarinaLOUNGE/" target="_blank" title="Facebook">
                                                                                    <img
                                                                                      alt="Facebook"
                                                                                      width="30"
                                                                                      height="30"
                                                                                      src="../assets/icons/facebook.png"
                                                                                    />
                                                                                  </a>
                                                                                </li>
                                                                                Facebook
                                                                              </ul>
                                                                              <strong>Teléfono</strong>
                                                                              <ul class="social-footer2">
                                                                                <li class>
                                                                                  <a href="https://www.facebook.com/pg/MandarinaLOUNGE/about/?ref=page_internal" target="_blank" title="Teléfono">
                                                                                    <img
                                                                                      alt="Teléfono"
                                                                                      width="30"
                                                                                      height="30"
                                                                                      src="../assets/icons/telefono.png"
                                                                                    />
                                                                                  </a>
                                                                                </li>
                                                                                4 4798613
                                                                              </ul>
                                                                </address>
                                                            <div>
                                                                    <h2>Eventos</h2>
                                                                    <hr>
                                                                    <b-button v-b-modal.modal-1>Click aquí</b-button>
                                                                    <div>
                                                                      <b-modal id="modal-1" title="Mandarina lounge" hide-footer>
                                                                        <div class="responsive">
                                                                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMandarinaLOUNGE%2F&tabs=events&width=350&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                                                                            width="350" 
                                                                            height="300" 
                                                                            style="border:none;overflow:hidden" 
                                                                            scrolling="no" 
                                                                            frameborder="0" 
                                                                            allowTransparency="true" 
                                                                            allow="encrypted-media"
                                                                            ></iframe>
                                                                          </div>
                                                                      </b-modal>
                                                                    </div>
                                                            </div>
                                                          </div>
                  </b-col>
            </b-row>
        </b-container>
    </div>
    <div class="pt-4 gallery2">
              <b-container class="">
                    <b-row class="">
                            <b-col cols="12" lg="6" class="py-4">
                                <img src="../assets/mandar_6.jpg">
                            </b-col>
                            <b-col cols="12" lg="6" class="py-4">
                                <img src="../assets/mandar_8.jpg">
                            </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12" lg="4" class="py-4">
                          <img src="../assets/mandar_11.jpg">
                      </b-col>
                      <b-col cols="12" lg="4" class="py-4">
                          <img src="../assets/manda_1.jpg">
                      </b-col>
                      <b-col cols="12" lg="4" class="py-4">
                          <img src="../assets/manda_4.jpg" class="mb-4">
                          <img src="../assets/mandar_3.jpg">
                      </b-col>
                    </b-row>
              </b-container>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.responsive {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
}
.responsive iframe {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
}
.titulo2{
  background: linear-gradient(150deg,	#1c375c 10%,#2c778d,	#e66a4e 50%,#1f2747 70%)
}
.tarjeta2{
background: linear-gradient(#cc672a 20%,#2c778d,#151633)
}
.fondo2{
  background: linear-gradient(180deg,#151633,#2c778d,#4ec0e1,#151633)
}
.albun2{
   
    padding:60px;
}
.bordecito {
  border-radius: 30px;
}
.gallery2{
    display:grid;
    grid-auto-columns: auto auto auto;
}
.gallery2 img{
    width:100%;
    border-radius: 20px
}
.djs2{
  height: 400;
  width: 500;
  border-radius: 30px
}

</style>