import Card from "./components/Card/";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from 'react';

const arr = [
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 12999,
    "imageUrl": "img/sneakers/1.png",
  },
  {
    "name": "Мужские Кроссовки Nike Air Max 270",
    "price": 12999,
    "imageUrl": "img/sneakers/2.png",
  },
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 8499,
    "imageUrl": "img/sneakers/3.png",
  },
  {
    "name": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 8999,
    "imageUrl": "img/sneakers/4.png",
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log("Add to favorite")}
              onPlus={() => console.log("Add to cart")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
