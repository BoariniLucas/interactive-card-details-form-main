/*   --Receber dados--   */

    /*  buttons  */
const btnConfirm = document.querySelector('#btn-confirm');
const btnContinue = document.querySelector('#btn-continue');

    /*  img display  */
const numberCardImg = document.querySelector('#number-card-img');
const nameCardImg = document.querySelector('#name-card-img');
const codCVCImg = document.querySelector('#cod-cvc-img');
const monthCardImg = document.querySelector('#month-card-img');
const yearCardImg = document.querySelector('#year-card-img');

    /*  inputs  */
const nameCard = document.querySelector("#name-card");
const numberCard = document.querySelector("#number-card");
const monthCard = document.querySelector("#month-card");
const yearCard = document.querySelector("#year-card");
const cardCVC = document.querySelector("#card-cvc");

    /*  forms  */
const infoForm = document.querySelector('.info-form');
const thanksForm = document.querySelector('.thanks-form');


/*   --Eventos--   */

btnConfirm.addEventListener("click", () => {

    if (nameCard.value == "" && numberCard.value == "" && monthCard.value == "" && 
            yearCard.value == "" && cardCVC.value == "")
    {
        console.log("Deus certo");

    }

    

    confirmForm();
     
});

btnContinue.addEventListener("click", () => {

    thanksForm.style.display = "none";
    infoForm.style.display = "block";

    clearForm();
});


/* Funções */
function printNameCard(nameCard) {

    nameCardImg.innerHTML = nameCard;
}

function printNumberCard(numbCard) {

    numberCardImg.innerHTML = numbCard;
}

function printMonthCard(monthCard) {
    monthCardImg.innerHTML = monthCard;
}

function printYearCard(yearCard) {
    yearCardImg.innerHTML = yearCard;
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

 function confirmForm() {
    thanksForm.style.display = "block";
    infoForm.style.display = "none";     
 }

 function clearForm() {

    nameCard.value = "";
    nameCardImg.innerHTML = "Jane Appleseed";
    
    numberCard.value = "";
    numberCardImg.innerHTML = "0000 0000 0000 0000";

    monthCard.value = "";
    monthCardImg.innerHTML = "00";

    yearCard.value = "";
    yearCardImg.innerHTML = "00";

    cardCVC.value = "";
    codCVCImg.innerHTML = "000";
 }