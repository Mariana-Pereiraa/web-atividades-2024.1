const Temperatura = () => {
    function celsiusParaFahrenheit (c) {
        return (9 * c) / 5 + 32;
        
    }
    
    function fahrenheitParaCelsius (f) {
        return ((f - 32) / 9) * 5;
    }
    
    function kelvin (k) {
        const c = ((k - 273) / 5) * 5;
        const f = ((k - 273) / 5) * 9 + 32;
        return {c, f};
    }

    return <div>
        <h3>
            Celsius para Fahrenheit: {celsiusParaFahrenheit(29)};
        </h3>
        <h3>
            Fahrenheit para Celsius: {fahrenheitParaCelsius(29)};
        </h3>
        <h3>
            Kelvin para Celsius: {kelvin(29).c};
        </h3>
        <h3>
            Kelvin para Fahrenheit: {kelvin(29).f};
        </h3>
    </div>
    
}

export default Temperatura;


