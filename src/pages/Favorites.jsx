import Card from "../components/Card";
import AppContext from "../context";
import React from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const { onAddToFavorite, favoriteItems } = React.useContext(AppContext);

  return (
    <div className="content">
      <div>
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {favoriteItems.length === 0 ? (
          <div className="cartEmpty">
            <h1 style={{ fontSize: "100px" }}>🥺</h1>
            <h2>Закладок нет :(</h2>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
            <button style={{ width: "300px" }} className="greenButton">
              <img src="img/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
            </ Link>
          </div>
        ) : (
          favoriteItems.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              id={item.id}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={onAddToFavorite}
              favorited={true}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
