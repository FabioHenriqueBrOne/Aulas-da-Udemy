const form = document.querySelector('#form-teste');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = e.target.querySelector('#nome');
    const inputSenha = e.target.querySelector('#senha');

    const nome = String(inputNome.value);
    const senha = String(inputSenha.value);

    console.log(nome, senha);
});