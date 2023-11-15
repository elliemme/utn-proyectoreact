import React from "react";
import "./headerButton.css";
import { Link } from "react-router-dom";

function HeaderButton({ data: { name, link, customCss, img } }) {
  if (img) {
    return (
      <li className={`header__button ${customCss}`}>
        <Link to={link}>
          <img src={img} alt={name} />
        </Link>
      </li>
    );
  }
  return (
    <li className={`header__button header__button--link ${customCss}`}>
      <Link to={link}>{name}</Link>
    </li>
  );
}

export default HeaderButton;
