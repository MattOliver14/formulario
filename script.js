function verificar() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("pwd").value;
    var csenha = document.getElementById("cpwd").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var cpf = document.getElementById("cpf").value;

    if (nome == "") {
        alert("digite seu nome");
    } else
    if (senha == "") {
        alert("digite uma senha");
    } else if (csenha == "") {
        alert("confirme a senha");
    } else if (email == "") {
        alert("Favor preencher o E-mail");
    } else if (idade == "") {
        alert("Favor preencher a idade");

    } else if (cpf == "") {
        alert("Favor preencher o cpf");
    } else if (senha != csenha) {
        alert(" as senhas não correspondem!");
    }

}