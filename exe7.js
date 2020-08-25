function chefe(){

}
function exe7(){
    conta = 0
    soma = 0
    var numero = Number(prompt("Informe um número"))
    do{
        conta++ //soma1
        soma = soma + numero //acumulador
        numero = Number(prompt("Informe outro número. Digite número negativo para encerrar"))

    }
    while(numero > 0)
    console.log(`A média dos números informados é ${soma/conta}`)
}