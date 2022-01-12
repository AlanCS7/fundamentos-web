let nome = window.document.getElementById('nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')
let confirmaEmail = document.querySelector('#confirmaEmail')
let assunto = document.querySelector('#assunto')
let comosabe = document.querySelector('#comosabe')

let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let confirmaEmailOk = false
let assuntoOk = false
let comosabeOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaSobrenome() {
    let txtSobrenome = document.querySelector('#txtSobrenome')
    if (sobrenome.value.length < 3) {
        txtSobrenome.innerHTML = 'Sobrenome inválido'
        txtSobrenome.style.color = 'red'
        sobrenomeOk = false
    } else {
        txtSobrenome.innerHTML = 'Sobrenome válido'
        txtSobrenome.style.color = 'green'
        sobrenomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == - 1 || email.value.indexOf('.') == - 1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = 'Email valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function confirmarEmail() {
    let txtConfirmaEmail = document.querySelector('#txtConfirmaEmail')
    if (confirmaEmail.value.indexOf('@') == - 1 || confirmaEmail.value.indexOf('.') == - 1) {
        txtConfirmaEmail.innerHTML = 'Email inválido'
        txtConfirmaEmail.style.color = 'red'
        confirmaEmailOk = false
    } else {
        txtConfirmaEmail.innerHTML = 'Email valido'
        txtConfirmaEmail.style.color = 'green'
        confirmaEmailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 10) {
        txtAssunto.innerHTML = 'Digite mais de 10 caracteres'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = ''
        assuntoOk = true
    }
}

function validaComoSabe() {
    let txtComosabe = document.querySelector('#txtComosabe')
    if (comosabe.value.length < 5) {
        txtComosabe.innerHTML = 'Digite mais de 5 caracteres'
        txtComosabe.style.color = 'red'
        comosabeOk = false
    } else {
        txtComosabe.innerHTML = ''
        comosabeOk = true
    }
}

function enviar() {

    if (nomeOk == true && sobrenomeOk == true && emailOk == true && assuntoOk == true && comosabeOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
    alert ('Preencha o formulário corretamente.')
    }
}