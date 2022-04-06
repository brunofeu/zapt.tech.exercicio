// Cada novo termo na sequência de Fibonacci é gerado pela adição dos 
// dois termos anteriores. Começando com 1 e 2, os 10 primeiros termos serão:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Desenvolva uma função que encontra a soma de todos os termos pares abaixo de quatro milhões.

const FOURMILLION = 4 * Math.pow(10, 6)
const fibonacci = [1, 2];

const somaParFibonacci = (limit) => {
  let i = 2;
  while ( fibonacci.slice(-1) < limit) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    i += 1;
  }

  fibonacci.pop();

  const result = fibonacci.reduce((acc, number) => {
    return (number % 2 === 0) ? acc + number : acc
  },0)

  console.log(result);
};

somaParFibonacci(FOURMILLION);
