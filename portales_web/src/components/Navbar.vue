<template>
  <div>
    <div>
    <nav class="navbar navbar-expand-lg navbar-inverse navbar-dark bg-dark fixed-top texto">
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
        </ul>
        <router-link class="navbar-brand" to="/">Pasaje Portales</router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/lugares">Lugares</router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style>
.router-link-exact-active {
  color: #fff;
}
.router-link-exact-active:hover {
  text-decoration: none;
  color: #fff;
}
.router-link-active {
  color: #fff;
}
.router-link-active:hover {
  text-decoration: none;
  color: #fff;
}
.texto {
  background: linear-gradient(#1c375c, #2c778d)
}
</style>