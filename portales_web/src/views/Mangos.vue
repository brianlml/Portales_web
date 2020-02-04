<template>
  <div>
            <div>
                  <!-- Header -->
                  <header class="bg-dark py-5 mb-5 texto1">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                              <div class="col-lg-12">
                                <img src="../assets/nuevoslogos/logotipo (3).png" />
                                <p class="lead mb-5 text-white-50">Se viene una Experiencia nueva</p>
                              </div>
                        </div>
                    </div>
                  </header>
                  <!--/Header-->

                <!-- Page Content -->
                <div class="container">
                        <div class="row">
                          <b-col>
                            <img src="../assets/mang0.jpg" alt="" class="dj4">
                          </b-col>
                          <b-col>
                                      <div>
                                        <h2>Acerca de Mangos bar</h2>
                                        <hr />
                                        <p>Quieres divertirte de manera mas casual sin tanto protocolo y formalidades, MANGOS es la mejor opción donde encuentras el ambiente tropical y casual para disfrutar tu espacio de ocio junto a tus amigos.</p>
                                        <p>Un ambiente comodo con los tragos perfectos, con presentación de musicos y bailarines que te haran disfrutar con su espectacular show.</p>
                                      </div>
                                      </b-col>
                                      <b-col>
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
                <!-- /.container -->
            </div>
            <div class="gallery4 fondo4">
                    <b-container class="bv-example-row albun4">
                          <b-row>
                              <b-col>
                                <img src="../assets/mangos0.jpg" height="600px" />
                              </b-col>
                              <b-col>
                                <img src="../assets/mangos2.jpg" alt />
                                <img src="../assets/mangos5.jpg" class="mt-3" />
                              </b-col>
                          </b-row>

                          <b-row class="mt-5">
                                <b-col>
                                  <img src="../assets/mangos8.jpg" alt />
                                  <img src="../assets/mangos6.jpg" class="mt-3" />
                                </b-col>
                                <b-col>
                                  <img src="../assets/mangos4.jpg" height="610px" />
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
.texto1 {
  background: linear-gradient(#2c778d, #4ec0e1);
}
.dj4{
  height: 400px;
  width: 500px;
  margin: 50px;
  border-radius: 30px
}
.fondo4 {
  background: radial-gradient(#2c778d, #1c375c, #4ec0e1);
}
.albun4 {
  margin: 100px;
  padding: 80px
}
.gallery4 {
  display: grid;
  grid-auto-columns: auto auto;
}
.gallery4 img {
  width: 90%;
  border-radius: 20px;
}
</style>