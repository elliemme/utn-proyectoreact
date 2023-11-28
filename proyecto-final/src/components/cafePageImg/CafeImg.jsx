import React from "react";
import "./cafeimg.css";

export default function CafeImg({
  title,
  haveButton = false,
  img,
  description,
}) {
  return (
    <div className="cafe__container">
      <div className="cafe__text">
        <h2>{title}</h2>
        <p>{description}</p>
        {haveButton && (
          <button className="cafe__button">Conocé nuestros métodos</button>
        )}
      </div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="img__cafecontainer"
      />
    </div>
  );
}
