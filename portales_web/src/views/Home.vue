<template>
  <div>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        controls
        indicators
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
          img-alt="Pasaje Portales"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    <section class="py-5">
      <div class="container">
        <h1 class="font-weight-light">Nosotros Pasaje Portales</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni velit natus labore nesciunt praesentium.
          <a href="https://unsplash.com">Unsplash</a>!
        </p>
      </div>
    </section>
    <Slide :listaLugar="miListaLugares"> </Slide>
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import LugarModel from "../models/LugarModel";

export default {
  name: "home",
  components: {
    Slide
  },
  data () {
    return {
      miListaLugares: []
    }
  },
  methods: {
    initialData() {
      const lugarOne = new LugarModel({
        uid: 1,
        titulo: 'Mandarina',
        ruta: '/mandarina',
        nombreImagen: '../assets/mandarina.jpg',
      });
      this.miListaLugares.push(lugarOne);
    },
  },
  beforeMount() {
    this.initialData();
  },
};
</script>

<style>
</style>