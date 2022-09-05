import React, { useEffect, useState } from "react";

function useDatos() {
  const [postres, setPostres] = useState([]);

  useEffect(() => {
    fetch("json/postres.json")
      .then((response) => response.json())
      .then((datos) => {
        setPostres(datos);
      });
  }, []);

  return postres;
}

export default function Datos() {
  const postres = useDatos();

  return (
    <div className="container mt-5" align="center">
      <form>
        <input type="number" />
        <select>
          {postres.map((item) => {
            return (
              <option key={item.id} value={item.nombre}>
                {item.nombre}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Ingresar"/>
      </form>

      <h4>Lista de compras</h4>

      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {postres.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.precio}</td>
                  <td>{item.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
