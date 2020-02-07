<template>
  <div class="titulo3">
    <div>
      <!-- Header -->
      <header class="mt-5 py-5 mb-5">
        <div class="container">
          <div class="row align-items-center">
            <div>
              <b-img :src="require('../assets/logoroof.png')" fluid alt="Responsive image"></b-img>
            </div>
          </div>
        </div>
      </header>
      <!--/Header-->
      <!-- Page Content -->
      <div class="">
        <div class="row container-fluid">
          <b-col class="col-12 col-lg-4 col-md-10">
            <b-img :src="require('../assets/rooftop_5.jpg')"  fluid alt class="dj3" />
          </b-col>
          <b-col class="col-12 col-lg-4 col-md-10">
            <div>
              <h2>Acerca de 410 Rooftop</h2>
              <hr />
              <p>¡Disfrutar una noche de fiesta con el buen clima en Cochabamba es posible! RoofTop una discoteca que esta pensada para aquellos que quieran salir y disfrutar de una copa en la comodidad de nuestros ambientes en la terraza.</p>
              <p>El mejor ambiente exclusivo y elegante, donde puedes disfrutar del paisaje nocturno de nuestras bellisimas montañas.</p>
              <div></div>
              <!--/row-->
            </div>
          </b-col>
          <b-col class="col-12 col-lg-4 col-md-10">
            <div>
              <h2>Contacto</h2>
              <hr />
              <address>
                <strong>410 Rooftop</strong>
                <ul class="social-footer2">
                  <li class>
                    <a href="https://www.facebook.com/410Rooftop/" target="_blank" title="Facebook">
                      <img alt="Facebook" width="30" height="30" src="../assets/icons/facebook.png" />
                    </a>
                  </li>Facebook
                </ul>
                <strong>Horario</strong>
                <b-nav>
                  <b-nav-item-dropdown
                    id="my-nav-dropdown"
                    text="Dias de atencion"
                    toggle-class="nav-link-custom"
                    right
                  >
                    <b-dropdown-item>Lunes: CERRADO</b-dropdown-item>
                    <b-dropdown-item>Martes: CERRADO</b-dropdown-item>
                    <b-dropdown-item>Miercoles: CERRADO</b-dropdown-item>
                    <b-dropdown-item>Jueves: 19:00-01:00</b-dropdown-item>
                    <b-dropdown-item>Viernes: 18:00-01:00</b-dropdown-item>
                    <b-dropdown-item>Sabado: 17:00-01:00</b-dropdown-item>
                    <b-dropdown-item>Domingo: CERRADO</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-nav>
              </address>
              <div>
                <h2>Eventos</h2>
                <hr />
                <b-button v-b-modal.modal-1>Click aquí</b-button>
                <div>
                <b-modal id="modal-1" title="410 Rooftop" hide-footer>
                  <div class="responsive">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F410Rooftop%2F&tabs=events&width=350&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                    width="350"
                    height="300"
                    style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                  </div>
                </b-modal>
                </div>
              </div>
            </div>
          </b-col>
        </div>
        <!--/row-->
      </div>
      <div class="pt-4 gallery3">
        <b-container>
          <b-row>
            <b-col cols="10" lg="4" md="4" class="py-4">
              <b-img :src="require('../assets/rooftop_1.jpg')" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="10" lg="4" md="4" class="py-4">
              <b-img :src="require('../assets/rooftop_11.jpg')" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="10" lg="4" md="4" class="py-4">
              <b-img :src="require('../assets/rooftop_3.jpg')" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
          <b-row class="pb-4">
            <b-col cols="10" lg="6" md="5" class="pt-4">
              <b-img :src="require('../assets/rooftop4.jpg')" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col cols="10" lg="6" md="5" class="pt-4">
              <b-img :src="require('../assets/rooftop9.jpg')" fluid alt="Responsive image"></b-img>
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
.titulo3 {
  background: linear-gradient(170deg,#2c778d, #8092a7, #f9e4b7 60%, #2c778d, #1f2747);
}
.tarjeta3 {
  background: linear-gradient(#dfd46d, #f9e4b7, #4ec0e1);
}
.fondo3 {
  background: linear-gradient(175deg, #4ec0e1, #f9e4b7, #2c778d, #1f2747);
}
.dj3 {
  height: 100%;
  width: 100%;
  border-radius: 10%;
}
.gallery3 {
  display: grid;
  grid-auto-columns: auto auto auto;
}
.gallery3 img {
  width: 100%;
  border-radius: 10%;
}
</style>