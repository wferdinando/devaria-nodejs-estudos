const { stdin, stdout } = require('process');
const readLine = require('readline').createInterface({
    input: stdin,
    output: stdout
});

const validarNumeroInformado = (numero) => {

    const resultado = Number.parseFloat(numero);
    if (!resultado) {
        console.log('O número informado não é valido!');
    }
    return resultado;
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informádo é inválido!');
            return null;
    }
}



readLine.question('Favor informar um número:', (numero1) => {

    const numeroValidado1 = validarNumeroInformado(numero1);
    if (numeroValidado1) {
        readLine.question('Favor informar outro número:', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2) {
                readLine.question('Favor informar o operador:', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case '+': console.log(`Operador selecionado adicao resulado: ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`Operador selecionado subtração resulado: ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '/': console.log(`Operador selecionado divisão resulado: ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '*': console.log(`Operador selecionado multiplicação resulado: ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '%': console.log(`Operador selecionado modulo resulado: ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                            default:
                                break;
                        }
                    }
                });
            }
        });
    }
});
