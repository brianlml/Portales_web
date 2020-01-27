<template>
  <div>
    <div>
      <!-- Header -->
      <header class="bg-dark py-5 mb-5">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <h1 class="display-4 text-white mt-5 mb-2">Mandarina bar</h1>
              <p class="lead mb-5 text-white-50">Sky above us, earth below us, drinks within us</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <h2>Acerca de Mandarina bar</h2>
            <hr />
            <p>2007, NACE MANDARINA BAR para traer a Cochabamba la cultura de los grandes bares del mundo. Un lugar para ver y ser visto, un proyecto enfocado en comida, piqueos, variedad de bebidas, música variada.</p>

            <h2>Eventos proximos</h2>
            <hr />

            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMandarinaBarCocha%2F&tabs=events&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                width="500"
                height="500"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
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
            <div class="pl-0 xcol-md-4 mb-5">
              <h2>Horario</h2>
              <hr />
              <b-nav>
                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Dias de atencion"
                  toggle-class="nav-link-custom"
                  right
                >
                  <b-dropdown-item>Lunes:      CERRADO</b-dropdown-item>
                  <b-dropdown-item>Martes:     19:00-01:00</b-dropdown-item>
                  <b-dropdown-item>Miercoles:  19:00-01:00</b-dropdown-item>
                  <b-dropdown-item>Jueves:     19:00-03:00</b-dropdown-item>
                  <b-dropdown-item>Viernes:    19:00-03:00</b-dropdown-item>
                  <b-dropdown-item>Sabado:     19:00-03:00</b-dropdown-item>
                  <b-dropdown-item>Domingo:    19:00-01:00</b-dropdown-item>
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
.portada {
  margin: 5px;
  padding: 7px;
  text-align: center;
}
</style>