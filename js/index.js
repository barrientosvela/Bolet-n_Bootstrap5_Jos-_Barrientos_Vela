$(document).ready(function() {
    
    console.log(ancho);
  });
var ancho = $(window).width();
switch (ancho) {
    case ancho <= 540:
        $("#menu-pc").css("display", "none");
        $("#menu-tablet").css("display", "none");
        $("#menu-movil").css("display", "flex");
        break;
    case ancho <= 768:
        $("#menu-pc").css("display", "none");
        $("#menu-tablet").css("display", "flex");
        $("#menu-movil").css("display", "none");
        break;
    case ancho <= 992:
        $("#menu-pc").css("display", "flex");
        $("#menu-tablet").css("display", "none");
        $("#menu-movil").css("display", "none");
        break;
    default:
}