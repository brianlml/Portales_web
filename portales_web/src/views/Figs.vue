<template>
<div>
              <!--Header-->
              <header class="titulo0 mt-5 py-5 mb-0">
                <div class="container h-100">
                  <img src="../assets/nuevoslogos/logotipo.png" />
                </div>
              </header>
              <!--/Header-->
      <div class="tarjeta0">
      <b-container>
            <b-row class="bv-example-row">
                  <b-col>
                      <img src="../assets/fig_8.jpg" class="djs0" />
                  </b-col>
                  <b-col class="mt-5">
                                      <div>
                                            <h2>Acerca de FIGS.</h2>
                                            <hr />
                                            <p>
                                            ¡Figs ya esta en Cochabamba, la mejor manera para salir de fiesta!
                                            Ambientes exclusivos de calidad para disfrutar de un buen FIN DE SEMANA.
                                            Excelente ubicación para comenzar la noche.
                                            </p>
                                            <p>Eso no es todo, en Figs disfrutaras la variedad de musica para bailar y sentir el ritmo en todo el cuerpo además de las distintas temáticas preparadas.</p>
                                      </div>
                  </b-col>
                  <b-col class="mt-5">
                                    <div>
                                          <h2>Contacto</h2>
                                          <hr />
                                        <address>
                                            <strong>Figs</strong>
                                            <ul class="social-footer2">
                                              <li class>
                                                <a href="https://www.facebook.com/Figsbolivia/" target="_blank" title="Facebook">
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
                                                <a href="https://www.facebook.com/pg/Figsbolivia/about/?ref=page_internal" target="_blank" title="Teléfono">
                                                  <img
                                                  alt="Teléfono"
                                                  width="30"
                                                  height="30"
                                                  src="../assets/icons/telefono.png"
                                                />
                                                </a>
                                              </li>
                                            76407063
                                            </ul>
                                        </address>
                                        <div>
                                            <h2>Eventos</h2>
                                            <hr>
                                            <b-button v-b-modal.modal-1>Click aquí</b-button>
                                              <b-modal id="modal-1" title="Figs" hide-footer>
                                                  <iframe
                                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFigsbolivia%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
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
          </b-row>
      </b-container>
    </div>
    <div class="gallery0 fondo0">
          <b-container class="bv-example-row albun0">
                    <b-row>
                          <b-col>
                            <img src="../assets/fig1.jpg" alt />
                          </b-col>
                          <b-col>
                            <img src="../assets/fig2.jpg" alt />
                          </b-col>
                    </b-row>
                    <b-row class="mt-5">
                          <b-col>
                            <img src="../assets/fig3.jpg" alt />
                          </b-col>
                          <b-col>
                            <img src="../assets/fig4.jpg" alt />
                          </b-col>
                          <b-col>
                            <img src="../assets/fig_2.jpg" alt />
                          </b-col>
                    </b-row>
          </b-container>
    </div>
</div>
</template>
<script>
export default {};
</script>

<style>
.titulo0{
  background: linear-gradient(#2c778d,#1c375c);
}
.tarjeta0{
  background: linear-gradient(#1c375c 03%,#4ec0e1)
}
.fondo0 {
  background: linear-gradient(180deg,#4ec0e1,#2c778d,#1f2747);
}
.letras0{
  background: #eef3d8
}
.gallery0 {
  display: grid;
  grid-auto-columns: auto auto auto;
}
.gallery0 img {
  width: 100%;
  border-radius: 10%;
}
.albun0 {
  margin: 100px;
}
.djs0 {
  height: 400px;
  width: 500px;
  margin:50px;
  border-radius: 30px;
}
</style>