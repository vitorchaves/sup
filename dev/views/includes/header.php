<?php $thatView = preg_replace("/\/index.php\//i", "", $_SERVER['PHP_SELF']);?>
<header>
  <div class="container">
    <menu>
      <a href="home" title="Home"><img src="img/supporta-shop.svg" alt="Supporta Shop" title="Supporta Shop" width="250"></a>

      <nav>
        <ul>
          <li class="<?=($thatView == "produto") ? "active" : "";?>"><a href="produto" class="--no-link-style">Produto</a></li>
          <li class="<?=($thatView == "parceiros") ? "active" : "";?>"><a href="parceiros" class="--no-link-style">Parceiros</a></li>
        </ul>
        <a href="contratar" class="--no-link-style btn btn-main">Contratar</a>
      </nav>
    </menu>
  </div>
</header>
