<template>
  <div>
   <div>
<!-- Header -->
<header class="bg-dark text-center py-5 mb-4">
  <div class="container">
    <h1 class="font-weight-light text-white">DISCOTECAS</h1>
  </div>
</header>

<!-- Page Content -->
<div class="container">
  <div class="row">
    <!-- Team Member 1 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style="list-style:none">
        <b-dropdown-item to="/figs">
          <img src="../assets/figs.jpg" class="card-img-top" alt="...">
        </b-dropdown-item>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Figs</h5>
          <div class="card-text text-black-50">Acerca de Figs</div>
        </div>
      </div>
    </div>
    <!-- Team Member 2 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style="list-style:none">
        <b-dropdown-item to="/nebula">
          <img src="../assets/nebula.jpg" class="card-img-top" alt="...">
        </b-dropdown-item>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Nebula</h5>
          <div class="card-text text-black-50">Acerca de Nebula</div>
        </div>
      </div>
    </div>
    <!-- Team Member 3 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style="list-style:none">
        <b-dropdown-item to="/mandarina">
          <img src="../assets/mandarina.jpg" class="card-img-top" alt="...">
        </b-dropdown-item>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Mandarina</h5>
          <div class="card-text text-black-50">Acerca de Mandarina</div>
        </div>
      </div>
    </div>
    <!-- Team Member 4 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style="list-style:none">
         <b-dropdown-item to="rooftop">
           <img src="../assets/410_roof_top.jpg" class="card-img-top" alt="...">
         </b-dropdown-item>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">410 Rooftop</h5>
          <div class="card-text text-black-50">Acerca de 410Rooftop</div>
        </div>
      </div>
    </div>
    <!--team 5-->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style="list-style:none">
        <b-dropdown-item to="/avalon">
          <img src="../assets/avalon.jpg" class="card-img-top" alt="...">
        </b-dropdown-item>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Avalon</h5>
          <div class="card-text text-black-50">Acerca de Avalon</div>
        </div>
      </div>
    </div>
    <!--team 6-->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style="list-style:none">
        <b-dropdown-item to="/mangos">
          <img src="../assets/mangos.jpg" class="card-img-top" alt="...">
        </b-dropdown-item>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Mangos</h5>
          <div class="card-text text-black-50">Acerca de Mangos</div>
        </div>
      </div>
    </div>
    <!--team 7-->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style="list-style:none">
        <b-dropdown-item to="/music">
          <img src="../assets/music_hall.png" class="card-img-top" alt="...">
        </b-dropdown-item>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Music Hall</h5>
          <div class="card-text text-black-50">Acerca de Music Hall</div>
        </div>
      </div>
    </div>











  </div>
  <!-- /.row -->

</div>
<!-- /.container -->


  
  
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