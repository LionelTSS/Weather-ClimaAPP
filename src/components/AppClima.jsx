import Resultado from "./Resultado";
import Formulario from "./Formulario";
import Loading from "./Loading";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        { cargando ? <Loading /> 
          : resultado?.name ? <Resultado /> 
          : noResultado ? <p className="resultado">{noResultado}</p> 
          : <p className="resultado">El clima se va a mostar aqui</p>
        }
        
      </main>
    </>
  );
};

export default AppClima;
