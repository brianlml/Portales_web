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

      <!-- Page Content -->
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <h2>Acerca de Mangos bar</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
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
              <abbr>P:</abbr>
              79793294
              <br />
              <abbr>E:</abbr>
              <a href="mailto:#">productora.psyko@gmail.com</a>
            </address>
            <div>
              <b-button v-b-modal.modal-1>Proximos Eventos</b-button>
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
        </div>
        <!-- /.row -->

        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <div class="gallery4 fondo4">
      <b-container class="bv-example-row albun">
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
.fondo4 {
  background: radial-gradient(#2c778d, #1c375c, #4ec0e1);
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