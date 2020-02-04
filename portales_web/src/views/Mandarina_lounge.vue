<template>
<div>
  <!--/Header-->    
    <header class="py-5 mb-0 titulo2">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-12">
            <h1 class="display-4 text-white mt-5 mb-2">
              <img src="../assets/logotipo4.png" alt="">
            </h1>
            <p class="lead mb-5 text-white-50">disfruta de la excelente musica con la variedad de bebidas.</p>
          </div>
        </div>
      </div>
    </header>
  <!--/Header-->
    <div class="tarjeta2">
        <b-container>
            <b-row class="bv-example-row">
                  <b-col>
                      <img src="../assets/mandar_2.jpg" alt="" class="djs2">
                  </b-col>
                  <b-col>
                                <div>
                                          <!-- Page Content -->
                                          <div class="container">
                                            <div class="row">
                                                <div class="col-md-8 mb-5">
                                                      <h2>Mandarina LOUNGE</h2>
                                                      <hr>
                                                      <p>MANDARINA LOUNGE desde su inicio el 13 de diciembre de 2003 ha revolucionado el concepto de club en nuestro medio, logrando una excelente combinación en diseño, arquitectura, servicio sofisticado, iluminación y sonido. 
                                                      Durante estos más de 15 años MANDARINA se ha consolidado como una tradición en las noches cochabambinas.</p>
                                                      </div>
                                                      <div class="col-md-4 mb-5">
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
                                                                    <b-modal id="modal-1" title="Mandarina lounge" hide-footer>
                                                                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMandarinaLOUNGE%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                                                                          width="470" 
                                                                          height="300" 
                                                                          style="border:none;overflow:hidden" 
                                                                          scrolling="no" 
                                                                          frameborder="0" 
                                                                          allowTransparency="true" 
                                                                          allow="encrypted-media"
                                                                        ></iframe>
                                                                    </b-modal>
                                                            </div>
                                                      </div>
                                                </div>
                                            </div><!--/row-->
                                      
                                      
                                </div>
                  </b-col>
            </b-row>
        </b-container>
    </div>
    <div class="gallery2 fondo2">
              <b-container class="bv-example-row albun  ">
                    <b-row>
                      <b-col>
                          <img src="../assets/mandar_6.jpg">
                      </b-col>
                      <b-col>
                          <img src="../assets/mandar_8.jpg" class="mb-4">
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                          <img src="../assets/mandar_11.jpg" alt="">
                      </b-col>
                      <b-col>
                          <img src="../assets/manda_1.jpg" alt="">
                      </b-col>
                      <b-col>
                          <img src="../assets/manda_4.jpg" alt="">
                          <img src="../assets/mandar_3.jpg" class="mt-5">
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
.titulo2{
  background: linear-gradient(#2c778d 30%,#cc672a)
}
.tarjeta2{
background: linear-gradient(#cc672a 20%,#2c778d,#151633)
}
.fondo2{
  background: linear-gradient(180deg,#151633,#2c778d,#4ec0e1,#151633)
}
.albun2{
    margin: 90px;
    padding:60px;
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
  height: 400px;
  width: 500px;
  margin: 50px;
  border-radius: 30px
}

</style>