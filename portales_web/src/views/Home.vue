<template>
<div>
      <div class="mt-4">
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                controls
                indicators
                fade
                img-width='1024'
                img-height='480'
              >
                          <b-carousel-slide
                            caption="Pasaje Portales"
                            :img-src="require('../assets/pasajentrada3.png')"
                            img-alt="Pasaje Portales"
                          >
                          <p class="text-center">Un lugar para conocer, disfrutar y sobre todo pasarla bien</p>
                          </b-carousel-slide>
                          <b-carousel-slide :img-src="require('../assets/parqueo2.png')"></b-carousel-slide>
                          <b-carousel-slide :img-src="require('../assets/pasaj3.png')"></b-carousel-slide>
              </b-carousel>
      </div>
    <Slide/>
</div>
</template>

<script>
import Slide from "../components/Slide.vue";
export default {
  name: "home",
  components: {
    Slide
  }
};
</script>

<style>
</style>