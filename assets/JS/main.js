// Constantes que pegam os meus elementos div da tela do meu html
const visible = document.querySelector('.visible')
const ocult = document.querySelector('.ocult')

//Receber inputs da tela
let userName = "";
let numberCard = "";
let month = "";
let year = "";
let cvc = "";

//Recebendo o input button
const confirm = document.getElementById('confirm');

//variáveis que identificam se tornam verdadeiras caso não ocorram erros
let teste1 = false
let teste2 = false
let teste3 = false

// Busca todos os elementos onde serão inseridos os erros caso necessario
const errorNumberCard = document.getElementById('errorNumberCard')
const errorMonth = document.getElementById('errorMonth')
const errorCvc = document.getElementById('errorCvc')

// Busca todos os elementos inputs
const userNameInput = document.getElementById('name')
const numberCardInput = document.getElementById('number')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const cvcInput = document.getElementById('cvc')

confirm.onclick = function (){
    //Busca todos os valores dos inputs
    userName = document.getElementById('name').value
    numberCard = document.getElementById('number').value
    month = document.getElementById('month').value
    year = document.getElementById('year').value
    cvc = document.getElementById('cvc').value

    // Verifica se todos os inputs estão corretos
    verificaInputNumberCard()
    verificaInputsMonth()
    verificaInputCVC()
    //Verifica se pode fazer a lógica de trocar de tela
    verificaLogicaTela()
}

//Recebendo elementos para inserir textos
const numberHtml = document.getElementById('numberHtml')
const nameHtml = document.getElementById('nameHtml')
const monthHtml = document.getElementById('monthHtml')
const cvcHtml = document.getElementById('cvcHtml')