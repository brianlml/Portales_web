<template>
  <div >
    <div class="principal">
      <header class="bg-light text-center py-4">
      </header>
     <!-- Page Content -->
      <div class="container">
        <div class="row py-5">
          <!-- Team Member 1 -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="list-style:none;background-color: #2c778d;">
              <b-dropdown-item to="/figs">
                <img src="../assets/figs.jpg" class="card-img-top"/>
              </b-dropdown-item>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Figs</h5>
              </div>
            </div>
          </div>
          <!-- Team Member 2 -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="list-style:none;background-color: #2c778d;">
              <b-dropdown-item to="/mandarina_bar">
                <img src="../assets/mandarina_bar.jpg" class="card-img-top"/>
              </b-dropdown-item>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Mandarina Bar</h5>
              </div>
            </div>
          </div>
          <!-- Team Member 3 -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="list-style:none;background-color: #2c778d;">
              <b-dropdown-item to="/mandarina_lounge">
                <img src="../assets/mandarina_lounge.jpg" class="card-img-top"/>
              </b-dropdown-item>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Mandarina Lounge</h5>
              </div>
            </div>
          </div>
          <!-- Team Member 4 -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="list-style:none;background-color: #2c778d;">
              <b-dropdown-item to="rooftop" href="#page-top">
                <img src="../assets/410_roof_top.jpg" class="card-img-top"/>
              </b-dropdown-item>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">410 Rooftop</h5>
              </div>
            </div>
          </div>
          <!--Team Member 5-->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="list-style:none;background-color: #2c778d;">
              <b-dropdown-item to="/avalon">
                <img src="../assets/avalon.jpg" class="card-img-top"/>
              </b-dropdown-item>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Avalon</h5>
              </div>
            </div>
          </div>
          <!--Team Member 6-->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="list-style:none;background-color: #2c778d;">
              <b-dropdown-item to="/mangos">
                <img src="../assets/mangos.jpg" class="card-img-top"/>
              </b-dropdown-item>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Mangos</h5>
              </div>
            </div>
          </div>
          <!--Team Member 7-->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="list-style:none;background-color: #2c778d;">
              <b-dropdown-item to="/music">
                <img src="../assets/music_hall.png" class="card-img-top"/>
              </b-dropdown-item>
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Music Hall</h5>
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

}
</script>

<style>
.dropdown-item[role=menuitem]:active {
  background:#fff;
}
.principal{
  background: linear-gradient(#151633, #2c778d,#151633)
}
.texto{
  background: linear-gradient(#1c375c, #2c778d)
}
.card-title {
  color: #fff
}
.card border-0 shadow {
      background-color: #2c778d;

}
</style>