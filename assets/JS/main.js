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

//Gerando os elementos HTML na tela
function gerarHTML (){
    numberHtml.innerHTML = numberCard.substring(0,4) + " " + numberCard.substring(4,8) + " " + numberCard.substring(8,12) + " " +  numberCard.substring(12,16);
    nameHtml.innerHTML = userName
    monthHtml.innerHTML = `${month.padStart(2, '0')}/${year}`
    cvcHtml.innerHTML = cvc
    }

    //Verifica se os inputs de mes e ano estao corretos
function verificaInputsMonth (){
    if(month > 0 && month < 13 && year > 21 && year < 40){
        teste1 = true
    } else if( month == "" && year == ""){
        errorMonth.innerHTML = "Can't be blank";
        monthInput.style.border = "1px solid red";
        yearInput.style.border = "1px solid red";
    }else if( month == "" ){
        errorMonth.innerHTML = "Can't be blank";
        monthInput.style.border = "1px solid red";
    }
    else if( year == "" ){
        errorMonth.innerHTML = "Can't be blank";
        yearInput.style.border = "1px solid red";
    }else if (month < 1 || month > 12 || year < 22 || year > 39){
        errorMonth.innerHTML = "   Enter only valid numbers";
        monthInput.style.border = "1px solid red";
        yearInput.style.border = "1px solid red";
    }else{
        errorMonth.innerHTML = "   Enter only numbers";
        monthInput.style.border = "1px solid red";
        yearInput.style.border = "1px solid red";
    }
}