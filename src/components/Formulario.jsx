import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta('')
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Nombre de ciudad...</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
            autoFocus
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select id="pais" name="pais" onChange={datosBusqueda} value={pais}>
            <option value="">Selecciona un pais</option>
            <option value="CL">Chile</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="UA">Ukrania</option>
            <option value="US">Estados Unidos</option>
            <option value="SE">Suecia</option>
            <option value="PI">Paraguay</option>
            <option value="RU">Rusia</option>
            <option value="UY">Uruguay</option>
            <option value="MX">Mexico</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
