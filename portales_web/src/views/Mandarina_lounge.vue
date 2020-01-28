<template>
    <div class="mt mr my ml">
      <header class="bg-dark py-5 mb-5">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-12">
          <h1 class="display-4 text-white mt-5 mb-2">
            <img src="../assets/logotipo4.png" alt="">
          </h1>
          <p class="lead mb-5 text-white-50">disfruta de la excelente musicas con la variedad de bebidas.</p>
        </div>
      </div>
    </div>
  </header>
<b-container>
  <b-row class="bv-example-row">
    <b-col>
        <img src="../assets/mandar_2.jpg" alt="" height="400px" width="500px">
    </b-col>
    <b-col>
        <div>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>Acerca de Mandarina LOUNGE</h2>
        <hr>
        <p></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
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
      </div>
    </div>
  </div>
        </div>
    </b-col>
  </b-row>
</b-container>
<div class="gallery">
    <b-container class="bv-example-row albun  ">
  <b-row>
    <b-col>
        <img src="../assets/mandar_6.jpg">
    </b-col>
    <b-col>
        <img src="../assets/mandar_8.jpg" class="mb-4">
    </b-col>
  </b-row>
  <b-alert show variant="secondary"> 
      <h3>MANDARINA: más de 15 años y seguimos bailando juntos! </h3>
      <p>MANDARINA LOUNGE desde su inicio el 13 de diciembre de 2003 ha revolucionado el concepto de club en nuestro medio, logrando una excelente combinación en diseño, arquitectura, servicio sofisticado, iluminación y sonido. 
Durante estos más de 15 años MANDARINA se ha consolidado como una tradición en las noches cochabambinas.</p>
<p>Ven y siéntete libre, la diversión no tiene límites.</p>
  </b-alert>
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
    margin: 30px;
    padding: 30px 30px;
    text-align: center
}
.albun{
    margin: 90px;
    padding:60px;
}
.gallery{
    display:grid;
    grid-auto-columns: auto auto auto;
    background-color:#424663;
}
.gallery img{
    width:100%;
}
.fondo{
  background:#873b51;
  text-align: center
}



</style>