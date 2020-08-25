
function exe9(){
    var numero = Number(prompt("Informe um número"))
    var soma = 0
    for (var i = numero; i >= 1; i--){ // é i -- pq vai diminuindo
        if (numero % i == 0){
            soma = soma + i //soma dos divisores
        }
    }
    console.log(`Soma dos divisores é ${soma}`)
}
/*9/ 9
9 /8
9/7 foi diminuindo os divisores */

