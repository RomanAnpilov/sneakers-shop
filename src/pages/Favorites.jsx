import Card from "../components/Card";

function Favorites({items, onAddToFavorite}) {
  return (
    <div className="content">
      <div>
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">{items
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              id={item.id}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={onAddToFavorite}
              favorited={true}
            />
          ))}</div>
    </div>
  );
}

export default Favorites;
