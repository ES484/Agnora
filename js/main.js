$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
     
    navigation : false, // Show next and prev buttons
     
    slideSpeed : 50,
    paginationSpeed : 400,
    items : 5, 
    itemsDesktop : true,
    itemsDesktopSmall : true,
    itemsTablet: true,
    itemsMobile : true,
    loop:true,
    nav: true,
    margin:10,
    
    });
    $("#loadScreen .spinner").fadeOut(500, function () { 
        $("#loadScreen").fadeOut(500,function () { 
            $("body").css('overflow', 'auto');   
         });
     });
    });


    