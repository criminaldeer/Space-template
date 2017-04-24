$(document).ready(function() {
    $("#mobile-menu").click(function () {
        $("#mobile-menu").css("display", "none");
        $("#close-menu").css("display", "block");
        $("#drop-down-menu").css("display", "block");
        $("#close-menu").click(function () {
            $("#close-menu").css("display", "none");
            $("#drop-down-menu").css("display", "none");
            $("#mobile-menu").css("display", "block");
        })
    });
    $("#expand-blog").click(function () {
        $("#expand-blog").css("display", "none");
        $("#blog-expanded").css("display", "block");
        $("#collapse-blog").css("display", "inline-block");
        $("#collapse-blog").click(function() {
            $("#expand-blog").css("display", "block");
            $("#blog-expanded").css("display", "none");
            $("#collapse-blog").css("display", "none");
        })
    });
    $("#expand-project").click(function () {
        $("#expand-project").css("display", "none");
        $("#projects-expanded").css("display", "block");
        $("#collapse-project").css("display", "inline-block");
        $("#collapse-project").click(function() {
            $("#expand-project").css("display", "block");
            $("#projects-expanded").css("display", "none");
            $("#collapse-project").css("display", "none");
        })
    });
    $("")

});
