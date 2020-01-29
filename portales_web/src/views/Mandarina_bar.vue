<template>
<div class="bar py-5">
<b-container>
  <b-row class="bv-example-row">
    <b-col>
        <img src="../assets/mandar_2.jpg" alt="" class="dj">
        <iframe
                class="hola"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMangosTropicalBar%2F&tabs=events&width=500&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                width="500"
                height="300"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
    </b-col>
    <b-col>
        <div>
  <!-- Page Content -->
  <div class="container py-5">
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

</template>

<script>
export default {};
</script>

<style>
.portada {
  margin: 5px;
  padding: 7px;
  text-align: center;
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
.hola{
  filter: grayscale(50%);

}
</style>