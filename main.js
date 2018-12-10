// menu

var menu = $(".wrapper a");

menu.on("click", function () {
    var menuNum = $(this).data("menu");
    $(this).toggleClass("menu-" + menuNum + "-active");
});

//hjh

$('#my-menu-button').click(function () {
    $('#my-menu').slideToggle();
})