// Os fatores primos de 13195 são 5, 7, 13 e 29.
// Desenvolva uma função que encontra o maior fator primo do número 600851475143?



const primo = (num) => {
  for (let i = 2; i < num; i++){
    if (num % i === 0) return false
  }
  return true
}

const numerosPrimos = () => {
  const arrayPrimos = []
  for (let i = 1; i < 10000; i++) {
    if (primo(i)) arrayPrimos.push(i);
  }
  return arrayPrimos;
}

const fatorPrimo = (limit) => {
  const arrayPrimos = numerosPrimos(limit);
  let maxPrimo = 1;
  for ( let i = 1; i < arrayPrimos.length; i++) {
    while ( limit % arrayPrimos[i] === 0) {
      limit /= arrayPrimos[i];
      maxPrimo = arrayPrimos[i];
    }
  }
  console.log(maxPrimo)
}

fatorPrimo(600851475143);