<?php
	class Page_Data{
		public $title = "";
		public $content = "";
		public $css = "";
		public $embeddedStyle = "";
		
		//declare new property
		public $scriptElements = "";
		
		//declare a new method for adding  JavaScript files
		public function addScript( $src ){
			$this->scriptElements .="<script src='$src'></script>";
		}
		//declare new method
		public function addCSS( $href ){
			$this->css .="<link href='$href' rel='stylesheet' />";
		}
	}
?>