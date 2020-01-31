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

      <!-- Page Content -->
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <h2>Acerca de Avalon</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
            <h2>Eventos proximos</h2>
            <hr />
            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Favaloncbba%2F&tabs=events&width=500&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                width="500"
                height="300"
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
              <abbr>P:</abbr>
              79793294
              <br />
              <abbr>E:</abbr>
              <a href="mailto:#">productora.psyko@gmail.com</a>
            </address>
          </div>
        </div>
      </div>
      <div class="gallery2 fondo2">
        <b-container class="bv-example-row albun2">
          <b-row align-h="start">
            <b-col cols="4">
              <img src="../assets/rooftop_4.jpg" alt="">
            </b-col>
            <b-col cols="4">
              <img src="../assets/rooftop_3.jpg" alt="">
            </b-col>
          </b-row>
          <b-row align-h="center mt-5">
            <b-col cols="4">
              <img src="../assets/rooftop_6.jpg" alt="">
            </b-col>
            <b-col cols="4">
              <img src="../assets/rooftop_9.jpg" alt="">
            </b-col>
          </b-row>
          <b-row align-h="end mt-5">
            <b-col cols="4">
              <img src="../assets/rooftop_1.jpg" alt="">
            </b-col>
            <b-col cols="4">
              <img src="../assets/rooftop_11.jpg" alt="">
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
.albun2 {
  margin: 100px;

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