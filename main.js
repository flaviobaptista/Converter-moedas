

function vlop() {
    let real = Number.parseFloat(document.getElementById("vl_real").value);
    let dollar = Number.parseFloat(document.getElementById("vl_dollar").value);

    let resultado = real / dollar

    document.getElementById("vlresult").innerHTML = resultado
    
}




