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

  <!-- Page Content -->
  <div class="container">

    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>Acerca de Music Hall</h2>
        <hr>
        <p>¿Existe algo mejor que cantar para disfrutar la música en toda su totalidad?, MUSIC HALL ofrece su escenario no solo para las presentaciónes de grupos y artistas invitados, tú puedes demostrar tu artista interior en el Karaoke.</p>
        <p>Un comodo ambiente con los mejores tragos y bastante espacio para disfrutar junto a tus amigos.</p>
            <hr />


      </div>
      <div class="col-md-4 mb-5">
        <h2>Contacto</h2>
        <hr>
        <address>
          <strong>Start Bootstrap</strong>
          <br>3481 Melrose Place
          <br>Beverly Hills, CA 90210
          <br>
        </address>
        <address>
          <abbr>P: </abbr>
          76964063
          <br>
          <abbr>E: </abbr>
          <a href="mailto:#">productora.psyko@gmail.com</a>
        </address>
        <div>
          <b-button v-b-modal.modal-1>Proximos Eventos</b-button>
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
    </div>
  </div>
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