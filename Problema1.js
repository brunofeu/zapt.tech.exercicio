// Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, 
// obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

// Desenvolva uma função que encontra a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

const somaMultiplos = (maxNumber) => {
  let result = 0
  
  for (let i = 1; i < maxNumber; i++ ) {
    if (i % 3 === 0 || i % 5 === 0) result += i
  }
  
  console.log(result)
}

somaMultiplos(1000);