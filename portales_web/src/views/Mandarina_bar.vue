<template>
<div class="titulo">
            <!--Header-->
            <b-container class="py-4" fluid>
              <b-row>
                <b-col class="pt-4" cols="12" lg="12" md="12">
                  <b-img :src="require('../assets/logobar0.png')" class="mt-4 py-4 w-40" fluid></b-img></b-col>
              </b-row>
            </b-container>
            <!--/Header-->
        <div class="">
              <b-container>
                    <b-row class="">
                              <b-col cols="12" lg="5" md="12">
                                  <b-img :src="require('../assets/mandabar_5.jpg')" class="pt-3 dj w-100 mt-2" fluid></b-img>
                              </b-col>
                              <b-col class="ml-auto mt-4 colores" cols="12" lg="4" md="6">
                                     <!-- Page Content -->
                                            <div>
                                                   <h2>Acerca de Mandarina Bar.</h2>
                                                   <hr>
                                                   <p>2007, NACE MANDARINA BAR para traer a Cochabamba la cultura de los grandes bares del mundo. Un lugar para ver y ser visto, un proyecto enfocado en comida, piqueos, variedad de bebidas, música variada.</p>
                                                   <p>Con el personal capacitado para ofrecer la mejor atención a nuestros comensales.</p>
                                            </div>
                              </b-col>
                              <b-col class="mt-4 ml-auto colores" cols="12" lg="3" md="6">
                                                <div>
                                                    <h2>Contacto</h2>
                                                    <hr>
                                                                    <address>
                                                                              <strong>Mandarina Bar</strong>
                                                                                  <ul class="social-footer2">
                                                                                    <li class>
                                                                                      <a href="https://wwww.facebook.com/MandarinaBarCocha/" target="_blank" title="Facebook">
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
                                                                                      <a href="https://wwww.facebook.com/pg/MandarinaBarCocha/about/?ref=page_internal" target="_blank" title="Teléfono">
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
                                                                            <b-modal id="modal-1" title="Mandarina bar" hide-footer>
                                                                              <div class="responsive">
                                                                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMandarinaBarCocha%2F&tabs=events&width=350&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                                                                                width="350" 
                                                                                height="300" 
                                                                                style="border:none;overflow:hidden" 
                                                                                scrolling="no" 
                                                                                frameborder="0" 
                                                                                allowTransparency="true" 
                                                                                allow="encrypted-media">
                                                                                </iframe>
                                                                              </div>
                                                                            </b-modal>
                                                                          </div>
                                                                    </div>
                                                </div>
                              </b-col>
                    </b-row>
              </b-container>
        </div>
  <div class="pt-4 gallery">
        <b-container class="">
                    <b-row>
                          <b-col cols="12" lg="6" class="py-4">
                              <img src="../assets/mandabar_1.jpg">
                          </b-col>
                          <b-col cols="12" lg="6" class="py-4">
                              <img src="../assets/mandabar_2.jpg">
                          </b-col>
                    </b-row>
                    <b-row class="pt-1">
                          <b-col cols="12" lg="4" class="py-4">
                              <img src="../assets/mandabar_3.jpg">
                          </b-col>
                          <b-col cols="12" lg="4" class="py-4">
                              <img src="../assets/mandabar_4.jpg">
                          </b-col>
                          <b-col cols="12" lg="4" class="py-4">
                              <img src="../assets/mandabar_7.jpg">
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

.titulo{
  background: linear-gradient(170deg,#2c778d 10%,#9ea89f,	#ba6426,#1c375c 90%)
}
.tarjeta{
  background: linear-gradient(#151633,#4ec0e1);
}
.fondo{
  background: linear-gradient(#4ec0e1,#151633)
}
.dj{
  height: 400;
  width: 500;
  border-radius: 30px
}
.colores{
  color:#eef3d8
}
.gallery{
    display:grid;
    grid-auto-columns: auto auto auto;
}
.gallery img{
    width:100%;
    border-radius: 10%
}
.albun{
  margin: 50px;
  padding: 50px
}
</style>