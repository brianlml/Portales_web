<template>
  <div>
    <div>
      <!-- Header -->
      <header class="bg-dark mt-5 py-5 mb-5 texto1">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <img src="../assets/nuevoslogos/logotipo (1).png" alt="">
              
              <p class="lead mb-5 text-white-50">Sky above us, earth below us, drinks within us</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <h2>Acerca de 410 Rooftop</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
          <div>

        </div>
      </div>
          <div class="col-md-4 mb-5">
            <h2>Contacto</h2>
            <hr />
            <address>
                  <strong>410 Rooftop</strong>
                      <ul class="social-footer2">
                        <li class>
                          <a href="https://www.facebook.com/410Rooftop/" target="_blank" title="Facebook">
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
                  <b-dropdown-item>Jueves:     19:00-01:00</b-dropdown-item>
                  <b-dropdown-item>Viernes:    18:00-01:00</b-dropdown-item>
                  <b-dropdown-item>Sabado:     17:00-01:00</b-dropdown-item>
                  <b-dropdown-item>Domingo:    CERRADO</b-dropdown-item>
                </b-nav-item-dropdown>
                </b-nav>
            </address>

            <div>
                  <h2>Eventos</h2>
                  <hr>
                  <b-button v-b-modal.modal-1>Click aquí</b-button>
                <b-modal id="modal-1" title="410 Rooftop" hide-footer>
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F410Rooftop%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
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
      <div class="gallery3 fondo3">
    <b-container class="bv-example-row albun3  ">
      <b-row>
    <b-col>
        <img src="../assets/rooftop_1.jpg" alt="">
    </b-col>
    <b-col>
        <img src="../assets/rooftop_11.jpg" alt="">
    </b-col>
    <b-col>
        <img src="../assets/rooftop_3.jpg" alt="">
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <img src="../assets/rooftop_4.jpg" class="mt-5" height="420px">
    </b-col>
    <b-col>
        <img src="../assets/rooftop_9.jpg" class="mt-5">
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
.albun3{
  margin: 90px;
  padding:5px
}
.gallery3{
    display:grid;
    grid-auto-columns: auto auto auto;
}
.gallery3 img{
    width:100%;
    border-radius: 20px
}
.fondo3{
  background: radial-gradient(#4ec0e1, #1c375c,#151633)
}
</style>