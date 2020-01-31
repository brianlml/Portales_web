<template>
  <div>
    <header class="bg-dark mt-5 py-5 mb-0 texto1">
      <div class="container h-100">
        <img src="../assets/nuevoslogos/logotipo.png" />
      </div>
    </header>
    <div class="bar">
      <b-container>
        <b-row class="bv-example-row">
          <b-col>
            <img src="../assets/fig_8.jpg" alt class="djs0" />
          </b-col>
          <b-col>
            <div class="colores">
              <!-- Page Content -->
              <div class="container">
                <div class="row">
                  <div class="col-md-8 mb-5">
                    <h2>Acerca de FIGS.</h2>
                    <hr />
                    <p>
                      ¡Figs ya esta en Cochabamba, la mejor manera para salir de fiesta!
                      Ambientes exclusivos de calidad para disfrutar de un buen FIN DE SEMANA.
                      Excelente ubicación para comenzar la noche (Av. Pando, Pasaje Ovidio Suárez).
                    </p>
                    <p>Eso no es todo, en Figs disfrutaras la variedad de musica para bailar y sentir el ritmo en todo el cuerpo además de las distintas temáticas que se preparan.</p>
                  </div>
                  <div class="col-md-4 mb-5">
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
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="fondo0 gallery0">
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
.fotografia {
  margin: 10px;
  height: 200px;
  width: 300px;
  border-radius: 50%;
}
.anuncio {
  margin: 20px;
  padding: 10px;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 40px;
}
.texto1 {
  background: linear-gradient(#2c778d, #4ec0e1);
}
.fondo0 {
  background: linear-gradient(#2c778d, #4ec0e1);
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
  border-radius: 30px;
}
</style>