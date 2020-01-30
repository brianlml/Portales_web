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
              <strong>Start Bootstrap</strong>
              <br />3481 Melrose Place
              <br />Beverly Hills, CA 90210
              <br />
            </address>
            <address>
              <abbr>Telefono:</abbr>
              79793294
              <br />
              <abbr>Email:</abbr>
              <a href="mailto:#">productora.psyko@gmail.com</a>
            </address>
            <div>
  <b-button v-b-modal.modal-1>Proximos Eventos</b-button>

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
            <div class="pl-0 xcol-md-4 mb-5">
              <h2>Horario</h2>
              <hr>
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
              
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>