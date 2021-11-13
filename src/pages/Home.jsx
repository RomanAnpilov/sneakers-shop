import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearch,
  onAddToFavorite,
  onAddToCart,
  cartItems,
  favoriteItems,
  isLoading,
}) {
  const renderItems = () => {
    return (
    isLoading ? [...Array(10)].map(() => (<Card loading />)) : items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
        <Card
          key={index}
          loading={isLoading}
          id={item.id}
          title={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
          favorited={favoriteItems.some(
            (obj) => Number(obj.id) === Number(item.id)
          )}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
        />
      ))
      );
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
