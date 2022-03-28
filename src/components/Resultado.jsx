import useClima from "../hooks/useClima"

const Resultado = () => {
    const { resultado } = useClima()

    const { name, main } = resultado
    
    console.log(resultado)

    // Grados Kelvin
    const kelvin = 273.15
  return (
    <div className="contenedor clima">
        <h2>El Clima de {name} es: </h2>

        <p>
          {parseInt (main.temp - kelvin)} <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-temperature-celsius" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="8" r="2" />
            <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
          </svg>
        </span>
        </p>
        <div className="temp_min_max">
          <p className="min">
            Min: {parseInt (main.temp_min - kelvin)} <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-temperature-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <line x1="8" y1="9" x2="12" y2="9" />
              <line x1="16" y1="9" x2="22" y2="9" />
            </svg>
          </span>
          </p>

          <p className="max">
            Max: {parseInt (main.temp_max - kelvin)} <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-temperature-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <line x1="8" y1="9" x2="12" y2="9" />
              <line x1="16" y1="9" x2="22" y2="9" />
              <line x1="19" y1="6" x2="19" y2="12" />
            </svg>
          </span>
          </p>
        </div>

        
    </div>
  )
}

export default Resultado