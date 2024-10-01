let str = " Hello, world! ";

function inverterString(string) {
    let resultado = '';
    for (let i = string.length - 1; i >= 0; i--) {
        resultado += string[i];
    }
    return resultado;
}

let strInvertida = inverterString(str);
console.log(strInvertida);