$(document).ready(function(){
    $('#menuBtn').click(function(){
        $('.menu').toggleClass("menu-open");
        $('.wrapper').toggleClass("wrapper-slide");
        $('#menuBtn').toggleClass("fa-times");
    });
});