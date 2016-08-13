$(document).ready(function($){
		$("#nav li a.active").removeClass("active"); //Remove any "active" class 
        var url = (window.location.href).slice(24);
        $('#nav li a[href="'+url+'"]').addClass("active");
    });