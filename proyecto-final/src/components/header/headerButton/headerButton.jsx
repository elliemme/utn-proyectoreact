import React from "react";
import "./headerButton.css";
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";

function HeaderButton({ data: { name, link, customCss, img } }) {
  if (name === "Localizar tienda") {
    return (
      <>
        <li className={`header__button ${customCss}`}>
          <IconButton color="inherit">{<LocationOnIcon />}</IconButton>
          <a target="_blank" href={link}>
            {name}
          </a>
        </li>
      </>
    );
  }
  if (img) {
    return (
      <li className={`header__button ${customCss}`}>
        <NavLink to={link}>
          <img src={img} alt={name} />
        </NavLink>
      </li>
    );
  }
  return (
    <li className={`header__button header__button--link ${customCss}`}>
      <NavLink to={link}>{name}</NavLink>
    </li>
  );
}

export default HeaderButton;
