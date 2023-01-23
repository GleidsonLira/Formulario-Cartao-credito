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