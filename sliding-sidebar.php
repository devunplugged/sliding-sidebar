<?php
/**
 * Plugin Name: sliding-sidebar
 */

const SLIDING_SIDEBAR_ROOT = __DIR__;

require_once SLIDING_SIDEBAR_ROOT . '/renderer.php';


function sliding_sidebar_enqueue_scripts() {
    wp_enqueue_style( 'sliding-sidebar-style', plugins_url() . '/sliding-sidebar/css/sliding-sidebar-style.css' );
    wp_enqueue_script( 'sliding-sidebar-js', plugins_url() . '/sliding-sidebar/js/sliding-sidebar-js.js', array ( 'jquery' ), 1.0, true);
}
add_action( 'wp_enqueue_scripts', 'sliding_sidebar_enqueue_scripts' );



add_action('get_footer','Renderer::RenderSidebar');

