$(document).ready(function () {
    $('#signin-form').validate({
        debug: true,
        rules:{
            txtName: "required",
            txtPassword: "required"
        },
        messages:{
            txtName: "Username is required! ",
            txtPassword: "Password is required"
        }
    });
});