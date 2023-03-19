/* Receber dados */
const btnConfirm = document.querySelector('#btn-confirm');
const numberCardImg = document.querySelector('#number-card-img');
const nameCardImg = document.querySelector('#name-card-img');
const codCVCImg = document.querySelector('#cod-cvc-img');




/* Eventos */

btnConfirm.addEventListener('click', () => {

    printNumberCard();

});


/* Funções */
function printNameCard(nameCard) {

    nameCardImg.innerHTML = nameCard;
}

function printNumberCard(numbCard) {

    numberCardImg.innerHTML = numbCard;
}

function printMonthCard(monthCard) {

}

function printYearCard(yearCard) {

}

function printCVC(cvc) {
    codCVCImg.innerHTML = cvc;
}


function maskCard(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "19");
    if (v.length == 4) i.value += " ";
    if (v.length == 9) i.value += " ";
    if (v.length == 14) i.value += " ";
 
 }