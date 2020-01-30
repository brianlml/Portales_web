<template>
  <div>
    <div>
      <!-- Header -->
      <header class="bg-dark py-5 mb-5 texto1" >
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
            <h2>Eventos proximos</h2>
            <hr />
            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMangosTropicalBar%2F&tabs=events&width=500&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
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
        <!-- /.row -->
        <h1 class="text-center my-2">Galeria de Eventos</h1>

        <div class="container">
          <div class="card-columns">
                <div class="card" >
                                <div >
                                    <b-button v-b-modal.modal-1 ><img src="../assets/mangos.jpg" class="card-img-top"/></b-button>
                                    <b-modal id="modal-1" hide-footer hide-header>
                                      <img src="../assets/mangos.jpg" class="img-fluid rounded" />
                                    </b-modal>
                                </div>
                </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <div class="gallery fondo">
    <b-container class="bv-example-row albun  ">
  <b-row>
    <b-col>
        <img src="../assets/mandar_6.jpg">
    </b-col>
    <b-col>
        <img src="../assets/mandar_8.jpg" class="mb-4">
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <img src="../assets/mandar_11.jpg" alt="">
    </b-col>
    <b-col>
        <img src="../assets/manda_1.jpg" alt="">
    </b-col>
    <b-col>
        <img src="../assets/manda_4.jpg" alt="">
        <img src="../assets/mandar_3.jpg" class="mt-5">
    </b-col>
  </b-row>
</b-container>
</div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      
  }
},

}
</script>
<style>
.texto1 {
  background: linear-gradient(#2c778d, #4ec0e1 )
}
</style>