const Filho = ({altura, peso}) => {

    const calculaIMC = (altura, peso) => peso/(altura * altura);

    const imc = calculaIMC(altura, peso);
     
    const retornarMensagem = (imc) => {
        if(imc < 18){
            return <h3> Abaixo do peso! </h3>;
        }
        else if(imc > 25){
            return <h3> Acima do peso! </h3>
        }
        else {
           return <h3> Peso ideal! </h3>
        }
    }
    
    return (
        <div>
            <h3> Seu IMC é: {imc.toFixed(2)}</h3>
            {retornarMensagem(imc)}
        </div>
    )
}

export default Filho; 