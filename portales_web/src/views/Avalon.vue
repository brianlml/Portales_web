<template>
<div class="fondo2">
  <div>
      <!-- Header -->
      <header class="bg-dark mt-5 py-5 mb-5 texto1">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <img src="../assets/nuevoslogos/logotipo (2).png" />
              <p class="lead mb-5 text-white-50">Diversion Sin Precedentes</p>
            </div>
          </div>
        </div>
      </header>
      <!--/Header-->
  </div>

  <!-- Page Content -->
  <div class="container">

    <div class="row">
      <div class="col-md-8 mb-5">
          <h2>Acerca de Avalon</h2>
          <hr>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, magni.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab, vitae magnam aut nesciunt illo officiis possimus nihil quibusdam alias?</p>
      </div>
        <div class="col-md-4 mb-5">
            <h2>Contacto</h2>
            <hr>
                <address>
                      <strong>Avalon</strong>
                      <ul class="social-footer2">
                        <li class>
                          <a href="https://www.facebook.com/avaloncbba/" target="_blank" title="Facebook">
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
                          <a href="https://www.facebook.com/pg/avaloncbba/about/?ref=page_internal" target="_blank" title="Teléfono">
                            <img
                              alt="Teléfono"
                              width="30"
                              height="30"
                              src="../assets/icons/telefono.png"
                            />
                          </a>
                        </li>
                        76112700
                      </ul>
                      <strong>Horario</strong>
                       <b-nav>
                              <b-nav-item-dropdown
                                id="my-nav-dropdown"
                                text="Dias de atencion"
                                toggle-class="nav-link-custom" 
                                right
                              >
                                <b-dropdown-item>Lunes:      CERRADO</b-dropdown-item>
                                <b-dropdown-item>Martes:     CERRADO</b-dropdown-item>
                                <b-dropdown-item>Miercoles:  CERRADO</b-dropdown-item>
                                <b-dropdown-item>Jueves:     CERRADO</b-dropdown-item>
                                <b-dropdown-item>Viernes:    22:00-03:00</b-dropdown-item>
                                <b-dropdown-item>Sabado:     22:00-03:00</b-dropdown-item>
                                <b-dropdown-item>Domingo:    CERRADO</b-dropdown-item>
                              </b-nav-item-dropdown>
                       </b-nav>
                </address>
                <div>
                    <h2>Eventos</h2>
                    <hr>
                      <b-button v-b-modal.modal-1>Click aquí</b-button>
                        <b-modal id="modal-1" title="Avalon" hide-footer>
                          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Favaloncbba%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
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
    </div><!--/.row-->
    <!-- /.row -->

    <div class="row">
              <div class="col-md-4 mb-5">
              </div>
                  <div class="gallery2 fondo2">
                              <b-container class="bv-example-row albun2">
                                        <b-row align-h="start">
                                              <b-col cols="4">
                                                <img src="../assets/rooftop_4.jpg" alt="">
                                              </b-col>
                                              <b-col cols="4">
                                                <img src="../assets/rooftop_3.jpg" alt="">
                                              </b-col>
                                        </b-row>
                                        <b-row align-h="center mt-5">
                                              <b-col cols="4">
                                                <img src="../assets/rooftop_6.jpg" alt="">
                                              </b-col>
                                              <b-col cols="4">
                                                <img src="../assets/rooftop_9.jpg" alt="">
                                              </b-col>
                                        </b-row>
                                        <b-row align-h="end mt-5">
                                              <b-col cols="4">
                                                <img src="../assets/rooftop_1.jpg" alt="">
                                              </b-col>
                                              <b-col cols="4">
                                                <img src="../assets/rooftop_11.jpg" alt="">
                                              </b-col>
                                        </b-row>
                              </b-container>
                  </div>
    </div><!--/row-->
  </div><!--/Container-->
</div>
</template>

<script>
export default {};
</script>

<style>
.albun2 {
  margin: 100px;

}
.gallery2 {
  display: grid;
  grid-auto-columns: auto auto auto;
}
.gallery2 img {
  width: 100%;
  border-radius: 20px;
}
.fondo2 {
  background: radial-gradient(#4ec0e1, #1c375c, #151633);
}
</style>