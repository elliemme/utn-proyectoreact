import React, { useContext } from "react";
import TittleBar from "../../components/titleBar/TitleBar";
import "./Menu.css";
import { AppContext } from "../../App";
import ProductItem from "../../components/productItem/ProductItem";

function Menu() {
  const { appState } = useContext(AppContext);
  console.log("Estamos en el menu", appState);
  return (
    <div>
      <TittleBar text={"Menú"}></TittleBar>

      <h2>Bebidas</h2>
      <hr />
      <div className="menuGrid">
        {appState.bebidas?.map((producto) => {
          return (
            <ProductItem
              img={producto.img}
              title={producto.title}
            ></ProductItem>
          );
        })}
      </div>

      <h2>Comida</h2>
      <hr />
      <div className="menuGrid">
        {appState.comida?.map((producto) => {
          return (
            <ProductItem
              img={producto.img}
              title={producto.title}
            ></ProductItem>
          );
        })}
      </div>

      <h2>En Casa</h2>
      <hr />
      <div className="menuGrid">
        {appState.casa?.map((producto) => {
          return (
            <ProductItem
              img={producto.img}
              title={producto.title}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
