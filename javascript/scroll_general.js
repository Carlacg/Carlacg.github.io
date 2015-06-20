$(document).ready(function () {
    $("#toTop").css("display", "none");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $("#toTop").fadeIn("slow");
        }
        else {
            $("#toTop").fadeOut("slow");

        }
    });
    $("#toTop").click(function (e) {
        e.preventDefault();
        volver = "html";
        $('html, body').animate({
            scrollTop: $(volver).offset().top
        }, 2000);
    });
    $("#toBottom").css("display", "none");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $("#toBottom").fadeIn("slow");
        }
        else {
            $("#toBottom").fadeOut("slow");

        }
    });
    $("#toBottom").click(function (e) {
        e.preventDefault();
        ir = "footer";
        $('html, body').animate({
            scrollTop: $(ir).offset().top
        }, 2000);
    });
});