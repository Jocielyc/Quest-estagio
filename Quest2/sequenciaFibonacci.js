function fibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
}
if (fib[fib.length - 1] > n){
    fib.pop();
}
 return fib;
}

function verificarFibonacci(n) {
    let fib = fibonacci(n);
    if (fib.includes(n)) {
        console.log(`O número ${n} pertence á sequência de Fibonacci.`);
    } else {
        console.log(`O número ${n} não pertence á sequência de Fibonacci.`);
    } 
}

//Informe o número para verificar
let n = 21;
verificarFibonacci(n);
