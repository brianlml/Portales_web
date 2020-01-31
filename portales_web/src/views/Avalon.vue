<template>
  <div>
    <div>
      <!-- Header -->
      <header class="bg-dark mt-5 py-5 mb-5 texto1">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <img src="../assets/nuevoslogos/logotipo (2).png" />
              <p class="lead mb-5 text-white-50">Diversion Sin Precedentes</p>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-md-8 mb-5">
          <h2>Acerca de Avalon</h2>
          <hr />
          <p>Quieres disfrutar de los mejores shows de musica en vivo, la discoteca perfecta es AVALON. El sistema de sonido resulta impactante sin mencionar la fabulosa y colorida iluminación. </p>
          <p>Una de las mejores discotecas de Cochabamba, visitado por locales y turistas.</p>
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
            <b-modal id="modal-1" title="Avalon" hide-footer>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Favaloncbba%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
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
    <div class="gallery2 fondo2">
        <b-container class="bv-example-row albun2">
          <b-row>
            <b-col>
              <img src="../assets/avalon_1.png" alt="">
            </b-col>
            <b-col>
              <img src="../assets/avalon_2.png" alt="">
            </b-col>
          </b-row>

          <b-row class="mt-5">
            <b-col>
              <img src="../assets/avalon_3.png" alt="">
              <img src="../assets/avalon_5.png" class="mt-5">
            </b-col>
            <b-col>
              <img src="../assets/avalon_6.png" height="600px">
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
.albun2 {
  margin: 100px;
  padding: 80px
}
.gallery2 {
  display: grid;
  grid-auto-columns: auto auto auto;
}
.gallery2 img {
  width: 100%;
  border-radius: 20px;
}
.fondo2 {
  background: radial-gradient(#4ec0e1, #1c375c, #151633);
}
</style>