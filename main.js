

function vlop() {
    let real = Number.parseFloat(document.getElementById("vl_real").value)
    let dollar = Number.parseFloat(document.getElementById("vl_dollar").value);

    let resultado = real / dollar
    let resultadoFinal = resultado.toLocaleString('pt-BR', {style: 'currency', currency:'USD'})
    



    document.getElementById("vlresult").innerHTML = resultadoFinal

}




