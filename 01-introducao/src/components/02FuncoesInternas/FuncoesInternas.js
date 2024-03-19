const FuncoesInternas = () => {

    let num1 = 10
    let num2 = 5
    let myNumber = 3.14565656

    function somar(x, y) {
        return x + y
    }

    function subtrair(x, y) {
        return x - y
    }

    function multiplicar(x, y) {
        return x * y
    }

    function dividir(x, y) {
        return x / y
    }

    return (
        <div>
            <h1>Calculadora</h1>
            <h3>O resultado da soma é: {somar(num1, num2)}</h3>
            <h3>O resultado da subtração é: {subtrair(num1, num2)}</h3>
            <h3>O resultado da multiplicação é: {multiplicar(num1, num2)}</h3>
            <h3>O resultado da divisão é: {dividir(num1, num2)}</h3>
            <h4>{myNumber.toFixed(3)}</h4>
        </div>
    )
}

export default FuncoesInternas