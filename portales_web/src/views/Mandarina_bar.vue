<template>
<div>
            <!--Header-->
            <header class="py-5 mb-0 titulo">
                    <div class="container h-100">
                      <div class="row h-100 align-items-center">
                        <div class="col-lg-12">
                          <h1 class="display-4 text-light mt-5 mb-2">
                            <img src="../assets/logobar0.png" alt="">
                          </h1>
                          <p class="lead mb-5 text-white-50">disfruta de la excelente musica con la variedad de bebidas.</p>
                        </div>
                      </div>
                    </div>
            </header>
            <!--/Header-->
        <div class="tarjeta">
              <b-container>
                    <b-row class="bv-example-row">
                              <b-col>
                                  <img src="../assets/mandabar_5.jpg" alt="" class="dj">
                              </b-col>
                              <b-col>
                                  <div class="colores">
                                            <!-- Page Content -->
                                            <div class="container py-5">
                                                        <div class="row">
                                                              <div class="col-md-8 mb-5">
                                                                  <h2>Acerca de Mandarina Bar.</h2>
                                                                  <hr>
                                                                  <p>2007, NACE MANDARINA BAR para traer a Cochabamba la cultura de los grandes bares del mundo. Un lugar para ver y ser visto, un proyecto enfocado en comida, piqueos, variedad de bebidas, música variada.</p>
                                                                  <p>Con el personal capacitado para ofrecer la mejor atención a nuestros comensales.</p>
                                                              </div>
                                                              <div class="col-md-4 mb-5">
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
                                                                          <b-modal id="modal-1" title="Mandarina bar" hide-footer>
                                                                              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMandarinaBarCocha%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                                                                              width="470" 
                                                                              height="300" 
                                                                              style="border:none;overflow:hidden" 
                                                                              scrolling="no" 
                                                                              frameborder="0" 
                                                                              allowTransparency="true" 
                                                                              allow="encrypted-media">
                                                                              </iframe>
                                                                          </b-modal>
                                                                    </div>
                                                              </div>
                                                        </div><!--/row-->
                                            </div>
                                  </div>
                              </b-col>
                    </b-row>
              </b-container>
        </div>
  <div class="gallery fondo">
        <b-container class="bv-example-row albun">
                    <b-row>
                          <b-col>
                              <img src="../assets/mandabar_1.jpg">
                          </b-col>
                          <b-col>
                              <img src="../assets/mandabar_2.jpg" class="mb-4">
                          </b-col>
                    </b-row>
                    <b-row>
                          <b-col>
                              <img src="../assets/mandabar_3.jpg" alt="">
                          </b-col>
                          <b-col>
                              <img src="../assets/mandabar_4.jpg" alt="">
                          </b-col>
                          <b-col>
                              <img src="../assets/mandabar_7.jpg" alt="" height="240px">
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
.titulo{
  background: linear-gradient(#2c778d, #1c375c,#151633)
}
.tarjeta{
  background: linear-gradient(#151633,#4ec0e1);
}
.fondo{
  background: linear-gradient(#4ec0e1,#151633)
}
.dj{
  height: 400px;
  width: 500px;
  margin: 50px;
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
    border-radius: 20px
}
.albun{
  margin: 50px;
  padding: 50px
}
</style>