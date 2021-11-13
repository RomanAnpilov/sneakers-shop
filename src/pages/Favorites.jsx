import Card from "../components/Card";
import AppContext from "../context";
import React from "react";

function Favorites() {
  const { onAddToFavorite, favoriteItems } = React.useContext(AppContext);

  return (
    <div className="content">
      <div>
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {favoriteItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            id={item.id}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={onAddToFavorite}
            favorited={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
