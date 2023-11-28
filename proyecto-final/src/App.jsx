import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./pages/Menu/Menu";
import Cafe from "./pages/Cafe/Cafe";
import Experiencia from "./pages/Experiencia/Experiencia";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Admin from "./pages/Admin/Admin";
import Wrapper from "./components/Wrapper";
import bebida1 from "./assets/img/bebidas/cafescalientes.png";
import bebida2 from "./assets/img/bebidas/cafeshelados.png";
import bebida3 from "./assets/img/bebidas/calientes.png";
import bebida4 from "./assets/img/bebidas/frappu.png";
import comida1 from "./assets/img/comida/bakery.png";
import comida2 from "./assets/img/comida/sandwiches.png";
import comida3 from "./assets/img/comida/snacks.png";
import encasa1 from "./assets/img/en-casa/cafeengranos.png";
import encasa2 from "./assets/img/en-casa/te.png";
import Footer from "./components/footer/Footer";

export const ThemeContext = createContext(null);
export const AppContext = createContext(null);
const themeLocalStorage = localStorage.getItem("theme") || "light";
const initialState = {
  bebidas: [
    { img: bebida1, title: "Cafés Calientes" },
    { img: bebida2, title: "Cafés Helados" },
    { img: bebida4, title: "Frappucchino" },
    { img: bebida3, title: "Calientes" },
  ],
  comida: [
    { img: comida1, title: "Bakery" },
    { img: comida2, title: "Sándwiches" },
    { img: comida3, title: "Snacks" },
  ],
  casa: [
    { img: encasa1, title: "Café en Granos" },
    { img: encasa2, title: "Té" },
  ],
};

function reducer(state, action) {
  const oldState = { ...state };
  switch (action.type) {
    case "ADD_BEBIDAS":
      oldState.bebidas.push(action.payload);
      alert("Producto agregado correctamente");
      return oldState;
    case "ADD_COMIDA":
      oldState.comida.push(action.payload);
      return oldState;
    case "ADD_CASA":
      oldState.casa.push(action.payload);
      return oldState;
    case "MODIFY_PRODUCT":
      return oldState;
    default:
      alert("No se reconoce la acción");
      return state;
  }
}

export default function App() {
  const [theme, setTheme] = useState(themeLocalStorage);
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Wrapper>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cafe" element={<Cafe />} />
              <Route path="/experiencia" element={<Experiencia />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
          <Footer />
        </Wrapper>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}
