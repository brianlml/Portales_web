<template>
  <div>
    <div>
      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    Pasaje Portales
                    <span></span>
                  </h5>
                  <p>About the company, little discription will goes here..</p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Discotecas
                    <span></span>
                  </h5>
                  <ul class="thumbnail-widget">
                    <li>
                      <div class="thumb-content">
                        <router-link to="/figs" exact>Figs</router-link>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <router-link to="/mandarina_bar">Mandarina bar</router-link>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <router-link to="/mandarina_lounge">Mandarina lounge</router-link>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <router-link to="/rooftop">410 Rooftop</router-link>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <router-link to="/avalon">Avalon</router-link>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <router-link to="/mangos">Mangos</router-link>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <router-link to="/music">Music Hall</router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Ubicación
                    <span></span>
                  </h5>
                  <iframe
                    class="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d475.9698163765103!2d-66.15161589903165!3d-17.375348515508797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1579287589735!5m2!1ses-419!2sbo"
                    width="250"
                    height="200"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Contáctenos
                    <span></span>
                  </h5>

                  <p>
                    <a href="mailto:info@domain.com" title="Email">nalei048@gmail.com</a>
                  </p>
                  <p>
                    <a href="mailto:info@domain.com" title="Email">brian_coria@outlook.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>Copyright Company Name © 2020. Aleida-Brian</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

/* Main Footer */
footer .main-footer {
  padding: 20px 0;
  background: linear-gradient(#1f2747,#2c778d	)
}
footer ul {
  padding-left: 0;
  list-style: none;
}

/* Copy Right Footer */
.footer-copyright {
  background: #2c778d;
  padding: 5px 0;
}
.footer-copyright .logo {
  display: inherit;
}
.footer-copyright nav {
  float: right;
  margin-top: 5px;
}
.footer-copyright nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer-copyright nav ul li {
  border-left: 1px solid #505050;
  display: inline-block;
  line-height: 12px;
  margin: 0;
  padding: 0 8px;
}
.footer-copyright nav ul li a {
  color: #969696;
}
.footer-copyright nav ul li:first-child {
  border: medium none;
  padding-left: 0;
}
.footer-copyright p {
  color: #969696;
  margin: 2px 0 0;
}

/* Footer Top */
.footer-top {
  background: #252525;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid #222;
}

/* Footer transparent */
footer.transparent .footer-top,
footer.transparent .main-footer {
  background: transparent;
}
footer.transparent .footer-copyright {
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);
}

/* Footer light */
footer.light .footer-top {
  background: #f9f9f9;
}
footer.light .main-footer {
  background: #f9f9f9;
}
footer.light .footer-copyright {
  background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3);
}

/* Footer 4 */
.footer- .logo {
  display: inline-block;
}

/*==================== 
	Widgets 
====================== */
.widget {
  padding: 20px;
  margin-bottom: 40px;
}
.widget.widget-last {
  margin-bottom: 0px;
}
.widget.no-box {
  padding: 0;
  background-color: transparent;
  margin-bottom: 40px;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
}
.widget.subscribe p {
  margin-bottom: 18px;
}
.widget li a {
  color: #fff;
}
.widget li a:hover {
  color: #fff;
}
.widget-title {
  margin-bottom: 20px;
  
}
.widget-title span {
  background: #839fad none repeat scroll 0 0;
  display: block;
  height: 1px;
  margin-top: 25px;
  position: relative;
  width: 20%;
}
.widget-title span::after {
  background: inherit;
  content: "";
  height: inherit;
  position: absolute;
  top: -4px;
  width: 50%;
}
.widget-title.text-center span,
.widget-title.text-center span::after {
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
.widget .badge {
  float: right;
  background: #7f7f7f;
}

.typo-light h1,
.typo-light h2,
.typo-light h3,
.typo-light h4,
.typo-light h5,
.typo-light h6,
.typo-light p,
.typo-light div,
.typo-light span,
.typo-light small {
  color: #fff;
}

ul.social-footer2 {
  margin: 0;
  padding: 0;
  width: auto;
}
ul.social-footer2 li {
  display: inline-block;
  padding: 0;
}
ul.social-footer2 li a:hover {
  background-color: #2c778d;
}
ul.social-footer2 li a {
  display: block;
  height: 30px;
  width: 30px;
  text-align: center;
}
.btn {
  background-color: #ff8d1e;
  color: #fff;
}
.btn:hover,
.btn:focus,
.btn.active {
  background: #4b92dc;
  color: #fff;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 250ms ease-in-out 0s;
  -moz-transition: all 250ms ease-in-out 0s;
  -ms-transition: all 250ms ease-in-out 0s;
  -o-transition: all 250ms ease-in-out 0s;
  transition: all 250ms ease-in-out 0s;
}
.map{
  filter: grayscale(50%);
}
</style>