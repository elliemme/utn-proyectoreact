import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./pages/Menu/Menu";
import Cafe from "./pages/Cafe/Cafe";
import Experiencia from "./pages/Experiencia/Experiencia";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Localizacion from './pages/Localizacion/Localizacion';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={ <HomePage /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/cafe" element={ <Cafe /> } />
        <Route path="/experiencia" element={ <Experiencia /> } />
        <Route path="/localizar" element={ <Localizacion /> } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}