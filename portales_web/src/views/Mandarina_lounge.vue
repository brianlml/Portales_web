<template>
    <div class="mt mr my ml">
      <header class="py-5 mb-5 texto1">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-12">
          <h1 class="display-4 text-white mt-5 mb-2">
            <img src="../assets/logotipo4.png" alt="">
          </h1>
          <p class="lead mb-5 text-white-50">disfruta de la excelente musica con la variedad de bebidas.</p>
        </div>
      </div>
    </div>
  </header>
  <div class="bar">
<b-container>
  <b-row class="bv-example-row">
    <b-col>
        <img src="../assets/mandar_2.jpg" alt="" class="djs">
    </b-col>
    <b-col class="colores">
        <div>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>Mandarina LOUNGE</h2>
        <hr>
        <p>MANDARINA LOUNGE desde su inicio el 13 de diciembre de 2003 ha revolucionado el concepto de club en nuestro medio, logrando una excelente combinación en diseño, arquitectura, servicio sofisticado, iluminación y sonido. 
Durante estos más de 15 años MANDARINA se ha consolidado como una tradición en las noches cochabambinas.</p>
<p>Ven y siéntete libre, la diversión no tiene límites.</p>
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

            <b-modal id="modal-1" title="Mandarina lounge" hide-footer>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMandarinaLOUNGE%2F&tabs=events&width=470&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
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
        </div>
    </b-col>
  </b-row>
</b-container>
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

}
</script>

<style>
.presentacion{
  background: linear-gradient(#4ec0e1,#1c375c,#151633)
}
.albun{
    margin: 90px;
    padding:60px;
}
.gallery{
    display:grid;
    grid-auto-columns: auto auto auto;
}
.gallery img{
    width:100%;
    border-radius: 20px
}
.fondo{
  background: radial-gradient(#4ec0e1, #1c375c,#151633)
}
.djs{
  height: 400px;
  width: 500px;
  margin: 50px;
  border-radius: 30px
}
.texto1 {
  background: linear-gradient(#2c778d, #4ec0e1 )
}

</style>