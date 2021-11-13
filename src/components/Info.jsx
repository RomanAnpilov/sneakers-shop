import React from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty">
      <img width={120} height={120} src={image} alt="empty cart" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="img/arrow.svg" alt="arrow" />
        Вернуться
      </button>
    </div>
  );
};

export default Info;
