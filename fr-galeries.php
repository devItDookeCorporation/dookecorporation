<?php include 'eng-header.php'; ?>
<script src="https://getbootstrap.com/docs/5.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>


<!-- pour afficher les images en plus grand lors qu'on clique dessus, debut -->
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Lightbox2 CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">
<!-- Lightbox2 JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>
<!-- pour afficher les images en plus grand lors qu'on clique dessus, fin -->


<!-- Menu Starts -->
<div class="container-fluid menu">
  <div class="header">
    <ul id="menu-deroulant">
      <a href="http://dookeworks.com/"><img src="images/logo.gif" alt="Realestate" class="img1"></a>
      <li><a href="index.php">Accueil</a></li>
      <li><a href="eng-presentation.php">Présentation</a></li>
      <li><a href="eng-groupe.php">Le Groupe</a></li>
      <li><a href="#">Nos activités<span class="caret"></span></a>
        <ul class="sous-menu">
          <li><a href="eng-dookeworks.php">Dooke Works </a></li>
          <li><a href="eng-dookeconsulting.php">Dooke Consulting</a></li>
        </ul>
      <li><a href="eng-nos-references.php">Nos références</a></li>
      <li class="active"><a href="fr-galeries.php">Galerie</a></li>
      <li><a href="eng-contact.php">Contact</a></li>
    </ul>
  </div>
</div>
<!-- #Menu Ends -->

<!-- banner -->
<div class="inside-banner">
  <div class="container">
    <span class="pull-left"><a href="#">Accueil</a> / Galerie</span>
  </div>
</div>
<!-- banner -->
<div class="container bg-transi">
  <hr class="hr-transi">
</div>
<div class="container bg1">
  <div class="row">
    <h3 class="center">Des Actions Concrètes</h3>
    <hr class="hr1">
  </div>



  <div class="our-references">
    <!-- ?php
      $directory = "images/galeries/photo/large";
      $images = glob($directory . "/*.jpg");

      foreach($images as $image){
        echo("
          <div class='col-md-3 cause2'>
	        <img src='images/logo-clients/img14.png' alt=''>
          <hr class='hr1'>
	        <h5>ABIDJAN TERMINAL</h5>
	        </div>
        ");
      }
    ? -->
    <div class="row" data-masonry='{"percentPosition": true }'>



      <!-- liste les images du dossier galerie debut-->

      <?php
      // Chemin du dossier contenant les images
      $dossier_images = 'images/galerie/';

      // Vérifier si le dossier existe
      if (is_dir($dossier_images)) {
        // Ouvrir le dossier
        if ($dh = opendir($dossier_images)) {
          // Parcourir les fichiers du dossier
          while (($fichier = readdir($dh)) !== false) {
            // Vérifier si le fichier est une image (extension jpg, jpeg, png, gif)
            $extensions = array('jpg', 'jpeg', 'png', 'gif');
            $info = pathinfo($dossier_images . $fichier);
            if (in_array(strtolower($info['extension']), $extensions)) {
      ?>
              <div class="col-sm-6 col-lg-4 mb-4">
                <a href="<?= $dossier_images . $fichier ?>" data-lightbox="gallery">
                  <img src="<?= $dossier_images . $fichier ?>" alt="<?= $fichier ?>" width="100%" height="400">
                </a>
                <hr class="hr1">
              </div>
      <?php
              // Afficher l'image en utilisant la balise img
              //echo '<img src="' . $dossier_images . $fichier . '" alt="' . $fichier . '"><br>';
            }
          }
          // Fermer le dossier
          closedir($dh);
        }
      } else {
        echo "ce dossier n'existe pas";
      }
      ?>




      <!-- liste les images du dossier galerie fin-->
    </div>
  </div>
</div>

<div class="container bg-transi">
  <hr class="hr-transi">
</div>
<?php include 'eng-footer.php'; ?>