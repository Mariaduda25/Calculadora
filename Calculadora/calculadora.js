function calculadora() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var resultado = document.querySelector("span");
    
    var oper = document.getElementById("operar");
    const casos = oper.selectedIndex;
    

    switch (casos){
        case 1:
       resultado.innerHTML = valor1 + valor2
        break;

        case 2:
        resultado.innerHTML =  valor1 - valor2
        break;

        case 3:
        resultado.innerHTML =  valor1 * valor2
        break;

        case 4:
            if(valor2 == 0){
                resultado.innerHTML = "divisão por zero não permitido";

            } else {
                resultado.innerHTML =  valor1 / valor2

            }
        break;

        default:
            "Inválido"

    }

}
