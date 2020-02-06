<template>
  <div class="titulo5">
            <div>
                  <!-- Header -->
                  <header class="py-5">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                              <div class="col-lg-12">
                                <b-img :src="require('../assets/nuevoslogos/logotipo (3).png')" fluid alt="Responsive image"></b-img>
                                <p class="lead mb-5 text-white-50">Se viene una Experiencia nueva</p>
                              </div>
                        </div>
                    </div>
                  </header>
                  <!--/Header-->

                <!-- Page Content -->
                <div class="">
                <div class="container">
                        <div class="row">
                          <b-col cols="10" lg="4" md="10">
                            <b-img :src="require('../assets/mang0.jpg')" fluid alt="Responsive image" class="dj9"></b-img>
                          </b-col>
                          <b-col cols="10" lg="4" md="6">
                                      <div>
                                        <h2>Acerca de Mangos bar</h2>
                                        <hr />
                                        <p>Quieres divertirte de manera mas casual sin tanto protocolo y formalidades, MANGOS es la mejor opción donde encuentras el ambiente tropical y casual para disfrutar tu espacio de ocio junto a tus amigos.</p>
                                        <p>Un ambiente comodo con los tragos perfectos, con presentación de musicos y bailarines que te haran disfrutar con su espectacular show.</p>
                                      </div>
                                      </b-col>
                                      <b-col cols="10" lg="4" md="6">
                                      <div>
                                        <h2>Contacto</h2>
                                        <hr />
                                        <address>
                                              <strong>Mangos</strong>
                                                  <ul class="social-footer2">
                                                    <li class>
                                                      <a href="https://www.facebook.com/MangosTropicalBar/" target="_blank" title="Facebook">
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
                                                      <a href="https://www.facebook.com/pg/MangosTropicalBar/about/?ref=page_internal" target="_blank" title="Teléfono">
                                                        <img
                                                          alt="Teléfono"
                                                          width="30"
                                                          height="30"
                                                          src="../assets/icons/telefono.png"
                                                        />
                                                      </a>
                                                    </li>
                                                    79793294
                                                  </ul>
                                        </address>
                                        <div>
                                          <h2>Eventos</h2>
                                          <hr>
                                          <b-button v-b-modal.modal-1>Click aquí</b-button>
                                          <b-modal id="modal-1" title="Mangos Bar" hide-footer>
                                            <!--<img src="../assets/mangos.jpg" class="img-fluid rounded" />-->
                                            <iframe
                                              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMangosTropicalBar%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                                              width="470"
                                              height="300"
                                              style="border:none;overflow:hidden"
                                              scrolling="no"
                                              frameborder="0"
                                              allowtransparency="true"
                                              allow="encrypted-media"
                                            ></iframe>
                                          </b-modal>
                                        </div>
                                      </div>
                                      </b-col>
                        </div>
                        <!-- /.row -->
                </div>
                </div>
                <!-- /.container -->
            </div>
            <div class="gallery9">
                    <b-container class="bv-example-row albun4">
                          <b-row>
                              <b-col cols="12" lg="6" md="5">
                                <b-img :src="require('../assets/mangos0.jpg')" fluid alt="Responsive image" height="600px"></b-img>
                              </b-col>
                              <b-col cols="12" lg="6" md="5">
                                <b-img :src="require('../assets/mangos2.jpg')" fluid alt="Responsive image"></b-img>
                                <b-img :src="require('../assets/mangos5.jpg')" fluid alt="Responsive image" class="mt-3"></b-img>
                              </b-col>
                          </b-row>

                          <b-row class="mt-5">
                                <b-col cols="12" lg="6" md="5">
                                  <b-img :src="require('../assets/mangos8.jpg')" fluid alt="Responsive image"></b-img>
                                  <b-img :src="require('../assets/mangos6.jpg')" fluid alt="Responsive image" class="mt-3"></b-img>
                                </b-col>
                                <b-col cols="12" lg="6" md="5">
                                  <b-img :src="require('../assets/mangos4.jpg')" fluid alt="Responsive image" height="610px"></b-img>
                                </b-col>
                          </b-row>
                    </b-container>
            </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.titulo5{
  background: linear-gradient(150deg,	#2c778d 20%,#b87f39,#799658,#1f2747 80%)
}
.tarjeta5{
  background: linear-gradient(160deg,#2c778d 7%,#4ec0e1,#799658,#c9b359,#b87f39)
}
.fondo9{
  background: linear-gradient(165deg,#4ec0e1,#c9b359,#b87f39,#799658,#1f2747 80%)
}
.dj9{
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 10%
}
.albun9{
  margin: auto;
  padding: 80px
}
.gallery9{
  display: grid;
  grid-auto-columns: auto auto;
}
.gallery9 img {
  width: 90%;
  border-radius: 20px;
}
</style>