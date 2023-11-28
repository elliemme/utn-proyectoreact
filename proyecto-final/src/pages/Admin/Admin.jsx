import React, { useContext } from "react";
import { AppContext } from "../../App";
import bebida1 from "../../assets/img/bebidas/cafescalientes.png";

function Admin() {
  const { appState, dispatch } = useContext(AppContext);
  const handleClick = () => {
    const productName = prompt("Ingrese el nombre del producto");
    const action = {
      type: "ADD_BEBIDA",
      payload: { img: bebida1, title: productName },
    };

    dispatch(action);
  };
  return (
    <div>
      <button onClick={handleClick}>Agregar nuevo item</button>
    </div>
  );
}

export default Admin;
