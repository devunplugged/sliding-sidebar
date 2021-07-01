<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit();
}

class Renderer{
    public static function RenderSidebar(){
        self::Render('sidebar', array(), true);
    }
    public static function Render($path, $data=array(), $render=false){
        ob_start();
            include  SLIDING_SIDEBAR_ROOT . '/templates/'.$path.'.php';
            $content = ob_get_contents();
        ob_end_clean();
        
        if(!$render)
            return $content;
        echo $content;
    }
}