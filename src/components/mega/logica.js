function gerarNumeros(quantos) {
  let arrayMega = []
  let numeroAdd = 0
  while(quantos > 1) {
    numeroAdd = Math.floor(Math.random() * 60 + 1)
    
    arrayMega.push(numeroAdd)
    quantos = quantos-1
  }
  console.log(arrayMega)
}

gerarNumeros(7)