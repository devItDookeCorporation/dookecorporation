<?php include 'eng-header.php'; ?>

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
      <li class="active"><a href="eng-contact.php">Contact</a></li>
    </ul>
  </div>
</div>
<!-- #Menu Ends -->

<!-- banner -->
<div class="inside-banner">
  <div class="container">
    <span class="pull-left"><a href="#">Accueil</a> / Contacts</span>
  </div>
</div>
<!-- banner -->

<!-- who_we_are -->
<div class="container bg-transi">
  <hr class="hr-transi">
</div>
<div class="contact-us">
  <div class="container bg1">
    <div class="row">
      <div class="col-xs-12">
        <div class="section-title white text-center">
          <h3>Nous &eacute;crire</h3>
          <hr class="hr1">
          <span class="divider"></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
        <?php include 'processmail.php'; ?>
      </div>
      <form id="contact-form" method="post" action="index.php#contact" role="form">
        <div class="col-sm-3 col-xs-12">
          <div class="input-bg">
            <input type="text" required="" placeholder="Votre Nom" name="name">
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="input-bg">
            <input type="email" required="" placeholder="Votre Email" name="email">
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="input-bg">
            <select id='select7' name="pays" required="">
              <option value="inactive" selected>Sélectionner votre Pays</option>
              <option value="Allemagne">Allemagne</option>
              <option value="Algérie">Algérie</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Belgique">Belgique</option>
              <option value="Cameroun">Cameroun</option>
              <option value="Chine">Chine</option>
              <option value="Côte d'Ivoire">Côte d'Ivoire</option>
              <option value="Corée">Corée</option>
              <option value="Espagne">Espagne</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Ghana">Ghana</option>
              <option value="Inde">Inde</option>
              <option value="Italie">Italie</option>
              <option value="Japon">Japon</option>
              <option value="Mali">Mali</option>
              <option value="Maroc">Maroc</option>
              <option value="Mauritanie">Mauritanie</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="RD Congo">RD Congo</option>
              <option value="Sénégal">Sénégal</option>
              <option value="Togo">Togo</option>
              <option value="Tunisie">Tunisie</option>
            </select>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="input-bg">
            <input type="tel" required="" placeholder="Votre N&deg; T&eacute;l&eacute;phone" name="tel">
          </div>
        </div>
    </div>
    <div class="row center">
      <div class="col-xs-12">
        <div class="input-bg">
          <textarea required="" placeholder="Votre Message" name="msgtxt"></textarea>
        </div>
      </div>
    </div>
    <hr class="hr1">
    <div class="row center">
      <input type="submit" value="Envoyer" class="ajax-from-submit" />
    </div>
    </form>
  </div>
</div>
<!-- row -->
<div class="container bg-transi">
  <hr class="hr-transi">
</div>
<div class="container bg1">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3 class="center"> Où nous trouver ? </h3>
      <hr class="hr1">
      <div class="map">
        <iframe src="https://www.google.com/maps/embed/v1/search?q=60+Allee+des+Champs+Elysees++91080+Evry&key=AIzaSyDGIQFri3XZ5kIG_OoJwvYVH478FSY5m_w"></iframe>
      </div>
    </div>
  </div>
</div>
<div class="container bg-transi">
  <hr class="hr-transi">
</div>
<div class="container-fluid adress bg4 border3">
  <div class="row">
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div class="adress-box center">
        <h4><span><img class="img-contact" src="images/contacts/fr.png" alt="" /></span>France</h4>
        <hr class="hr2">
        <h5> ADRESSE </h5>
        <p>Immeuble LES CHAMPS
          <br>60 ALLEE DES CHAMPS ELYSEES
          <br>91080 COURCOURONNES /FRANCE
        </p>
        <hr class="hr2">
        <h5> MAIL </h5>
        <p>
          <a href="mailto:contact@dookecorporation.com">contact@dookecorporation.com</a>
        </p>
        <hr class="hr2">
        <h5> TELEPHONE </h5>
        <p>
          <a href="tel:33174576200">(+33) 1 74 57 62 00</a>
        </p>
        <hr class="hr2">
        <h5> FAX </h5>
        <p>
          <a href="tel:33164579487">(+33) 1 64 57 94 87</a>
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div class="adress-box center">
        <h4><span><img class="img-contact" src="images/contacts/ca.png" alt="" /></span>Cameroun</h4>
        <hr class="hr2">
        <h5> ADRESSE </h5>
        <p>Immeuble Cl&eacute; des Ch&acirc;teaux,
          <br> 1er &eacute;tage, Porte A8
          <br>Carrefour Eto'o - Bonamoussadi
          <br>BP: 8079 Douala - Cameroun
        </p>
        <hr class="hr2">
        <h5> MAIL </h5>
        <p>
          <a href="mailto:cm.administratif@dookecorporation.com">cm.administratif@dookecorporation.com </a>
        </p>
        <hr class="hr2">
        <h5> TELEPHONE </h5>
        <p>
          <a href="tel:237243859594">(+237)-243-85-95-94</a>
          <br><a href="tel:237653295950">(+237)-6-53-29-59-50</a>
          <br><a href="tel:237698962792">(+237)-6-98-96-27-92</a>
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div class="adress-box center">
        <h4><span><img class="img-contact" src="images/contacts/ci.png" alt="" /></span>C&ocirc;te d'Ivoire</h4>
        <hr class="hr2">
        <h5> ADRESSE </h5>
        <p>Immeuble LA PAIX
          <br>Boulevard VGE 05
          <br>BP: 176 cedex 5 Abidjan
        </p>
        <hr class="hr2">
        <h5> MAIL </h5>
        <p>
          <a href="mailto:ci.administratif@dookecorporation.com">ci.administratif@dookecorporation.com</a>
        </p>
        <hr class="hr2">
        <h5> TELEPHONE </h5>
        <p>
          <a href="tel:23521361036">(+235) 21 36 10 36</a>
          <br><a href="tel:23521361037">(+235) 21 36 10 37</a>
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div class="adress-box center">
        <h4> <span><img class="img-contact" src="images/contacts/sen.jfif" alt="" /></span>S&eacute;n&eacute;gal</h4>
        <hr class="hr2">
        <h5> ADRESSE </h5>
        <p>Azure Building
          <br>BP: 12 Boulevard Djily Mbaye Plateau-Dakar
        </p>
        <hr class="hr2">
        <h5> MAIL </h5>
        <p>
          <a href="mailto:sn.administratif@dookecorporation.com">sn.administratif@dookecorporation.com</a>
        </p>
        <hr class="hr2">
        <h5> TELEPHONE </h5>
        <p>
          <a href="tel:221338296415">(+221) 3 38 29 64 15</a>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
<!-- container -->
<!-- contact us -->

<div class="container bg-transi">
  <hr class="hr-transi">
</div>
<?php include 'eng-footer.php'; ?>