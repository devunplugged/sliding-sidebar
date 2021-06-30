var slidingSidebarPosition = "desktop";

jQuery( document ).ready(function() {
    ManageSlidingSidebarPosition();
});
jQuery( window ).resize(function() {
    ManageSlidingSidebarPosition();
});
function ManageSlidingSidebarPosition(){
    //console.log("position: " + slidingSidebarPosition);
    //console.log("window width: " + window.innerWidth);
    if(window.innerWidth < 922 && slidingSidebarPosition != "mobile"){
        //console.log("Moving sidebar to mobile");
        MoveSidebarToMobile();
    }else if(window.innerWidth >= 922 && slidingSidebarPosition != "desktop"){
        //console.log("Moving sidebar to desktop");
        MoveSidebarToDesktop();
    }
    
}
function MoveSidebarToMobile(){
    jQuery('.sidebar-main').children().appendTo("#sliding-sidebar-content");
    slidingSidebarPosition = "mobile";

    if(jQuery.trim(jQuery("#sliding-sidebar-content").html())==''){
        jQuery(".sliding-sidebar-wrapper").hide();
    }
}
function MoveSidebarToDesktop(){
    jQuery('#sliding-sidebar-content').children().appendTo(".sidebar-main");
    slidingSidebarPosition = "desktop";
    SlidingSidebarHide();
}



jQuery( ".sliding-sidebar-toggle" ).on( "click", function() {
    if(jQuery(".sliding-sidebar-wrapper").css('left') == "0px"){
        SlidingSidebarHide();
    }else{
        SlidingSidebarShow();
    }
});

jQuery( document ).on( "click", ".sliding-sidebar-backdrop", function() {
    console.log("been clicked");
    SlidingSidebarHide();
});

document.querySelector(".sliding-sidebar-wrapper").addEventListener('swiped-left', function(e) {
    //console.log(e.target); // element that was swiped
    //console.log(e.detail); // event data { dir: 'left', xStart: 196, xEnd: 230, yStart: 196, yEnd: 4 }
    SlidingSidebarHide();
});

document.querySelector(".sliding-sidebar-toggle").addEventListener('swiped-right', function(e) {
    SlidingSidebarShow();
});

function SlidingSidebarHide(){
    jQuery(".sliding-sidebar-wrapper").css('left','-300px');
    
    
    jQuery(".sliding-sidebar-backdrop").fadeTo( "slow" , 0, function (){
        jQuery(".sliding-sidebar-backdrop").remove();
    });

    jQuery(".sliding-sidebar-toggle i").removeClass("sliding-sidebar-invert-toggle");
}
function SlidingSidebarShow(){
    jQuery(".sliding-sidebar-wrapper").css('left','0px');
    jQuery(".sliding-sidebar-wrapper").parent().prepend("<div class='sliding-sidebar-backdrop'></div>");
    jQuery(".sliding-sidebar-backdrop").fadeTo( "slow" , 1);

    
    jQuery(".sliding-sidebar-toggle i").addClass("sliding-sidebar-invert-toggle");
}