const cardholdername = document.getElementById("cardholder-name");
const imgcardholdername = document.getElementById("cardname");
const cardNumberInput = document.getElementById("card-number");
const imgcardNumberInput = document.getElementById("imgcardnumber");
const numbererror = document.getElementById("numbererror");

cardholdername.addEventListener("input", () => {
    imgcardholdername.innerText = cardholdername.value || "Your Name";
    imgcardholdername.style.textTransform = "capitalize";

    if (/[^a-zA-Z\s]/.test(cardholdername.value)) {
        cardholdername.style.border = imgcardholdername.style.border = '1px solid red';
        const nameerror = document.getElementById("nameerror");
        nameerror.innerText = "Name Should Not have Any Number";
        nameerror.style.color = "red";
        nameerror.style.marginTop = "8px";
    } else {
        cardholdername.style.border = '1px solid var(--light-grayish-violet)';
        imgcardholdername.style.border = '';
        document.getElementById("nameerror").innerText = "";
    }

    imgcardholdername.style.fontSize = cardholdername.value.length > 16 ? '0.8rem' : '';
});

cardNumberInput.addEventListener("input", function () {
    const value = cardNumberInput.value.replace(/\s+/g, '');
    cardNumberInput.value = value.replace(/\D/g, '');
    const formattedValue = value.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
    cardNumberInput.value = formattedValue;
    imgcardNumberInput.innerText = cardNumberInput.value;

    if (!/^[0-9\s\b]+$/.test(cardNumberInput.value)) {
        cardNumberInput.style.borderColor = "red";
        numbererror.innerText = "No Text Or Any Special Characters";
        numbererror.style.marginTop = "8px";
        numbererror.style.color = " red";
        imgcardNumberInput.style.border = "1px solid red";
    } else {
        cardNumberInput.style.border = "1px solid var(--light-grayish-violet)";
        numbererror.innerText = " ";
        imgcardNumberInput.style.border = "none";
    }
    if(cardNumberInput.value ==''){

        numbererror.innerText = " ";
        imgcardNumberInput.innerText = "0000 0000 0000 0000"
        imgcardNumberInput.style.border = "";



    }
});

const expirymonth = document.getElementById("expiry-month");
const expiryyear = document.getElementById("expiry-year");
const montherror = document.getElementById("montherror");
const yearerror = document.getElementById("yearerror");
const date = document.getElementById("date");
const year = document.getElementById("yy");

expirymonth.addEventListener('input', () => {
    if (expirymonth.value > 12 ) {
        montherror.innerText = "Only 12 months in a year";
        expirymonth.style.borderColor = "red";
    } else if (expirymonth.value < 0 || expirymonth.value == 0) {
        date.innerText = expirymonth.value;
        montherror.innerText = "Month should't be less than 1";
        date.style.color = "red";
    } else {
        date.innerText = expirymonth.value || "Month";
        montherror.innerText = "";
        expirymonth.style.borderColor = "";
        date.style.color = "white";
    }
});

expiryyear.addEventListener('input', () => {
    const button = document.getElementById("confirm");
    if (expiryyear.value.length > 2) {
        year.innerText = "00";
        yearerror.innerText = "only 2 Digit";
    } else if (expiryyear.value < 24) {
        yearerror.innerText = "Card is Expired " + expiryyear.value;
        yearerror.style.color = "red";
        year.style.border = "1px solid red";
        year.style.backgroundColor = "red";
        year.innerText = expiryyear.value || "00";
    } else {
        yearerror.innerText = "";
        year.innerText = expiryyear.value || "00";
        year.style.border = "";
        year.style.backgroundColor = "";
    }

    if (expiryyear.value <= 23 || expiryyear.value <= 0) {
        button.style.opacity = "0.5";
        button.style.pointerEvents = "none";
    } else {
        button.style.opacity = "1";
        button.style.pointerEvents = "auto";
    }
});
