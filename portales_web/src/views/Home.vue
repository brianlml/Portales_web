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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
        <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
        <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
      </b-carousel>
    </div>
    <section class="py-5">
      <div class="container">
        <h1 class="font-weight-light">Nosotros Pasaje Portales</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni velit natus labore nesciunt praesentium.
          <a
            href="https://unsplash.com"
          >Unsplash</a>!
        </p>
      </div>
    </section>
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