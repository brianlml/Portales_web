<template>
<div class="titulo0">
              <!--Header-->
              <b-container class="pt-5" fluid>
                <b-row>
                  <b-col class="pt-4" cols="12">
                    <b-img :src="require ('../assets/nuevoslogos/logotipo.png')" class="w-40" fluid></b-img></b-col>
                </b-row>
              </b-container>
              <!--/Header-->
      <div class="">
      <b-container>
            <b-row>
                  <b-col cols="12" lg="5" md="12">
                      <b-img :src="require('../assets/fig_8.jpg')" class="pt-3 djs0 w-100 mt-2" fluid></b-img>
                  </b-col>
                  <b-col class="ml-auto mt-4" cols="12" lg="4" md="6">
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
                  <b-col class="mt-4 ml-auto" col1="12" lg="3" md="6">
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
                                            <div class="">
                                              <b-modal id="modal-1" title="Figs" hide-footer>
                                                <div class="responsive container-fluid">
                                                  <iframe
                                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFigsbolivia%2F&tabs=events&width=350&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                                                    width="350"
                                                    height="300"
                                                    style="border:none;overflow:hidden;width:100%;"
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
          </b-row>
      </b-container>
    </div>
    <div class=" pt-4 gallery0">
          <b-container class="">
                    <b-row class="">
                          <b-col cols="12" lg="6" md="6" class="py-4">
                            <img src="../assets/fig1.jpg"/>
                          </b-col>
                          <b-col cols="12" lg="6" md="6" class="py-4">
                            <img src="../assets/fig2.jpg"/>
                          </b-col>
                    </b-row>
                    <b-row class="pt-1">
                          <b-col cols="12" lg="4" md="4" class="py-4">
                            <img src="../assets/fig3.jpg"/>
                          </b-col>
                          <b-col cols="12" lg="4" md="4" class="py-4">
                            <img src="../assets/fig4.jpg"/>
                          </b-col>
                          <b-col cols="12" lg="4" md="4" class="py-4">
                            <img src="../assets/fig_2.jpg"/>
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
.titulo0{
  background: linear-gradient(170deg,#2c778d 10%,#9e8d9f,	#9dae9b,#002750,#1f2747 90%);
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
.djs0 {
  height: 400;
  width: 500;
  border-radius: 30px;
}
</style>