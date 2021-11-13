import Card from "../components/Card";
import React from "react";

function Home({
  items,
  searchValue,
  onChangeSearch,
  onAddToFavorite,
  onAddToCart,
  favoriteItems,
  isLoading,
}) {
  const renderItems = () => {
    return isLoading
      ? [...Array(10).keys()].map((index) => <Card key={index} loading />)
      : items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              loading={isLoading}
              id={item.id}
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              favorited={favoriteItems.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ));
  };

  return (
    <div className="content">
      <div>
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearch}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
