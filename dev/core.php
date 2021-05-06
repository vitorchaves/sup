<?php

if (strcmp(basename($_SERVER["SCRIPT_NAME"]), basename(__FILE__)) === 0) {
	header("Location:index.php");

	// Se não redirecionar
	die('Acesso direto negado.');
}

class View
{
	public function load($view)
	{
		include_once "views/" . $view . ".php";
		return true;
	}
}
