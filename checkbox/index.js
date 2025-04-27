const checkbox = document.getElementById("box");
const visa = document.getElementById("rad1");
const card = document.getElementById("rad2");
const paypal = document.getElementById("rad3");
const submit = document.getElementById("submit")
const subresult = document.getElementById("subres")
const paymentresult = document.getElementById("paymentres")

submit.onclick = function () {
    if (checkbox.checked){
        subresult.textContent = `You are Subscribed 0o0`
    }
    else {
        subresult.textContent = `You are NOT Subscribed :(`
    }

    if (visa.checked) {
        paymentresult.textContent = `You are paying With VISA`
    }
    else if (card.checked) {
        paymentresult.textContent = `You are paying With MasterCard`
    }
    else if (paypal.checked) {
        paymentresult.textContent = `You are paying With PayPal`
    }
    else {
        paymentresult.textContent = `You Must Select a Paying Method to proceed`
    }
}
