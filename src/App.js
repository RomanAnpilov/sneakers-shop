import axios from "axios";
import Card from "./components/Card/";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://61895903d0821900178d793f.mockapi.io/items").then(res => setItems(res.data))
    axios.get("https://61895903d0821900178d793f.mockapi.io/cart").then(res => setCartItems(res.data))
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://61895903d0821900178d793f.mockapi.io/cart", obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61895903d0821900178d793f.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div>
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
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
        <div className="sneakers">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.name} 
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log("Add to favorite")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
