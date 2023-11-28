import React from "react";
import { useContext } from "react";
import HeaderButton from "./headerButton/HeaderButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../../App";
import { IconButton } from "@mui/material";

const buttonList = [
  {
    name: "logo",
    link: "/",
    customCss: "",
    img: logo,
  },
  {
    name: "MENÚ",
    link: "/menu",
    customCss: "",
    img: "",
  },
  {
    name: "CAFÉ",
    link: "/cafe",
    customCss: "",
    img: "",
  },
  {
    name: "EXPERIENCIA",
    link: "/experiencia",
    customCss: "",
    img: "",
  },
  {
    name: "ADMIN",
    link: "admin",
    customCss: "header__button--admin",
    img: "",
  },
  {
    name: "Localizar tienda",
    link: "https://www.google.com.ar/maps/search/Starbucks/@-34.6556054,-58.4823916,11z?entry=ttu",
    customCss: "header__button--right",
    img: "",
  },
];

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header>
      <nav>
        <div className="wrapper">
          <ul className="header__container">
            {buttonList.map((aButton, index) => {
              return <HeaderButton key={index} data={aButton} />;
            })}

            <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
              {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
