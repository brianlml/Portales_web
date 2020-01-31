<template>
<div>
                <!-- Header -->
                <header class="bg-dark mt-5 py-5 mb-5 texto1">
                  <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-lg-12">
                        <img src="../assets/nuevoslogos/logotipo (4).png"/>
                        <p class="lead mb-5 text-white-50">El mas elegante, sofisticado y completo karaoke de la ciudad de Cochabamba</p>
                      </div>
                    </div>
                  </div>
                </header>
                <!--/Header-->
        <!-- Page Content -->
        <div class="container">

              <div class="row">
                    <div class="col-md-8 mb-5">
                          <h2>Acerca de Music Hall</h2>
                          <hr>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                          <h2>Eventos proximos</h2>
                          <hr />
                    </div>
                    <div class="col-md-4 mb-5">
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
                              <b-modal id="modal-1" title="Music hall" hide-footer>
                              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmusichallcbba%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" 
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
              </div><!--/row-->
        </div><!--/Page Content-->
              <div class="fondo5 gallery5">
                      <b-container class="bv-example-row albun5">
                                <b-row>
                                      <b-col>
                                        <img src="../assets/music0.jpg" alt="">
                                      </b-col>
                                      <b-col>
                                        <img src="../assets/music5.jpg" alt="">
                                      </b-col>
                                </b-row>
                                <b-row class="mt-5">
                                        <b-col>
                                          <img src="../assets/music3.jpg" alt="">
                                        </b-col>
                                        <b-col>
                                          <img src="../assets/music4.jpg" alt="">
                                        </b-col>
                                        <b-col>
                                          <img src="../assets/music6.jpg" alt="">
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
.texto1 {
  background: linear-gradient(#2c778d, #4ec0e1 )
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
.albun5{
  margin:90px;
  padding: 90px
}
</style>