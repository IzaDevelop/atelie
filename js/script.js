let btnSenha = document.querySelector ('#senha1');
btnSenha.addEventListener ('click', () => {
    let inputSenha = document.querySelector ('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute ('type', 'password')
    }
})

let btnConfirmar = document.querySelector ('#senha2');
btnConfirmar.addEventListener ('click', () => {
    let inputSenhaConfirme = document.querySelector ('#confirmeSenha')
    if (inputSenhaConfirme.getAttribute('type') == 'password') {
        inputSenhaConfirme.setAttribute('type', 'text')
    } else {
        inputSenhaConfirme.setAttribute ('type', 'password')
    }
}) 