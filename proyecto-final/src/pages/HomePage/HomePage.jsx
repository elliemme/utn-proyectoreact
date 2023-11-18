import React from "react";
import Banner from "../../components/banner/Banner";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";

function HomePage() {
  return (
    <div>
      <Banner
        img={banner1}
        title={"¡PUMPKINLICIOUS!"}
        description={
          "Una temporada con tu favorito de siempre. ¡Nuestro Pumpkin Spice vuelve por tiempo limitado en sus versiones Iced, Latte y Frappuccino!"
        }
        backgroundColor={"#e31c79"}
        color={"#fff"}
        height={"450"}
      />
      <br />
      <Banner
        img={banner2}
        title={"Unite a algo más grande"}
        description={"Revisa las oportunidades que tenemos para vos"}
        backgroundColor={"#d4e9e2"}
        color={"#00754a"}
        height={"350"}
        isFlipped={true}
        haveButton={true}
      />
    </div>
  );
}

export default HomePage;
