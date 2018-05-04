<?php
	class Uploader{
		private $filename;
		private $fileData; 
		private $destination;
	
		//declare a constructor method
		//get values from $_FILES whenever a new Uploader is created
		
		public function __construct($key) {
			$this->filename = $_FILES[$key]['name'];
			$this->fileData = $_FILES[$key]['tmp_name'];
		}
		
		public function saveIn( $folder ){
			$this->destination = $folder;
		}
		public function save(){
			$folderIsWriteable = is_writable( $this->destination );
			if( $folderIsWriteable ){
				$name = "$this->destination/$this->filename";
				$success = move_uploaded_file( $this->fileData, $name );
			}else {
				trigger_error("cannot write to $this->destination");
				$succes = false;
			}
			return $succes;
		}
	}