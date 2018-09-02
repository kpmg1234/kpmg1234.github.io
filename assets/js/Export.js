$(document).ready(function () {
    removeBorderColor = function () {
        console.log('removefunction is running');
        var item = $('.form--select');

    };

    $('.form--select').click(function(){
        console.log("running");
        $('.form--select').removeClass('border-red');
        $(this).toggleClass('border-red');
    })
});