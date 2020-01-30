<template>
<div>
  <header class="bg-dark mt-5 py-5 mb-5 texto1">
    <div class="container h-100">
            <img src="../assets/nuevoslogos/logotipo.png"/>
    </div>
  </header>
  <div class="bar">
 <b-container>
  <b-row class="bv-example-row">
    <b-col>
        <img src="../assets/fig_8.jpg" alt="" class="djs">
    </b-col>
    <b-col>
        <div class="colores">
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>Acerca de FIGS.</h2>
        <hr>
        <p>¡Figs ya esta en Cochabamba, la mejor manera para salir de  fiesta! 
Ambientes exclusivos de calidad para disfrutar de un buen FIN DE SEMANA.
Excelente ubicación  para comenzar la noche (Av. Pando, Pasaje Ovidio Suárez).
</p>
        <p>Eso no es todo, en Figs disfrutaras la variedad de musica para bailar y sentir el ritmo en todo el cuerpo además de las distintas temáticas que se preparan.</p>
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
<div class="tarjeta">
  <b-container class="bv-example-row">
  <b-row>
    <b-col cols="3">
      <img src="../assets/figs_1.jpg" alt="" class="fotografia">
    </b-col>
    <b-col cols="3">
      <img src="../assets/fig_2.jpg" alt="" class="fotografia">
    </b-col>
    <b-col cols="3">
      <img src="../assets/fig_3.jpg" alt="" class="fotografia">
    </b-col>
    <b-col cols="3">
      <img src="../assets/fig_4.jpg" alt="" class="fotografia">
    </b-col>
  </b-row>
  <p class="anuncio text-light">
   ¡¡ AL MAL TIEMPO BUENA MUSICA !!
  </p>
</b-container>
</div>
</div>
</template>
<script>
export default {

}

</script>

<style>
.tarjeta{
background: linear-gradient(#22e105, #747474);
margin:10px
}
.fotografia{
  margin:10px;
  height: 200px;
  width: 300px;
  border-radius: 50%
}
.anuncio{
  margin: 20px;
  padding: 10px;
  text-align: center;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size: 40px
}
.texto1 {
  background: linear-gradient(#2c778d, #4ec0e1 )
}


</style>