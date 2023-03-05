
window.onload = function () {
    function generateAnewRow() {
        const tr_YKogV = document.createElement('tr');
        document.body.appendChild(tr_YKogV);
        const td_IDiDX = document.createElement('td');
        tr_YKogV.appendChild(td_IDiDX);
        const a_cLLWS = document.createElement('a');
        a_cLLWS.classList.add('cut');
        td_IDiDX.appendChild(a_cLLWS);
        a_cLLWS.textContent += `-`;
        const span_iIiQM = document.createElement('span');
        span_iIiQM.setAttribute('contenteditable', '');
        td_IDiDX.appendChild(span_iIiQM);
        span_iIiQM.textContent += ``;
        const td_xPXJW = document.createElement('td');
        tr_YKogV.appendChild(td_xPXJW);
        const span_csOEk = document.createElement('span');
        span_csOEk.setAttribute('contenteditable', '');
        td_xPXJW.appendChild(span_csOEk);
        span_csOEk.textContent += ``;
        const td_BAKIU = document.createElement('td');
        tr_YKogV.appendChild(td_BAKIU);
        const span_lWtIC = document.createElement('span');
        span_lWtIC.setAttribute('contenteditable', '');
        span_lWtIC.className = `qty`;
        td_BAKIU.appendChild(span_lWtIC);
        span_lWtIC.textContent += `0`;
        const td_QAgbF = document.createElement('td');
        tr_YKogV.appendChild(td_QAgbF);
        const span_NaVxU = document.createElement('span');
        span_NaVxU.setAttribute('data-prefix', '');
        td_QAgbF.appendChild(span_NaVxU);
        span_NaVxU.textContent += `$`;
        const span_ITlDW = document.createElement('span');
        span_ITlDW.className = 'prix';
        span_ITlDW.setAttribute('contenteditable', '');
        td_QAgbF.appendChild(span_ITlDW);
        span_ITlDW.textContent += `0.00`;
        const td_mpHaV = document.createElement('td');
        tr_YKogV.appendChild(td_mpHaV);
        const span_wAylh = document.createElement('span');
        span_wAylh.setAttribute('data-prefix', '');
        td_mpHaV.appendChild(span_wAylh);
        span_wAylh.textContent += `$`;
        const span_UcdHG = document.createElement('span');
        span_UcdHG.className = 'total';
        td_mpHaV.appendChild(span_UcdHG);
        span_UcdHG.textContent += `0.00`;
        document.getElementById("body").appendChild(tr_YKogV);
        const cut = document.querySelectorAll(".cut");
        for (let i = 0; i < cut.length; i++) {
            cut[i].addEventListener("click", function () {
                this.parentElement.parentElement.remove();
            });
        }
    }
    document.addEventListener('keyup', updatePrice);
    document.getElementById("add").addEventListener("click", generateAnewRow);

}

function updatePrice() {
    const prix = document.querySelectorAll(".prix");
    const total = document.querySelectorAll(".total");
    for (let i = 0; i < prix.length; i++) {
        total[i].textContent = (prix[i].textContent * document.querySelectorAll(".qty")[i].textContent).toFixed(2);
    }

    const totalPrice = document.querySelectorAll(".total");
    let totalAmount = 0;
    for (let i = 0; i < totalPrice.length; i++) {
        totalAmount += parseFloat(totalPrice[i].textContent);
    }
    document.getElementById("TotalSansTaxe").textContent = totalAmount.toLocaleString('en-US',{minimumFractionDigits: 2});
    document.getElementById("TPS").textContent = (totalAmount * 0.05).toFixed(2);
    document.getElementById("TVQ").textContent = (totalAmount * 0.09975).toFixed(2);
    document.getElementById("TotalAvecTaxe").textContent = (totalAmount * 0.05 + totalAmount * 0.09975 + totalAmount).toFixed(2);



}

