$(document).ready(function () {
    if ($('#modelValid').val() == "modelInvalid") {
        $('html, body').animate({ scrollTop: $('#contato').position().top }, 'fast');
        $('#modelValid').val("modelValid");
        bootbox.alert("Por favor verifique os dados do contato.");
    }

    $('.carousel').carousel({
        interval: 5000
    });

    $("#inputTelefone").mask("(00) 0000-00009");
});