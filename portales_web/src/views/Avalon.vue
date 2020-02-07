<template>
<div class="titulo4">
  <div>
      <!-- Header -->
      <header class="mt-5 py-5">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <b-img :src="require('../assets/nuevoslogos/logotipo (2).png')" fluid alt="Responsive image"></b-img>
            </div>
          </div>
        </div>
      </header>
      <!--/Header-->
  <div class="container-fluid">
    <div class="row py-4">
      <b-col cols="12" lg="4" md="10" class="pl-5 pr-5 pb-5">
        <b-img :src="require('../assets/avalon0.jpg')" fluid alt="Responsive image" class="dj4"></b-img>
      </b-col>
      <b-col cols="12" lg="4" md="6" class="" >
      <div>
          <h2>Acerca de Avalon</h2>
          <hr>
          <p>Quieres disfrutar de los mejores shows de musica en vivo, la discoteca perfecta es AVALON. El sistema de sonido resulta impactante sin mencionar la fabulosa y colorida iluminación.</p>
          <p>Una de las mejores discotecas de Cochabamba, visitado por locales y turistas.</p>
      </div>
      </b-col>
      <b-col cols="12" lg="4" md="6" class="">
        <div>
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
                      <div>                        
                        <b-modal id="modal-1" title="Avalon" hide-footer>
                          <div class="responsive">
                          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Favaloncbba%2F&tabs=events&width=350&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                          width="350" 
                          height="300" 
                          style="border:none;overflow:hidden;width:100%;" 
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
    </div>
  </div>
  <div class="pt-0 gallery4">
        <b-container class="">
          <b-row>
            <b-col cols="10" lg="6" md="5" class="py-4">
              <b-img :src="require('../assets/avalon_1.png')" fluit alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="10" lg="6" md="5" class="pt-4">
              <b-img :src="require('../assets/avalon_2.png')" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>

          <b-row class="pt-3">
            <b-col cols="10" lg="6" md="10" class="py-4">
              <b-img :src="require('../assets/avalon_3.png')" fluid alt="Responsive image"></b-img>
              <b-img :src="require('../assets/avalon_5.png')" fluid alt="Responsive image" class="mt-5"></b-img>
            </b-col>
            <b-col cols="10" lg="6" md="10" class="py-4">
              <b-img :src="require('../assets/aval01.jpg')" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
</div>
</div>
</template>

<script>
export default {};
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
.colores{
  color:#eef3d8
}
.titulo4{
  background: linear-gradient(180deg,#2c778d,#a8dcf3,#2d8daa,	#0193bd,#1f2747)
}
.tarjeta4{
  background: linear-gradient(#a8dcf3,#2d8daa,#2d8daa)
}
.fondo4{
  background: linear-gradient(#2d8daa,#57b0cd,#a8dcf3,#00141b,#1f2747)
}
.dj4{
  height: 100%;
  width: 100%;
  border-radius: 10%;
}
.gallery4{
  display: grid;
  grid-auto-columns: auto auto auto;
}
.gallery4 img {
  width: 100%;
  border-radius: 20px;
}
</style>