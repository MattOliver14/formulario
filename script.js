$(document).ready(function() { //mascara de CPF 
    var $seuCampoCpf = $("#cpf");
    $seuCampoCpf.mask('000.000.000-00', { reverse: false });
});


$(document).ready(function() { //mascara de data de nascimento.
    $(":input").inputmask();



    $("#phone").inputmask({
        mask: '999 999 9999',
        placeholder: ' ',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        onBeforePaste: function(pastedValue, opts) {
            var processedValue = pastedValue;

            //do something with it

            return processedValue;
        }
    });
});

function verificar() { // função para validar os campos preenchidos.

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value
    var data = document.getElementById("data").value
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("Password").value;
    var cpassword = document.getElementById("cpassword").value;

    var emailFilter = /^.+@.+\..{2,}$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/

    if (nome == "") {
        alert("Digite seu nome");
    } else if (sobrenome == "") {
        alert("Digite seu sobre nome");
    } else if (data == "") {
        alert("Digite sua data de de nascimento");
    } else if (cpf == "") {
        alert("Digite seu CPF");
    } else if (email == "") {
        alert("Favor preencher o E-mail");
    } else if (password == "") {
        alert("Por favor digite uma senha");
    } else if (cpassword == "") {
        alert("Por favor confirme sua senha");
    } else if (cpassword != password) {
        alert("As senhas não correspondem!");
    } else if (nome != "" & sobrenome != "" & data != "" & cpf != "" & email != "" & password != "" & cpassword != "") {
        if (!(emailFilter.test(email)) || email.match(illegalChars)) {
            alert("Favor, digite um email valido");
        } else {
            alert("Cadastro realizado com sucesso!");
            window.location = '/sucesso.html';
        }
    }
}

function validachekbox() {
    checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', e => {
        if (e.target.checked) {
            alert("Obrigado pelo seu feedback positivo :)");
            setTimeout(function() {
                document.getElementById("erro").style.display = "none";
            }, 3000);

            function hide() {
                document.getElementById("erro").style.display = "none";
            }
        }

    });
}