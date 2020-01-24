<template>
    <div>
        <b-container fluid class="p-4 bg-dark presentacion">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
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
        <h2>Acerca de Music Hall</h2>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
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
    width: 100%;
    background-color:#424663;
}
.gallery img{
    width:100%;
}



</style>