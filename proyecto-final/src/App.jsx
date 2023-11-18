import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./pages/Menu/Menu";
import Cafe from "./pages/Cafe/Cafe";
import Experiencia from "./pages/Experiencia/Experiencia";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}
