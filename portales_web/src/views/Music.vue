<template>
<div class="titulo6">
                <!-- Header -->
                <header class="mt-5 py-5 mb-5">
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-lg-12">
                        <b-img :src="require('../assets/nuevoslogos/logotipo (4).png')" fluid alt="Responsive image"></b-img>
                      </div>
                    </div>
                  </div>
                </header>
                <!--/Header-->
        <!-- Page Content -->
        <div class="container-fluid">
              <div class="row">
                <b-col cols="12" lg="5" md="12" class="pt-0 pb-4">
                  <b-img :src="require('../assets/musi7.jpg')" fluid alt="Responsive image" class="dj5"></b-img>
                </b-col>
                <b-col cols="12" lg="4" md="6">
                    <div>
                          <h2>Acerca de Music Hall</h2>
                          <hr>
                          <p>¿Existe algo mejor que cantar para disfrutar la música en toda su totalidad?, MUSIC HALL ofrece su escenario no solo para las presentaciónes de grupos y artistas invitados, tú puedes demostrar tu artista interior en el Karaoke.</p>
                          <p>Un comodo ambiente con los mejores tragos y bastante espacio para disfrutar junto a tus amigos.</p>
                    </div>
                    </b-col>
                    <b-col cols="12" lg="3" md="6">
                    <div>
                        <h2>Contacto</h2>
                        <hr>
                        <address>
                                      <strong>Music Hall</strong>
                                      <ul class="social-footer2">
                                        <li class>
                                          <a href="https://www.facebook.com/musichallcbba/" target="_blank" title="Facebook">
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
                                          <a href="https://www.facebook.com/pg/musichallcbba/about/?ref=page_internal" target="_blank" title="Teléfono">
                                            <img
                                              alt="Teléfono"
                                              width="30"
                                              height="30"
                                              src="../assets/icons/telefono.png"
                                            />
                                          </a>
                                        </li>
                                        76964063
                                      </ul>
                        </address>
                          <div>
                              <h2>Eventos</h2>
                              <hr>
                              <b-button v-b-modal.modal-1>Click aquí</b-button>
                              <div>
                              <b-modal id="modal-1" title="Music hall" hide-footer>
                              <div class="responsive">
                              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmusichallcbba%2F&tabs=events&width=350&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" 
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
              </div><!--/row-->
        </div><!--/Page Content-->
              <div class="gallery5">
                      <b-container class="bv-example-row">
                                <b-row>
                                      <b-col cols="12" lg="6" class="py-4">
                                        <b-img :src="require('../assets/music0.jpg')" fluid alt="Responsive image"></b-img>
                                      </b-col>
                                      <b-col cols="12" lg="6" class="py-4">
                                        <b-img :src="require('../assets/music5.jpg')" fluid alt="Responsive image"></b-img>
                                      </b-col>
                                </b-row>
                                <b-row class="pt-3">
                                        <b-col cols="12" lg="4" class="pb-5">
                                          <b-img :src="require('../assets/music3.jpg')" fluid alt="Responsive image"></b-img>
                                        </b-col>
                                        <b-col cols="12" lg="4" class="pb-5">
                                          <b-img :src="require('../assets/music4.jpg')" fluid alt="Responsive image"></b-img>
                                        </b-col>
                                        <b-col cols="12" lg="4" class="pb-5">
                                          <b-img :src="require('../assets/music6.jpg')" fluid alt="Responsive image"></b-img>
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
.titulo6{
  background: linear-gradient(160deg,	#2c778d 15%,	#d9a872,	#6a5c4c,#1c375c 90%)
}
.dj5{
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 10%
}
.fondo5{
  background: linear-gradient(#2c778d, #4ec0e1)
}
.gallery5{
  display: grid;
  grid-auto-columns: auto auto auto
}
.gallery5 img{
  width: 100%;
  border-radius: 10%
}
</style>