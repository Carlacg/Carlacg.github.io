$(document).ready(function () {
    $("li.receta ul li").click(function (e) {
        e.preventDefault();
        ir = ($(this).find("a").attr("href"));
        arreglo = ir.split("#");
        ir = arreglo[1];
        $('html, body').animate({
            scrollTop: $("#"+ir).offset().top
        }, 2000);
    });
});
