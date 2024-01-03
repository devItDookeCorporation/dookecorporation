<div class="container-fluid bg4">
  <div class="row">
    <div class="title text-center">
      <h3>Nos clients</h3>
      <hr class="hr3">
    </div>
    <marquee direction="left" hspace="80px" class="defilement bg2">
      <?php
        $directory = "images/logo-clients";
        $images = glob($directory . "/*.jpg") + glob($directory . "/*.png");
      
        $cpt = 0;
        foreach($images as $image){
          echo("<img src='$image' alt='Dooke References'> ");
        }
        ?>
    </marquee>
  </div>
</div>
<footer class="footer">
<div class="container bg-transi">
  <hr class="hr-transi">
</div>
  <div class="container-fluid">
    <div class="row copyright">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 center">
        <h2>Suivez-nous</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/dooke-works-5a94b213b/"><img class="img-reseaux" src="images/linkedin.png" alt="linkedin"></a></li>
          <!--<li><a class="facebook" href="#."><i class="fa fa-facebook"></i></a></li>
          <li><a class="twitter" href="#."><i class="fa fa-twitter"></i></a></li>
          <li><a class="google-plus" href="#."><i class="fa fa-google-plus"></i></a></li>-->
        </ul>
      </div>
      <div class="center">&copy; DOOKE CORPORATION 2022</div>
    </div>
  </div>
</footer>
<!-- footer -->

</body>
</html>