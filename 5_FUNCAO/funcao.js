function presente (dinheiro, valor){
if (dinheiro < valor) {
    return "Desculpe mais você não tem limite para comprar...."
}else{
    return ".... "
}
}

let x = presente(150, 25)
console.log(x)