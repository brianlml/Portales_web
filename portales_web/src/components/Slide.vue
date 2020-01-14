<template>
  <div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div>
        <h3 class="text-center">DISTOTECAS</h3>
        <router-link to="/figs">Figs</router-link>
        <router-link to="/nebula">Nebula</router-link>
        <router-link to="/mandarina">Mandarina</router-link>
        <router-link to="/rooftop">410Roof Top</router-link>
        <router-link to="/avalon">Avalon</router-link>
        <router-link to="/mangos">Mangos</router-link>
        <router-link to="/music">Music</router-link>
    </div>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/figs">Figs</b-nav-item>
        <b-nav-item to="/nebula">Nebula</b-nav-item>
        <b-nav-item to="/mandarina">Mandarina</b-nav-item>
        <b-nav-item to="/rooftop">410 Roof Top</b-nav-item>
        <b-nav-item to="/avalon">Avalon</b-nav-item>
        <b-nav-item to="/mangos">Mangos</b-nav-item>
        <b-nav-item to="/music">Music Hall</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>