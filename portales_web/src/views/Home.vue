<template>
  <div>
    <div class="mt-4">
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
          caption="Pasaje Portales"
          :img-src="require('../assets/pasaje/entrada_3.jpeg')"
          img-alt="Pasaje Portales"
        >
        <p>Lorem, ipsum dolor.</p>
        </b-carousel-slide>
         <b-carousel-slide>
        <template v-slot:img>
          <img
            caption="Pruebaaa"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/pasaje/entrada_3.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      
        <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
        <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
      </b-carousel>
    </div>
    <Slide />
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