<template>
  <div>
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
        <img src="../assets/mandabar_5.jpg" alt="" class="dj">
    </b-col>
    <b-col>
        <div class="colores">
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>Acerca de Mandarina Bar.</h2>
        <hr>
        <p>2007, NACE MANDARINA BAR para traer a Cochabamba la cultura de los grandes bares del mundo. Un lugar para ver y ser visto, un proyecto enfocado en comida, piqueos, variedad de bebidas, música variada.</p>
        <p>El bar se destaca por el servicio, y las diferentes tematicas de entre semana en especial las noches brasileras. </p>
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
          <abbr title="Phone">P: </abbr>
          76964063
          <br>
          <abbr title="Email">E: </abbr>
          <a href="mailto:#">productora.psyko@gmail.com</a>
        </address>
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
        <img src="../assets/mandabar_1.jpg">
    </b-col>
    <b-col>
        <img src="../assets/mandabar_2.jpg" class="mb-4">
    </b-col>
  </b-row>
  <b-row>
    <b-col>
        <img src="../assets/mandabar_3.jpg" alt="">
    </b-col>
    <b-col>
        <img src="../assets/mandabar_4.jpg" alt="">
    </b-col>
    <b-col>
        <img src="../assets/mandabar_7.jpg" alt="" height="240px">
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
.portada{
  margin: 5px ;
  padding: 7px;
  text-align: center
}
.dj{
  height: 400px;
  width: 500px;
  margin: 50px;
  border-radius: 30px
}

.bar{
  background: linear-gradient(#2c778d,#1c375c)
}
.colores{
  color:#eef3d8
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


</style>