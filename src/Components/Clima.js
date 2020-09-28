import React from 'react';
import PropTypes from 'prop-types';


const Clima = ({resultado}) => {

    // Aplicando destructuring a resultado
    const {name, main} = resultado;

    if(!name)return null;

    // Convertir de kevin a celsius
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin).toFixed(1)} &#x2103;
                </p>
                <p> Temperatura Maxima: 
                    {parseFloat(main.temp_max - kelvin).toFixed(1)} &#x2103;
                </p>
                <p> Temperatura Minima: 
                    {parseFloat(main.temp_min - kelvin).toFixed(1)} &#x2103;
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;